function WorkerWrapper() {

}

var workerThread = new WorkerWrapper();


/**
 * 新增一个worker
 * @param name worker的名称
 * @return {null|string} worker的名称
 */
WorkerWrapper.prototype.newWorker = function (name) {
    if (workerWrapper == null) {
        return null;
    }
    return workerWrapper.newWorker(name);
};

/**
 * 这个worker是否正在运行
 * @param name worker 名称
 * @returns {boolean} true 代表正在运行，false 代表没运行
 */
WorkerWrapper.prototype.isRunning = function (name) {
    if (workerWrapper == null) {
        return false;
    }
    return workerWrapper.isRunning(name);
};

/**
 * 是否有worker函数
 * @param funcName 函数名称
 * @returns {boolean} true代表有 false代表无
 */
WorkerWrapper.prototype.hasWorkerFunction = function (funcName) {
    if (workerWrapper == null) {
        return false;
    }
    return workerWrapper.hasWorkerFunction(funcName);
};

/**
 * 新增一个工作函数给别的worker调用
 * @param funcName 函数名称
 * @param callback 实际的实现，建议参数和返回值都是字符串
 * @return {boolean} true 代表成功 false代表失败
 */
WorkerWrapper.prototype.addWorkerFunction = function (funcName, callback) {
    if (workerWrapper == null) {
        return false
    }
    return workerWrapper.addWorkerFunction(funcName, callback);
};

/**
 * 是否存在worker
 * @param name worker 名称
 * @returns {boolean} true 代表正在运行，false 代表没运行
 */
WorkerWrapper.prototype.hasWorker = function (name) {
    if (workerWrapper == null) {
        return false;
    }
    return workerWrapper.hasWorker(name);
};


/**
 * 删除一个工作函数
 * @param funcName 函数名称
 * @returns {boolean} true代表成功 ，false 代表失败
 */
WorkerWrapper.prototype.removeWorkerFunction = function (funcName) {
    if (workerWrapper == null) {
        return false
    }
    return workerWrapper.removeWorkerFunction(funcName);
};

/**
 * 调用别的worker注册的函数，建议参数是字符串
 * @param funcName 函数名称
 * @param data 参数，建议字符串
 * @returns {null|*} 返回函数返回的对象
 */
WorkerWrapper.prototype.callWorkerFunction = function (funcName, data) {
    if (workerWrapper == null) {
        return false
    }
    return workerWrapper.callWorkerFunction(funcName, data);
};


/**
 * 取消 worker
 * @param name worker的名称
 * @return {boolean} true 代表成功 false 代表失败
 */
WorkerWrapper.prototype.removeWorker = function (name) {
    if (workerWrapper == null) {
        return null;
    }
    return workerWrapper.removeWorker(name);
};


/**
 * 是否取消 worker 的执行
 * @param name worker的名称
 * @return {boolean} true代表已经取消了，false表示未取消
 */
WorkerWrapper.prototype.isCancelled = function (name) {
    if (workerWrapper == null) {
        return true;
    }
    return workerWrapper.isCancelled(name);
};

/**
 * 取消所有正在运行的worker,但是无法取消主脚本线程
 * @return {boolean} true代表已经成功，false表示失败
 */
WorkerWrapper.prototype.stopAll = function () {
    if (workerWrapper == null) {
        return;
    }
    return workerWrapper.stopAll();
};


