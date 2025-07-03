function HttpWrapper() {

}

var http = new HttpWrapper();
/**
 * 下载远程文件到本地,不支持断点续传
 * @param remoteUrl 远程文件URL
 * @param file      要保存到本地的文件对象
 * @param timeout   下载超时，单位是毫秒
 * @param headers    头标志例如{"a":"11"}
 * @return {boolean} true 代表成功 false代表失败
 */
HttpWrapper.prototype.downloadFile = function (remoteUrl, file, timeout, headers) {
    if (httpWrapper == null) {
        return null;
    }
    return httpWrapper.downloadFile(remoteUrl, file, timeout, object2JsonString(headers));
};
/**
 * 下载远程文件到本地,支持断点续传
 * 适配EC iOS脱机版本3.2.0+
 * @param remoteUrl 远程文件URL
 * @param file      要保存到本地的文件对象
 * @param timeout   下载超时，单位是毫秒
 * @param headers    头标志例如{"a":"11"}
 * @return {boolean} true 代表成功 false代表失败
 */
HttpWrapper.prototype.downloadFile2 = function (remoteUrl, file, timeout, headers) {
    if (httpWrapper == null) {
        return null;
    }
    return httpWrapper.downloadFile2(remoteUrl, file, timeout, object2JsonString(headers));
};

/**
 * Http GET 请求
 * @param url     请求的URL
 * @param params  参数Map表 例如 {"a":"1"} 这样的参数或者字符串
 * @param timeout 超时时间 单位毫秒
 * @param headers    头标志例如{"a":"11"}
 * @return {null|string} 请求后返回的字符串
 */
HttpWrapper.prototype.httpGet = function (url, params, timeout, headers) {
    if (httpWrapper == null) {
        return null;
    }
    let x = httpWrapper.httpGet(url, object2JsonString(params), timeout, object2JsonString(headers));
    return javaString2string(x);

};

/**
 * Http POST 请求
 * @param url     请求的URL
 * @param params  参数，例如 {"a":"1"} 这样的参数或者字符串
 * @param files 要上传的文件，例如 {"file1":"/sdcard/a.txt"}
 * @param timeout 超时时间 单位毫秒
 * @param headers    头标志例如{"a":"11"}
 * @return {null|string} 请求后返回的字符串
 */
HttpWrapper.prototype.httpPost = function (url, params, files, timeout, headers) {
    if (httpWrapper == null) {
        return null;
    }
    var x = httpWrapper.httpPost(url, object2JsonString(params), object2JsonString(files), timeout, object2JsonString(headers));
    return javaString2string(x);
};

/**
 *
 * 获取局域网的IP，包含IPV4和IPV6
 * 适配EC 4.6.0+
 * @return {null|string} JSON string
 */
HttpWrapper.prototype.getLanIp = function () {
    var x = httpWrapper.getLanIp();
    return javaString2string(x);
}


/**
 * HTTP POST JSON数据
 * @param url  请求的URL
 * @param json json数据
 * @param timeout 超时时间 单位毫秒
 * @param headers    头标志例如{"a":"11"}
 * @return {null|string} 请求后返回的字符串
 */
HttpWrapper.prototype.postJSON = function (url, json, timeout, headers) {
    if (httpWrapper == null) {
        return null;
    }
    let x = httpWrapper.postJSON(url, object2JsonString(json), timeout, object2JsonString(headers));
    return javaString2string(x);
};


/**
 * HTTP 请求
 * 运行环境: 无限制
 * @param param  map参数，包含的参数有<Br/>
 * url:字符串 请求的地址<Br/>
 * timeout:整型毫秒，超时时间<Br/>
 * method: POST ,GET,PUT 字符串，代表请求的方法<Br/>
 * followRedirects:是否自动跳转 true 或者 false<Br/>
 * requestBody: 请求的body体，如果是JSON，就是JSON字符串<Br/>
 * userAgent:字符串 HTTP 的UA <Br/>
 * header:  HTTP 请求头，map参数,例如 {"UA":"test"} <Br/>
 * cookie: HTTP 请求Cookie，map参数, 例如 {"a":1} <Br/>
 * data: HTTP POST 的数据，map参数, 例如 {"a":1} <Br/>
 * file:要上传的文件，例如<Br/>
 *                     {"file1":"/sdcard/a.txt"}
 *                     <Br/>
 *                  其中contentType可有可无
 * responseCharset: 字符串，强制设置响应内容的编码集
 * @return {null|Response1} 对象或者null
 */
HttpWrapper.prototype.request = function (param) {
    if (httpWrapper == null || param == null) {
        return null;
    }
    return this.requestEx(param);
};
/**
 *
 * @param param
 * @return {Response1|null}
 */
HttpWrapper.prototype.requestEx = function (param) {
    if (httpWrapper == null || param == null) {
        return null;
    }
    let p = JSON.stringify(param);
    let x = httpWrapper.requestEx(p);
    if (x == null || x == undefined || x == "") {
        return null;
    }
    try {
        return new Response1(JSON.parse(x));
    } catch (e) {
    }
    return null;

};

