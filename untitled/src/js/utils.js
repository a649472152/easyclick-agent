function playNewOrderAlert(orderData) {
    try {
        // iOS不支持device.vibrate，改用utils.showNotification发送通知提醒
        var title = "🚨 " + (orderData.orderType === "即时" ? "⚡️即时" : "🗓️预约") + "订单";

        // 构建更丰富的通知内容
        var contentParts = [];
        if (orderData.price) contentParts.push(orderData.price + "元");
        if (orderData.distance) contentParts.push("距离" + orderData.distance + "公里");

        // 添加简短的地址信息
        var addressParts = orderData.addresses.split(' -> ');
        if (addressParts.length > 0) {
            var fromTo = addressParts[0].split('-').pop() + " → " +
                (addressParts.length > 1 ? addressParts[addressParts.length-1].split('-').pop() : "");
            contentParts.push(fromTo);
        }

        var content = contentParts.join(" | ");
        if (!content) content = "发现新的货运订单！";

        utils.showNotification(title, content, 1); // 延迟参数必须>0，设为1秒

        // 如果需要声音提示，可以考虑播放一个短音效
        // 首次使用前需要请求权限
        // utils.playMp3(file.getSandBoxFilePath("alert.mp3"), false);

        logd("🔔 已发送新订单通知提醒");
    } catch (e) {
        logd("无法发送提醒: " + e);
    }
}

function displaySingleOrder(orderData) {
    var now = new Date();
    var timeStr = (now.getHours() < 10 ? "0" : "") + now.getHours() + ":" +
        (now.getMinutes() < 10 ? "0" : "") + now.getMinutes() + ":" +
        (now.getSeconds() < 10 ? "0" : "") + now.getSeconds();

    var logLines = [];
    logLines.push("─".repeat(50));
    logLines.push("🆕 发现新订单 #" + orderData.orderNumber + "  [" + timeStr + "]");

    // 1. 概要 (无价格)
    var orderTypeIcon = orderData.orderType === "即时" ? "⚡️" : "🗓️";
    var summaryLine = "   " + orderTypeIcon + " " + orderData.orderType;
    if (orderData.distance) summaryLine += "  " + orderData.distance + "公里";
    logLines.push(summaryLine);

    // 准备货物和补充说明
    var cargoMain = "";
    var cargoExtras = [];
    if (orderData.cargoInfo && orderData.cargoInfo !== "未知") {
        var cargoStr = orderData.cargoInfo.replace(/\n/g, '; ');
        var cargoDisplayParts = cargoStr.split(/\s*(?=额外需求|订单备注|货物资料)/);

        if (cargoDisplayParts.length > 0 && cargoDisplayParts[0]) {
            cargoMain = cargoDisplayParts[0].trim();
        }
        if (cargoDisplayParts.length > 1) {
            for (var i = 1; i < cargoDisplayParts.length; i++) {
                if (cargoDisplayParts[i]) cargoExtras.push("     " + cargoDisplayParts[i].trim());
            }
        }
    }

    // 2. 货物主体
    if (cargoMain) {
        logLines.push("   📦 " + cargoMain);
    }

    // 3. 地址
    if (orderData.addresses && orderData.addresses !== "未知") {
        var addressList = orderData.addresses.split(' -> ');
        for (var i = 0; i < addressList.length; i++) {
            logLines.push("   " + (i === 0 ? "🟢" : "🔴") + " " + addressList[i]);
        }
    }

    // 4. 补充说明
    if (cargoExtras.length > 0) {
        logLines = logLines.concat(cargoExtras);
    }

    // 5. 价格 (独立、缩进)
    if (orderData.price) {
        logLines.push("    " + orderData.price + "元");
    }

    // 6. 支付信息
    var paymentInfos = [];
    var texts = orderData.rawTexts.split(' | ');
    for (var j = 0; j < texts.length; j++) {
        var text = texts[j].trim();
        if ((text.indexOf("已全额支付") > -1 || text.indexOf("在线议") > -1 || text.indexOf("到付") > -1) && paymentInfos.indexOf(text) === -1) {
            paymentInfos.push(text);
        }
    }
    if (paymentInfos.length > 0) {
        logLines.push("   💰 " + paymentInfos.join(', '));
    }

    logLines.push("─".repeat(50) + "\n");

    logd(logLines.join("\n"));
}

