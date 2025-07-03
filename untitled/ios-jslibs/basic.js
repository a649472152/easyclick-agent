var modules = {};

function Console() {
    this.timerMap = {}
    this.screenWidth = 0
    this.screenHeight = 0
}

Console.prototype.log = function (msg) {
    let s = [];
    for (let i = 1; i < arguments.length; i++) {
        s.push(arguments[i] + "");
    }
    ecImporter.logd(formatlog(msg), JSON.stringify(s));
}

Console.prototype.info = function (msg) {
    let s = [];
    for (let i = 1; i < arguments.length; i++) {
        s.push(arguments[i] + "");
    }
    ecImporter.logi(formatlog(msg), JSON.stringify(s));
}

Console.prototype.warn = function (msg) {
    let s = [];
    for (let i = 1; i < arguments.length; i++) {
        s.push(arguments[i] + "");
    }
    ecImporter.logw(formatlog(msg), JSON.stringify(s));
}

Console.prototype.error = function (msg) {
    let s = [];
    for (let i = 1; i < arguments.length; i++) {
        s.push(arguments[i] + "");
    }
    ecImporter.loge(formatlog(msg), JSON.stringify(s));
}

Console.prototype.logLine = function (line, msg) {
    let s = [];
    for (let i = 2; i < arguments.length; i++) {
        s.push(arguments[i] + "");
    }
    ecImporter.logdLine(line, formatlog(msg), JSON.stringify(s));
}
Console.prototype.logiLine = function (line, msg) {
    let s = [];
    for (let i = 2; i < arguments.length; i++) {
        s.push(arguments[i] + "");
    }
    ecImporter.logiLine(line, formatlog(msg), JSON.stringify(s));
}

Console.prototype.logwLine = function (line, msg) {
    let s = [];
    for (let i = 2; i < arguments.length; i++) {
        s.push(arguments[i] + "");
    }
    ecImporter.logwLine(line, formatlog(msg), JSON.stringify(s));
}
Console.prototype.logeLine = function (line, msg) {
    let s = [];
    for (let i = 2; i < arguments.length; i++) {
        s.push(arguments[i] + "");
    }
    ecImporter.logeLine(line, formatlog(msg), JSON.stringify(s));
}
/**
 * 计时开始
 * @param label 标签
 * @return  {number} 当前时间
 */
Console.prototype.time = function (label) {
    let t = new Date().getTime()
    this.timerMap[label] = t;
    return t;
}

/**
 * 计时结束
 * @param label 标签
 * @return {number} 与计时开始的差值
 */
Console.prototype.timeEnd = function (label) {
    let t1 = new Date().getTime();
    let d2 = this.timerMap[label];
    if (d2 == null || d2 == undefined) {
        return 0;
    }
    let t2 = t1 - d2;
    delete this.timerMap[label];
    return t2;
}

var console = new Console();


/**
 * 休眠
 * @param miSecond 毫秒
 */
function sleep(miSecond) {
    //ecImporter.sleep(miSecond);


    let step = (100)
    let current = (0)
    let time2 = miSecond
    if (time2 <= step) {
        ecImporter.sleep0(time2)
        return
    }
    let totalTime = time2;
    while (true) {
        // 如果脚本退出了 就直接return
        if (isScriptExit()) {
            return
        }
        let left = totalTime - current
        if (left >= step) {
            if (!ecImporter.sleep0(step)) {
                return
            }
            current = current + step
        } else if (left < step) {
            if (!ecImporter.sleep0(left)) {
                return
            }
            current = current + left
        }
        if (current >= totalTime) {
            return
        }
    }

}


function formatlog(obj) {
    return obj + "";
}

/**
 * 设置日志等级,可用于关闭或开启日志
 * @param level 日志等级，值分别是 debug,info,warn,error,off，排序分别是debug<info<warn<error<off，
 * 例如 off 代表关闭所有级别日志，debug代表打印包含logd,logi,logw,loge的日志，info代表打印包含logi,logw,loge的日志，warn 代表打印包含logw,loge的日志
 * @return {boolean} 布尔型 true代表成功 false代表失败
 */
function setLogLevel(level) {
    ecImporter.setLogLevel(level);
    return true;
}

/**
 * 设置是否显示行号
 * @param display true 代表显示
 * @returns {boolean}
 */
function setDisplayLineNumber(display) {
    return ecImporter.setDisplayLineNumber(display);
}


/**
 * 获取中控版本
 * @return {null|string} 字符串 例如 2.9.0
 */
function version() {
    return ecImporter.version();
}

/**
 * 脚本是否处于暂停中
 * 适配 EC 3.19.0+
 * @return {boolean} true 代表脚本处于暂停中
 */
