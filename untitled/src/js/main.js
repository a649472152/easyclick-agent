/**
 * =======================================================================
 * BEGIN INLINE MODULE: anti_detection.js
 * 为了解决特殊JS环境下脚本加载顺序不确定的问题，我们将anti_detection.js
 * 的内容直接内联到main.js的顶部。
 * =======================================================================
 */

/**
 * 反侦测系统配置
 */
const adConfig = {
    // 安全级别: 0-关闭, 1-基础
    ANTI_DETECTION_LEVEL: 1,
    
    // 基本配置
    SCAN_INTERVAL_BASE: 1000,     // 基础扫描间隔(毫秒)
    SCAN_JITTER_PERCENT: 20,      // 抖动百分比(±20%)
    
    // v1.3新增配置
    PERLIN_NOISE_ENABLED: true,        // 启用柏林噪声抖动
    BEHAVIOR_EVOLUTION_RATE: 0.05,     // 行为进化速率 (每小时行为变化百分比)
    
    // 内部状态
    _sessionStartTime: Date.now(),
    _lastStatusTime: Date.now()
};

/**
 * 高斯随机数生成（更符合自然分布）
 * @param {number} mean - 平均值
 * @param {number} stdDev - 标准差
 * @returns {number} 符合高斯分布的随机数
 */
function gaussianRandom(mean = 0, stdDev = 1) {
    // Box-Muller变换
    let u = 0, v = 0;
    while(u === 0) u = Math.random();
    while(v === 0) v = Math.random();
    const z = Math.sqrt(-2.0 * Math.log(u)) * Math.cos(2.0 * Math.PI * v);
    return mean + z * stdDev;
}

/**
 * v1.3新增: 柏林噪声生成器
 * 生成平滑的随机序列，比简单随机更自然
 */
class PerlinNoiseGenerator {
    constructor(seed = Math.random()) {
        this.seed = seed;
        this.perm = new Array(512);
        this.gradP = new Array(512);
        
        this._init();
    }
    
    _init() {
        // 生成置换表
        const p = new Array(256);
        for (let i = 0; i < 256; i++) {
            p[i] = Math.floor(this._seededRandom() * 256);
        }
        
        // 扩展置换表到512
        for (let i = 0; i < 512; i++) {
            this.perm[i] = p[i & 255];
            this.gradP[i] = this._gradient(this.perm[i]);
        }
    }
    
    _seededRandom() {
        const x = Math.sin(this.seed++) * 10000;
        return x - Math.floor(x);
    }
    
    _gradient(hash) {
        const h = hash & 15;
        const grad = 1.0 + (h & 7); // 1, 2, ..., 8
        
        // 根据哈希值的高位确定方向
        const u = h < 8 ? grad : 0;
        const v = h < 4 ? 0 : h === 12 || h === 14 ? grad : -grad;
        
        return [u, v];
    }
    
    _fade(t) {
        return t * t * t * (t * (t * 6 - 15) + 10);
    }
    
    _lerp(a, b, t) {
        return (1 - t) * a + t * b;
    }
    
    // 生成1D柏林噪声
    noise1D(x) {
        const X = Math.floor(x) & 255;
        x -= Math.floor(x);
        const u = this._fade(x);
        
        const grad1 = this.gradP[X];
        const grad2 = this.gradP[X + 1];
        
        const g1 = grad1[0] * x;
        const g2 = grad2[0] * (x - 1);
        
        return this._lerp(g1, g2, u) * 2;
    }
    
    // 生成0-1范围的噪声
    normalized1D(x, scale = 1) {
        // 多个频率叠加，增加自然感
        let noise = 0;
        let amplitude = 1;
        let frequency = 1;
        let maxValue = 0;
        
        for (let i = 0; i < 3; i++) {
            noise += this.noise1D(x * frequency * scale) * amplitude;
            maxValue += amplitude;
            amplitude *= 0.5;
            frequency *= 2;
        }
        
        // 归一化到0-1范围
        return (noise / maxValue + 1) / 2;
    }
}

// 创建柏林噪声实例
const perlinNoise = new PerlinNoiseGenerator();

/**
 * v1.3新增: 会话行为指纹生成器
 * 为每个会话生成独特的行为特征集
 */
class SessionBehaviorFingerprint {
    constructor() {
        this.reset();
    }
    
    reset() {
        // 生成基础行为特征
        this.decisionSpeed = 0.3 + gaussianRandom() * 0.7;      // 决策速度(0-1)
        this.attentionSpan = 0.4 + gaussianRandom() * 0.6;      // 注意力持续度(0-1)
        
        // 时间相关特征
        this.creationTime = Date.now();
        this.lastEvolutionTime = this.creationTime;
        
        logd("会话行为指纹已生成，决策速度=" + this.decisionSpeed.toFixed(2));
    }

