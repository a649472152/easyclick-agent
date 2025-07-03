function collectAllTexts(node, level) {
    if (typeof level === 'undefined') level = 0;
    var texts = [];
    if (!node) return texts;
    
    // 直接收集当前节点的文本信息
    if (node.label) texts.push(node.label);
    if (node.name) texts.push(node.name);
    if (node.value) texts.push(node.value);
    if (node.hint) texts.push(node.hint);
    
    // 递归收集子节点文本
    if (typeof node.allChildren === 'function') {
        var children = node.allChildren();
        if (children && children.length > 0) {
            for (var i = 0; i < children.length; i++) {
                texts = texts.concat(collectAllTexts(children[i], level + 1));
            }
        }
    }
    
    // 使用对象哈希快速去重
    var seen = {};
    var uniqueTexts = [];
    for (var i = 0; i < texts.length; i++) {
        var item = texts[i];
        if (!seen[item]) {
            seen[item] = true;
            uniqueTexts.push(item);
        }
    }
    return uniqueTexts;
}

// 预编译的正则表达式（比运行时创建更高效）
var ORDER_REGEX = {
    PRICE: /(\d+\.?\d*)\s*元/,
    DISTANCE: /距(?:您|离)?\s*(\d+\.?\d*)\s*(?:公里|km)/i,
    ADDRESS: /(?:市|区|县|镇|路|街|村|城|道|巷|弄|号|栋|层|店|仓|门|到)/,
    CARGO: /(?:车型|货物|备注|吨|方|件|箱|板|台|个|kg|公斤|重量|体积|车长)/,
    TIME: /(?:明天|后天|周|星期|月|\d+[:.]\d+|\d+点|\d+日)/
};

// 文本特征快速评分函数 - 用于快速确定文本性质
function scoreTextFeatures(text) {
    if (!text || text.length < 2) return null;
    
    var score = {
        isPrice: ORDER_REGEX.PRICE.test(text),
        isDistance: ORDER_REGEX.DISTANCE.test(text),
        addressScore: (text.match(ORDER_REGEX.ADDRESS) || []).length * 1.5,
        cargoScore: (text.match(ORDER_REGEX.CARGO) || []).length,
        timeScore: (text.match(ORDER_REGEX.TIME) || []).length
    };
    
    // 确定最可能的类别
    if (score.isPrice && (text.length < 15 || text.indexOf("元") > -1)) {
        score.category = "price";
    } else if (score.isDistance) {
        score.category = "distance";
    } else if (score.cargoScore > score.addressScore) {
        score.category = "cargo";
    } else if (score.addressScore > score.cargoScore) {
        score.category = "address";
    } else if (score.timeScore > 0 && text.length < 20) {
        score.category = "time";
    } else {
        score.category = "unknown";
    }
    
    return score;
}

function extractOrderFromCell(task) {
    var allTexts = task.texts;
    if (!allTexts || allTexts.length === 0) {
        return null;
    }

    // 初始化结构更清晰的订单数据
    var orderData = {
        nid: task.nid, 
        timestamp: new Date().toISOString(), 
        orderType: '未知',
        price: null, 
        distance: null, 
        startAddress: null,
        endAddress: null,
        vehicleInfo: null,
        cargoDetails: null,
        remarks: null,
        paymentType: null, // 新增支付方式
        rawTexts: allTexts.join(' | ')
    };
    
    var addressCandidates = [];

    // 第一轮：提取关键数据和候选地址
    for (var i = 0; i < allTexts.length; i++) {
        var text = allTexts[i];
        if (!text) continue;

        // 订单类型
        if (text.indexOf("即时") > -1) orderData.orderType = "即时";
        if (text.indexOf("预约") > -1) orderData.orderType = "预约";
        
        // 支付方式
        if (text.indexOf("到付") > -1) orderData.paymentType = "到付";
        if (text.indexOf("已全额支付") > -1) orderData.paymentType = "已全额支付";

        // 价格和距离
        var priceMatch = text.match(ORDER_REGEX.PRICE);
        if (priceMatch && priceMatch[1]) orderData.price = parseFloat(priceMatch[1]);
        
        var distanceMatch = text.match(ORDER_REGEX.DISTANCE);
        if (distanceMatch && distanceMatch[1]) orderData.distance = parseFloat(distanceMatch[1]);

        // 车型、货物、备注的关键词提取
        if (text.startsWith("需要车型：")) {
            orderData.vehicleInfo = text;
        } else if (text.startsWith("货物资料：")) {
            orderData.cargoDetails = text;
        } else if (text.startsWith("订单备注：")) {
            orderData.remarks = text;
        } else {
            // 如果不是特定信息，则认为是地址候选
            var features = scoreTextFeatures(text);
            if (features && features.category === "address" && text.length > 5) { // 过滤掉太短的无效地址
                addressCandidates.push(text);
            }
        }
    }

    // 第二轮：处理地址
    // 去重并移除已包含在其他信息中的地址
    var uniqueAddresses = Array.from(new Set(addressCandidates));
    uniqueAddresses = uniqueAddresses.filter(function(addr) {
        return !(orderData.vehicleInfo && orderData.vehicleInfo.includes(addr)) &&
               !(orderData.cargoDetails && orderData.cargoDetails.includes(addr)) &&
               !(orderData.remarks && orderData.remarks.includes(addr));
    });

    if (uniqueAddresses.length > 0) {
        orderData.startAddress = uniqueAddresses[0]; // 将第一个最可能的作为起点
    }
    if (uniqueAddresses.length > 1) {
        orderData.endAddress = uniqueAddresses[1]; // 将第二个作为终点
    }

    return orderData;
} 