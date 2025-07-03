function PointIndex(javaPoint) {
    this.x = 0;
    this.y = 0;
    this.index = -1;
    if (javaPoint != null) {
        this.x = javaPoint["x"];
        this.y = javaPoint["y"];
        this.index = javaPoint["index"];
    }
}

PointIndex.get = function () {
    return new PointIndex(null);
};
PointIndex.jsonToObject = function (res) {
    if (res == null || res == "") {
        return null;
    }
    res = JSON.parse(res);
    if (res == null) {
        return null;
    }
    return new Point(res);
};
PointIndex.prototype.setX = function (x) {
    this.x = x;
    return this;
};
PointIndex.prototype.setY = function (y) {
    this.y = y;
    return this;
};
PointIndex.prototype.setIndex = function (index) {
    this.index = index;
    return this;
};
PointIndex.prototype.toJSONString = function () {
    return JSON.stringify(this);
};

function AutoImage(uuid) {
    if (uuid == null || uuid == undefined) {

    } else {
        this.uuid = uuid + "";
    }
    this.mat = false;
    if (uuid != null && uuid != undefined) {
        this.mat = uuid.indexOf("-mat") != -1;
    }
}

AutoImage.prototype.toString = function () {
    return JSON.stringify({"uuid": this.uuid, "mat": this.mat, "aiobj": true});
};

function ImageWrapper() {

}

let image = new ImageWrapper();
/**
 * 设置图色模块初始化参数，可用于多分辨率兼容
 * @param param
 */
ImageWrapper.prototype.setInitParam = function (param) {
    if (imageWrapper == null) {
        return;
    }
    imageWrapper.setInitParam(JSON.stringify(param));
};


ImageWrapper.prototype.readResJSONFile = function (jsonFileName) {
    if (_isNull(jsonFileName)) {
        return null;
    }
    if (!jsonFileName.endsWith(".json")) {
        jsonFileName = jsonFileName + ".json";
    }
    let data = readResString(jsonFileName);
    if (data == null || data == "") {
        return null;
    }
    try {
        return JSON.parse(data + "")
    } catch (e) {

    }
    return null;
}

/**
 * 切换图片存储模式为opencv的mat格式
 * 适合EC iOS 4.6.0+
 * 切换后抓图、读取图片、找图、找色等都会切换到mat格式，速度更快内存更少
 * 如果让图片格式切换请参考 imageToMatFormat 和 matToImageFormat 两个函数
 * @param use 1 是 0 否
 * @return {boolean}  true 成功 false 失败
 */
ImageWrapper.prototype.useOpencvMat = function (use) {
    if (imageWrapper == null) {
        return false;
    }
    return imageWrapper.useOpencvMat(use);
};
/**
 * 将mat存储的数据转为普通UIimage格式存储
 * 适合EC iOS 4.6.0+
 * @param img autimage对象
 * @returns {AutoImage|null}
 */
ImageWrapper.prototype.matToImageFormat = function (img) {
    if (imageWrapper == null) {
        return null;
    }
    let uuid = imageWrapper.matToImageFormat(img.uuid);
    if (uuid != null && uuid != undefined && uuid != "" && uuid != " ") {
        return new AutoImage(uuid);
    }
    return null;
};
/**
 * 将普通UIimage格式转为mat存储的数据
 * 适合EC iOS 4.6.0+
 * @param img autimage对象
 * @returns {AutoImage|null} Mat格式存储的对象
 */
ImageWrapper.prototype.imageToMatFormat = function (img) {
    if (imageWrapper == null) {
        return null;
    }
    let uuid = imageWrapper.imageToMatFormat(img.uuid);
    if (uuid != null && uuid != undefined && uuid != "" && uuid != " ") {
        return new AutoImage(uuid);
    }
    return null;
};
/**
 * 初始化OPENCV 类库
 * 如果使用找图请先调用这个函数，第一次初始化需要复制类库，时间可能较长，以后再次执行就很快
 *  @return {boolean} true 代表成功 false代表失败
 */
ImageWrapper.prototype.initOpenCV = function () {
    if (imageWrapper == null) {
        return false;
    }
    return imageWrapper.initOpenCV();
};


/**
 * 抓取全屏，格式是JPG
 * @param ext 扩展参数，可以调整截图的方式和质量，可以分别是
 *  type: 1 代表截图 jpg格式的方式1
 *        2 代表截图 jpg格式方式 2
 *        3 代表png格式，png不支持质量参数 ，根据自己机器情况调用
 *  quality: 图片质量，type=1的时候，支持 1， 50， 100，三种不同的质量标准
 *      当type =2 的时候，支持1-100图片质量
 * @return {null|AutoImage}
 */
ImageWrapper.prototype.captureFullScreenEx = function (ext) {
    if (imageWrapper == null) {
        return null;
    }
    if (ext == null || ext == undefined) {
        ext = {"type": "1", "quality": 99};
    }
    let uuid = imageWrapper.captureFullScreenEx(JSON.stringify(ext));
    if (uuid != null && uuid != undefined && uuid != "" && uuid != " ") {
        return new AutoImage(uuid);
    }
    return null;
};


/**
 * 截屏UIImage对象
 * 适配EC 4.2.0+
 * @param ext 扩展参数，可以调整截图的方式和质量，可以分别是
 *  type: 1 代表截图 jpg格式的方式1
 *        2 代表截图 jpg格式方式 2
 *        3 代表png格式，png不支持质量参数 ，根据自己机器情况调用
 *  quality: 图片质量，type=1的时候，支持 1， 50， 100，三种不同的质量标准
 *      当type =2 的时候，支持1-100图片质量
 * @return {null|UIImage} swift中的UIImage对象或者null
 */
ImageWrapper.prototype.captureFullScreenUIImage = function (ext) {
    if (imageWrapper == null) {
        return null;
    }
    if (ext == null || ext == undefined) {
        ext = {"type": "1", "quality": 99};
    }
    return imageWrapper.captureFullScreenUIImage(JSON.stringify(ext));
};


/**
 * 转换为UIImage
 * 适配EC 4.2.0+
 * @param img AutoImage
 * @return {null|UIImage} swift中的UIImage对象或者null
 */
ImageWrapper.prototype.autoImageToUIImage = function (img) {
    if (imageWrapper == null) {
        return null;
    }
    return imageWrapper.autoImageToUIImage(img.uuid);
};

/**
 * UIImage转换为AutoImage
 * 适配EC 4.2.0+
 * @param uiimage swift中的 UIImage 对象
 * @returns {AutoImage|null} null或者AutoImage对象
 */
ImageWrapper.prototype.uiimageToAutoImage = function (uiimage) {
    if (imageWrapper == null) {
        return null;
    }
    let uuid = imageWrapper.uiimageToAutoImage(uiimage);
    if (uuid != null && uuid != undefined && uuid != "" && uuid != " ") {
        return new AutoImage(uuid);
    }
    return null;
};


ImageWrapper.prototype.setFindColorImageMode = function (ext) {

}

/**
 * 抓取全屏，格式是JPG
 * @return {null|AutoImage}
 */
ImageWrapper.prototype.captureFullScreen = function () {
    if (imageWrapper == null) {
        return null;
    }
    let uuid = imageWrapper.captureFullScreen();
    if (uuid != null && uuid != undefined && uuid != "" && uuid != " ") {
        return new AutoImage(uuid);
    }
    return null;
};


/**
 * 读取在路径path的图片文件并返回一个{@link AutoImage}对象。
 * 如果文件不存在或者文件无法解码则返回null。
 * @param path 图片路径
 * @return {AutoImage|null} AutoImage对象或者null
 */
ImageWrapper.prototype.readImage = function (path) {
    if (imageWrapper == null) {
        return null;
    }
    let uuid = imageWrapper.readImage(path);
    if (uuid != null && uuid != undefined && uuid != "" && uuid != " ") {
        return new AutoImage(uuid);
    }
    return null;
};
/**
 * 读取在路径path的图片文件并返回一个{@link UIImage}对象。如果文件不存在或者文件无法解码则返回null。
 * @param path 图片路径
 * @return {UIImage|null}  ios的 UIImage 对象
 */
