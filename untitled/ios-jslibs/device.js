function DeviceWrapper() {

}

var device = new DeviceWrapper();


/**
 * 获取屏幕方向
 * @return {null|string} 1 竖屏 2 横屏，其他未知
 */
DeviceWrapper.prototype.getOrientation = function () {
    if (deviceWrapper == null) {
        return "";
    }
    return deviceWrapper.getOrientation();
};

/**
 * 设置屏幕方向，横屏只支持向右旋转90度
 * @param orz orientation 1 正常的竖屏，2 向右旋转90度(顺时针)
 * @return {boolean}
 */
DeviceWrapper.prototype.setOrientation = function (orz) {
    if (deviceWrapper == null) {
        return false;
    }
    return deviceWrapper.setOrientation(orz + "");
};


/**
 * 取得屏幕宽度,高度字符串，需要自己做分割
 *
 * @return {null|string} 宽度,高度这样格式
 */
DeviceWrapper.prototype.getScreenWidthHeight = function () {
    if (deviceWrapper == null) {
        return null;
    }
    let dd = deviceWrapper.getScreenWidthHeight();
    if (dd == null || dd == "") {
        return null;
    }
    return dd
};

/**
 * [过期]有临界值问题，建议用device.getScreenWidthHeight
 * 取得屏幕宽度
 *
 * @return {number}
 */
DeviceWrapper.prototype.getScreenWidth = function () {
    if (deviceWrapper == null) {
        return 0;
    }
    return deviceWrapper.getScreenWidth();
};

/**
 * [过期]有临界值问题，建议用device.getScreenWidthHeight
 * 取得屏幕高度
 * @return {number}
 */
DeviceWrapper.prototype.getScreenHeight = function () {
    if (deviceWrapper == null) {
        return 0;
    }
    return deviceWrapper.getScreenHeight();
};

/**
 * 获取设备号，这里获取的是通过脱机版激活器传递的设备号
 * 支持EC iOS脱机版本2.0+
 * @return {null|string}
 */
DeviceWrapper.prototype.getDeviceId = function () {
    if (deviceWrapper == null) {
        return null;
    }
    return javaString2string(deviceWrapper.getDeviceId());
};
/**
 * 获取ECID，这里获取的是通过脱机版激活器传递的设备号
 * 支持EC iOS脱机版本2.0+
 * @return {null|string}
 */
DeviceWrapper.prototype.getEcid = function () {
    if (deviceWrapper == null) {
        return null;
    }
    return javaString2string(deviceWrapper.getEcid());
};
/**
 * 获取序列号，这里获取的是通过脱机版激活器传递的序列号
 * 支持EC iOS脱机版本2.0+
 * @return {null|string}
 */
DeviceWrapper.prototype.getSerialNo = function () {
    if (deviceWrapper == null) {
        return null;
    }
    return javaString2string(deviceWrapper.getSerialNo());
};


/**
 * 获取iPhone设备的名称
 * 注意: 高于16+的iOS系统获取的都是iPhone字符串，苹果的规则
 * @return {null|string}
 */
DeviceWrapper.prototype.getDeviceName = function () {
    if (deviceWrapper == null) {
        return null;
    }
    return javaString2string(deviceWrapper.getDeviceName());
};

/**
 * 获取iphone的名称，这里获取的是通过脱机版激活器传递的设备名称
 * 支持EC iOS脱机版本2.0+
 * @return {null|string}
 */
DeviceWrapper.prototype.getDeviceName2 = function () {
    if (deviceWrapper == null) {
        return null;
    }
    return javaString2string(deviceWrapper.getDeviceName2());
};

/**
 * 获取屏幕缩放比
 * @return {number}
 */
DeviceWrapper.prototype.getScale = function () {
    if (deviceWrapper == null) {
        return;
    }
    return deviceWrapper.getScale();
};


/**
 * 取得手机机型
 * @return {null|string}
 */
DeviceWrapper.prototype.getModel = function () {
    if (deviceWrapper == null) {
        return;
    }
    return javaString2string(deviceWrapper.getModel());
};

/**
 * 取得手机版本号,例如 6.0等字符串
 * @return {null|string}
 */
DeviceWrapper.prototype.getOSVersion = function () {
    if (deviceWrapper == null) {
        return;
    }
    return javaString2string(deviceWrapper.getOSVersion());
};


/**
 * 取得电量
 * @return {number} 1 - 100
 */
DeviceWrapper.prototype.getBattery = function () {
    if (deviceWrapper == null) {
        return;
    }
    return deviceWrapper.getBattery();
};


/**
 * 是否正在充电
 * @return {boolean} true 充电  false 不充电
 */
DeviceWrapper.prototype.isCharging = function () {
    if (deviceWrapper == null) {
        return;
    }
    return deviceWrapper.isCharging();
};




