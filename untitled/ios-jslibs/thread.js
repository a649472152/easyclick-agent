function ThreadWrapper() {

}

/**
 * 子线程包装类
 * @param name 线程名称
 * @constructor
 */
function ThreadClient(name) {
    if (name == null || name == undefined || name == "") {
        name = generateRandomString(16);
    }
    this.name = name;
    threadWrapper.createThread(this.name)
}

/**
 * 取消线程的执行
 * @return {boolean} true代表已经取消了，false表示未取消
 */
ThreadClient.prototype.isCancelled = function () {
    if (threadWrapper == null) {
        return true;
    }
    return threadWrapper.isCancelled(this.name);
}
/**
 * 取消线程的执行
 */
ThreadClient.prototype.cancel = function () {
    if (threadWrapper == null) {
        return;
    }
    threadWrapper.cancelThread(this.name);
}
/**
 * 增加一个回调函数
 * 用于子线程和当前线程数据互通
 * @param funcName 函数名称
 * @param funcBody 匿名函数
 * @returns {*|boolean}
 */
ThreadClient.prototype.addCallback = function (funcName, funcBody) {
    if (threadWrapper == null) {
        return true;
    }
    return threadWrapper.addCallback(this.name, funcName, funcBody);
}
/**
 * 执行代码块
 * @param func 代码块
 * @returns {ThreadClient} 当前的线程对象
 */
ThreadClient.prototype.execAsync = function (func) {
    if (threadWrapper == null) {
        return this;
    }
    threadWrapper.execAsync(this.name, func);
    return this;
}

/**
 * 开启异步线程执行js代码字符串
 * @param funcStr 代码字符串
 * @returns {ThreadClient}
 */
ThreadClient.prototype.execAsyncStr = function (funcStr) {
    if (threadWrapper == null) {
        return this;
    }
    threadWrapper.execAsyncStr(this.name, funcStr);
    return this;
}

let thread = new ThreadWrapper();

/**
 * 创建一个新的线程封装类
 * @param name 线程名称，不填写会自动生成随机数
 * @returns {ThreadClient|null}
 */
ThreadWrapper.prototype.newThread = function (name) {
    if (threadWrapper == null) {
        return null;
    }
    if (name == null || name == undefined || name == "") {
        name = generateRandomString(16);
    }
    return new ThreadClient(name);
};


/**
 * 调用 addCallback 设置的函数 ，通过funcName先找到，然后进行调用
 * @param funcName 回调函数名称
 * @param data 回调数据
 * @return {*} 函数返回的数据
 */
ThreadWrapper.prototype.invokeCallback = function (funcName, data) {
    if (threadWrapper == null) {
        return;
    }
    // 获取当前线程的名称
    let name = this.currentThreadName();
    return threadWrapper.invokeCallback(name, funcName, data);
};


/**
 * 取消所有正在运行的线程
 */
ThreadWrapper.prototype.stopAll = function () {
    if (threadWrapper == null) {
        return;
    }
    threadWrapper.stopAll();
};


/**
 * 线程是否取消了
 * @param name 线程名称
 * @return {boolean} true代表已经取消了，false表示未取消
 */
ThreadWrapper.prototype.isCancelled = function (name) {
    if (threadWrapper == null) {
        return true;
    }
    return threadWrapper.isCancelled(name);
}

/**
 * 取消线程执行
 * @param name 线程名称
 */
ThreadWrapper.prototype.cancelThread = function (name) {
    if (threadWrapper == null) {
        return;
    }
    threadWrapper.cancelThread(name);
}


/**
 * 增加一个回调函数
 * 用于子线程和当前线程数据互通
 * @param name 线程名称
 * @param funcName 函数名称
 * @param funcBody 匿名函数
 * @returns {*|boolean}
 */
ThreadWrapper.prototype.addCallback = function (name, funcName, funcBody) {
    if (threadWrapper == null) {
        return true;
    }
    return threadWrapper.addCallback(name, funcName, funcBody);
}
/**
 * 当前线程的名称
 * @returns {*|string}
 */
ThreadWrapper.prototype.currentThreadName = function () {
    if (threadWrapper == null) {
        return "";
    }
    return threadWrapper.currentThreadName();
}

/**
 * 异步执行代码块
 * 这个是封装好的，直接使用即可
 * @param name 线程名称
 * @param func 代码块
 * @param callbackName 回调的函数名称
 * @param callbackFunc 回调 函数
 * @returns {string} 返回的线程名称
 */
ThreadWrapper.prototype.execCodeAsync = function (name, func, callbackName, callbackFunc) {
    if (name == null || name == undefined || name == "") {
        name = generateRandomString(16);
    }
    let th = this.newThread(name)
    th.addCallback(callbackName, callbackFunc);
    th.execAsync(func);
    return name;
}