ImageWrapper.prototype.readUIImage = function (path) {
    if (imageWrapper == null) {
        return;
    }
    return imageWrapper.readUIImage(path);
};


/**
 * 找图。在大图片image中查找小图片template的位置（模块匹配），找到时返回位置坐标区域(Rect)，找不到时返回null。
 * EC 脱机 4.5.0+
 * @param image1     大图片
 * @param template  小图片（模板）
 * @param x         找图区域 x 起始坐标
 * @param y         找图区域 y 起始坐标
 * @param ex 终点X坐标
 * @param ey 终点Y坐标
 * @param weakThreshold  图片相似度。取值范围为0~1的浮点数。默认值为0.9。
 * @param threshold 图片相似度。取值范围为0~1的浮点数。默认值为0.9。
 * @param limit 限制结果的数量，如果要找到1个，就填写1，如果是多个请填写多个
 * @param method 0: TM_SQDIFF平方差匹配法,1: TM_SQDIFF_NORMED归一化平方差匹配方法,2: TM_CCORR相关匹配法,3: TM_CCORR_NORMED归一化相关匹配法,4: TM_CCOEFF系数匹配法,5: TM_CCOEFF_NORMED归一化系数匹配法
 * @return {null|Rect[]} 区域坐标对象数组或者null
 */
ImageWrapper.prototype.findImage = function (image1, template, x, y, ex, ey, weakThreshold, threshold, limit, method) {
    if (imageWrapper == null || image1 == null || template == null) {
        return null;
    }
    let res = imageWrapper.findImage(image1.uuid, template.uuid, weakThreshold, threshold, x, y, ex - x, ey - y, limit, method);
    return this.toRectList(res);
};

/**
 * 找图。在大图片image中查找小图片template的位置（模块匹配），找到时返回位置坐标区域(Rect)，找不到时返回null。
 * @param image1     大图片
 * @param jsonFileName 使用图色工具生成JSON文件,存储到res文件夹中,例如 a.json,小图路径请到json文件配置
 * @return {null|Rect[]} 区域坐标对象数组或者null
 */
ImageWrapper.prototype.findImageJ = function (image1, jsonFileName) {
    if (imageWrapper == null || image1 == null) {
        return null;
    }
    var data = this.readResJSONFile(jsonFileName);
    if (data == null) {
        return null;
    }
    let templateImg = null;
    try {
        var template = data['template'];
        templateImg = image.readResAutoImage(template);
        if (_isNull(templateImg)) {
            return null;
        }
        var threshold = data['threshold'];
        var weakThreshold = data['weakThreshold'];
        var x = data['x'];
        var y = data['y'];
        var ex = data['ex'];
        var ey = data['ey'];
        var limit = data['limit'];
        var method = data['method']
        return this.findImage(image1, templateImg, x, y, ex, ey, weakThreshold, threshold, limit, method);
    } catch (e) {
    } finally {
        if (!_isNull(templateImg)) {
            templateImg.recycle();
        }
    }
    return null;
};


/**
 *
 * @param image1
 * @param template
 * @param x
 * @param y
 * @param ex
 * @param ey
 * @param weakThreshold
 * @param threshold
 * @param limit
 * @param method
 * @return {null|Rect[]}
 */
ImageWrapper.prototype.findImage2 = function (image1, template, x, y, ex, ey, weakThreshold, threshold, limit, method) {
    return this.findImage(image1, template, x, y, ex, ey, weakThreshold, threshold, limit, method);
};

/**
 * 找图。在大图片image中查找小图片template的位置（模块匹配），找到时返回位置坐标区域(Rect)，找不到时返回null。
 * @param image1     大图片
 * @param jsonFileName  使用图色工具生成JSON文件,存储到res文件夹中,例如 a.json,小图路径请到json文件配置
 * @return {null|Rect[]} 区域坐标对象数组或者null
 */
ImageWrapper.prototype.findImage2J = function (image1, jsonFileName) {
    if (imageWrapper == null || image1 == null) {
        return null;
    }
    var data = this.readResJSONFile(jsonFileName);
    if (data == null) {
        return null;
    }
    let templateImg = null;
    try {
        var template = data['template'];
        templateImg = image.readResAutoImage(template);
        if (_isNull(templateImg)) {
            return null;
        }
        var threshold = data['threshold'];
        var weakThreshold = data['weakThreshold'];
        var x = data['x'];
        var y = data['y'];
        var ex = data['ex'];
        var ey = data['ey'];
        var limit = data['limit'];
        var method = data['method']
        return this.findImage2(image1, templateImg, x, y, ex, ey, weakThreshold, threshold, limit, method);
    } catch (e) {
    } finally {
        if (!_isNull(templateImg)) {
            templateImg.recycle();
        }
    }
    return null;

};


/**
 * 找图。在当前屏幕中查找小图片template的位置（模块匹配），找到时返回位置坐标区域(Rect)，找不到时返回null。
 * EC 脱机 4.5.0+
 * @param template  小图片（模板）
 * @param x         找图区域 x 起始坐标
 * @param y         找图区域 y 起始坐标
 * @param ex 终点X坐标
 * @param ey 终点Y坐标
 * @param weakThreshold  图片相似度。取值范围为0~1的浮点数。默认值为0.9。
 * @param threshold 图片相似度。取值范围为0~1的浮点数。默认值为0.9。
 * @param limit 限制结果的数量，如果要找到1个，就填写1，如果是多个请填写多个
 * @param method 0: TM_SQDIFF平方差匹配法,1: TM_SQDIFF_NORMED归一化平方差匹配方法,2: TM_CCORR相关匹配法,3: TM_CCORR_NORMED归一化相关匹配法,4: TM_CCOEFF系数匹配法,5: TM_CCOEFF_NORMED归一化系数匹配法
 * @return {null|Rect[]} 区域坐标对象数组或者null
 */
ImageWrapper.prototype.findImageEx = function (template, x, y, ex, ey, weakThreshold, threshold, limit, method) {
    if (imageWrapper == null || template == null) {
        return null;
    }
    let res = imageWrapper.findImageEx(template.uuid, weakThreshold, threshold, x, y, ex - x, ey - y, limit, method);
    return this.toRectList(res);
};


/**
 * OpenCV模板匹配封装
 * EC 脱机 4.5.0+
 * @param image1         大图片
 * @param template      小图片（模板）
 * @param weakThreshold 图片相似度。取值范围为0~1的浮点数。默认值为0.9。
 * @param threshold     图片相似度。取值范围为0~1的浮点数。默认值为0.9。
 * @param rect          找图区域。参见findColor函数关于 rect 的说明
 * @param maxLevel      默认为-1，一般而言不必修改此参数。不加此参数时该参数会根据图片大小自动调整。找图算法是采用图像金字塔进行的, level参数表示金字塔的层次,
 *                      level越大可能带来越高的找图效率，但也可能造成找图失败（图片因过度缩小而无法分辨）或返回错误位置。因此，除非您清楚该参数的意义并需要进行性能调优，否则不需要用到该参数。
 * @param limit 限制结果的数量，如果要找到1个，就填写1，如果是多个请填写多个
 * @param method 0: TM_SQDIFF平方差匹配法,1: TM_SQDIFF_NORMED归一化平方差匹配方法,2: TM_CCORR相关匹配法,3: TM_CCORR_NORMED归一化相关匹配法,4: TM_CCOEFF系数匹配法,5: TM_CCOEFF_NORMED归一化系数匹配法
 * @return {null|Match[]}  匹配到的集合
 */
