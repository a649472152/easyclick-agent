function TjCenterWrapper() {

}

var tjCenter = new TjCenterWrapper();

/**
 * 设置脱机激活器所在的地址
 * 支持EC iOS脱机版本2.0+
 * @param url 激活器地址
 * @return {null|string} null或者"" 代表成功，其他代表错误消息
 */
TjCenterWrapper.prototype.setCenterUrl = function (url) {
    if (tjCenterWrapper == null) {
        return "错误";
    }
    let data = tjCenterWrapper.setCenterUrl(url);
    return this.parseData(data)
};


/**
 * 通过脱机激活器启动app
 * 支持EC iOS脱机版本2.0+
 * @param deviceId 设备ID
 * @param bundleId 包名
 * @param killExist 杀死已存在的进程
 * @return {null|string} null或者"" 代表成功，其他代表错误消息
 */
TjCenterWrapper.prototype.appLaunch = function (deviceId, bundleId, killExist) {
    if (tjCenterWrapper == null) {
        return "错误";
    }
    let data = tjCenterWrapper.appLaunch(deviceId, bundleId, killExist);
    return this.parseData(data)
};

/**
 * 通过脱机激活器启杀死app
 * 支持EC iOS脱机版本2.0+
 * @param deviceId 设备ID
 * @param bundleId 包名
 * @return {null|string} null或者"" 代表成功，其他代表错误消息
 */
TjCenterWrapper.prototype.appKillByBundleId = function (deviceId, bundleId) {
    if (tjCenterWrapper == null) {
        return "错误";
    }
    let data = tjCenterWrapper.appKillByBundleId(deviceId, bundleId);
    return this.parseData(data)
};

/**
 * 通过脱机激活器启杀死app(另外一种实现方式)
 * 支持EC iOS脱机版本2.0+
 * @param deviceId 设备ID
 * @param bundleId 包名
 * @return {null|string} null或者"" 代表成功，其他代表错误消息
 */
TjCenterWrapper.prototype.stopApp = function (deviceId, bundleId) {
    if (tjCenterWrapper == null) {
        return "错误";
    }
    let data = tjCenterWrapper.stopApp(deviceId, bundleId);
    return this.parseData(data)
};


/**
 * 通过脱机激活器 刷入开发者镜像
 * 支持EC iOS脱机版本2.0+
 * @param deviceId 设备ID
 * @return {null|string} null或者"" 代表成功，其他代表错误消息
 */
TjCenterWrapper.prototype.flushDevImage = function (deviceId) {
    if (tjCenterWrapper == null) {
        return "错误";
    }
    let data = tjCenterWrapper.flushDevImage(deviceId);
    return this.parseData(data)
};

/**
 * 通过脱机激活器 开启agent程序
 * 前提是需要在激活器的网页上面设置好代理程序bundleId
 * 支持EC iOS脱机版本2.0+
 * @param deviceId 设备ID
 * @return {null|string} null或者"" 代表成功，其他代表错误消息
 */
TjCenterWrapper.prototype.startAgent = function (deviceId) {
    if (tjCenterWrapper == null) {
        return "错误";
    }
    let data = tjCenterWrapper.startAgent(deviceId);
    return this.parseData(data)
};

/**
 *
 * @param data
 * @return {string|null}
 */
TjCenterWrapper.prototype.parseData = function (data) {
    try {
        let j = JSON.parse(data)
        if (j["code"] != 0) {
            return j["data"]
        }
        return "";
    } catch (e) {
        return data
    }
}

/**
 * 通过脱机激活器 初始化设备
 * 前提是需要在激活器的网页上面设置好主程序bundleId
 * 该操作会杀死当前主程序进程后重启
 * 支持EC iOS脱机版本2.0+
 * @param deviceId 设备ID
 * @return {null|string} null或者"" 代表成功，其他代表错误消息
 */
TjCenterWrapper.prototype.authInit = function (deviceId) {
    if (tjCenterWrapper == null) {
        return "错误";
    }
    let data = tjCenterWrapper.authInit(deviceId);
    return this.parseData(data)
};


/**
 * 开启或者关闭 WIFI链接电脑
 * 支持EC iOS脱机版本2.0+
 * @param deviceId 设备ID
 * @param status 1 开启 2关闭
 * @return {null|string} null或者"" 代表成功，其他代表错误消息
 */
TjCenterWrapper.prototype.setWifiCon = function (deviceId, status) {
    if (tjCenterWrapper == null) {
        return "错误";
    }
    let data = tjCenterWrapper.openWifiCon(deviceId, status + "");
    return this.parseData(data)
};
