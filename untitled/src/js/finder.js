function findParentCell(node) {
    var currentNode = node;
    for (var i = 0; i < 15; i++) { // 增加查找深度
        if (!currentNode) return null;
        // logd("findParentCell: level " + i + ", type=" + currentNode.type);
        // 支持多种Cell类型（如Cell、TableCell、CollectionCell、ListItem等）
        if (currentNode.type && (
            currentNode.type.indexOf('Cell') > -1 ||
            currentNode.type.indexOf('Item') > -1
        )) {
            return currentNode;
        }
        if (typeof currentNode.parent === 'function') {
            currentNode = currentNode.parent();
        } else {
            break;
        }
    }
    return null;
}

function findOrderCells() {
    var startTime = Date.now();
    var foundCells = [];
    var processedCellNids = {};
    
    // 1. 首先检查活跃热区
    var activeZones = typeof hotZoneManager !== 'undefined' ? 
                      hotZoneManager.getActiveHotZones() : [];
    
    // 如果有活跃热区，优先扫描热区
    if (activeZones.length > 0) {
        for (var z = 0; z < activeZones.length; z++) {
            var zone = activeZones[z];
            
            // 使用边界参数限制查询范围，提高性能
            try {
                var boundedTextNodes = type('StaticText')
                    .bounds(zone.x1, zone.y1, zone.x2, zone.y2)
                    .getNodeInfo(200);
                    
                if (boundedTextNodes && boundedTextNodes.length > 0) {
                    // 过滤热区内的节点
                    var filteredNodes = filterOrderTextNodes(boundedTextNodes);
                    
                    // 从过滤后的文本节点查找父级订单Cell
                    var cells = findCellsFromTextNodes(filteredNodes, processedCellNids);
                    foundCells = foundCells.concat(cells);
                    
                    // 热区找到了足够的订单，可以提前返回
                    if (foundCells.length >= 3) {
                        if (config.DEBUG_MODE) {
                            logd("✅ 热区快速扫描找到 " + foundCells.length + 
                                 " 个订单，耗时: " + (Date.now() - startTime) + "ms");
                        }
                        return foundCells;
                    }
                }
            } catch (e) {
                logd("热区扫描异常: " + e);
            }
        }
    }
    
    // 2. 如果热区没找到足够订单，进行全屏扫描
    var allTextNodes = type('StaticText').getNodeInfo(1000);
    var textNodes = filterOrderTextNodes(allTextNodes);
    
    if (!textNodes || textNodes.length === 0) {
        return foundCells; // 可能已经在热区找到了一些订单
    }
    
    // 查找全屏节点中的订单Cell
    var fullScreenCells = findCellsFromTextNodes(textNodes, processedCellNids);
    foundCells = foundCells.concat(fullScreenCells);
    
    if (config.DEBUG_MODE) {
        logd("📱 全屏扫描找到 " + foundCells.length + 
             " 个订单，耗时: " + (Date.now() - startTime) + "ms");
    }
    
    return foundCells;
}

// 过滤文本节点，找到可能与订单相关的节点
function filterOrderTextNodes(nodes) {
    if (!nodes) return [];
    
    var filteredNodes = [];
    for (var i = 0; i < nodes.length; i++) {
        var node = nodes[i];
        
        // 长度过短或过长的文本很可能不是订单信息
        if (!node.label || node.label.length < 3 || node.label.length > 100) {
            continue;
        }
        
        // 快速检查是否包含任何关键词
        var text = node.label;
        
        // 检查是否包含价格信息
        if (text.indexOf('元') > -1) {
            filteredNodes.push(node);
            continue;
        }
        
        // 检查是否包含距离信息
        if (text.indexOf('公里') > -1 || text.indexOf('km') > -1 || text.indexOf('距您') > -1) {
            filteredNodes.push(node);
            continue;
        }
        
        // 检查是否包含目的地/货物信息    
        if ((text.indexOf('市') > -1 || text.indexOf('区') > -1) && 
            (text.indexOf('货物') > -1 || text.indexOf('车型') > -1 || text.indexOf('订单') > -1)) {
            filteredNodes.push(node);
            continue;
        }
    }
    
    return filteredNodes;
}

// 从文本节点查找父级订单Cell
function findCellsFromTextNodes(textNodes, processedCellNids) {
    var foundCells = [];
    if (!processedCellNids) {
        processedCellNids = {};
    }
    
    if (!textNodes || textNodes.length === 0) {
        return foundCells;
    }
    for (var i = 0; i < textNodes.length; i++) {
        var node = textNodes[i];
        // 2. 判断是否包含目标关键词
        var hasKeyword = false;
        for (var k in config.ORDER_KEYWORDS) {
            if (node.label && node.label.indexOf(k) > -1) {
                hasKeyword = true;
                break;
            }
        }
        if (!hasKeyword) continue;
        // 3. 反向追溯父 Cell
        var parent = node;
        for (var j = 0; j < 10; j++) {
            if (!parent) break;
            if (parent.type && (parent.type.indexOf('Cell') > -1 || parent.type.indexOf('Item') > -1)) {
                if (!processedCellNids[parent.nid]) {
                    foundCells.push(parent);
                    processedCellNids[parent.nid] = true;
                    
                    // 如果有热区管理器，记录订单位置以优化未来扫描
                    if (typeof hotZoneManager !== 'undefined') {
                        hotZoneManager.recordOrderLocation(parent);
                    }
                }
                break;
            }
            if (typeof parent.parent === 'function') {
                parent = parent.parent();
            } else {
                break;
            }
        }
    }
    // logd("通过文本节点反向追溯识别到有效订单Cell数量: " + foundCells.length);
    return foundCells;
} 