ImageWrapper.prototype.matchTemplate = function (image1, template, weakThreshold, threshold, rect, maxLevel, limit, method) {
    if (imageWrapper == null || image1 == null || template == null) {
        return null;
    }
    let x = 0;
    let y = 0;
    let w = 0;
    let h = 0;
    if (rect != null) {
        x = rect.left;
        y = rect.top;
        w = rect.right - rect.left;
        h = rect.bottom - rect.top;
    }
    let res = imageWrapper.matchTemplate(image1.uuid, template.uuid, weakThreshold, threshold, x, y, w, h, maxLevel, limit, method);
    if (res == null || res == "") {
        return null;
    }
    try {
        let d = JSON.parse(res);
        let result = [];
        for (let i = 0; i < d.length; i++) {
            result.push(new Match(d[i]));
        }
        return result;
    } catch (e) {

    }
    return null;

};


/**
 * OpenCV模板匹配封装
 * @param image1         大图片
 * @param jsonFileName  使用图色工具生成JSON文件,存储到res文件夹中,例如 a.json,小图路径请到json文件配置
 * @return {null|Match[]} 匹配到的集合
 */
ImageWrapper.prototype.matchTemplateJ = function (image1, jsonFileName) {
    if (imageWrapper == null || image1 == null) {
        return null;
    }
    var data = this.readResJSONFile(jsonFileName);
    if (data == null) {
        return null;
    }
    let templateImg = null;
    try {
        var template = data['template'];
        templateImg = image.readResAutoImage(template);
        if (_isNull(templateImg)) {
            return null;
        }
        var threshold = data['threshold'];
        var weakThreshold = data['weakThreshold'];
        let rect = new Rect();
        rect.left = data['x'];
        rect.top = data['y'];
        rect.right = data['ex'];
        rect.bottom = data['ey'];
        var maxLevel = data["maxLevel"]
        var limit = data['limit'];
        var method = data['method']
        return this.matchTemplate(image1, templateImg, weakThreshold, threshold, rect, maxLevel, limit, method);
    } catch (e) {
    } finally {
        if (!_isNull(templateImg)) {
            templateImg.recycle();
        }
    }
    return null;

};


/**
 * @param image1
 * @param template
 * @param weakThreshold
 * @param threshold
 * @param rect
 * @param maxLevel
 * @param limit
 * @param method
 * @return {null|Match[]}
 */
ImageWrapper.prototype.matchTemplate2 = function (image1, template, weakThreshold, threshold, rect, maxLevel, limit, method) {
    return this.matchTemplate(image1, template, weakThreshold, threshold, rect, maxLevel, limit, method);
}

/**
 * OpenCV模板匹配封装，在当前屏幕截图中进行匹配
 * EC 脱机 4.5.0+
 * @param template      小图片（模板）
 * @param weakThreshold 图片相似度。取值范围为0~1的浮点数。默认值为0.9。
 * @param threshold     图片相似度。取值范围为0~1的浮点数。默认值为0.9。
 * @param rect          找图区域。参见findColor函数关于 rect 的说明
 * @param maxLevel      默认为-1，一般而言不必修改此参数。不加此参数时该参数会根据图片大小自动调整。找图算法是采用图像金字塔进行的, level参数表示金字塔的层次,
 *                      level越大可能带来越高的找图效率，但也可能造成找图失败（图片因过度缩小而无法分辨）或返回错误位置。因此，除非您清楚该参数的意义并需要进行性能调优，否则不需要用到该参数。
 * @param limit 限制结果的数量，如果要找到1个，就填写1，如果是多个请填写多个
 * @param method 0: TM_SQDIFF平方差匹配法,1: TM_SQDIFF_NORMED归一化平方差匹配方法,2: TM_CCORR相关匹配法,3: TM_CCORR_NORMED归一化相关匹配法,4: TM_CCOEFF系数匹配法,5: TM_CCOEFF_NORMED归一化系数匹配法
 * @return {null|Match[]} 匹配到的集合
 */
ImageWrapper.prototype.matchTemplateEx = function (template, weakThreshold, threshold, rect, maxLevel, limit, method) {
    if (imageWrapper == null || template == null) {
        return null;
    }
    let x = 0;
    let y = 0;
    let w = 0;
    let h = 0;
    if (rect != null) {
        x = rect.left;
        y = rect.top;
        w = rect.right - rect.left;
        h = rect.bottom - rect.top;
    }
    let res = imageWrapper.matchTemplateEx(template.uuid, weakThreshold, threshold, x, y, w, h, maxLevel, limit, method);
    if (res == null || res == "") {
        return null;
    }
    try {
        let d = JSON.parse(res);
        let result = [];
        for (let i = 0; i < d.length; i++) {
            result.push(new Match(d[i]));
        }
        return result;
    } catch (e) {

    }
    return null;
};


/**
 * 在图片中找到颜色和color完全相等的点，；如果没有找到，则返回null。
 *
 * @param image1 图片
 * @param color     要寻找的颜色
 * @param threshold 找色时颜色相似度取值为 0.0 ~ 1.0
 * @param x 区域的X起始坐标
 * @param y 区域的Y起始坐标
 * @param ex 终点X坐标
 * @param ey 终点Y坐标
 * @param limit 限制个数
 * @param orz 方向，分别从1-8
 * @return {null|PointIndex[]} PointIndex 坐标点数组或者null
 */
ImageWrapper.prototype.findColor = function (image1, color, threshold, x, y, ex, ey, limit, orz) {
    if (imageWrapper == null || image1 == null) {
        return null;
    }

    color = this.convertFirstColorArrayToString2(color);
    let res = imageWrapper.findColor(image1.uuid, color, threshold, x, y, ex - x, ey - y, limit, orz);
    if (res == null || res == "") {
        return null;
    }
    try {
        let d = JSON.parse(res);
        let x1 = [];
        for (let i = 0; i < d.length; i++) {
            x1.push(new PointIndex(d[i]));
        }
        return x1;
    } catch (e) {

    }

    return null;
};

/**
 * 找非色
 * 在图片中找到颜色和color完全不相等的点，如果没有找到，则返回null。
 * 适配EC 脱机版本 3.10.0+
 * @param image1 图片
 * @param color     要寻找的颜色
 * @param threshold 找色时颜色相似度取值为 0.0 ~ 1.0
 * @param x 区域的X起始坐标
 * @param y 区域的Y起始坐标
 * @param ex 终点X坐标
 * @param ey 终点Y坐标
 * @param limit 限制个数
 * @param orz 方向，分别从1-8
 * @return {null|PointIndex[]} PointIndex 坐标点数组或者null
 */
ImageWrapper.prototype.findNotColor = function (image1, color, threshold, x, y, ex, ey, limit, orz) {
    if (imageWrapper == null || image1 == null) {
        return null;
    }

    color = this.convertFirstColorArrayToString2(color);
    let res = imageWrapper.findNotColor(image1.uuid, color, threshold, x, y, ex - x, ey - y, limit, orz, "1");
    if (res == null || res == "") {
        return null;
    }

    try {
        let d = JSON.parse(res);
        let x1 = [];
        for (let i = 0; i < d.length; i++) {
            x1.push(new PointIndex(d[i]));
        }
        return x1;
    } catch (e) {

    }
    return null;

};


/**
 * 找非色
 * 在图片中找到颜色和color完全不相等的点，如果没有找到，则返回null。
 * @param image1 图片
 * @param jsonFileName    使用图色工具生成JSON文件,存储到res文件夹中,例如 a.json
 * @return {null|PointIndex[]} 多个 PointIndex 坐标点数组或者null
 */
ImageWrapper.prototype.findNotColorJ = function (image1, jsonFileName) {
    // color, threshold, x, y, ex, ey, limit, orz
    if (imageWrapper == null || image1 == null) {
        return null;
    }
    var data = this.readResJSONFile(jsonFileName);
    if (data == null) {
        return null;
    }
    try {
        var color = data['color'];
        var threshold = data['threshold'];
        var x = data['x'];
        var y = data['y'];
        var ex = data['ex'];
        var ey = data['ey'];
        var limit = data['limit'];
        var orz = data['orz']
        return this.findNotColor(image1, color, threshold, x, y, ex, ey, limit, orz);
    } catch (e) {
    }
    return null;
}

