function OCRWrapper2() {

}

function OcrInst(s) {
    this.udid = s;
}

let ocrMut = new OCRWrapper2();

/**
 * 初始化一个ocr实例
 * @returns {null|OcrInst}
 */
OCRWrapper2.prototype.newOcr = function () {
    let u = ocrWrapper2.newOcr();
    if (u == null) {
        return null;
    }
    return new OcrInst(u);
}
/**
 * 初始化OCR模块
 * @param map map参数表
 * key分别为：
 * type : OCR类型，值分别为 appleVision = ios自带的Vision模块 ocrLite=ncnn神经网络的ocrLite paddleOcrOnline = EC自带的PC端的paddleOcr服务程序<br/>
 * 如果类型是 appleVision, 参数设置为 : {"type":"appleVision","level":"fast","languages":"zh-Hans,en-US"}<Br/>
 * level: fast,代表快速的，accurate:代表精准的<br/>
 * languages: 识别的语言，默认是zh-Hans,en-US中文简体和英文，<br/>
 * 支持的有 ["en-US", "fr-FR", "it-IT", "de-DE", "es-ES", "pt-BR", "zh-Hans", "zh-Hant"]<br/>
 * 如果类型设置是: ocrLite，参数为:<br/>
 *  - 例子{
 *  	"type": "ocrLite",
 *  	"padding": 10,
 *  	"maxSideLen": 0,
 *  	"boxScoreThresh": 0.6,
 *  	"boxThresh": 0.3,
 *  	"unClipRatio": 1.6,
 *  	"doAngle": 0,
 *  	"mostAngle": 0
 *  }<br/>
 *  - padding 图像外接白框，用于提升识别率，文字框没有正确框住所有文字时，增加此值。默认50。<br/>
 *  - maxSideLen 按图像长边进行总体缩放，放大增加识别耗时但精度更高，缩小减小耗时但精度降低，maxSideLen为0表示不缩放。<br/>
 *  - boxScoreThresh 文字框置信度门限，文字框没有正确框住所有文字时，减小此值 <br/>
 *  - boxThresh 同上，自行试验。<br/>
 *  - unClipRatio 单个文字框大小倍率，越大时单个文字框越大。<br/>
 *  - doAngle 启用(1)/禁用(0) 文字方向检测，只有图片倒置的情况下(旋转90~270度的图片)，才需要启用文字方向检测，默认关闭。<br/>
 *  - mostAngle 启用(1)/禁用(0) 角度投票(整张图片以最大可能文字方向来识别)，当禁用文字方向检测时，此项也不起作用，默认关闭。<br/>
 *
 * 如果类型设置为: paddleOcrOnline 请到网盘中下载**EasyClick-PaddleOcr.zip文件解压运行**<br/>
 *  - 例子{
 *  	"type": "paddleOcrOnline",
 *      "ocrType":"ONNX_PPOCR_V3",
 *  	"padding": 50,
 *  	"maxSideLen": 0,
 *  	"boxScoreThresh": 0.5,
 *  	"boxThresh": 0.3,
 *  	"unClipRatio": 1.6,
 *  	"doAngleFlag": 0,
 *  	"mostAngleFlag": 0
 *  }<br/>
 *  - ocrType : 模型 ONNX_PPOCR_V3,ONNX_PPOCR_V4,NCNN_PPOCR_V3
 *  - serverUrl：paddle ocr服务器地址，可以在其他电脑部署，然后中控链接，例如 192.168.2.8:9022，部署在电脑就改ip地址即可，端口是 9022 可以不写
 *  - padding 图像外接白框，用于提升识别率，文字框没有正确框住所有文字时，增加此值。默认50。<br/>
 *  - maxSideLen 按图像长边进行总体缩放，放大增加识别耗时但精度更高，缩小减小耗时但精度降低，maxSideLen为0表示不缩放。<br/>
 *  - boxScoreThresh 文字框置信度门限，文字框没有正确框住所有文字时，减小此值 <br/>
 *  - boxThresh 同上，自行试验。<br/>
 *  - unClipRatio 单个文字框大小倍率，越大时单个文字框越大。<br/>
 *  - doAngleFlag 启用(1)/禁用(0) 文字方向检测，只有图片倒置的情况下(旋转90~270度的图片)，才需要启用文字方向检测，默认关闭。<br/>
 *  - mostAngleFlag 启用(1)/禁用(0) 角度投票(整张图片以最大可能文字方向来识别)，当禁用文字方向检测时，此项也不起作用，默认关闭。<br/>
 *  - limit 代表每1秒执行ocr请求个数 默认1000。可以适当降低减少cpu占用<br/>
 *  - checkImage 检查数据是否是图像(1是 0否)默认关闭。<br/>
 * @return {bool} 布尔型 成功或者失败
 * @param map
 * @returns {boolean}
 */
OcrInst.prototype.initOcr = function (map) {
    if (map == null) {
        return false;
    }
    let ocrType = map["type"];
    if (ocrType == null || ocrType == undefined || ocrType == "") {
        return false;
    }
    return ocrWrapper2.setInitOcr(this.udid, ocrType, JSON.stringify(map));
};


/**
 * 设置OCR实现方式
 * @param type 值分别为 tess = ocrLite = ocrLite 模块
 * @return {boolean} 成功或者失败
 */
OcrInst.prototype.setOcrType = function (type) {
    return ocrWrapper2.setOcrType(type);
};


/**
 * 释放OCR占用的资源
 * @return {boolean} 成功或者失败
 */
OcrInst.prototype.releaseAll = function () {
    return ocrWrapper2.releaseAll(this.udid);
};
/**
 * 获取错误消息
 * @return {null|string} null代表没有错误
 */
OcrInst.prototype.getErrorMsg = function () {
    return ocrWrapper2.getErrorMsg(this.udid);
};


/**
 * 对图片进行进行OCR，返回的是JSON数据，其中数据类似于与：
 * [{
 *    "label": "奇趣装扮三阶盘化",
 *    "confidence": 0.48334712,
 *    "x": 11,
 *    "y": 25,
 *    "width": 100,
 *    "height": 100
 * }]
 *  <br/>
 *  label: 代表是识别的文字
 *  confidence：代表识别的准确度
 *  x: 代表X开始坐标
 *  Y: 代表Y开始坐标
 *  width: 代表宽度
 *  height: 代表高度
 * @param img 图片
 * @param timeout 超时时间 单位毫秒
 * @param extra 扩展参数，map形式，例如 {"token":"xxx"}
 * @return {null|JSON} JSON对象
 */
OcrInst.prototype.ocrImage = function (img, timeout, extra) {
    if (img == null) {
        return null;
    }
    let d = ocrWrapper2.ocrImage(this.udid, img.uuid, timeout, JSON.stringify(extra));
    if (d != null && d != "") {
        try {
            let r = JSON.parse(d);
            try {
                // 兼容paddleocr返回的结果
                let data = r["data"];
                if (data != null && data != undefined) {
                    return data;
                }
            } catch (ee) {
                return r;
            }
            try {
                // 可能是错误的信息
                let data = r["_links"];
                if (data != null && data != undefined) {
                    return null;
                }
            } catch (ee) {
                return r;
            }

            return r;
        } catch (e) {
        }
    }
    return null;
};
