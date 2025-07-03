// =============================================
// 内存管理优化模块 - 优化版货啦啦3.0
// 版本：1.0
// 更新时间：2024-06-16
// =============================================

var memoryManager = {
    // 内存清理计时
    lastMemoryCleanTime: 0,
    memoryCleanInterval: 10 * 60 * 1000, // 默认10分钟清理一次内存
    
    // 性能指标采集
    memoryUsageLog: [],
    maxMemoryLogs: 20,
    lastMemoryUsage: 0,
    
    // 初始化内存管理器
    initialize: function(config) {
        if (config && config.memoryCleanInterval) {
            this.memoryCleanInterval = config.memoryCleanInterval;
        }
        this.lastMemoryCleanTime = Date.now();
        this.collectMemoryUsage(); // 初始化时收集一次基准数据
        
        logd("🧹 内存管理器已初始化，将每 " + 
             (this.memoryCleanInterval / 60000).toFixed(0) + 
             " 分钟执行一次内存优化");
        
        return true;
    },
    
    // 获取当前内存使用状况
    collectMemoryUsage: function() {
        try {
            // 如果平台支持，获取内存使用情况
            var memUsage = null;
            
            if (typeof runtime !== 'undefined' && typeof runtime.getMemoryInfo === 'function') {
                memUsage = runtime.getMemoryInfo();
            } else if (typeof device !== 'undefined' && typeof device.getMemoryInfo === 'function') {
                memUsage = device.getMemoryInfo();
            }
            
            if (memUsage) {
                this.lastMemoryUsage = memUsage;
                
                // 记录内存使用日志
                this.memoryUsageLog.push({
                    timestamp: Date.now(),
                    usage: memUsage
                });
                
                // 保持日志数量在限制范围内
                if (this.memoryUsageLog.length > this.maxMemoryLogs) {
                    this.memoryUsageLog.shift();
                }
                
                return memUsage;
            }
        } catch (e) {
            logd("内存使用情况获取失败: " + e);
        }
        
        return null;
    },
    
    // 定期检查并清理内存
    checkAndCleanMemory: function() {
        var now = Date.now();
        if (now - this.lastMemoryCleanTime < this.memoryCleanInterval) {
            return false;
        }
        
        logd("🧹 执行内存清理操作...");
        
        // 1. 释放节点资源
        try {
            releaseNode(true);
            logd("✅ 释放UI节点资源成功");
        } catch (e) {
            logd("❌ 释放UI节点资源失败: " + e);
        }
        
        // 2. 强制GC
        try {
            if (typeof runtime !== 'undefined' && typeof runtime.gc === 'function') {
                runtime.gc();
                logd("✅ 强制GC完成");
            } else {
                // 一些平台不直接暴露GC，使用替代方法
                var tmp = new Array(1000000).join('x');
                tmp = null;
                logd("✅ 内存压力释放完成");
            }
        } catch (e) {
            logd("❌ 内存回收操作失败: " + e);
        }
        
        // 3. 压缩数据缓存
        try {
            this.compactDataCache();
            logd("✅ 数据缓存压缩完成");
        } catch (e) {
            logd("❌ 数据缓存压缩失败: " + e);
        }
        
        // 4. 清理临时文件
        try {
            this.cleanTempFiles();
            logd("✅ 临时文件清理完成");
        } catch (e) {
            logd("❌ 临时文件清理失败: " + e);
        }
        
        // 更新时间戳
        this.lastMemoryCleanTime = now;
        
        // 收集清理后的内存使用状况
        this.collectMemoryUsage();
        
        return true;
    },
    
    // 压缩数据缓存
    compactDataCache: function() {
        // 如果全局orderCache可用并且是LRU缓存
        if (typeof orderCache !== 'undefined' && 
            typeof orderCache.size === 'function' && 
            orderCache.size() > 200) {
            
            try {
                logd("📦 缓存压缩前状态: " + orderCache.getStatsReport());
                
                // 只保留最近使用的200个项
                var oldStats = orderCache.stats;
                
                // 创建新缓存实例，重新加载当前缓存中的项（只保留最近的200个）
                var recentKeys = orderCache.keys.slice(-200);
                var tmpCache = new LRUCache(orderCache.capacity);
                
                // 复制统计信息
                tmpCache.stats = oldStats;
                
                // 复制最近的键值对
                for (var i = 0; i < recentKeys.length; i++) {
                    var key = recentKeys[i];
                    tmpCache.put(key, orderCache.cache[key]);
                }
                
                // 替换原缓存
                orderCache = tmpCache;
                
                logd("📦 缓存压缩后状态: " + orderCache.getStatsReport());
            } catch (e) {
                logd("缓存压缩失败: " + e);
            }
        }
    },
    
    // 清理临时文件
    cleanTempFiles: function() {
        try {
            // 清理超过7天的日志文件
            var logDir = file.getSandBoxFilePath("logs");
            if (logDir && file.isDirectory(logDir)) {
                var files = file.listDir(logDir);
                var now = Date.now();
                var sevenDaysMs = 7 * 24 * 60 * 60 * 1000;
                
                var deletedCount = 0;
                
                for (var i = 0; i < files.length; i++) {
                    var filePath = logDir + "/" + files[i];
                    
                    // 获取文件属性
                    var fileInfo = file.getFileInfo(filePath);
                    if (fileInfo && fileInfo.lastModified && 
                        (now - fileInfo.lastModified) > sevenDaysMs) {
                        // 文件超过7天，删除
                        if (file.deleteFile(filePath)) {
                            deletedCount++;
                        }
                    }
                }
                
                if (deletedCount > 0) {
                    logd("已清理 " + deletedCount + " 个过期日志文件");
                }
            }
        } catch (e) {
            logd("清理临时文件异常: " + e);
        }
    },
    
    // 获取内存使用报告
    getMemoryReport: function() {
        var report = "📊 内存使用报告\n";
        report += "上次清理: " + new Date(this.lastMemoryCleanTime).toLocaleString() + "\n";
        
        // 添加内存使用情况
        if (this.lastMemoryUsage) {
            var usage = this.lastMemoryUsage;
            
            // 美化显示
            if (typeof usage === 'object') {
                if (usage.totalMem && usage.availMem) {
                    var totalMB = (usage.totalMem / 1048576).toFixed(1);
                    var usedMB = ((usage.totalMem - usage.availMem) / 1048576).toFixed(1);
                    var usePercent = ((usage.totalMem - usage.availMem) / usage.totalMem * 100).toFixed(1);
                    
                    report += "总内存: " + totalMB + " MB, 已用: " + usedMB + " MB (" + usePercent + "%)\n";
                } else {
                    report += "内存: " + JSON.stringify(usage) + "\n";
                }
            } else {
                report += "内存: " + usage + "\n";
            }
        }
        
        return report;
    }
};

// 导出对象
// memoryManager 