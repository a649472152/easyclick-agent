/**
 * 文件api封装
 * @constructor
 */
function FileWrapper() {

}

var file = new FileWrapper();

/**
 * 获取沙盒的文件夹路径
 * @return {null|string} 字符串
 */
FileWrapper.prototype.getSandBoxDir = function () {
    return ecImporter.getSandBoxDir();
};

/**
 * 获取内部存储地址
 * @param type，documents,library,temp,libraryCaches，documents文件夹类型可以通过爱思导出
 * @returns {null|string} 文件夹地址
 */
FileWrapper.prototype.getInternalDir = function (type) {
    return fileWrapper.getInternalDir(type);
};

/**
 * 拼接出一个带沙盒路径的文件地址
 * @return {null|string} 文件夹地址
 */
FileWrapper.prototype.getSandBoxFilePath = function (fileName) {
    return ecImporter.getSandBoxFilePath(fileName);
};

/**
 *
 * 读取文件中的所有内容
 * @param path 文件路径
 *
 * @return {null|string} 文件内容字符串
 */
FileWrapper.prototype.readFile = function (path) {
    if (fileWrapper == null) {
        return null;
    }
    return javaString2string(fileWrapper.readFile(path));
};


/**
 *
 * 删除文件某一行或者根据包含条件删除
 * @param path 文件路径
 * @param line 行数，如果是-1 代表这个条件不生效
 * @param contains 包含某个字符串就删除，如果为null代表这个条件不生效
 *
 * @return {boolean} true 成功 false 失败
 */
FileWrapper.prototype.deleteLine = function (path, line, contains) {
    if (fileWrapper == null) {
        return false;
    }
    return fileWrapper.deleteLine(path, line, contains);
};

/**
 *
 * 删除文件某一行或者根据包含条件删除
 * 适合大文件
 * 适配 EC 4.7.3+
 * @param path 文件路径
 * @param line 行数，如果是-1 代表这个条件不生效
 * @param contains 包含某个字符串就删除，如果为null代表这个条件不生效
 *
 * @return {boolean} true 成功 false 失败
 */
FileWrapper.prototype.deleteLineEx = function (path, line, contains) {
    if (fileWrapper == null) {
        return false;
    }
    return fileWrapper.deleteLineEx(path, line, contains);
};
/**
 * 列出文件下的所有文件
 * @param path 路径
 * @return {null|string[]} 路径字符串数组
 */
FileWrapper.prototype.listDir = function (path) {
    if (fileWrapper == null) {
        return null;
    }
    let s = fileWrapper.listDir(path);
    if (s == null || s == "") {
        return null;
    }
    try {
        s = JSON.parse(s);
        let r = [];
        for (let i = 0; i < s.length; i++) {
            r.push(javaString2string(s[i]));
        }
        return r;
    } catch (e) {

    }
    return null;
};


/**
 * 列出文件下文件和文件夹
 * 适配EC 脱机 4.1.0+
 * @param path 路径
 * @param recursion true代表递归子文件夹，false代表不递归
 * @return {null|string[]} 路径字符串数组
 */
FileWrapper.prototype.listDir2 = function (path, recursion) {
    if (fileWrapper == null) {
        return null;
    }
    let s = fileWrapper.listDir2(path, recursion);
    if (s == null || s == "") {
        return null;
    }
    try {
        s = JSON.parse(s);
        let r = [];
        for (let i = 0; i < s.length; i++) {
            r.push(javaString2string(s[i]));
        }
        return r;
    } catch (e) {

    }
    return null;
};

/**
 * 将字符串存储到文件中
 * @param data 字符串 数据
 * @param path 文件
 * @return {boolean} true 成功 false 失败
 */
FileWrapper.prototype.writeFile = function (data, path) {
    if (fileWrapper == null) {
        return false;
    }
    return fileWrapper.writeFile(data, path);
};

