function UtilsWrapper() {

}


var utils = new UtilsWrapper();


/**
 * 取得某个范围的随机值
 * @param min 最小值
 * @param max 最大值
 * @return {number} 在min和max中间的值, 不包含最大值，但是包含最小值
 */
UtilsWrapper.prototype.getRangeInt = function (min, max) {
    if (utilsWrapper == null) {
        return null;
    }
    return utilsWrapper.getRangeInt(min, max);
};
/**
 * 设置剪贴板文本，注意：可以开启画中画或者 takeMeToFront 使本程序在前台
 * @param text 文本
 * @param type 1 文本 2 链接
 * @return {boolean} true 代表成功，false 代表失败
 */
UtilsWrapper.prototype.setClipboardText = function (text, type) {
    if (utilsWrapper == null) {
        return null;
    }
    return utilsWrapper.setClipboardText(text, type);
};


/**
 * 读取剪贴板文本，注意：可以开启画中画或者takeMeToFront 使本程序在前台
 * @return {null|string}
 */
UtilsWrapper.prototype.getClipboardText = function () {
    if (utilsWrapper == null) {
        return null;
    }
    return javaString2string(utilsWrapper.getClipboardText());
};

/**
 * 打开URL，注意：需要重新在前台运行，先调用 takeMeToFront 函数，将本程序放前台
 * @param url url地址
 * @returns {boolean} true 代表成功 false 代表失败
 */
UtilsWrapper.prototype.openUrl = function (url) {
    if (utilsWrapper == null) {
        return false;
    }
    return utilsWrapper.openUrl(url);
};

/**
 * 保存图片到相册中去
 * @param img AutoImage对象
 * @returns {boolean} true 代表成功，false 代表失败
 */
UtilsWrapper.prototype.saveImageToAlbum = function (img) {
    if (utilsWrapper == null || img == null) {
        return false;
    }
    return utilsWrapper.saveImageToAlbum(img.uuid);
};

/**
 * 通过路径保存图片到相册中去
 * @param path 文件的路径
 * @returns {boolean} true 代表成功，false 代表失败
 */
UtilsWrapper.prototype.saveImageToAlbumPath = function (path) {
    if (utilsWrapper == null || path == null) {
        return false;
    }
    return utilsWrapper.saveImageToAlbumPath(path);
};

/**
 * 通过路径保存视频到相册中去
 * @param path 视频文件的路径
 * @returns {boolean} true 代表成功，false 代表失败
 */
UtilsWrapper.prototype.saveVideoToAlbumPath = function (path) {
    if (utilsWrapper == null || path == null) {
        return false;
    }
    return utilsWrapper.saveVideoToAlbumPath(path);
};


/**
 * 文件的MD5
 * @param file 文件路径
 * @returns {string|null} 文件MD5字符串或者null
 */
UtilsWrapper.prototype.fileMd5 = function (file) {
    if (utilsWrapper == null || file == null) {
        return false;
    }
    return utilsWrapper.fileMd5(file);
};

/**
 * 数据计算出来的MD5
 * 适配 EC 4.10.0+
 * @param  data 数据
 * @returns {string|null} 文件MD5字符串或者null
 */
UtilsWrapper.prototype.dataMd5 = function (data) {
    if (utilsWrapper == null || data == null) {
        return false;
    }
    return utilsWrapper.dataMd5(data);
};


/**
 * base64编码
 * @param data 需要编码的字符串
 * @returns {string|null} 编码结果
 */
UtilsWrapper.prototype.base64Encode = function (data) {
    if (utilsWrapper == null || data == null) {
        return false;
    }
    return utilsWrapper.base64Encode(data);
};

/**
 * base64解码
 * @param data 需要解码的字符串
 * @returns {string|null} 解码结果
 */
UtilsWrapper.prototype.base64Decode = function (data) {
    if (utilsWrapper == null || data == null) {
        return false;
    }
    return utilsWrapper.base64Decode(data);
};

/**
 * 播放MP3音乐,异步播放
 * 支持版本 EC 脱机4.5.0+
 * @param path 文件路径 例如 /var/a.mp3
 * @param loop 是否循环播放 true代表是
 * @return {boolean} true 代表成功 false 代表失败
 */
UtilsWrapper.prototype.playMp3 = function (path, loop) {
    if (utilsWrapper == null || path == null) {
        return false;
    }
    return utilsWrapper.playMp3(path, loop);
};

/**
 * 播放mp3音乐，等待结束
 * 支持版本 EC 脱机4.5.0+
 * @param path 文件路径 例如 /var/a.mp3
 * @param loop 是否循环播放 true代表是
 * @return {boolean} true 代表成功 false 代表失败
 */
UtilsWrapper.prototype.playMp3WaitEnd = function (path, loop) {
    if (utilsWrapper == null || path == null) {
        return false;
    }
    return utilsWrapper.playMp3WaitEnd(path, loop);
};
/**
 * 停止播放mp3音乐
 * 支持版本 EC 脱机4.5.0+
 * @return {boolean} true 代表成功 false 代表失败
 */