/**
 * 在图片中找到颜色和color完全相等的点，参数从JSON中获取如果没有找到，则返回null。
 * @param image1 图片
 * @param jsonFileName  使用图色工具生成JSON文件,存储到res文件夹中,例如 a.json
 * @return {null|PointIndex[]} 坐标点数组或者null
 */
ImageWrapper.prototype.findColorJ = function (image1, jsonFileName) {
    if (imageWrapper == null || image1 == null) {
        return null;
    }
    let data = this.readResJSONFile(jsonFileName);
    if (data == null) {
        return null;
    }
    try {
        var firstColor = data['firstColor'];
        var threshold = data['threshold'];
        var x = data['x'];
        var y = data['y'];
        var ex = data['ex'];
        var ey = data['ey'];
        var limit = data['limit'];
        var orz = data['orz']
        return this.findColor(image1, firstColor, threshold, x, y, ex, ey, limit, orz);
    } catch (e) {
    }
    return null;
};


/**
 * 在当前屏幕中找到颜色和color完全相等的点，如果没有找到，则返回null。
 * @param color     要寻找的颜色
 * @param threshold 找色时颜色相似度取值为 0.0 ~ 1.0
 * @param x 区域的X起始坐标
 * @param y 区域的Y起始坐标
 * @param ex 终点X坐标
 * @param ey 终点Y坐标
 * @param limit 限制个数
 * @param orz 方向，分别从1-8
 * @return {null|PointIndex[]} PointIndex 坐标点数组或者null
 */
ImageWrapper.prototype.findColorEx = function (color, threshold, x, y, ex, ey, limit, orz) {
    if (imageWrapper == null) {
        return null;
    }
    color = this.convertFirstColorArrayToString2(color);
    let res = imageWrapper.findColorEx(color, threshold, x, y, ex - x, ey - y, limit, orz);
    if (res == null || res == "") {
        return null;
    }
    try {
        let d = JSON.parse(res);
        let x1 = [];
        for (let i = 0; i < d.length; i++) {
            x1.push(new PointIndex(d[i]));
        }
        return x1;
    } catch (e) {
    }
    return null;

};


/**
 * 多点找色，找到所有符合标准的点，类似于按键精灵的多点找色
 * <p>
 * 整张图片都找不到时返回null
 *
 * @param image1      要找色的图片
 * @param firstColor 第一个点的颜色
 * @param threshold 找色时颜色相似度取值为 0.0 ~ 1.0
 * @param points     字符串类似这样 6|1|0x969696-0x000010,1|12|0x969696,-4|0|0x969696
 * @param x 区域的X起始坐标
 * @param y 区域的Y起始坐标
 * @param ex 终点X坐标
 * @param ey 终点Y坐标
 * @param limit 限制个数
 * @param orz 方向，分别从1-8
 * @return {null|Point[]} Point 坐标点数组或者null
 */
ImageWrapper.prototype.findMultiColor = function (image1, firstColor, points, threshold, x, y, ex, ey, limit, orz) {
    if (imageWrapper == null || image1 == null) {
        return null;
    }
    firstColor = this.convertFirstColorArrayToString(firstColor);
    points = this.convertMultiColorArrayToString(points);
    let res = imageWrapper.findMultiColor(image1.uuid, firstColor, points, threshold, x, y, ex - x, ey - y, limit, orz);
    if (res == null || res == "") {
        return null;
    }
    try {
        let d = JSON.parse(res);
        let x1 = [];
        for (let i = 0; i < d.length; i++) {
            x1.push(new Point(d[i]));
        }
        return x1;
    } catch (e) {

    }
    return null;

};
/**
 * 多点找色，找到所有符合标准的点，参数从JSON文件中读取，类似于按键精灵的多点找色
 * 整张图片都找不到时返回null
 * @param image1      要找色的图片
 * @param jsonFileName 使用图色工具生成JSON文件,存储到res文件夹中,例如 a.json
 * @return {null|Point[]} Point 坐标点数组或者null
 */
ImageWrapper.prototype.findMultiColorJ = function (image1, jsonFileName) {
    if (imageWrapper == null || image1 == null) {
        return null;
    }
    var data = this.readResJSONFile(jsonFileName);
    if (data == null) {
        return null;
    }
    try {
        var firstColor = data['firstColor'];
        var threshold = data['threshold'];
        var points = data['points'];
        var x = data['x'];
        var y = data['y'];
        var ex = data['ex'];
        var ey = data['ey'];
        var limit = data['limit'];
        var orz = data['orz'];
        return this.findMultiColor(image1, firstColor, points, threshold, x, y, ex, ey, limit, orz);

    } catch (e) {
    }
    return null;
};

/**
 * 多点找色，找到所有符合标准的点，自动抓取当前屏幕的图片，类似于按键精灵的多点找色
 * <p>
 * 整张图片都找不到时返回null
 * @param firstColor 第一个点的颜色
 * @param threshold  找色时颜色相似度取值为 0.0 ~ 1.0
 * @param points     字符串类似这样 6|1|0x969696-0x000010,1|12|0x969696,-4|0|0x969696
 * @param x 区域的X起始坐标
 * @param y 区域的Y起始坐标
 * @param ex 终点X坐标
 * @param ey 终点Y坐标
 * @param limit 限制个数
 * @param orz 方向，分别从1-8
 * @return {null|Point[]} Point 坐标点数组或者null
 */
ImageWrapper.prototype.findMultiColorEx = function (firstColor, points, threshold, x, y, ex, ey, limit, orz) {
    //String firstColor, String points, float threshold, int x, int y, int w, int h
    if (imageWrapper == null) {
        return null;
    }
    firstColor = this.convertFirstColorArrayToString(firstColor);
    points = this.convertMultiColorArrayToString(points);
    let res = imageWrapper.findMultiColorEx(firstColor, points, threshold, x, y, ex - x, ey - y, limit, orz);
    if (res == null || res == "") {
        return null;
    }
    try {
        let d = JSON.parse(res);
        let x1 = [];
        for (let i = 0; i < d.length; i++) {
            x1.push(new Point(d[i]));
        }
        return x1;
    } catch (e) {
    }
    return null;
};
/**
 * 多点找色，找到所有符合标准的点，自动抓取当前屏幕的图片,参数从JSON文件中读取，类似于按键精灵的多点找色
 * 整张图片都找不到时返回null
 * @param jsonFileName res文件中取色工具生成的JSON文件，只要填写文件名称即可，后缀不用填写
 * @return {null|Point[]} Point 坐标点数组或者null
 */
ImageWrapper.prototype.findMultiColorExJ = function (jsonFileName) {
    if (imageWrapper == null) {
        return null;
    }
    var data = this.readResJSONFile(jsonFileName);
    if (data == null) {
        return null;
    }
    try {
        var firstColor = data['firstColor'];
        var threshold = data['threshold'];
        var points = data['points'];
        var x = data['x'];
        var y = data['y'];
        var ex = data['ex'];
        var ey = data['ey'];
        var limit = data['limit'];
        var orz = data['orz'];
        return this.findMultiColorEx(firstColor, points, threshold, x, y, ex, ey, limit, orz);

    } catch (e) {
    }
    return null;
};


/**
 * 单点或者多点比色，找到所有符合标准的点，如果都符合返回true，否则是false
 * @param image1 图片
 * @param points     字符串类似这样 6|1|0x969696-0x000010,2|3|0x969696-0x000010
 * @param threshold  找色时颜色相似度取值为 0.0 ~ 1.0
 * @param x 区域的X起始坐标，默认填写0全屏查找
 * @param y 区域的Y起始坐标，默认填写0全屏查找
 * @param ex 终点X坐标，默认填写0全屏查找
 * @param ey 终点Y坐标，默认填写0全屏查找
 * @return {boolean} true代表找到了 false代表未找到
 */