function isScriptPause() {
    return pauseScriptWrapper.isScriptPause();
}

/**
 * 设置脚本暂停或者继续
 * 适配 EC 3.19.0+
 * @param pause true 代表暂停脚本，false代表继续
 * @param timeout 自动恢复时间单位毫秒，0 代表不自动恢复，等待外部交互后恢复，大于0代表到了时间自动恢复运行
 * @return {boolean} true 代表脚本处于暂停中，false 代表继续运行中
 */
function setScriptPause(pause, timeout) {
    pauseScriptWrapper.setScriptPause(pause, timeout);
    return pauseScriptWrapper.isScriptPause();
}

/**
 * 调试日志
 * @param msg
 */
function logd(msg) {
    let s = [];
    for (let i = 1; i < arguments.length; i++) {
        s.push(arguments[i] + "");
    }
    ecImporter.logd(formatlog(msg), JSON.stringify(s));
}


function logdLine(line, msg) {
    let s = [];
    for (let i = 2; i < arguments.length; i++) {
        s.push(arguments[i] + "");
    }
    ecImporter.logdLine(line, formatlog(msg), JSON.stringify(s));
}


/**
 * 信息日志
 * @param msg
 */
function logi(msg) {
    var s = [];
    for (var i = 1; i < arguments.length; i++) {
        s.push(arguments[i] + "");
    }

    ecImporter.logi(formatlog(msg), JSON.stringify(s));
}


function logiLine(line, msg) {
    var s = [];
    for (var i = 2; i < arguments.length; i++) {
        s.push(arguments[i] + "");
    }
    ecImporter.logiLine(line, formatlog(msg), JSON.stringify(s));
}


/**
 * 错误日志
 * @param msg
 */
function loge(msg) {
    var s = [];
    for (var i = 1; i < arguments.length; i++) {
        s.push(arguments[i] + "");
    }
    ecImporter.loge(formatlog(msg), JSON.stringify(s));
}


function logeLine(line, msg) {
    let s = [];
    for (let i = 2; i < arguments.length; i++) {
        s.push(arguments[i] + "");
    }
    ecImporter.logeLine(line, formatlog(msg), JSON.stringify(s));
}

/**
 * 警告日志
 * @param msg
 */
function logw(msg) {
    var s = [];
    for (var i = 1; i < arguments.length; i++) {
        s.push(arguments[i] + "");
    }
    ecImporter.logw(formatlog(msg), JSON.stringify(s));
}


function logwLine(line, msg) {
    var s = [];
    for (var i = 2; i < arguments.length; i++) {
        s.push(arguments[i] + "");
    }
    ecImporter.logwLine(line, formatlog(msg), JSON.stringify(s));
}


/**
 * 设置保存日志信息到文件中，可以使用爱思软件导出日志
 * EC iOS 3.13+新增了level参数
 * @param save 是否保存
 * @param level 日志等级，值分别是 debug,info,warn,error,off，排序分别是debug<info<warn<error，
 * 例如 off代表关闭所有级别日志，debug代表打印包含logd,logi,logw,loge的日志，info代表打印包含logi,logw,loge的日志，warn 代表打印包含logw,loge的日志
 * @return {null|string} 保存日志文件的目录
 */
function setSaveLogEx(save, level) {
    return ecImporter.setSaveLog(save, level);
}

/**
 * 设置日志窗口大小扩展函数
 * @param map 例如
 * 解释：
 * x: 起始 x 位置，x坐标不生效
 * y: 起始 Y 位置，y坐标不生效
 * w:宽度
 * h:高度
 * textSize:日志的字体大小
 * textColor: 文字颜色 #336699
 * line: 展示多少行，默认是十行
 * backgroundColor:背景颜色，例如 #336699
 */
function setLogViewSizeEx(map) {
    if (map == null || map == undefined || map == "") {
        map = {}
    }
    globalWrapper.setLogViewSizeEx(JSON.stringify(map))
}


/**
 * [后台进行无法使用]
 * 显示日志窗口，必须iOS设备支持画中画功能，并且开启画中画
 * @return {boolean} true代表成功，false代表失败
 */
function showLogWindow() {
    return globalWrapper.showLogWindow()
}

/**
 * * [后台进行无法使用]
 * 关闭日志窗口
 * @return {boolean} true代表成功，false代表失败
 */
function closeLogWindow() {
    return globalWrapper.closeLogWindow()
}

/**
 * 设置悬浮窗是否可以控制脚本启停，防止脚本被其他视频软件占用时被停止
 * @param ctrl true 代表可以控制  false代表不可以防止
 * @return {boolean} true代表成功，false代表失败
 */