    /**
     * 模拟行为随时间变化
     */
    evolve() {
        const now = Date.now();
        if (now - this.lastEvolutionTime < 3600 * 1000) { // 每小时进化一次
            return;
        }
        
        this.decisionSpeed *= (1 + (Math.random() - 0.5) * adConfig.BEHAVIOR_EVOLUTION_RATE);
        this.decisionSpeed = Math.max(0.1, Math.min(0.9, this.decisionSpeed));

        this.lastEvolutionTime = now;
        logd("行为指纹已进化, 新决策速度: " + this.decisionSpeed.toFixed(2));
    }
}
let sessionFingerprint = new SessionBehaviorFingerprint();


/**
 * 计算下一个扫描间隔，加入抖动
 * @returns {number} 扫描间隔(毫秒)
 */
function getNextScanInterval() {
    let interval = adConfig.SCAN_INTERVAL_BASE;
    const jitter = adConfig.SCAN_JITTER_PERCENT / 100;
    
    // 应用抖动
    interval *= 1 + (Math.random() * 2 - 1) * jitter;
    
    return Math.round(interval);
}

/**
 * 输出反侦测系统状态
 */
function logAntiDetectionStatus() {
    const now = Date.now();
    // 每60秒输出一次状态
    if (now - adConfig._lastStatusTime < 60 * 1000) {
        return;
    }
    adConfig._lastStatusTime = now;

    const runtimeMinutes = ((now - adConfig._sessionStartTime) / (1000 * 60)).toFixed(1);

    logd("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
    logd("📊 反侦测系统状态报告 [" + new Date().toLocaleTimeString() + "]");
    logd("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
    logd("🔒 安全级别: " + adConfig.ANTI_DETECTION_LEVEL + " (基础监控)");
    logd("👤 会话行为指纹 (运行时间: " + runtimeMinutes + "分钟):");
    logd("   决策速度: " + sessionFingerprint.decisionSpeed.toFixed(2));
    logd("🖱️ 操作特征:");
    const baseInterval = adConfig.SCAN_INTERVAL_BASE;
    const jitter = adConfig.SCAN_JITTER_PERCENT;
    const minInterval = Math.round(baseInterval * (1 - jitter/100));
    const maxInterval = Math.round(baseInterval * (1 + jitter/100));
    logd("   扫描间隔: " + minInterval + "ms - " + maxInterval + "ms (基准: " + baseInterval + "ms, 抖动: ±" + jitter + "%)");
    logd("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");

    // 定期进化行为指纹
    sessionFingerprint.evolve();
}


/**
 * 初始化反侦测系统
 * @param {Object} userConfig - 用户自定义配置
 */
function initAntiDetection(userConfig = {}) {
    logd("正在初始化反侦测系统(纯监控模式)...");

    // 合并用户配置
    Object.assign(adConfig, userConfig);
    
    sessionFingerprint.reset();
    
    adConfig._sessionStartTime = Date.now();
    adConfig._lastStatusTime = Date.now();
    
    logd("反侦测系统初始化完成，安全级别: " + adConfig.ANTI_DETECTION_LEVEL);
    
    // 初始化后立即输出一次状态
    logAntiDetectionStatus();
}

const adSystem = {
    init: initAntiDetection,
    getNextScanInterval: getNextScanInterval,
    
    // 暴露配置和状态函数，便于外部访问
    adConfig: adConfig,
    checkStatusOutput: logAntiDetectionStatus,
};

/**
 * =======================================================================
 * END INLINE MODULE: anti_detection.js
 * =======================================================================
 */


// =============================================
// 货啦啦3.0 - UI交互版
// 版本说明：引入UI交互，使用官方推荐的通信模型。
// 更新时间：2025-06-21
// =============================================

var SCRIPT_VERSION = "货啦啦3.0 (2024-06-16 优化版)";

// LRU缓存，用于避免在短时间内重复处理同一个订单
var dispatchCache = new LRUCache(50); 
dispatchCache.add = function(signature) {
    if (this.containsKey(signature)) {
        return false;
    }
    this.put(signature, true);
    return true;
};

/**
 * 生成稳定的任务签名，用于去重
 * @param {string} text - 从订单单元格提取的文本
 * @returns {string} 稳定且唯一的任务签名
 */
function generateStableSignature(text) {
    if (!text) {
        return "";
    }
    // 从核心文本生成签名，移除了排序和数组操作，直接处理字符串
    let coreText = text.replace(/\s/g, '').replace(/到付|已全额支付/g, ''); // 移除支付信息，确保签名稳定
    return coreText.length > 100 ? coreText.substring(0, 100) : coreText;
}


// #############################################################################
// # 4. UI交互 & 配置管理
// #############################################################################

// 全局用户配置，可以被UI和主逻辑共享
let userConfig = {
    minPrice: 0,
    maxDistance: 0,
    vehicleTypes: ['不限'],
    keywordBlacklist: []
};
const CONFIG_FILE_PATH = file.getInternalDir("documents") + "/config.json";

/**
 * [内部函数] 将最新的配置写入内存并保存到文件。
 * @param {object} configObject - 从UI传来的配置对象
 * @returns {boolean} - true 表示成功
 */
function applyAndSaveConfig(configObject) {
    try {
        Object.assign(userConfig, configObject);
        logd("内存中的配置已更新。");
        file.mkdirs(file.getInternalDir("documents"));
        const success = file.writeFile(JSON.stringify(userConfig, null, 4), CONFIG_FILE_PATH);
        if (success) {
            logd('✅ 配置已成功写入: ' + CONFIG_FILE_PATH);
            return true;
        } else {
            loge('❌ 写入文件失败: ' + CONFIG_FILE_PATH);
            return false;
        }
    } catch (e) {
        loge(`applyAndSaveConfig - 保存配置时出错: ${e}`);
        return false;
    }
}

/**
 * [内部函数] 从文件加载配置到内存。
 */
function loadConfigFromFile() {
    try {
        if (file.exists(CONFIG_FILE_PATH)) {
            const content = file.readFile(CONFIG_FILE_PATH);
            if (content) {
                const loadedConfig = JSON.parse(content);
                Object.assign(userConfig, loadedConfig);
                logd('✅ 从文件成功加载配置。');
            } else {
                 logd('ℹ️ 配置文件为空, 使用默认配置。');
            }
        } else {
            logd('ℹ️ 未找到配置文件, 使用默认配置。');
        }
    } catch (e) {
        loge('loadConfigFromFile - 加载用户配置时出错: ' + e);
    }
}

// --------------------------------------------------------------------
// 注册函数，供 ui.js 调用 (ui.js -> main.js)
// --------------------------------------------------------------------
registeScriptFunctionToUI("scriptHandleSave", function (configJson) {
    logd("main.js: 接收到来自ui.js的保存请求。");
    try {
        const configObject = JSON.parse(configJson);
        return applyAndSaveConfig(configObject);
    } catch (e) {
        loge(`scriptHandleSave - 解析JSON时出错: ${e}`);
        return false;
    }
});

registeScriptFunctionToUI("scriptHandleLoad", function () {
    logd("main.js: 接收到来自ui.js的加载请求。");
    if (file.exists(CONFIG_FILE_PATH)) {
        return file.readFile(CONFIG_FILE_PATH);
    }
    return null;
});


// #############################################################################
// # 核心功能模块
// #############################################################################

/**
 * 核心扫描和处理函数
 * 1. 查找订单
 * 2. 提取信息
 * 3. 根据用户配置过滤
 * 4. 打印日志
 */
function scanAndProcessOrders() {
    lockNode();
    try {
        const orderCells = findOrderCells();
        if (!orderCells || orderCells.length === 0) {
            // 添加日志，告知用户脚本正在运行但未发现订单
            logi("...扫描完毕，屏幕上未发现新订单。");
            return;
        }

        // 将日志级别从 logd 提高到 logi，使其更显眼
        logi(`发现 ${orderCells.length} 个潜在订单，开始提取和过滤...`);

        for (let i = 0; i < orderCells.length; i++) {
            const cell = orderCells[i];
            const allTexts = collectAllTexts(cell);

            if (allTexts.length === 0) continue;

            // 1. 先提取结构化数据
            const orderData = extractOrderFromCell({ nid: cell.nid, texts: allTexts });
            if (!orderData) continue;

            // 2. 基于最稳定的起点和终点地址生成签名
            const stableInfo = (orderData.startAddress || "") + (orderData.endAddress || "");
            const orderSignature = generateStableSignature(stableInfo);
            if (!dispatchCache.add(orderSignature)) {
                continue;
            }

            // 3. 根据用户配置进行过滤 (已去重)
            if (userConfig.minPrice > 0 && orderData.price < userConfig.minPrice) {
                logi(`- [过滤] 订单 ${orderSignature.substring(0, 6)} 因价格 ${orderData.price}元 < ${userConfig.minPrice}元 被跳过`);
                continue;
            }
            if (userConfig.maxDistance > 0 && orderData.distance > userConfig.maxDistance) {
                logi(`- [过滤] 订单 ${orderSignature.substring(0, 6)} 因距离 ${orderData.distance}km > ${userConfig.maxDistance}km 被跳过`);
                continue;
            }
            if (userConfig.keywordBlacklist && userConfig.keywordBlacklist.length > 0) {
                const rawText = orderData.rawTexts.toLowerCase();
                const isBlocked = userConfig.keywordBlacklist.some(keyword => {
                    const blocked = rawText.includes(keyword.toLowerCase());
                    if (blocked) {
                        logi(`- [过滤] 订单 ${orderSignature.substring(0, 6)} 因包含关键词 "${keyword}" 被跳过`);
                    }
                    return blocked;
                });
                if (isBlocked) {
                    continue;
                }
            }
            if (userConfig.vehicleTypes && !userConfig.vehicleTypes.includes('不限')) {
                 const cargoInfo = orderData.cargoInfo.toLowerCase();
                 const vehicleMatch = userConfig.vehicleTypes.some(v => cargoInfo.includes(v.toLowerCase()));
                 if (!vehicleMatch) {
                    logi(`- [过滤] 订单 ${orderSignature.substring(0, 6)} 因车型不匹配 (${userConfig.vehicleTypes.join(',')}) 被跳过`);
                     continue;
                 }
            }
            
            // 如果所有检查都通过，这是一个符合条件的订单
            // 使用新的、基于结构化数据的多行格式化输出
            let logMessage = "\n" +
                "========================================\n" +
                `✅✅✅ 发现新订单 (类型: ${orderData.orderType}) ✅✅✅\n` +
                "----------------------------------------\n";
            
            if (orderData.distance) logMessage += `[距离] 距您 ${orderData.distance} 公里\n`;
            if (orderData.startAddress) logMessage += `[起点] ${orderData.startAddress}\n`;
            if (orderData.endAddress) logMessage += `[终点] ${orderData.endAddress}\n`;
            if (orderData.vehicleInfo) logMessage += `[车型] ${orderData.vehicleInfo}\n`;
            if (orderData.cargoDetails) logMessage += `[货物] ${orderData.cargoDetails}\n`;
            if (orderData.remarks) logMessage += `[备注] ${orderData.remarks}\n`;
            if (orderData.price) logMessage += `[价格] ${orderData.price} 元\n`;
            if (orderData.paymentType) logMessage += `[支付] ${orderData.paymentType}\n`;
            
            logMessage += "========================================";
            logi(logMessage);
        }

    } catch (e) {
        loge(`scanAndProcessOrders 发生错误: ${e}`);
    } finally {
        releaseNode();
    }
}


// #############################################################################
// # 5. 主逻辑
// #############################################################################

function mainLogic() {
    logd("【" + SCRIPT_VERSION + "】后台监控脚本已启动...");
    logd("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
    
    loadConfigFromFile();
    
    logd("🚛 扫描线程已启动...");
    logd("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
    
    try {
        performanceMonitor.initialize();
        logd("✅ 性能监控系统已启动。");
    } catch (e) {
        loge("❌ 性能监控系统初始化失败: " + e);
    }
    
    try {
        memoryManager.initialize({ memoryCleanInterval: 15 * 60 * 1000 });
        logd("✅ 内存管理器已启动。");
    } catch (e) {
        loge("❌ 内存管理器初始化失败: " + e);
    }
    
    try {
        hotZoneManager.initialize({ maxHotZones: 5, debugMode: config.DEBUG_MODE });
        logd("✅ 热区管理器已启动。");
    } catch (e) {
        loge("❌ 热区管理器初始化失败: " + e);
    }

    setFetchNodeParam(config.FETCH_NODE_PARAM);
    logd("节点查找参数已设置。");

    // 正确地初始化反侦测系统
    try {
        adSystem.init({
            ANTI_DETECTION_LEVEL: config.SECURITY_LEVEL,
            SCAN_INTERVAL_BASE: 1000,
            SCAN_JITTER_PERCENT: 20
        });
    } catch (e) {
        loge("❌ 反侦测系统初始化失败: " + e);
    }

    // =======================================================
    // 主循环
    // =======================================================
    while (true) {
        try {
            if (isScriptExit()) {
                logd("脚本被外部请求终止，退出主循环。");
                break;
            }

            scanAndProcessOrders();
            adSystem.checkStatusOutput(); // 定期输出反侦测状态
            sleep(adSystem.getNextScanInterval());

        } catch (e) {
            loge("主循环发生严重错误: " + e);
            sleep(5000);
        }
    }
}

// 启动主逻辑
mainLogic();