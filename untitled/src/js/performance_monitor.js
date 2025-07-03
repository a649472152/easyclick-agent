// =============================================
// 性能监控模块 - 用于收集和分析订单检测延迟数据
// 集成到货啦啦3.0系统中，监测订单获取的实时性
// =============================================

var performanceMonitor = {
    // 延迟数据收集
    delayData: [],
    maxSamples: 100,
    
    // 统计信息
    stats: {
        totalOrderDetected: 0,
        totalScanCount: 0,
        scanWithOrderCount: 0, // 有订单的扫描次数
        lastReportTime: 0,
        lastDetectionTime: 0,  // 最后一次检测到订单的时间
        avgDetectionDelay: 0,
        minDetectionDelay: 9999,
        maxDetectionDelay: 0,
        
        // 扫描间隔相关
        scanIntervals: [],
        maxScanIntervals: 100, // 保存最近100个扫描间隔
        lastScanTime: 0,
        
        // Worker处理相关
        avgProcessDelay: 0,
        minProcessDelay: 9999,
        maxProcessDelay: 0,
        
        // 总体延迟(检测+处理)
        avgTotalDelay: 0,
        minTotalDelay: 9999,
        maxTotalDelay: 0
    },
    
    // 日志和统计文件路径
    logFilePath: null,
    
    // 初始化性能监控
    initialize: function() {
        this.logFilePath = file.getSandBoxFilePath("order_detection_delays.log");
        // 写入CSV表头
        var header = "时间戳,扫描开始时间,订单检测时间,检测延迟(ms),订单ID,处理开始时间,处理结束时间,处理延迟(ms),总延迟(ms)\n";
        file.writeFile(header, this.logFilePath);
        logd("📊 性能监控系统已初始化，延迟日志将保存到: " + this.logFilePath);
    },
    
    // 记录订单检测延迟
    recordDetectionDelay: function(scanStartTime, detectionTime, orderSignature) {
        var delay = detectionTime - scanStartTime;
        
        // 更新统计信息
        this.stats.totalOrderDetected++;
        this.stats.lastDetectionTime = Date.now(); // 记录最后检测时间
        this.stats.avgDetectionDelay = ((this.stats.avgDetectionDelay * (this.stats.totalOrderDetected - 1)) + delay) / this.stats.totalOrderDetected;
        this.stats.minDetectionDelay = Math.min(this.stats.minDetectionDelay, delay);
        this.stats.maxDetectionDelay = Math.max(this.stats.maxDetectionDelay, delay);
        
        // 保存到延迟数据集合
        this.delayData.push({
            timestamp: new Date().toISOString(),
            scanStartTime: scanStartTime,
            detectionTime: detectionTime,
            detectionDelay: delay,
            orderSignature: orderSignature,
            
            // 处理时间待Worker回调时填充
            processStartTime: null,
            processEndTime: null,
            processDelay: null,
            totalDelay: null
        });
        
        // 限制数据集大小
        if (this.delayData.length > this.maxSamples) {
            this.delayData.shift();
        }
        
        // 在控制台输出检测延迟信息
        if (delay <= 50) {
            logd("✅ 新订单检测延迟: " + delay + "ms, 订单ID: " + orderSignature);
        } else if (delay <= 150) {
            logd("⚠️ 新订单检测延迟: " + delay + "ms, 订单ID: " + orderSignature);
        } else {
            logd("❌ 新订单检测延迟: " + delay + "ms, 订单ID: " + orderSignature + " (延迟过高)");
        }
        
        return delay;
    },
    
    // 记录订单处理延迟 (Worker线程调用)
    recordProcessDelay: function(orderSignature, processStartTime, processEndTime) {
        var processDelay = processEndTime - processStartTime;
        
        // 查找对应的订单记录
        for (var i = 0; i < this.delayData.length; i++) {
            if (this.delayData[i].orderSignature === orderSignature) {
                this.delayData[i].processStartTime = processStartTime;
                this.delayData[i].processEndTime = processEndTime;
                this.delayData[i].processDelay = processDelay;
                
                // 计算总延迟 (检测+处理)
                var totalDelay = this.delayData[i].detectionDelay + processDelay;
                this.delayData[i].totalDelay = totalDelay;
                
                // 更新统计信息
                this.stats.avgProcessDelay = ((this.stats.avgProcessDelay * (this.stats.totalOrderDetected - 1)) + processDelay) / this.stats.totalOrderDetected;
                this.stats.minProcessDelay = Math.min(this.stats.minProcessDelay, processDelay);
                this.stats.maxProcessDelay = Math.max(this.stats.maxProcessDelay, processDelay);
                
                this.stats.avgTotalDelay = ((this.stats.avgTotalDelay * (this.stats.totalOrderDetected - 1)) + totalDelay) / this.stats.totalOrderDetected;
                this.stats.minTotalDelay = Math.min(this.stats.minTotalDelay, totalDelay);
                this.stats.maxTotalDelay = Math.max(this.stats.maxTotalDelay, totalDelay);
                
                // 记录到日志文件
                this.logDelayData(this.delayData[i]);
                
                // 在控制台输出总延迟信息
                logd("🔄 订单总延迟(检测+处理): " + totalDelay + "ms");
                
                break;
            }
        }
    },
    
    // 记录扫描计数
    recordScan: function() {
        this.stats.totalScanCount++;
        
        // 记录扫描间隔
        var now = Date.now();
        if (this.stats.lastScanTime > 0) {
            var interval = now - this.stats.lastScanTime;
            this.stats.scanIntervals.push(interval);
            if (this.stats.scanIntervals.length > this.stats.maxScanIntervals) {
                this.stats.scanIntervals.shift();
            }
        }
        this.stats.lastScanTime = now;
    },
    
    // 记录扫描结果
    recordScanResult: function(foundOrder) {
        if (foundOrder) {
            this.stats.scanWithOrderCount++;
        }
    },
    
    // 获取平均扫描间隔
    getAverageScanInterval: function() {
        if (this.stats.scanIntervals.length === 0) {
            return 0;
        }
        
        var sum = 0;
        for (var i = 0; i < this.stats.scanIntervals.length; i++) {
            sum += this.stats.scanIntervals[i];
        }
        return sum / this.stats.scanIntervals.length;
    },
    
    // 获取订单检出率
    getOrderDetectionRate: function() {
        if (this.stats.totalScanCount === 0) {
            return 0;
        }
        return this.stats.scanWithOrderCount / this.stats.totalScanCount;
    },
    
    // 将延迟数据记录到日志文件
    logDelayData: function(data) {
        if (!this.logFilePath) return;
        
        try {
            // 格式化为CSV行
            var line = [
                data.timestamp,
                data.scanStartTime,
                data.detectionTime,
                data.detectionDelay,
                data.orderSignature,
                data.processStartTime,
                data.processEndTime,
                data.processDelay,
                data.totalDelay
            ].join(",") + "\n";
            
            // 追加到日志文件
            file.appendLine(line, this.logFilePath);
        } catch (e) {
            logd("ERROR: 写入延迟日志失败: " + e);
        }
    },
    
    // 生成性能报告
    generateReport: function(forceOutput) {
        var now = Date.now();
        
        // 每隔60秒强制输出一次报告，以确保即使没有新订单也能监控到系统状态
        if (!forceOutput && (now - this.stats.lastReportTime < 60000)) {
            return;
        }
        
        this.stats.lastReportTime = now;
        
        // 如果没有任何扫描数据，则不生成报告
        if (this.stats.totalScanCount === 0) {
            return;
        }

        // 核心数据摘要
        var detectionDelayAvg = this.stats.avgDetectionDelay.toFixed(0);
        var detectionDelayMax = this.stats.maxDetectionDelay;
        var processDelayAvg = this.stats.avgProcessDelay.toFixed(0);
        var processDelayMax = this.stats.maxProcessDelay;
        var totalDelayAvg = this.stats.avgTotalDelay.toFixed(0);
        
        var summary = "📊 性能报告: 扫描=" + this.stats.totalScanCount +
                      ", 订单=" + this.stats.totalOrderDetected +
                      " | 检测延迟(ms): Avg=" + detectionDelayAvg + ", Max=" + detectionDelayMax +
                      " | 处理延迟(ms): Avg=" + processDelayAvg + ", Max=" + processDelayMax +
                      " | 总延迟(ms): Avg=" + totalDelayAvg;

        logd(summary);
        
        // 同时写入简化的报告到文件
        try {
            file.writeFile(summary, file.getSandBoxFilePath("performance_report.txt"));
        } catch (e) {
            logd("ERROR: 写入性能报告文件失败: " + e);
        }
    },
    
    // 获取系统状态评估
    getSystemStatusEvaluation: function() {
        var avgTotal = this.stats.avgTotalDelay;
        var maxDetection = this.stats.maxDetectionDelay;
        
        if (avgTotal < 80 && maxDetection < 100) {
            return "✨ 系统运行极佳：实现了真正的实时订单获取 (平均延迟<80ms)";
        } else if (avgTotal < 150 && maxDetection < 200) {
            return "✅ 系统运行良好：订单获取具有良好的实时性 (平均延迟<150ms)";
        } else if (avgTotal < 300) {
            return "⚠️ 系统运行一般：订单获取接近实时 (平均延迟<300ms)，建议优化";
        } else {
            return "❌ 系统延迟较高：订单获取存在明显延迟 (平均延迟>300ms)，需要重点优化";
        }
    },
    
    // 获取延迟分布
    getDelayDistribution: function() {
        var distribution = {
            "0-50ms": 0,
            "51-100ms": 0,
            "101-200ms": 0,
            "201-500ms": 0,
            ">500ms": 0
        };
        
        for (var i = 0; i < this.delayData.length; i++) {
            var delay = this.delayData[i].totalDelay;
            if (!delay) continue; // 跳过未完成处理的记录
            
            if (delay <= 50) distribution["0-50ms"]++;
            else if (delay <= 100) distribution["51-100ms"]++;
            else if (delay <= 200) distribution["101-200ms"]++;
            else if (delay <= 500) distribution["201-500ms"]++;
            else distribution[">500ms"]++;
        }
        
        return distribution;
    }
};

// 导出模块
// performanceMonitor以全局变量形式存在，不需要额外导出 