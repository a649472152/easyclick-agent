function UIWrapper() {

}

let ui = new UIWrapper();


/**
 加载一个html文件
 @param name tab标签的名称
 @param content 可以是layout文件夹中的html文件名称
 @return {boolean} true代表成功， false代表失败
 */
UIWrapper.prototype.layout = function (name, content) {
    return uiApi.loadUrl(name, content);
};


/**
 向网页中注入一个JS函数，H5可以调用该函数，以实现脚本和HTML的互通扩展
 @param funcName 注入的函数名称
 @param callback 回调 常见例子
 @return {boolean} true 代表成功，false 代表失败
 */
UIWrapper.prototype.registeH5Function = function (funcName, callback) {
    return uiApi.registeH5Function(funcName, callback);
};

