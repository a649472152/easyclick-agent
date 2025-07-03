var config = {
    // 调试模式，开启时会输出更多日志
    DEBUG_MODE: false,

    // 安全级别，用于反侦测系统 (0:关闭, 1:基础)
    SECURITY_LEVEL: 1,

    // 主循环扫描间隔(毫秒)，此设置由反侦测系统动态调整，这里是基准值
    MAIN_LOOP_INTERVAL_MS: 1000,
    
    // 节点查找优化参数
    FETCH_NODE_PARAM: {
        "labelFilter": "2", "maxDepth": "20", "visibleFilter": "0", "excludedAttributes": "visible,selected,enable"
    },
    ORDER_CELL_SCORE_THRESHOLD: 3,
    // 优化关键词，减少不必要的匹配
    ORDER_KEYWORDS: {
        "即时": 2, "预约": 2, "距您": 1, "公里": 1, "元": 1
    },
    REGEX: {
        PRICE: /(\d+\.?\d*)\s*元/,
        DISTANCE: /距您\s*(\d+\.?\d*)\s*公里/,
    },
    OUTPUT_DIR: "output/",
    LOG_DIR: "logs/"
}; 