ImageWrapper.prototype.cmpColor = function (image1, points, threshold, x, y, ex, ey) {
    if (imageWrapper == null || image1 == null) {
        return false;
    }
    points = this.convertMultiColorArrayToString(points);
    let index = imageWrapper.cmpColor(image1.uuid, points, threshold, x, y, ex - x, ey - y);
    return index !== -1;

};

/**
 * 单点或者多点比色，找到所有符合标准的点，如果都符合返回true，否则是false
 * @param image1 图像
 * @param jsonFileName 使用图色工具生成JSON文件,存储到res文件夹中,例如 a.json
 * @return {boolean} true代表找到了 false代表未找到
 */
ImageWrapper.prototype.cmpColorJ = function (image1, jsonFileName) {
    if (imageWrapper == null || image1 == null) {
        return false;
    }

    // points, threshold, x, y, ex, ey
    let data = this.readResJSONFile(jsonFileName);
    if (data == null) {
        return false;
    }
    try {
        let points = data["points"];
        let threshold = data["threshold"];
        let x = data["x"];
        let y = data["y"];
        let ex = data["ex"];
        let ey = data["ey"];
        return this.cmpColor(image1, points, threshold, x, y, ex, ey);
    } catch (e) {

    }
    return false;
};

/**
 * 单点或者多点比色，找到所有符合标准的点，默认自己截图，如果都符合返回true，否则是false
 * @param points     字符串类似这样 6|1|0x969696-0x000010,2|3|0x969696-0x000010
 * @param threshold  找色时颜色相似度取值为 0.0 ~ 1.0
 * @param x 区域的X起始坐标，默认填写0全屏查找
 * @param y 区域的Y起始坐标，默认填写0全屏查找
 * @param ex 终点X坐标，默认填写0全屏查找
 * @param ey 终点Y坐标，默认填写0全屏查找
 * @return {boolean} true代表找到了 false代表未找到
 */
ImageWrapper.prototype.cmpColorEx = function (points, threshold, x, y, ex, ey) {
    if (imageWrapper == null) {
        return -1;
    }
    points = this.convertMultiColorArrayToString(points);
    let index = imageWrapper.cmpColorEx(points, threshold, x, y, ex - x, ey - y);
    if (index === -1) {
        return false;
    }
    return true;
};


/**
 * 多点或者多点数组比色，找到所有符合标准的点，依次查找，如果找到就返回当前points的索引值，如果返回-1，说明都没有找到
 * @param image1 图片
 * @param points     数组类似这样 ["6|1|0x969696-0x000010,1|12|0x969696,-4|0|0x969696","6|1|0x969696"]
 * @param threshold  找色时颜色相似度取值为 0.0 ~ 1.0
 * @param x 区域的X起始坐标，默认填写0全屏查找
 * @param y 区域的Y起始坐标，默认填写0全屏查找
 * @param ex 终点X坐标，默认填写0全屏查找
 * @param ey 终点Y坐标，默认填写0全屏查找
 * @return {number} 如果找到就返回当前points的索引值，如果返回-1，说明都没有找到
 */
ImageWrapper.prototype.cmpMultiColor = function (image1, points, threshold, x, y, ex, ey) {
    if (imageWrapper == null || image1 == null) {
        return -1;
    }

    if (points != null) {
        // "6|1|0x969696-0x000010,1|12|0x969696,-4|0|0x969696","6|1|0x969696"
        // 类似这样的字符串 直接 转成数组的 JSON
        if ((typeof points) == "string") {
            return imageWrapper.cmpMultiColor(image1.uuid, JSON.stringify([points]), threshold, x, y, ex - x, ey - y);
        }
        //走老的逻辑
        if ((typeof points[0]) == "string") {
            if (/#|0x/.test(points[0])) {
                return imageWrapper.cmpMultiColor(image1.uuid, JSON.stringify(points), threshold, x, y, ex - x, ey - y);
            }
        }
        let newPoint = [];
        for (let i = 0; i < points.length; i++) {
            newPoint[i] = this.convertMultiCmpColorArrayToString(points[i]);
        }
        return imageWrapper.cmpMultiColor(image1.uuid, JSON.stringify(newPoint), threshold, x, y, ex - x, ey - y);
    }
    return -1;

};

/**
 * 多点或者多点数组比色，找到所有符合标准的点，依次查找，如果找到就返回当前points的索引值，如果返回-1，说明都没有找到
 * @param image1 图像
 * @param jsonFileName 使用图色工具生成JSON文件,存储到res文件夹中,例如 a.json
 * @return {number} 如果找到就返回当前points的索引值，如果返回-1，说明都没有找到
 */
ImageWrapper.prototype.cmpMultiColorJ = function (image1, jsonFileName) {
    if (imageWrapper == null || image1 == null) {
        return false;
    }

    // points, threshold, x, y, ex, ey
    let data = this.readResJSONFile(jsonFileName);
    if (data == null) {
        return -1;
    }
    try {
        let points = data["points"];
        let threshold = data["threshold"];
        let x = data["x"];
        let y = data["y"];
        let ex = data["ex"];
        let ey = data["ey"];
        return this.cmpMultiColor(image1, points, threshold, x, y, ex, ey);
    } catch (e) {

    }
    return -1;
};


/**
 * 单点或者多点比色，找到所有符合标准的点，默认自己截图，如果都符合返回true，否则是false
 * @param jsonFileName res文件中取色工具生成的JSON文件，只要填写文件名称即可，后缀不用填写
 * @return {boolean} true代表找到了 false代表未找到
 */
ImageWrapper.prototype.cmpColorExJ = function (jsonFileName) {
    // points, threshold, x, y, ex, ey
    let data = this.readResJSONFile(jsonFileName);
    if (data == null) {
        return false;
    }
    try {
        let points = data["points"];
        let threshold = data["threshold"];
        let x = data["x"];
        let y = data["y"];
        let ex = data["ex"];
        let ey = data["ey"];
        return this.cmpColorEx(points, threshold, x, y, ex, ey);
    } catch (e) {

    }
    return false;
};

/**
 * 多点或者多点数组比色，找到所有符合标准的点，自动截屏，依次查找，如果找到就返回当前points的索引值，如果返回-1，说明都没有找到
 * @param points     数组类似这样 ["6|1|0x969696-0x000010,1|12|0x969696,-4|0|0x969696","6|1|0x969696"]
 * @param threshold  找色时颜色相似度取值为 0.0 ~ 1.0
 * @param x 区域的X起始坐标，默认填写0全屏查找
 * @param y 区域的Y起始坐标，默认填写0全屏查找
 * @param ex 终点X坐标，默认填写0全屏查找
 * @param ey 终点Y坐标，默认填写0全屏查找
 * @return {number} 如果找到就返回当前points的索引值，如果返回-1，说明都没有找到
 */
ImageWrapper.prototype.cmpMultiColorEx = function (points, threshold, x, y, ex, ey) {
    if (imageWrapper == null) {
        return -1;
    }
    if (points != null) {
        // "6|1|0x969696-0x000010,1|12|0x969696,-4|0|0x969696","6|1|0x969696"
        // 类似这样的字符串 直接 转成数组的 JSON
        if ((typeof points) == "string") {
            return imageWrapper.cmpMultiColorEx(JSON.stringify([points]), threshold, x, y, ex - x, ey - y);
        }
        //走老的逻辑
        if ((typeof points[0]) == "string") {
            if (/#|0x/.test(points[0])) {
                return imageWrapper.cmpMultiColorEx(JSON.stringify(points), threshold, x, y, ex - x, ey - y);
            }
        }
        let newPoint = [];
        for (let i = 0; i < points.length; i++) {
            newPoint[i] = this.convertMultiCmpColorArrayToString(points[i]);
        }
        return imageWrapper.cmpMultiColorEx(JSON.stringify(newPoint), threshold, x, y, ex - x, ey - y);
    }
    return -1;
};