function Response1(data) {
    this.cookie = {};
    this.header = {};
    this.charset = "";
    this.statusMessage = "";
    this.contentType = "";
    this.statusCode = 0;
    this.body = "";
    if (data != null) {
        this.cookie = data["cookie"];
        this.header = data["header"];
        this.charset = data["charset"];
        this.statusMessage = data["statusMessage"];
        this.contentType = data["contentType"];
        this.statusCode = data["statusCode"];
        this.body = data["body"];
    }
}


/**
 * 创建一个websocket
 * @param url 要连接的地址
 * @param header 参数头
 * @return {null|WebSocket} WebSocket对象
 */
HttpWrapper.prototype.newWebsocket = function (url, header) {
    let p = null;
    if (header == null || header == undefined) {
        header = {}
    }
    if (header != null) {
        p = JSON.stringify(header);
    }
    let ws = httpWrapper.newWebsocket(url, p);
    return new WebSocket1(ws);
};



function WebSocket1(ws) {
    this.websocketClient = ws;
}

/**
 * 开始异步连接
 * @return {boolean} true 代表开始链接 false 代表没有开始
 */
WebSocket1.prototype.connect = function () {
    if (this.websocketClient != null) {
        return this.websocketClient.connect();
    }
    return false;
};


/**
 * 重置连接
 * @return {boolean} true 代表成功 false 代表失败
 */
WebSocket1.prototype.reset = function () {
    if (this.websocketClient != null) {
        return this.websocketClient.reset();
    }
    return false;
};


/**
 * 是否已经关闭
 * @return {boolean} true 代表已经关闭，false 未关闭
 */
WebSocket1.prototype.isClosed = function () {
    if (this.websocketClient != null) {
        return this.websocketClient.isClosed();
    }
    return true;
};


/**
 * 是否已经连接了
 * @return {boolean} true 代表已经连接，false 未连接
 */
WebSocket1.prototype.isConnected = function () {
    if (this.websocketClient != null) {
        return this.websocketClient.isConnected();
    }
    return false;
};


/**
 * 关闭链接
 */
WebSocket1.prototype.close = function () {
    this.websocketClient.close();
};

/**
 * 设置自动重连
 * @param v true 代表自动重连
 */
WebSocket1.prototype.setAutoReconnect = function (v) {
    this.websocketClient.setAutoReconnect(v);
};

/**
 * 链接成功后会发送固定的心跳指令
 * @param timeInterval 时间周期 单位是秒，
 * @param callback 回调函数，提供心跳数据的函数
 */
WebSocket1.prototype.startHeartbeatInterval = function (timeInterval, callback) {
    this.websocketClient.startHeartbeatInterval(timeInterval, callback);
};

/**
 * 停止固定的心跳计时器
 */
WebSocket1.prototype.stopHeartbeatInterval = function () {
    this.websocketClient.stopHeartbeatInterval();
};


/**
 * 在创建websocket时候使用
 * 设置数据写入超时时间
 * @param timeout 单位是秒
 */
WebSocket1.prototype.setWriteTimeout = function (timeout) {
    this.websocketClient.setWriteTimeout(timeout);
};

/**
 * 在创建websocket链接时候使用
 * 设置链接超时时间
 * @param timeout 单位是秒
 */
WebSocket1.prototype.setConnectionTimeout = function (timeout) {
    this.websocketClient.setConnectionTimeout(timeout);
};

/**
 * 在创建websocket时候使用[暂时无用]
 * 设置心跳超时时间
 * @param timeout 单位是秒
 */
WebSocket1.prototype.setPingInterval = function (timeout) {
    this.websocketClient.setPingInterval(timeout);
};


/**
 * 发送文本消息
 * @param text 文本信息
 * @return {boolean} true 代表成功，false 失败
 */
WebSocket1.prototype.sendText = function (text) {
    return this.websocketClient.sendText(text);
};
/**
 * 发送字节信息
 * @param bin
 * @return {boolean} true 代表成功，false 失败
 */
WebSocket1.prototype.sendBinary = function (bin) {
    return this.websocketClient.sendBinary(bin);
};

/**
 * 当连接打开的时候事件回调
 * @param callback 回调函数
 */
WebSocket1.prototype.onOpen = function (callback) {
    this.websocketClient.setCallbackOnOpen(callback);
};
/**
 * 当有文本信息发送过来的时候回调
 * @param callback 回调函数
 */
WebSocket1.prototype.onText = function (callback) {
    this.websocketClient.setCallbackOnText(callback);
};
/**
 * 当关闭的时候回调
 * @param callback 回调函数
 */
WebSocket1.prototype.onClose = function (callback) {
    this.websocketClient.setCallbackOnClose(callback);
};
/**
 * 当发生错误的时候回调
 * @param callback 回调函数
 */
WebSocket1.prototype.onError = function (callback) {
    this.websocketClient.setCallbackOnError(callback);
};
/**
 * 当有二进制数据过来的时候回调
 * @param callback 回调函数
 */
WebSocket1.prototype.onBinary = function (callback) {
    this.websocketClient.setCallbackOnBinary(callback);
};