function displayScanStatus() {
    if (duplicateOrderCount > 0) {
        var now = new Date();
        var timeStr = (now.getHours() < 10 ? "0" : "") + now.getHours() + ":" +
            (now.getMinutes() < 10 ? "0" : "") + now.getMinutes() + ":" +
            (now.getSeconds() < 10 ? "0" : "") + now.getSeconds();

        // logd("[" + timeStr + "] 🔍 本轮扫描完成，已跳过 " + duplicateOrderCount + " 个重复订单。");
        duplicateOrderCount = 0;
        return true;
    }
    return false;
}

/**
 * 反侦测系统 - 人性化触摸函数
 * 模拟真实的人类触摸行为，添加自然随机性
 * @param {number} x - 目标X坐标
 * @param {number} y - 目标Y坐标
 * @param {Object} options - 可选参数
 * @param {number} options.duration - 触摸持续时间(毫秒)
 * @returns {boolean} 操作是否成功
 */
function humanTouch(x, y, options = {}) {
    try {
        // 添加微小随机偏移（模拟手指不精确性）
        const jitterFactor = 3; // 抖动范围
        const jitterX = (Math.random() - 0.5) * jitterFactor;
        const jitterY = (Math.random() - 0.5) * jitterFactor;
        
        // 计算触摸持续时间（模拟不同按压时长）
        const duration = options.duration || 80 + Math.random() * 50;
        
        // 执行触摸操作
        return touch(x + jitterX, y + jitterY, duration);
    } catch (e) {
        console.error("humanTouch error: " + e);
        return false;
    }
}

/**
 * 反侦测系统 - 生成自然曲线的滑动轨迹
 * @param {number} startX - 起始X坐标
 * @param {number} startY - 起始Y坐标
 * @param {number} endX - 结束X坐标
 * @param {number} endY - 结束Y坐标
 * @param {number} pointCount - 轨迹点数量
 * @returns {Array<{x:number, y:number}>} 路径点数组
 */
function generateNaturalCurve(startX, startY, endX, endY, pointCount = 10) {
    const points = [];
    // 基础路径
    for (let i = 0; i <= pointCount; i++) {
        const t = i / pointCount;
        // 线性插值基础点
        let x = startX + (endX - startX) * t;
        let y = startY + (endY - startY) * t;
        
        // 添加自然曲线偏移（越接近中间偏移越大）
        const curveIntensity = Math.sin(t * Math.PI);
        const maxOffset = 15; // 最大偏移像素
        const offset = maxOffset * curveIntensity * (Math.random() * 0.5 + 0.5);
        
        // 确定偏移方向（垂直于滑动方向）
        const angle = Math.atan2(endY - startY, endX - startX) + Math.PI/2;
        x += offset * Math.cos(angle);
        y += offset * Math.sin(angle);
        
        points.push({x, y});
    }
    return points;
}

/**
 * 反侦测系统 - 自然滑动函数
 * 执行带有自然曲线和速度变化的滑动
 * @param {number} startX - 起始X坐标
 * @param {number} startY - 起始Y坐标
 * @param {number} endX - 结束X坐标
 * @param {number} endY - 结束Y坐标
 * @param {Object} options - 可选参数
 * @param {number} options.duration - 滑动总时长(毫秒)
 * @returns {boolean} 操作是否成功
 */
function humanSwipe(startX, startY, endX, endY, options = {}) {
    try {
        // 生成自然曲线轨迹
        const points = generateNaturalCurve(startX, startY, endX, endY);
        
        // 计算滑动总时长
        const duration = options.duration || 800 + Math.random() * 500;
        
        // 执行滑动手势，使用swipeToPoint函数而不是swipe
        return swipeToPoint(startX, startY, endX, endY, duration);
    } catch (e) {
        console.error("humanSwipe error: " + e);
        return false;
    }
}

// 确保这些函数在全局范围内可用
if (typeof utilsModule === 'undefined') {
    var utilsModule = {};
}

utilsModule.humanTouch = humanTouch;
utilsModule.humanSwipe = humanSwipe;
utilsModule.generateNaturalCurve = generateNaturalCurve; 