/**
 * 多点或者多点数组比色，找到所有符合标准的点，依次查找，如果找到就返回当前points的索引值，如果返回-1，说明都没有找到
 * @param jsonFileName res文件中取色工具生成的JSON文件，只要填写文件名称即可，后缀不用填写
 * @return {number} 如果找到就返回当前points的索引值，如果返回-1，说明都没有找到
 */
ImageWrapper.prototype.cmpMultiColorExJ = function (jsonFileName) {
    // points, threshold, x, y, ex, ey
    let data = this.readResJSONFile(jsonFileName);
    if (data == null) {
        return -1;
    }
    try {
        let points = data["points"];
        let threshold = data["threshold"];
        let x = data["x"];
        let y = data["y"];
        let ex = data["ex"];
        let ey = data["ey"];
        return this.cmpMultiColorEx(points, threshold, x, y, ex, ey);
    } catch (e) {

    }
    return -1;
};


/**
 * 取得宽度
 * @param img 图片对象
 * @return {number}
 */
ImageWrapper.prototype.getWidth = function (img) {
    if (img == null) {
        return 0;
    }
    let dd = imageWrapper.getWidth(img.uuid);
    try {
        return parseInt(dd)
    } catch (e) {
    }
    return 0
};


/**
 * 旋转图片
 * @param img 图片对象
 * @param degree 度数，0代表home键在下竖屏模式，-90代表逆时针旋转90度，home键在右，90度代表顺时针旋转90度，home键在左
 * @return {null|AutoImage}
 */
ImageWrapper.prototype.rotateImage = function (img, degree) {
    if (img == null) {
        return null;
    }
    let uuid = imageWrapper.rotateImage(img.uuid, degree);
    if (uuid != null && uuid != undefined && uuid != "" && uuid != " ") {
        return new AutoImage(uuid);
    }
    return null;
};


/**
 * 取得高度
 * @param img 图片对象
 * @return {number}
 */
ImageWrapper.prototype.getHeight = function (img) {
    if (img == null) {
        return 0;
    }
    let dd = imageWrapper.getHeight(img.uuid);
    try {
        return parseInt(dd)
    } catch (e) {
    }
    return 0
};

/**
 * 保存到文件中
 * @param img 图片对象
 * @param path 路径
 * @return {boolean} true代表成功，false 代表失败
 */
ImageWrapper.prototype.saveTo = function (img, path) {
    if (img == null) {
        return false;
    }
    return imageWrapper.saveTo(img.uuid, path);
};
/**
 * 转成base64的字符串
 * @param img 图片对象
 * @return {null|string}
 */
ImageWrapper.prototype.toBase64 = function (img) {
    if (img == null) {
        return null;
    }
    return javaString2string(imageWrapper.toBase64(img.uuid, "jpg", 100));
};
/**
 * 将base64的数据转换为AutoImage
 * @param base64data
 * @returns {AutoImage|null}
 */
ImageWrapper.prototype.base64ToImage = function (base64data) {
    if (base64data == null || base64data == undefined || base64data == "") {
        return null;
    }
    let xd = imageWrapper.base64ToImage(base64data);
    if (xd != null && xd != undefined && xd != "" && xd != " ") {
        return new AutoImage(javaString2string(xd));
    }
    return ""
};


/**
 * 转成base64的字符串, jpg格式较小，可以减少内存
 * @param img 图片对象
 * @param format 格式  jpg或者 png
 * @param q 质量  1-100，质量越大 越清晰
 * @return {null|string}
 */
ImageWrapper.prototype.toBase64Format = function (img, format, q) {
    if (img == null) {
        return null;
    }


    return javaString2string(imageWrapper.toBase64(img.uuid, format, q));
};
/**
 * 剪切图片
 * @param img 图片对象
 * @param x x起始坐标
 * @param y y起始坐标
 * @param ex 终点X坐标
 * @param ey 终点Y坐标
 * @return {null|AutoImage} 对象或者null
 */
ImageWrapper.prototype.clip = function (img, x, y, ex, ey) {
    if (img == null) {
        return null;
    }
    let xd = imageWrapper.clip(img.uuid, x, y, ex - x, ey - y);
    if (xd != null && xd != undefined && xd != "" && xd != " ") {
        return new AutoImage(javaString2string(xd));
    }
    return null;
};
/**
 * 取得图片的某个点的颜色值
 * @param img 图片对象
 * @param x x坐标点
 * @param y y坐标点
 * @return {number} 颜色值
 */
ImageWrapper.prototype.pixel = function (img, x, y) {
    if (img == null) {
        return 0;
    }
    let dd = imageWrapper.pixel(img.uuid, x, y);
    try {
        return parseInt(dd)
    } catch (e) {
    }
    return 0
};

/**
 * 将整型的颜色值转成16进制RGB字符串
 * @param color 整型值
 * @return {null|string} 颜色字符串
 */
ImageWrapper.prototype.argb = function (color) {
    if (color == null) {
        return null;
    }
    return imageWrapper.argb(color);
};


/**
 * 是否被回收了
 * @param img 图片对象
 * @return {boolean} true代表已经被回收了
 */
ImageWrapper.prototype.isRecycled = function (img) {
    if (img == null) {
        return false;
    }
    if (img.uuid == null) {
        return false;
    }
    return imageWrapper.isRecycled(img.uuid);
};

/**
 * 回收图片
 * @param img 图片对象
 * @return {boolean}
 */
ImageWrapper.prototype.recycle = function (img) {
    if (img == null) {
        return false;
    }
    if (img.uuid == null) {
        return false;
    }

    return imageWrapper.recycle(img.uuid);
};
/**
 * 回收所有图像
 * 适配EC 脱机 4.8.0+
 * @return {boolean}
 */
ImageWrapper.prototype.recycleAllImage = function () {
    return imageWrapper.recycleAllImage();
};
/**
 *
 * @param res
 * @return {null|Rect[]}
 */
ImageWrapper.prototype.toRectList = function (res) {
    if (res == undefined || res == null || res == "") {
        return null;
    }
    try {
        let ps = JSON.parse(res);
        if (ps == null) {
            return null;
        }
        let d = [];
        for (let i = 0; i < ps.length; i++) {
            d.push(new Rect(ps[i]));
        }
        return d;
    } catch (e) {

    }
    return null;

};

/**
 * 对AutoImage图片进行二值化
 * @param img AutoImage图片对象
 * @param threshold 二值化系数，0 ~ 255
 * @return {null|AutoImage} 对象或者null
 */
ImageWrapper.prototype.binaryzation = function (img, threshold) {
    if (img == null) {
        return null;
    }
    let xd = imageWrapper.binaryzation(img.uuid, threshold);
    if (xd != null && xd != undefined && xd != "" && xd != " ") {
        return new AutoImage(javaString2string(xd));
    }
    return null;
};

/**
 *
 * @param res
 * @return {null|AutoImage}
 */
ImageWrapper.prototype.readResAutoImage = function (res) {
    if (res == null) {
        return null;
    }
    let dx = globalWrapper.readResAutoImage(res);
    if (dx != null && dx != undefined && dx != "" && dx != " ") {
        return new AutoImage(javaString2string(dx));
    }
    return null;
};


function OCRWrapper() {

}

let ocr = new OCRWrapper();

/**
 * 初始化OCR模块
 * @param map map参数表
 * key分别为：
 * type : OCR类型，值分别为 appleVision = ios自带的Vision模块
 * 如果类型是 appleVision, 参数设置为 : {"type":"appleVision","level":"fast","languages":"zh-Hans,en-US"}<Br/>
 * level: fast,代表快速的，accurate:代表精准的
 * languages: 识别的语言，默认是zh-Hans,en-US中文简体和英文，
 * 支持的有 ["en-US", "fr-FR", "it-IT", "de-DE", "es-ES", "pt-BR", "zh-Hans", "zh-Hant"]
 * @return {boolean} 布尔型 成功或者失败
 */
