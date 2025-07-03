// =============================================
// 热区管理模块 - 优化版货啦啦3.0
// 版本：1.0
// 更新时间：2024-06-16
// =============================================

var hotZoneManager = {
    // 订单高频出现区域列表
    orderHotZones: [],
    // 最大热区数量
    maxHotZones: 5,
    // 调试模式
    debugMode: false,
    
    // 初始化热区管理器
    initialize: function(config) {
        if (config) {
            if (typeof config.maxHotZones === 'number') {
                this.maxHotZones = config.maxHotZones;
            }
            if (typeof config.debugMode === 'boolean') {
                this.debugMode = config.debugMode;
            }
        }
        
        logd("🔍 热区管理器已初始化，最大热区数量: " + this.maxHotZones);
        return true;
    },
    
    // 记录订单位置，自动创建或更新热区
    recordOrderLocation: function(cell) {
        if (!cell || !cell.bounds) return null;
        
        var bounds;
        // 检查bounds是函数还是直接属性
        if (typeof cell.bounds === 'function') {
            bounds = cell.bounds();
        } else {
            bounds = cell.bounds; // 直接使用属性
        }
        
        if (!bounds) return null;
        
        // 创建新热区（扩展一定范围以容纳UI波动）
        var newHotZone = {
            x1: Math.max(0, bounds.x - 50),
            y1: Math.max(0, bounds.y - 100),
            x2: bounds.x + bounds.width + 50,
            y2: bounds.y + bounds.height + 100,
            hits: 1,
            lastHitTime: Date.now()
        };
        
        // 检查是否与现有热区重叠
        for (var i = 0; i < this.orderHotZones.length; i++) {
            var zone = this.orderHotZones[i];
            if (this.isOverlapping(zone, newHotZone)) {
                // 更新现有热区
                zone.hits++;
                zone.lastHitTime = Date.now();
                
                // 微调位置以覆盖更多可能区域
                zone.x1 = Math.min(zone.x1, newHotZone.x1);
                zone.y1 = Math.min(zone.y1, newHotZone.y1);
                zone.x2 = Math.max(zone.x2, newHotZone.x2);
                zone.y2 = Math.max(zone.y2, newHotZone.y2);
                
                if (this.debugMode) {
                    logd("🔄 更新热区 #" + (i+1) + ": " + 
                          "(" + zone.x1 + "," + zone.y1 + ")-(" + zone.x2 + "," + zone.y2 + "), " + 
                          "命中: " + zone.hits);
                }
                
                return zone;
            }
        }
        
        // 添加新热区，如果达到上限则替换最不活跃的
        if (this.orderHotZones.length >= this.maxHotZones) {
            // 按活跃度排序（综合考虑命中次数和最近命中时间）
            this.orderHotZones.sort(function(a, b) {
                // 最近30秒内的命中更重要
                var recentHitA = (Date.now() - a.lastHitTime < 30000) ? 5 : 1;
                var recentHitB = (Date.now() - b.lastHitTime < 30000) ? 5 : 1;
                return (b.hits * recentHitB) - (a.hits * recentHitA);
            });
            
            // 替换最不活跃的热区
            this.orderHotZones.pop();
        }
        
        // 添加新热区
        this.orderHotZones.push(newHotZone);
        
        if (this.debugMode) {
            logd("➕ 添加新热区 #" + this.orderHotZones.length + ": " + 
                  "(" + newHotZone.x1 + "," + newHotZone.y1 + ")-(" + 
                  newHotZone.x2 + "," + newHotZone.y2 + ")");
        }
        
        return newHotZone;
    },
    
    // 检查两个区域是否重叠
    isOverlapping: function(zone1, zone2) {
        return !(
            zone1.x2 < zone2.x1 || 
            zone1.x1 > zone2.x2 || 
            zone1.y2 < zone2.y1 || 
            zone1.y1 > zone2.y2
        );
    },
    
    // 获取活跃热区列表（过滤掉长时间不活跃的）
    getActiveHotZones: function() {
        var now = Date.now();
        var inactiveTimeout = 60000; // 60秒不活跃则视为非活跃区域
        
        var activeZones = this.orderHotZones.filter(function(zone) {
            return (now - zone.lastHitTime) < inactiveTimeout;
        });
        
        return activeZones;
    },
    
    // 清理过期热区
    cleanupInactiveHotZones: function() {
        var now = Date.now();
        var inactiveTimeout = 120000; // 2分钟不活跃则清理
        var initialCount = this.orderHotZones.length;
        
        this.orderHotZones = this.orderHotZones.filter(function(zone) {
            return (now - zone.lastHitTime) < inactiveTimeout;
        });
        
        var removedCount = initialCount - this.orderHotZones.length;
        if (removedCount > 0 && this.debugMode) {
            logd("🧹 清理了 " + removedCount + " 个不活跃热区");
        }
        
        return removedCount;
    },
    
    // 获取热区统计信息
    getHotZoneStats: function() {
        var activeCount = this.getActiveHotZones().length;
        
        return {
            totalZones: this.orderHotZones.length,
            activeZones: activeCount,
            coverage: this.orderHotZones.length > 0 ? 
                      (this.getZoneCoverageArea() / this.getScreenArea() * 100).toFixed(1) + "%" : 
                      "0%"
        };
    },
    
    // 计算所有热区的总面积（考虑重叠）
    getZoneCoverageArea: function() {
        // 简化实现，直接累加各个区域面积
        var totalArea = 0;
        for (var i = 0; i < this.orderHotZones.length; i++) {
            var zone = this.orderHotZones[i];
            var area = (zone.x2 - zone.x1) * (zone.y2 - zone.y1);
            totalArea += area;
        }
        return totalArea;
    },
    
    // 获取屏幕总面积
    getScreenArea: function() {
        var screenSize = getScreenSize();
        if (screenSize) {
            return screenSize.width * screenSize.height;
        }
        // 默认使用通用屏幕尺寸
        return 1080 * 1920;
    },
    
    // 输出热区状态报告
    getStatusReport: function() {
        var stats = this.getHotZoneStats();
        
        var report = "📱 热区状态\n";
        report += "总数: " + stats.totalZones + ", 活跃: " + stats.activeZones + "\n";
        report += "屏幕覆盖: " + stats.coverage + "\n";
        
        if (this.debugMode && this.orderHotZones.length > 0) {
            report += "详情:\n";
            for (var i = 0; i < this.orderHotZones.length; i++) {
                var z = this.orderHotZones[i];
                var ageSeconds = ((Date.now() - z.lastHitTime) / 1000).toFixed(0);
                report += "#" + (i+1) + ": 命中=" + z.hits + 
                          ", 最近活跃=" + ageSeconds + "秒前\n";
            }
        }
        
        return report;
    }
};

// 导出对象
// hotZoneManager 