function setPipCtrlScript(ctrl) {
    return globalWrapper.setPipCtrlScript(ctrl)
}


/**
 * 设置代理请求超时
 * @param readTimeout 其他的请求超时时间，单位是毫秒，可以设置为 2000 - 5000
 * @return {boolean} true代表成功
 */
function setAgentTimeout(readTimeout) {
    return ecImporter.setAgentTimeout(readTimeout);
}

/**
 * 执行JS文件或者内容
 * @param a_execType 1=文件，2=直接是JS内容
 * @param _acontent 路径[参考file模块]例如/var/a.js或者js的内容
 * @return {boolean} true代表执行成功， false代表失败
 */
function execScript(a_execType, _acontent) {
    if (a_execType == 1) {
        if (file.exists(_acontent)) {
            let c = file.readFile(_acontent);
            if (c != null && c != undefined && c.length > 0) {
                _acontent = c;
            }
        }
    }
    if (_acontent != undefined && _acontent != null) {
        if (_acontent.length > 0) {
            eval(_acontent);
            return true;
        }
    }
    return false;

}

/**
 * 退出脚本执行
 */
function exit() {
    ecImporter.exit();
}

/**
 * 获取沙盒的文件夹路径
 * @return {null|string} 字符串
 */
function getSandBoxDir() {
    return ecImporter.getSandBoxDir();
}

/**
 * 判断EC运行的当前线程是否处于退出状态，可用判断脚本是否退出，或者子线程是否退出
 * @return {boolean} true 已退出
 */
function isScriptExit() {
    return ecImporter.isScriptExit()
}


/**
 * 重启脚本，适合无限循环，或者有异常的情况可以下载最新的iec再次执行，避免进入UI才能热更新,
 * 注意: 该方法威力巨大，请自行控制好是否自动重启，否则只能强杀进程才能停止
 * @param path 新的IEC路径，如果不需要可以填写null
 * @param stopCurrent 是否停止当前的脚本
 * @param delay 延迟多少秒后执行
 * @return {boolean} true 代表成功 false 代表失败
 */
function restartScript(path, stopCurrent, delay) {
    return globalWrapper.restartScript(path, stopCurrent, delay);
}


/**
 * 保存res文件夹中的资源文件到指定的路径
 * @param fileName 文件名称，不要加res前缀
 * @param path 要保存到的路径地址，例如/sdcard/aa.txt
 * @return {boolean} true代表保存成功
 */
function saveResToFile(fileName, path) {
    return globalWrapper.saveResToFile(fileName, path);
}

/**
 * 读取res文件夹中的资源文件，并返回字符串
 * @param fileName 文件名称，不要加res前缀
 * @return {null|string} 如果是null代表没内容
 */
function readResString(fileName) {
    return javaString2string(globalWrapper.readResString(fileName));
}

/**
 * 查找IEC的文件
 * @param dir       文件夹名称，null代表只读res/文件夹，没有默认是res文件夹，可以是类似 res/aaa/这样的文件夹
 * @param names     文件名称前缀,null代表不匹配， 例如aaa,多个前缀用|分割，例如 aaa|bb|cc
 * @param ext       文件扩展名 ,null代表不匹配，例如.png,多个扩展用|分割，例如 .png|.jpg|.bmp
 * @param recursion 是否递归子目录，true代表递归
 * @return {null|JSON} 文件名称JSON数组
 */
function findIECFile(dir, names, ext, recursion) {
    let s = globalWrapper.findIECFile(dir, names, ext, recursion);
    if (s == null) {
        return null;
    }
    s = javaString2string(s);
    try {
        return JSON.parse(s);
    } catch (e) {
        return null;
    }
    return null;
}

/**
 * 读取IEC文件中的资源文件，并返回字符串
 * @param fileName 文件名称，如果放在某个文件夹下 需要加上文件名称
 * @return {null|string} 如果是null代表没内容
 */
function readIECFileAsString(fileName) {
    return javaString2string(globalWrapper.getPkgContent(fileName));
}


/**
 * 启动自动化环境
 * @return 布尔型  true代表启动成功，false代表启动失败
 */
function startEnv() {
    if (isServiceOk()) {
        return true
    }
    logw("iOS脱机版本不支持 startEnv 函数，请手动点击agent图标或者使用激活器启动")
    return false;
}


/**
 * 当前运行的程序 bundleId
 * @return {string} 当前运行的程序 bundleId
 */
function activeAppInfo() {
    return ecImporter.activeAppInfo();
}

/**
 * 自动化服务是否正常
 * @return 布尔型  true代表正常，false代表不正常
 */
