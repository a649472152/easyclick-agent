function PluginLoaderWrapper() {

}

let pluginLoader = new PluginLoaderWrapper();


/**
 * 载入一个插件
 * 适配EC iOS 4.2.0+
 * @param pluginName 插件名称 名称
 * @return {boolean} true 代表成功，false 代表失败
 */
PluginLoaderWrapper.prototype.loadPlugin = function (pluginName) {
    return pluginLoaderWrapper.loadPlugin(pluginName)
};

/**
 * 载入一个类实例
 * 适配EC iOS 4.2.0+
 * @param pluginName 插件名称
 * @param clzName 类名称
 * @return {null|string} 返回的字符串如果是null或者是空 代表成功，其他的代表错误信息
 */
PluginLoaderWrapper.prototype.makeInstance = function (pluginName, clzName) {
    return pluginLoaderWrapper.makeInstance(pluginName, clzName)
};

/**
 * 获取一个插件中实例化的类
 * 适配EC iOS 4.2.0+
 * @param pluginName 插件名称
 * @param clzName 类名称
 * @return {null|ECPlugin} 对象
 */
PluginLoaderWrapper.prototype.getInstance = function (pluginName, clzName) {
    return pluginLoaderWrapper.getInstance(pluginName, clzName)
};

/**
 * 调用插件实例函数返回字符串
 * 适配EC iOS 4.2.0+
 * @param pluginName 插件名称
 * @param clzName 类名称
 * @param methodName 函数名称 字符串
 * @param args 参数字符串
 * @return {null|string} 字符串对象
 */
PluginLoaderWrapper.prototype.callMethodStr = function (pluginName, clzName, methodName, args) {
    return pluginLoaderWrapper.callMethodStr(pluginName, clzName, methodName, args)
};


/**
 * 调用实例函数返回字符串
 * 适配EC iOS 4.2.0+
 * @param pluginName 插件名称
 * @param clzName 类名称
 * @param methodName 函数名称 字符串
 * @param data swift语言中Data对象，相当于字节数组
 * @return {null|string} 字符串对象
 */
PluginLoaderWrapper.prototype.callMethodData = function (pluginName, clzName, methodName, data) {
    return pluginLoaderWrapper.callMethodData(pluginName, clzName, methodName, data)
};


/**
 * 调用插件实例函数
 * 适配EC iOS 4.2.0+
 * @param pluginName 插件名称
 * @param clzName 类名称
 * @param methodName 函数名称 字符串
 * @param args 参数字符串
 * @return {null|Data} swift语言中Data对象，相当于字节数组
 */
PluginLoaderWrapper.prototype.callMethodReturnData = function (pluginName, clzName, methodName, args) {
    return pluginLoaderWrapper.callMethodReturnData(pluginName, clzName, methodName, args)
};

/**
 * 调用插件函数参数返回值都是Any
 * 适配EC iOS 4.2.0+
 * @param pluginName 插件名称
 * @param clzName 类名称
 * @param methodName 函数名称 字符串
 * @param data 任意类型的参数
 * @return {null|*} swift语言中 Any 对象，js中的任意类型
 */
PluginLoaderWrapper.prototype.callMethodAny = function (pluginName, clzName, methodName, data) {
    return pluginLoaderWrapper.callMethodAny(pluginName, clzName, methodName, data)
};


/**
 * 读取插件的文件
 * 适配EC iOS 4.2.0+
 * @param pluginName 插件名称
 * @param key 文件名称，不含有后缀
 * @param ext 文件后缀，不要加.
 * @return {null|string} 文件的字符串内容
 */
PluginLoaderWrapper.prototype.readBundleFile = function (pluginName, key, ext) {
    return pluginLoaderWrapper.readBundleFile(pluginName, key, ext)
};

/**
 * 复制插件的文件到某个路径
 * 适配EC iOS 4.2.0+
 * @param pluginName 插件名称
 * @param key 文件名称，不含有后缀
 * @param ext 文件后缀，不要加.
 * @param dest 目标文件地址
 * @return {boolean} true代表成功
 */
PluginLoaderWrapper.prototype.copyBundleFile = function (pluginName, key, ext, dest) {
    return pluginLoaderWrapper.copyBundleFile(pluginName, key, ext, dest)
};

/**
 * 获取错误信息
 * @return {null|string} 有字符串代表有错误信息
 */
PluginLoaderWrapper.prototype.getErrorMsg = function () {
    return pluginLoaderWrapper.getErrorMsg()
};