/**
 * 创建一个文件或者文件夹
 * @param path 路径
 * @return {boolean} true 代表创建成功
 */
FileWrapper.prototype.create = function (path) {
    if (fileWrapper == false) {
        return null;
    }
    return fileWrapper.create(path);
};


/**
 * 删除所有文件或者文件夹
 * @param path 文件或者文件路径
 * @return {boolean} true 代表成功
 */
FileWrapper.prototype.deleteAllFile = function (path) {
    if (fileWrapper == null) {
        return false;
    }
    return fileWrapper.deleteAllFile(path);
};
/**
 * 写入一行到文件中,追加模式
 * @param data 行数据
 * @param path 文件或者文件路径
 * @return {boolean} true代表成功 false 代表失败
 */
FileWrapper.prototype.appendLine = function (data, path) {
    if (fileWrapper == null) {
        return false;
    }
    return fileWrapper.appendLine(data, path);
};

/**
 * 写入一行到文件中,追加模式
 * 适合大文件
 * 适配 EC 4.7.3+
 * @param data 行数据
 * @param path 文件或者文件路径
 * @return {boolean} true代表成功 false 代表失败
 */
FileWrapper.prototype.appendLineEx = function (data, path) {
    if (fileWrapper == null) {
        return false;
    }
    return fileWrapper.appendLineEx(data, path);
};
/**
 * 读取一行数据，如果行号不对，返回的是空
 * @param path   路径
 * @param lineNo 行号
 * @return {null|string} 返回一行字符串
 */
FileWrapper.prototype.readLine = function (path, lineNo) {
    if (fileWrapper == null) {
        return false;
    }
    return javaString2string(fileWrapper.readLine(path, lineNo));
};
/**
 * 读取一行数据，如果行号不对，返回的是空
 * 适合大文件
 * 适配 EC 4.7.3+
 * @param path   路径
 * @param lineNo 行号
 * @return {null|string} 返回一行字符串
 */
FileWrapper.prototype.readLineEx = function (path, lineNo) {
    if (fileWrapper == null) {
        return false;
    }
    return javaString2string(fileWrapper.readLineEx(path, lineNo));
};
/**
 * 读取所有数据
 * @param path 路径
 * @return {null|string} 返回字符串
 */
FileWrapper.prototype.readAllLines = function (path) {
    if (fileWrapper == null) {
        return null;
    }
    let d = fileWrapper.readFile(path);
    if (d == null || d == undefined || d == "") {
        return null;
    }
    return d.split(/\r\n|\n|\r/)
};
/**
 * 创建文件夹
 *
 * @param path 文件夹路径
 * @return {boolean} true 代表成功，false代表失败
 */
FileWrapper.prototype.mkdirs = function (path) {
    if (fileWrapper == null) {
        return false;
    }
    return fileWrapper.mkdirs(path);
};
/**
 * 文件或者文件夹是否存在
 *
 * @param path 路径
 * @return {boolean} true 代表存在，false代表不存在
 */
FileWrapper.prototype.exists = function (path) {
    if (fileWrapper == null) {
        return false;
    }
    return fileWrapper.exists(path);
};

/**
 * 复制文件
 *
 * @param src 源文件路径
 * @param dest 目标文件路径
 * @return {boolean} true 代表成功
 */
FileWrapper.prototype.copy = function (src, dest) {
    if (fileWrapper == null) {
        return false;
    }
    return fileWrapper.copy(src, dest);
};

/**
 * 是否是文件
 *
 * @param path 文件路径
 * @return {boolean} true 是
 */
FileWrapper.prototype.isFile = function (path) {
    if (fileWrapper == null) {
        return false;
    }
    return fileWrapper.isFile(path);
};

/**
 * 是否是文件夹
 * @param path 文件路径
 * @return {boolean} true 是
 */
FileWrapper.prototype.isDir = function (path) {
    if (fileWrapper == null) {
        return false;
    }
    return fileWrapper.isDir(path);
};

