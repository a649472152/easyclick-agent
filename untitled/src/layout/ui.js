function main() {
    logd("UI脚本启动，开始构建通信桥梁...");

    // ----------------------------------------------------------------
    // 注册H5页面可以调用的函数 (H5 -> ui.js)
    // ----------------------------------------------------------------

    /**
     * H5调用此函数来保存配置。
     * 它会将请求通过桥梁转发给 main.js 处理。
     */
    ui.registeH5Function("saveConfigToFile", function(configJson) {
        logd("ui.js: 接收到H5的保存请求，准备转发给main.js...");
        // 调用在main.js中注册的'scriptHandleSave'函数
        let success = ui.callScriptRegisteFunction("scriptHandleSave", configJson);
        if (success) {
            logd("ui.js: main.js确认保存成功。");
        } else {
            loge("ui.js: main.js报告保存失败。");
        }
        // 将成功与否的结果（字符串）返回给H5页面
        return success ? "true" : "false";
    });

    /**
     * H5调用此函数来读取配置。
     * 它会将请求通过桥梁转发给 main.js 处理。
     */
    ui.registeH5Function("readConfigFromFile", function() {
        logd("ui.js: 接收到H5的读取请求，准备转发给main.js...");
        // 调用在main.js中注册的'scriptHandleLoad'函数
        let configJson = ui.callScriptRegisteFunction("scriptHandleLoad", null);
        if (configJson) {
            logd("ui.js: 从main.js获取到配置，返回给H5。");
            return configJson;
        } else {
            loge("ui.js: 从main.js获取配置失败。");
            return null;
        }
    });
    
    // ----------------------------------------------------------------
    // 注册一个函数，供 main.js 调用 (main.js -> ui.js -> H5)
    // ----------------------------------------------------------------
    
    /**
     * main.js 可以调用此函数，来命令H5刷新其界面上的表单。
     * 例如，在后台通过某种方式修改了配置后，可以通知UI同步。
     */
    ui.registeFunctionToScript("uiTriggerFormReset", function() {
        logd("ui.js: 接收到main.js的UI刷新指令，准备执行H5的resetParam()函数。");
        // "main" 是在 ui.layout 中定义的页面标签
        ui.quickCallJs("main", "resetParam();");
        return "true";
    });


    // ----------------------------------------------------------------
    // 加载UI页面
    // ----------------------------------------------------------------
    
    // 加载HTML页面，并给它一个标签"main"
    ui.layout("main", "index.html");
    
    logd("✅ UI脚本初始化完成，已加载index.html，通信桥梁已建立。");
    logd("现在可以从UI上点击【执行脚本】来启动后台监控。");
}

// 运行UI脚本主函数
main(); 