function isServiceOk() {
    return ecImporter.isServiceOk();
}

/**
 * 取得中控发过来的任务参数信息
 * 适合版本 EC iOS 脱机版本  3.8.0+
 * @return {null|JSON} 对象
 */
function getCenterTaskInfo() {
    let d = ecImporter.getCenterTaskInfo();
    if (d == null || d == "") {
        return null;
    }
    try {
        return JSON.parse(d);
    } catch (e) {
    }
    return null;
}

/**
 * 设置要执行的IEC文件路径
 * @param path 文件路径
 * @return {boolean} true代表成功  false代表失败
 */
function setIECPath(path) {
    return globalWrapper.setIECPath(path);
}


/**
 * 获取要执行的IEC文件路径
 * @return {null|string}，null代表无。ts.iec 代表是包内iec文件，其他代代表存储路径中的文件
 */
function getIECPath() {
    return globalWrapper.getIECPath();
}


/**
 * 设置计算算力运行模式，默认值是2
 * @param type: 1代表在 agent 中计算， 2 代表在 app中计算
 */
function setComputeMode(type) {
    if ((typeof type) == "string") {
        type = parseInt(type)
    }
    globalWrapper.setComputeMode(type);
}

/**
 * 设置代理运行的端口
 * @param port 端口 整型数据，必须大于1024
 * @return {boolean} true 代表成功，false代表失败
 */
function setAgentPort(port) {
    if ((typeof port) == "string") {
        port = parseInt(port)
    }

    return globalWrapper.setAgentPort(port);
}

/**
 * 设置投屏运行的端口
 * @param port 端口 整型数据，必须大于1024
 * @return {boolean} true 代表成功，false代表失败
 */
function setAgentScreenPort(port) {
    if ((typeof port) == "string") {
        port = parseInt(port)
    }
    return globalWrapper.setAgentScreenPort(port);
}

/**
 * 设置投屏开关
 * @param toggle 1 开 2 关，默认都是开的
 * @return {boolean} true 代表成功，false代表失败
 */
function setAgentScreenToggle(toggle) {
    if ((typeof port) == "string") {
        port = parseInt(toggle)
    }
    return globalWrapper.setAgentScreenToggle(toggle);
}

function javaString2string(x) {
    if (x == null) {
        return null;
    }
    return "" + x;
}

function setStopCallback(callback) {
    ecImporter.onScriptStopCallback(callback);
}

function setExceptionCallback(callback) {
    ecImporter.onScriptExCallback(callback);
}

/**
 *发送钉钉消息
 *适合EC 脱机版 2.0+
 *@param url 群组/部门 机器人Webhook地址
 *@param secret 群组/部门 机器人Webhook密钥, 可以不写使用关键字过滤方式
 *@param msg 要发送的消息
 *@param atMobile at手机号，多个用英文逗号隔开
 *@param atAll 是否at所有人，写true或者false
 *@return {null|string} 调用钉钉返回的json字符串结果,格式 {"errcode":0,"errmsg":"ok"}，errcode=0代表成功其他都是错误
 */
function sendDingDingMsg(url, secret, msg, atMobile, atAll) {
    return ecImporter.sendDingDingMsg(url, secret, msg, atMobile, atAll);
}


/**
 * 获取授权过期时间
 * 支持EC iOS脱机版本2.0+
 * @return {null|string}
 */
function getDeviceExpTime() {
    if (deviceWrapper == null) {
        return null;
    }
    return javaString2string(deviceWrapper.getDeviceExpTime());
}


/**
 * 时间函数
 * @return {number} 毫秒级别的long时间
 */
function time() {
    return new Date().getTime()
}


/**
 * 格式化时间函数例如：yyyy-MM-dd HH:mm:ss
 * @return {null|string} 格式话之后的当前时间
 */
function timeFormat(format) {
    return ecImporter.timeFormat(format);
}


function object2JsonString(o) {
    if (o == null) {
        return "{}";
    }
    if ((typeof o) === 'string') {
        return o;
    }
    // 全部转为字符串
    let keys = Object.keys(o)
    for (let i = 0; i < keys.length; i++) {
        let key = keys[i]
        let v = o[key]
        if ((typeof v) === 'string') {
            continue
        } else {
            o[key] = v + ""
        }
    }

    return JSON.stringify(o);
}


/**
 * 删除配置值
 * @param key  在UI界面中配置的key
 * @return {boolean} true 代表成功 false 代表失败
 */
function deleteConfig(key) {
    return globalWrapper.deleteConfig(key);
}