OCRWrapper.prototype.initOcr = function (map) {
    if (map == null) {
        return ocrWrapper.setInitOcr("{}");
    }
    return ocrWrapper.setInitOcr(JSON.stringify(map));
};


/**
 * 设置OCR实现方式
 * @param type 值分别为 tess = ocrLite = ocrLite 模块
 * @return {boolean} 成功或者失败
 */
OCRWrapper.prototype.setOcrType = function (type) {
    return ocrWrapper.setOcrType(type);
};


/**
 * 释放OCR占用的资源
 * @return {boolean} 成功或者失败
 */
OCRWrapper.prototype.releaseAll = function () {
    return ocrWrapper.releaseAll();
};


/**
 * 获取错误消息
 * @return {string} null代表没有错误
 */
OCRWrapper.prototype.getErrorMsg = function () {
    return ocrWrapper.getErrorMsg();
};

/**
 * 对图片进行进行OCR，返回的是JSON数据，其中数据类似于与：
 *
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
OCRWrapper.prototype.ocrImage = function (img, timeout, extra) {
    if (img == null) {
        return null;
    }
    let d = ocrWrapper.ocrImage(img.uuid, timeout, JSON.stringify(extra));
    try {
        if (d != null && d != "") {
            return JSON.parse(d);
        }
    } catch (e) {
    }
    return null;
};


ImageWrapper.prototype.convertFirstColorArrayToString = function (arr) {
    if (arr) {
        if (typeof arr == "string") {

            return arr;
        }
        if (arr[1] == null || arr[1].length <= 0 || "" == arr[1]) {
            return arr[0];
        }
        return arr[0] + "-" + arr[1];
    }
    return null;
}


ImageWrapper.prototype.convertMultiColorArrayToString = function (arr) {
    if (arr) {
        if (typeof arr == "string") {
            return arr;
        }
        //转换成类似的字符串 6|1|0x969696-0x000010,1|12|0x969696,-4|0|0x969696
        let length = arr.length;
        let result = "";
        for (let i = 0; i < length; i = i + 4) {
            if (result.length > 0) {
                result = result + ","
            }
            let p = arr[i + 3];
            if (p == null || p.length <= 0 || "" == p) {
                result = result + arr[i] + "|" + arr[i + 1] + "|" + arr[i + 2];
            } else {
                result = result + arr[i] + "|" + arr[i + 1] + "|" + arr[i + 2] + "-" + arr[i + 3];
            }
        }
        return result;
    }
    return null;
}


ImageWrapper.prototype.convertFirstColorArrayToString2 = function (arr) {
    if (arr) {
        if (typeof arr == "string") {
            return arr;
        }
        //转换成类似的字符串 0x969696-0x000010,0x969696,0x969696
        let length = arr.length;
        let result = "";
        for (let i = 0; i < length; i = i + 2) {
            if (result.length > 0) {
                result = result + ","
            }
            let p = arr[i + 1];
            if (p == null || p.length <= 0 || "" == p) {
                result = result + arr[i];
            } else {
                result = result + arr[i] + "-" + arr[i + 1];
            }

        }
        return result;
    }
    return null;
}


ImageWrapper.prototype.convertMultiCmpColorArrayToString = function (arr) {
    if (arr) {
        if (typeof arr == "string") {
            return arr;
        }
        //转换成类似的字符串 6|1|0x969696-0x000010,1|12|0x969696,-4|0|0x969696
        let length = arr.length;
        let result = [];
        for (let i = 0; i < length; i = i + 4) {
            let p = arr[i + 3];
            if (p == null || p.length <= 0 || "" == p) {
                let tmp = arr[i] + "|" + arr[i + 1] + "|" + arr[i + 2];
                result.push(tmp)
            } else {
                let tmp = arr[i] + "|" + arr[i + 1] + "|" + arr[i + 2] + "-" + arr[i + 3];
                result.push(tmp)
            }
        }
        return result;
    }
    return null;
}
/**
 * 通过颜色找图，支持透明图，这个不需要处理话opencv
 * 整张图片都找不到时返回null
 * @param image1     大图片
 * @param template  小图片（模板）
 * @param x         找图区域 x 起始坐标
 * @param y         找图区域 y 起始坐标
 * @param ex 终点X坐标
 * @param ey 终点Y坐标
 * @param threshold 图片相似度。取值范围为0~1的浮点数。默认值为0.9。
 * @param limit 限制结果的数量，如果要找到1个，就填写1，如果是多个请填写多个
 * @return {null|Point[]} Point 坐标点数组或者null
 */
ImageWrapper.prototype.findImageByColor = function (image1, template, x, y, ex, ey, threshold, limit) {
    if (imageWrapper == null || image1 == null || template == null) {
        return;
    }
    let res = imageWrapper.findImageByColor(image1.uuid, template.uuid, x, y, ex - x, ey - y, threshold, limit);
    if (res == null || res == "") {
        return null;
    }
    try {
        let d = JSON.parse(res);
        let x1 = [];
        for (let i = 0; i < d.length; i++) {
            x1.push(new Point(d[i]));
        }
        return x1;
    } catch (e) {

    }
    return null;

};


/**
 * 通过颜色找图，支持透明图，这个不需要处理话opencv
 * 整张图片都找不到时返回null
 * @param image1     大图片
 * @param jsonFileName  使用图色工具生成JSON文件,存储到res文件夹中,例如 a.json,小图路径请到json文件配置
 * @return {null|Point[]} 坐标点数组或者null
 */
ImageWrapper.prototype.findImageByColorJ = function (image1, jsonFileName) {

    if (imageWrapper == null || image1 == null) {
        return null;
    }
    var data = this.readResJSONFile(jsonFileName);
    if (data == null) {
        return null;
    }
    let templateImg = null;
    try {
        var template = data['template'];
        templateImg = image.readResAutoImage(template);
        if (_isNull(templateImg)) {
            return null;
        }
        var threshold = data['threshold'];
        var x = data['x'];
        var y = data['y'];
        var ex = data['ex'];
        var ey = data['ey'];
        var limit = data['limit'];
        return this.findImageByColor(image1, templateImg, x, y, ex, ey, threshold, limit);
    } catch (e) {
    } finally {
        if (!_isNull(templateImg)) {
            templateImg.recycle();
        }
    }
    return null;
};


/**
 * 通过颜色找图，支持透明图，这个不需要处理话opencv
 * <p>
 * 整张图片都找不到时返回null
 * @param image1     大图片
 * @param template  小图片（模板）
 * @param x         找图区域 x 起始坐标
 * @param y         找图区域 y 起始坐标
 * @param ex 终点X坐标
 * @param ey 终点Y坐标
 * @param limit 限制结果的数量，如果要找到1个，就填写1，如果是多个请填写多个
 * @param extra 扩展函数，map结构例如<Br/>
 * {"firstColorOffset":"#101010","firstColorThreshold":1.0,"firstColorOffset":"#101010","otherColorThreshold":0.9,"cmpColorSucThreshold":1.0}
 * <Br/>firstColorOffset: 第一个匹配到的颜色偏色,例如 #101010 <Br/>
 * firstColorThreshold: 第一个匹配到的颜色偏色系数，例如 0.9<Br/>
 * firstColorOffset: 剩下需要找的颜色 偏色,例如 #101010<Br/>
 * otherColorThreshold: 剩下需要找的颜色 偏色系数，例如 0.9<Br/>
 * cmpColorSucThreshold: 成功匹配多少个颜色系数 就认为是成功的，例如 0.9 = 90%个点<Br/>
 * startX: 第一个点从哪里开始找的X坐标<Br/>
 * startY: 第一个点从哪里开始找的Y坐标<Br/>
 * @return {null|Point[]} Point 坐标点数组或者null
 */
