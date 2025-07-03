// =============================================
// 高效缓存管理模块
// 实现LRU (Least Recently Used) 缓存策略
// 版本：1.0
// =============================================

/**
 * LRU缓存实现，用于高效存储最近使用的订单数据
 * @param {number} capacity 缓存最大容量
 */
function LRUCache(capacity) {
    this.capacity = capacity || 300;
    this.cache = {};
    this.keys = [];
    
    // 统计数据
    this.stats = {
        hits: 0,      // 命中次数
        misses: 0,    // 未命中次数
        evictions: 0, // 驱逐次数
        operations: 0 // 总操作数
    };
    
    /**
     * 获取缓存中的值
     * @param {string} key 键
     * @returns 缓存的值或undefined
     */
    this.get = function(key) {
        this.stats.operations++;
        if (this.cache[key] !== undefined) {
            // 更新访问顺序
            this.stats.hits++;
            this.keys.splice(this.keys.indexOf(key), 1);
            this.keys.push(key);
            return this.cache[key];
        }
        this.stats.misses++;
        return undefined;
    };
    
    /**
     * 向缓存添加值
     * @param {string} key 键
     * @param {any} value 值
     */
    this.put = function(key, value) {
        this.stats.operations++;
        if (this.cache[key] !== undefined) {
            this.cache[key] = value;
            this.get(key); // 更新访问顺序
            return;
        }
        
        if (this.keys.length >= this.capacity) {
            var oldKey = this.keys.shift();
            delete this.cache[oldKey];
            this.stats.evictions++;
        }
        
        this.cache[key] = value;
        this.keys.push(key);
    };
    
    /**
     * 检查缓存是否包含指定键
     * @param {string} key 键
     * @returns {boolean} 是否包含键
     */
    this.containsKey = function(key) {
        this.stats.operations++;
        var exists = this.cache[key] !== undefined;
        if (exists) this.stats.hits++;
        else this.stats.misses++;
        return exists;
    };
    
    /**
     * 获取缓存中键的数量
     * @returns {number} 键的数量
     */
    this.size = function() {
        return this.keys.length;
    };
    
    /**
     * 清空缓存
     */
    this.clear = function() {
        this.cache = {};
        this.keys = [];
    };
    
    /**
     * 获取缓存命中率
     * @returns {number} 缓存命中率 (0-1)
     */
    this.getHitRate = function() {
        var total = this.stats.hits + this.stats.misses;
        if (total === 0) return 0;
        return this.stats.hits / total;
    };
    
    /**
     * 获取缓存状态报告
     * @returns {string} 缓存状态报告
     */
    this.getStatsReport = function() {
        return "缓存大小: " + this.size() + "/" + this.capacity + 
               ", 命中率: " + (this.getHitRate() * 100).toFixed(2) + "%" + 
               ", 驱逐: " + this.stats.evictions;
    };
}

// 导出函数
// LRUCache 