/**
 * 读取UI界面中的参数,返回是整型
 * @param key  在UI界面中配置的key
 * @return {number} 整型，找不到就返回0
 */
function readConfigInt(key) {
    return globalWrapper.readConfigInt(key);
}

/**
 * 读取UI界面中的参数,返回是字符串
 * @param key  在UI界面中配置的key
 * @return {null|string} 找不到就返回空字符串
 */
function readConfigString(key) {
    return globalWrapper.readConfigString(key);
}


/**
 * 取布尔型配置 在UI界面中配置的key
 * @param key
 * @return {boolean} true 或者 false
 */
function readConfigBoolean(key) {
    return globalWrapper.readConfigBoolean(key);

}

/**
 * 取得配置的JSON
 * @return {null|JSON} JSON 数据
 */
function getConfigJSON() {
    let x = globalWrapper.getConfigJSON();
    if (x != null && x != "") {
        try {
            return JSON.parse(x)
        } catch (e) {
        }
    }
    return null;
}

/**
 * 更新配置
 *  @param key 键
 *  @param value 值，字符串值
 *  @return {boolean} true 成功，false失败
 */
function updateConfig(key, value) {
    return globalWrapper.updateConfig(key, value);
}

/**
 * 导入一个js模块
 * @param file 支持非src/js/文件夹等下的文件导入，例如let a =require("lib/a.js"); let b = require("lib/b")
 * @return {*} 模块对象
 */
function require(file) {
    return globalWrapper.onRequire(file);
}

/**
 * 获取当前的worker名称
 * @return {{null|string}string} worker的字符串
 */
function getCurrentWorkerName() {
    return globalWrapper.getCurrentWorkerName();
}

/**
 * 设置屏幕方向，横屏只支持向右旋转90度
 * @param orientation 1 正常的竖屏，2 向右旋转90度(顺时针)
 * @return {boolean}
 */
function setOrientation(orientation) {
    return device.setOrientation(orientation)
}


/**
 * 获取屏幕方向
 * @return {string|null} 1 竖屏 2 横屏，其他未知
 */
function getOrientation() {
    return device.getOrientation()
}

/**
 * 将横屏的坐标转换为可以点击的竖屏坐标
 * @param x 横屏坐标
 * @param y 竖屏坐标
 * @return {null|JSON} x代表转换的x坐标，y代表转换的y坐标
 */
function convertPointToClickable(x, y) {
    if (console.screenWidth == null || console.screenWidth == undefined || console.screenWidth <= 0) {
        console.screenWidth = device.getScreenWidth();
    }
    if (console.screenHeight == null || console.screenHeight == undefined || console.screenHeight <= 0) {
        console.screenHeight = device.getScreenHeight();
    }
    let screenWidth = console.screenWidth;
    let screenHeight = console.screenHeight;
    // 换一下位置
    if (screenWidth > screenHeight) {
        screenHeight = screenWidth;
    }

    let x1 = screenHeight - y
    let y1 = x;
    let data = {
        x: x1, y: y1
    }
    return data
}


function HotUpdateWrapper() {

}

let hotupdater = new HotUpdateWrapper();

/**
 * 获取热更新得请求结果
 * 适配 EC 脱机版 3.19.0+
 * @return {null|string} 字符串
 */
HotUpdateWrapper.prototype.getUpdateResp = function () {
    return utilsWrapper.getUpdateResp();
}

/**
 * 获取热更新重新的错误
 * 适配 EC 脱机版 3.19.0+
 * @return {null|string} 字符串
 */
HotUpdateWrapper.prototype.getErrorMsg = function () {
    return utilsWrapper.getErrorMsg();
}

/**
 * 请求热更新接口，如果是false，也有可能是无需更新，可以使用getErrorMsg查看具体得信息
 * 适配 EC 脱机版 3.19.0+
 * @param updateUrl 更新地址 不写，就使用update.json配置的数据
 * @param version 当前版本，使用整形数据，例如 1这样的数字
 * @param appendDeviceInfo 是否拼接设备信息数据 true 或者 false
 * @param timeout 请求超时时间 单位是毫秒
 * @return {boolean} true 代表需要更新 false代表无需更新
 */
HotUpdateWrapper.prototype.updateReq = function (updateUrl, version, appendDeviceInfo, timeout) {
    return utilsWrapper.updateReq(updateUrl, version, appendDeviceInfo, timeout);
}


/**
 * 下载热更新请求到得IEC文件
 * 适配 EC 脱机版 3.19.0+
 * @return {null|string} 下载后热更新文件得路径，如果为空，也有可能是无需更新
 */
HotUpdateWrapper.prototype.updateDownload = function () {
    return utilsWrapper.updateDownload();
}