ImageWrapper.prototype.findImageByColorEx = function (image1, template, x, y, ex, ey, limit, extra) {
    if (imageWrapper == null || image1 == null || template == null) {
        return;
    }
    if (extra) {
        extra = JSON.stringify(extra);
    }
    let res = imageWrapper.findImageByColorEx(image1.uuid, template.uuid, x, y, ex - x, ey - y, limit, extra);
    if (res == null || res == "") {
        return null;
    }
    try {


        let d = JSON.parse(res);
        let x1 = [];
        for (let i = 0; i < d.length; i++) {
            x1.push(new Point(d[i]));
        }
        return x1;
    } catch (e) {

    }
    return null;
};

/**
 * 通过颜色找图，支持透明图，这个不需要处理话opencv
 * 整张图片都找不到时返回null
 * @param image1     大图片
 * @param jsonFileName   使用图色工具生成JSON文件,存储到res文件夹中,例如 a.json,小图路径请到json文件配置
 * @return {null|Point[]} 坐标点数组或者null
 */
ImageWrapper.prototype.findImageByColorExJ = function (image1, jsonFileName) {


    if (imageWrapper == null || image1 == null) {
        return null;
    }
    var data = this.readResJSONFile(jsonFileName);
    if (data == null) {
        return null;
    }
    let templateImg = null;
    try {
        var template = data['template'];
        templateImg = image.readResAutoImage(template);
        if (_isNull(templateImg)) {
            return null;
        }
        var x = data['x'];
        var y = data['y'];
        var ex = data['ex'];
        var ey = data['ey'];
        var limit = data['limit'];
        var extra = data['extra'];
        return this.findImageByColorEx(image1, templateImg, x, y, ex, ey, limit, extra);
    } catch (e) {
    } finally {
        if (!_isNull(templateImg)) {
            templateImg.recycle();
        }
    }
    return null;
};


/**
 * 自适应二值化，使用了opencv的adaptiveThreshold函数实现
 * EC 脱机 4.5.0+
 * @param img AutoImage图片对象
 * @param map MAP 参数
 *  diameter : 去噪直径 参考opencv的bilateralFilter函数
 *  adaptiveMethod：自适应二值化方式分别是0和1 ，ADAPTIVE_THRESH_MEAN_C=0，ADAPTIVE_THRESH_GAUSSIAN_C = 1
 *  blockSize：计算单位是像素的邻域块，邻域块取多大，就由这个值作决定，3，5，7这样的奇数
 *  c: 偏移值调整量，
 *  {
 *   "diameter":0,
 *   "adaptiveMethod":1,
 *   "c":9,"blockSize":5}
 * @return {null|AutoImage}
 */
ImageWrapper.prototype.binaryzationEx = function (img, map) {
    if (img == null) {
        return null;
    }
    let xd = imageWrapper.binaryzationEx(img.uuid, JSON.stringify(map));
    if (xd != null && xd != undefined && xd != "") {
        return new AutoImage(javaString2string(xd));
    }
    return null;
};


function Yolov8Wrapper() {

}

let yolov8Api = new Yolov8Wrapper();

function Yolov8Util(instance) {
    this.yolov8Instance = instance;
}

/**
 * 获取YOLOV8错误消息
 * 适配EC 脱机 4.3.0+
 * @return {null|string} 字符串
 */
Yolov8Util.prototype.getErrorMsg = function () {
    return ocrWrapper.getYolov8ErrorMsg(this.yolov8Instance);
}

/**
 * 获取 yolov8 默认配置
 * 适配EC 脱机 4.3.0+
 * @param model_name 模型名称 默认写  yolov8s-640 即可
 * @param input_size yolov8训练时候的imgsz参数，默认写640即可
 * @param box_thr 检测框系数，默认写0.25即可
 * @param iou_thr 输出系数，，默认写0.35 即可
 * @param bind_cpu 是否绑定CPU，选项为ALL,BIG,LITTLE 三个,默认写ALL
 * @param use_vulkan_compute 是否启用硬件加速，1是，0否
 * @param obj_names JSON数组，训练的时候分类名称例如 ["star","common","face"]
 * @return {null|JSON} JSON 数据
 */
Yolov8Util.prototype.getDefaultConfig = function (model_name, input_size, box_thr, iou_thr, bind_cpu, use_vulkan_compute, obj_names) {
    if ((typeof obj_names) == "string") {
        obj_names = obj_names.split(",");
    }
    let data = {
        "name": "yolov8s-640",
        "input_size": 640,
        "box_thr": 0.25,
        "iou_thr": 0.35,
        "ver": 8,
        "bind_cpu": "ALL",
        "use_vulkan_compute": 0,
        "input_name": "in0",
        "names": [],
        "outputs": [{
            "name": "out0", "stride": 0, "anchors": [0, 0]
        }]
    }
    data["name"] = model_name;
    data["names"] = obj_names;
    data["input_size"] = input_size;
    data["box_thr"] = box_thr;
    data["iou_thr"] = iou_thr;
    data["num_thread"] = 0;
    data["use_vulkan_compute"] = use_vulkan_compute;
    data["bind_cpu"] = bind_cpu;
    return data;
}

/**
 * 初始化yolov8模型
 * 具体如何生成param和bin文件，请参考文件的yolo使用章节，通过yolo的pt转成ncnn的param、bin文件
 * 适配EC 脱机 4.3.0+
 * @param map 参数表 参考 getDefaultConfig函数获取默认的参数
 * @param paramPath param文件路径
 * @param binPath bin文件路径
 * @return {boolean} true 代表成功 false 代表失败
 */
Yolov8Util.prototype.initYoloModel = function (map, paramPath, binPath) {
    if (map == null) {
        return false;
    }
    let data = JSON.stringify(map);
    return ocrWrapper.createYoloModel(this.yolov8Instance, data, paramPath, binPath);
}

/**
 * 检测图片
 * 适配EC 脱机 4.3.0+
 * 返回数据例如
 * [{"name":"heart","confidence":0.92,"left":957,"top":986,"right":1050,"bottom":1078}]
 * name: 代表是分类，confidence:代表可信度，left,top,right,bottom代表结果坐标选框
 * @param bitmap BufferedImage对象
 * @param obj_names JSON数组，不写代表不过滤，写了代表只取填写的分类
 * @return {null|string} 字符串数据
 */
Yolov8Util.prototype.detectBitmap = function (bitmap, obj_names) {
    if (bitmap == null) {
        return null;
    }
    if (obj_names == null || obj_names == undefined) {
        obj_names = []
        obj_names = obj_names.join(",")
    } else {
        obj_names = obj_names.join(",")
    }
    return ocrWrapper.detectBitmap(this.yolov8Instance, bitmap, obj_names);
}

/**
 * 检测图片
 * 适配EC 脱机 4.3.0+
 * 返回数据例如
 * [{"name":"heart","confidence":0.92,"left":957,"top":986,"right":1050,"bottom":1078}]
 * name: 代表是分类，confidence:代表可信度，left,top,right,bottom代表结果坐标选框
 * @param image AutoImage对象
 * @param obj_names JSON数组，不写代表不过滤，写了代表只取填写的分类
 * @return {null|string} 字符串数据
 */
Yolov8Util.prototype.detectImage = function (image, obj_names) {
    if (image == null) {
        return null;
    }
    if (obj_names == null || obj_names == undefined) {
        obj_names = []
        obj_names = obj_names.join(",")
    } else {
        obj_names = obj_names.join(",")
    }
    return ocrWrapper.detectImage(this.yolov8Instance, image.uuid, obj_names);
}


/**
 * 释放yolov8资源
 * 适配EC 脱机 4.3.0+
 * @return {boolean}
 */
Yolov8Util.prototype.release = function () {
    return ocrWrapper.releaseYolo(this.yolov8Instance);
}

/**
 * 初始化yolov8实例
 * 适配EC 7.8.0+
 * @return  {Yolov8Util} 实例对象
 */
Yolov8Wrapper.prototype.newYolov8 = function () {
    let instance = ocrWrapper.newYolov8();
    return new Yolov8Util(instance)
}



