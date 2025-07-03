// 使用高效LRU缓存实现的订单缓存系统
var orderCache = new LRUCache(300); // 默认容量300，将从config读取

// 扩展orderCache以兼容现有代码
orderCache.addSignature = function(signature) {
    // 如果已经存在，返回false表示重复
    if (this.containsKey(signature)) {
        return false;
    }
    
    // 添加新签名
    this.put(signature, true);
    return true;
};

// 检查签名是否存在
orderCache.hasSignature = function(signature) {
    return this.containsKey(signature);
};

// 获取性能统计信息
orderCache.getStats = function() {
    var hitRate = this.getHitRate() * 100;
    
    return {
        cacheSize: this.size(),
        maxSize: this.capacity,
        hitRate: hitRate.toFixed(1) + "%",
        totalChecks: this.stats.operations,
        evictions: this.stats.evictions
    };
};

// 优化的签名生成算法 - 更高效的字符串处理
function generateOrderSignature(orderData) {
    // 快速失败 - 如果没有价格，直接使用简化签名
    if (!orderData.price) {
        return "id:" + orderData.nid;
    }

    // 1. 价格（保留1位小数，提高容错性）
    var priceSignature = Math.round(orderData.price * 10) / 10;

    // 2. 目的地（仅使用最后一级地址的关键部分）
    var destinationSignature = "";
    if (orderData.addresses && orderData.addresses !== "未知") {
        var addressParts = orderData.addresses.split('->');
        if (addressParts.length > 0) {
            var lastAddr = addressParts[addressParts.length - 1] || '';
            // 仅提取最具特征的部分：取最后一个"-"后的内容
            var parts = lastAddr.split('-');
            destinationSignature = parts[parts.length - 1] || '';
            // 只保留前15个字符，这通常足够区分不同地址
            destinationSignature = destinationSignature.substring(0, 15).trim();
        }
    }

    // 3. 货物（只取关键特征）
    var cargoSignature = "";
    if (orderData.cargoInfo && orderData.cargoInfo !== "未知") {
        var cargoParts = orderData.cargoInfo.split(';');
        if (cargoParts.length > 0) {
            // 只取第一段描述的前10个字符
            cargoSignature = cargoParts[0].substring(0, 10).trim();
        }
    }

    // 4. 构建最终签名（使用短分隔符减少字符串处理）
    return priceSignature + "|" + destinationSignature + "|" + cargoSignature;
}

function writeOrderToFile(orderData) {
    try {
        var date = new Date();
        var dateString = date.getFullYear() + "-" + (date.getMonth() + 1 < 10 ? "0" : "") + (date.getMonth() + 1) + "-" + (date.getDate() < 10 ? "0" : "") + date.getDate();
        var fileName = "orders_" + dateString + ".jsonl";

        // 按照官方文档的正确方法
        var filePath = file.getSandBoxFilePath(fileName);
        if (!filePath) {
            logd("ERROR: 无法获取沙盒文件路径");
            return;
        }

        var dataString = JSON.stringify(orderData);

        // 使用官方文档推荐的 appendLine 方法，参数顺序：data, path
        var result = file.appendLine(dataString, filePath);

        if (!result) {
            // 备选方案：检查文件是否存在，决定是覆盖还是追加
            var existingContent = "";
            if (file.exists(filePath)) {
                existingContent = file.readFile(filePath);
                if (existingContent) {
                    existingContent += "\n";
                }
            }

            var newContent = existingContent + dataString;
            file.writeFile(newContent, filePath); // 参数顺序：data, path
        }

    } catch (e) {
        logd("ERROR: 写入文件时发生异常: " + e);
    }
}

// 全局变量
var duplicateOrderCount = 0;
var totalNewOrderCount = 0;
var lastDateChecked = "";

// 修改订单处理函数，使用优化后的订单缓存
function processNewOrder(orderData) {
    // 检查日期变更，如果日期变了，清空缓存
    var today = new Date();
    var dateString = today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();
    if (lastDateChecked && lastDateChecked !== dateString) {
        // 使用新的LRU缓存的clear方法
        orderCache.clear();
        logd("🔄 检测到日期变更，已清空订单缓存");
        logd("📊 缓存统计: " + orderCache.getStatsReport());
    }
    lastDateChecked = dateString;

    // 生成并检查订单签名
    var signature = generateOrderSignature(orderData);

    // 如果是重复订单，增加计数并返回false
    if (orderCache.hasSignature(signature)) {
        duplicateOrderCount++;
        return false;
    }

    // 新订单：添加到缓存、写入文件并展示
    orderCache.addSignature(signature);
    writeOrderToFile(orderData);
    totalNewOrderCount++;
    orderData.orderNumber = totalNewOrderCount;

    // 立即显示新订单
    displaySingleOrder(orderData);

    // 为新订单发送通知
    playNewOrderAlert(orderData);

    return true;
} 