UtilsWrapper.prototype.stopMp3 = function () {
    if (utilsWrapper == null) {
        return false;
    }
    return utilsWrapper.stopMp3();
};


/**
 * 请求相册权限
 * 第一次请求会有弹窗权限，请允许，或者去手机设置-拉倒最底部，找到EC app,进入勾选照片权限
 * 注意: 这些都是异步的，防止卡住不能模拟点击，请忽略返回值
 * 支持版本 EC 脱机4.9.0+
 * @return {boolean} true 代表成功 false 代表失败
 */
UtilsWrapper.prototype.requestPhotoAuthorization = function () {
    if (utilsWrapper == null) {
        return false;
    }
    return utilsWrapper.requestPhotoAuthorization();
};

/**
 * 清空相册中的图片
 * 调用时候会有弹窗确定，请模拟点击删除按钮
 * 注意: 这些都是异步的，防止卡住不能模拟点击，请忽略返回值
 * 支持版本 EC 脱机4.9.0+
 * @return {boolean} true 代表成功 false 代表失败
 */
UtilsWrapper.prototype.deleteAllPhotos = function () {
    if (utilsWrapper == null) {
        return false;
    }
    return utilsWrapper.deleteAllPhotos();
};

/**
 * 清空相册中的视频
 * 调用时候会有弹窗确定，请模拟点击删除按钮
 * 注意: 这些都是异步的，防止卡住不能模拟点击，请忽略返回值
 * 支持版本 EC 脱机4.9.0+
 * @return {boolean} true 代表成功 false 代表失败
 */
UtilsWrapper.prototype.deleteAllVideos = function () {
    if (utilsWrapper == null) {
        return false;
    }
    return utilsWrapper.deleteAllVideos();
};

/**
 * 请求通知授权
 * 调用时候会有弹窗确定，请模拟点击删除按钮
 * 注意: 这些都是异步的，防止卡住不能模拟点击，请忽略返回值
 * 支持版本 EC 脱机4.10.0+
 * @return {bool} true 代表成功 false 代表失败
 */
UtilsWrapper.prototype.requestNotificationAuthorization = function () {
    if (utilsWrapper == null) {
        return false;
    }
    return utilsWrapper.requestNotificationAuthorization();
};
/**
 * 清除所有已经显示的通知
 * 调用时候会有弹窗确定，请模拟点击删除按钮
 * 注意: 这些都是异步的，防止卡住不能模拟点击，请忽略返回值
 * 支持版本 EC 脱机4.10.0+
 * @return {boolean} true 代表成功 false 代表失败
 */
UtilsWrapper.prototype.removeAllNotification = function () {
    if (utilsWrapper == null) {
        return false;
    }
    return utilsWrapper.removeAllNotification();
};

/**
 * 显示通知
 * 支持版本 EC 脱机4.10.0+
 * @param title 标题
 * @param content 内容
 * @param delay 延迟执行时间 单位是秒，必须是整形
 * @return {null|string} 一个通知的ID，后面用于取消等操作
 */
UtilsWrapper.prototype.showNotification = function (title, content, delay) {
    if (utilsWrapper == null) {
        return null;
    }
    return utilsWrapper.showNotification(title, content, delay);
};


/**
 * 清除通知
 * 支持版本 EC 脱机4.10.0+
 * 异步函数 请忽略返回值
 * @param id 通知的ID
 * @return {boolean} true 代表成功 false 代表失败
 */
UtilsWrapper.prototype.removeNotification = function (id) {
    if (utilsWrapper == null) {
        return false;
    }
    return utilsWrapper.removeNotification(id);
};


/**
 * 生成一个二维码
 * 适用版本(EC 脱机版本 4.12.0+)
 * @param content 二维码字符串内容
 * @param width 图像宽度
 * @param height 图像高度
 * @param logoImage 图像中心的logo，非必填项，AutoImage 对象，请看image模块
 * @return {null|AutoImage}  保存到文件请看image模块
 */
UtilsWrapper.prototype.createQRCode = function (content, width, height, logoImage) {
    if (utilsWrapper == null) {
        return null;
    }
    let us = ""
    if (logoImage != null && logoImage != undefined) {
        us = logoImage.uuid;
    }
    if (width <= 0) {
        width = 300
    }
    let uuid = utilsWrapper.createQRCode(content, width, height, us);
    if (uuid != null && uuid != undefined && uuid != "" && uuid != " ") {
        return new AutoImage(uuid);
    }
    return null;
};

/**
 * 解析一个二维码
 * 适用版本(EC 脱机版本 4.12.0+)
 * @param img 图像 AutoImage 对象，请看image模块
 * @return {null|string} 解析后的字符串
 */
UtilsWrapper.prototype.decodeQRCode = function (img) {
    if (utilsWrapper == null) {
        return null;
    }
    return utilsWrapper.decodeQRCode(img.uuid);
};


