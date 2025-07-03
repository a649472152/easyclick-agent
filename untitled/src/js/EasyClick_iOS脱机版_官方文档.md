# EasyClick iOS 脱机版本产品介绍

本文档根据 [EasyClick 官网 iOS 脱机版产品介绍](https://www.ieasyclick.net/iostjdocs/) 页面内容整理。

## 概述

EasyClick iOS 脱机版是一款针对苹果手机的**免越狱、免硬件**自动化脚本编程软件，适合用于游戏自动化、办公自动化、自动化测试等一系列需要自动处理的事项。

相对于市面上其他的产品，EasyClick iOS脱机版的核心优势在于**免越狱、免硬件**，用户无需对手机进行越狱，也无需购买任何外置硬件即可运行自动化脚本。

此外，它还支持使用H5网页模式来制作功能强大、界面美观的UI。

## iOS 脱机版产品特性

- **简单易编程**：使用流行的JavaScript语言开发，上手门槛低。
- **丰富的API**：提供图像识别、免费OCR等强大的API接口。
- **独立打包**：可将脚本打包成独立的IPA应用，方便安装和分发。
- **免越狱免硬件**：无需越狱和外部硬件即可运行。
- **系统兼容性强**：支持 iOS 15+ 至 18.0+ 的系统版本。
- **智能IDE支持**：提供智能编程环境，提升开发效率。
- **高级自动化功能**：
    - 支持所有点击动作在指定坐标区域内随机进行。
    - 支持通过色块、颜色进行快速查找。
    - 支持基于控件的智能查找，而非传统的坐标模式，适应性更强。
    - 集成OpenCV图像匹配识别技术，图像识别率高达95%以上。

## 工具特性

- **JavaScript语言开发**：开发者可以使用熟悉的JavaScript语言进行脚本编写。
- **兼容Swift库**：所有Swift的类库都可适用，无需重复编写代码。
- **智能IDE**：开发工具支持屏幕实时同步，方便调试。
- **实时日志**：自带日志查看功能，可以实时查看脚本的运行结果。

## EasyClick iOS脱机版能做什么？

- App数据爬虫
- App自动化测试
- 敏感数据提取
- 营销软件开发

## EasyClick iOS脱机版适合人群

- 有意学习自动化测试脚本的人员。
- 希望用自动操作代替繁琐手动操作的人员。
- 企业App测试团队及相关测试人员。
- 从事爬虫行业的研发人员。

## 技术交流

官方提供了多个QQ群供开发者交流：
- Q群1: 777164022
- Q群2: 922739785
- Q群3: 647082990
- Q群4: 772810035
- Q群5: 484379843
- Q群6: 435253761
- Q群7: 397570651
- Q群8: 12076933
- Q群9: 778278905

---
*来源: [EasyClick官网](https://www.ieasyclick.net/iostjdocs/)*

---

## 版本记录

### 最新发布版本

#### 5.10.0 (发布时间: 2025-5-6)
- 新增idea脱机版模板ui+脚本交互代码
- 新增脱机开放接口支持跨域
- 新增支持新版本中控传输多个文件功能
- 新增H5页面、ui.js与脚本之间互相注入函数以及交互调用功能 
- 优化部分可能导致崩溃的问题
- 在线生成H5模板地址: https://uc.ieasyclick.com/designer

### 历史版本

#### 5.9.0 (发布时间: 2025-4-10)
- 新增isReleaseIec函数判断是否是release的脚本
- 优化部分功能
- 在线生成H5模板地址: https://uc.ieasyclick.com/designer

#### 5.8.0 (发布时间: 2025-3-26)
- 新增 TesseractOCR 文字识别功能，具体请看ocr模块
- 优化部分功能
- 在线生成H5模板地址: https://uc.ieasyclick.com/designer

#### 5.7.0 (发布时间: 2025-3-24)
- 新增idea创建vue+element工程模板，并支持UI拖拽生成的H5网页
- 新增idea跳转到H5在线设计器网页菜单
- 修复mat模式下生成二维码的的问题 
- 优化回收mat可能导致崩溃的问题 
- 优化其他功能
- 在线生成H5模板地址: https://uc.ieasyclick.com/designer

#### 5.6.0 (发布时间: 2025-3-12)
- 新增base64ToImage函数
- 修改普通多点找色范围只对首个点生效
- 修改mat模式多点找色范围只对首个点生效
- 优化部分功能

#### 5.5.0 (发布时间: 2025-2-20)
- 新增setFetchNodeParam函数中的 maxChildCount 子节点最大数量设置 
- 新增idea节点调试设置子节点最大数量设置
- 优化部分功能 
- maxChildCount功能需要更新代理IPA和主程序IPA

#### 5.4.0 (发布时间: 2025-2-6)
- 新增设置页面在线初始化授权功能，可以不用激活器初始化
- 优化app标题栏高度适配高分辨率的设备
- 优化部分功能

#### 5.3.0 (发布时间: 2025-1-20)
- 新增找图找色带J结尾的函数，读取JSON文件找图找色，方便修改
- 新增api_ext.js部分判断函数例如 _isNull等
- 扩展AutoImage函数的功能，可以使用AutoImage对象实例直接找图找色，无需使用image对象
- 拓展js的string、array功能，请看api_ext.js文件
- 修复mat模式下单点比色的逻辑问题
- 优化多点比色与文档注释结果保持一致

#### 5.2.0 (发布时间: 2025-1-8)
- 新增图色范围参数检查,防止越界
- 新增idea打包代理端口，以及runner打包输出，减少特征
- 优化部分功能 
- 用法：打包的时候修改代理ipa的端口，同时签名安装打包的主程序和代理ipa主程序才行

#### 5.1.0 (发布时间: 2024-12-31)
- 新增idea鼠标右键修复项目结构功能
- 新增console.info等日志函数支持
- 修复UI中vue3的不能运行的问题
- 优化部分功能

#### 5.0.0 (发布时间: 2024-12-19)
- 新增线程模块
- 新增setDisplayLineNumber
- 新增idea以及APP的npm支持(工程鼠标右键-新增npm支持)
- 新增idea以及APP的TypeScript支持(工程鼠标右键-新增typescript支持)
- 新增idea自动编译typescript文件等
- 新增idea中readRes开头函数行标图标，点击可打开res的对应文件
- 优化require函数 
- 优化键盘输入法启动和输入问题
- 优化部分功能

#### 4.12.0 (发布时间: 2024-12-09)
- 新增生成二维码的函数 createQRCode 
- 新增解析二维码的函数 decodeQRCode
- 修复idea文档问题
- 优化部分功能

#### 4.10.0 (发布时间: 2024-11-14)
- 新增IDEA脱机版本远程调试功能
- 新增设置里查看崩溃日志按钮
- 新增dataMd5函数
- 新增显示系统通知等函数 
- 优化部分功能

#### 4.9.0 (发布时间: 2024-11-07)
- 新增授权相册权限 requestPhotoAuthorization 函数
- 新增清空相册图片 deleteAllPhotos
- 新增 setOrientation 设置方向函数
- 新增 setLogViewSizeEx,showLogWindow,closeLogWindow 函数
- 优化部分功能
- [建议使用idea配置代码编译期间混淆后[参考ec安卓的混淆配置]，少量在实际生产中使用，该版本非稳定版本]

#### 1.4.3
- 修复findImageByColor问题
- 修复readResAutoImage资源不存在返回值问题
- 修复saveResToFile保存文件的问题
- 优化部分功能
- [建议使用idea配置代码编译期间混淆后[参考ec安卓的混淆配置]，少量在实际生产中使用，该版本非稳定版本]

#### 1.4.0
- 新增多worker对节点操作自动隔离功能
- 修复UI在无网络或者4G网络不展示问题
- 修复重复worker名称造成死循环问题
- 优化部分功能
- [建议使用idea配置代码编译期间混淆后[参考ec安卓的混淆配置]，少量在实际生产中使用，该版本非稳定版本]

#### 1.3.0
- 脱机版本支持12.0+以上版本，均可安装,12 ~ 15范围使用[激活器或中控-年后开发]加持启动代理，15以上可以点击图标启动
    - 注意函数使用:
        - 1、使用apple vision的ocr需要13.0+
        - 2、使用日志悬浮窗需要15.0+
- 新增 require 函数
- 新增boundsFilter节点过滤条件
- 新增worker模块代替多线程
- 新增getCurrentWorkerName函数
- 新增idea抓节点设置boundsFilter属性
- 新增热更新功能
- 新增websocket功能
- 新增设置界面恢复默认脚本、清除所有UI配置功能
- 新增utils.fileMd5函数
- 修复idea找图代码生成的method不对问题
- 修复打包脚本覆盖升级问题
- 修复image.clip函数问题
- 修复lockNode函数问题
- 修复 window.ec.call 报错问题 
- 修复execScript动态执行脚本type函数问题
- 移动ui参数配置到Documents中，可爱思读取备份
- [建议使用idea配置代码编译期间混淆后，少量在实际生产中使用，该版本非稳定版本]

#### 1.2.0
- 完善ocr功能
- 完善图像二值化函数
- 完善普通版打包功能
- 开放接口配合USB版本的功能，剪切板、打开url、相册操作等
- [建议少量在实际生产中使用，该版本非稳定版本]

#### 1.1.0
- 完善iOS脱机版本以下函数:
- readResAutoImage
- utils.getRangeInt,random
- http.request
- utils.saveImageToAlbum
- utils.saveImageToAlbumPath
- utils.saveVideoToAlbumPath
- image.isRecycled
- image.saveTo
- image.toBase64Format
- image.clip
- image.pixel
- image.getWidth
- image.getHeight
- image.argb
- [不建议在实际生产中使用，该版本非稳定版本]

#### 1.0.0
- 初始化版本
- [不建议在实际生产中使用，该版本非稳定版本]

---
*版本记录来源: [EasyClick官网](https://www.ieasyclick.net/iostjdocs/zh-cn/changelog)* 

---

## 教程资源

### 开发插件下载

- **[开发插件、中控系统、签名工具、IPA包 等都在网盘一起下载即可]**
  - **123网盘**: [https://www.123pan.com/s/6Hlmjv-QayIA.html](https://www.123pan.com/s/6Hlmjv-QayIA.html)
  - **百度网盘下载**: [https://pan.baidu.com/s/124sTYQAZkedgfnTv3iFTZg](https://pan.baidu.com/s/124sTYQAZkedgfnTv3iFTZg) (提取码: `7bhy`)

### Idea开发工具

- 下载idea开发工具，文件以`idea-xxx`开头的，也可以自行到idea官网下载，下载并安装idea到电脑，然后安装开发插件到idea中。
- **IDEA官网下载地址**: [https://www.jetbrains.com.cn/idea/download/other.html](https://www.jetbrains.com.cn/idea/download/other.html)
  - **商业版本 (JS智能提示)**: 2024.2.4.win.zip - [下载链接](https://download.jetbrains.com/idea/ideaIU-2024.2.4.win.zip)
  - **社区版本 (免费)**: 2024.2.4.win.zip - [下载链接](https://download.jetbrains.com/idea/ideaIC-2024.2.4.win.zip)

### 视频教程

- **Mr_老冷的教程**:
  - **网站**: [http://laoleng.vip/docs/laoleng-vip/ios-tj/](http://laoleng.vip/docs/laoleng-vip/ios-tj/)
  - **B站免费课**: [http://laoleng.vip/docs/free-courses/ec-ios-tj](http://laoleng.vip/docs/free-courses/ec-ios-tj)

---
*教程资源来源: [EasyClick官网 - 开发资源下载](https://www.ieasyclick.net/iostjdocs/zh-cn/tools/download_resources)*

---

## 脚本函数总览

EasyClick iOS 脱机版提供了丰富的脚本API，涵盖自动化、图色、节点、设备、文件、网络、线程、插件、工具等各类常用功能，便于开发者实现高效的自动化脚本开发。

#### 主要模块

- **全局模块**：无需前缀即可直接调用的全局函数，如日志、时间、配置、服务检测等。
- **全局快捷事件**：常用的点击、滑动、输入、方向、系统按键等快捷操作。
- **节点函数**：用于查找、操作UI节点，支持多种选择器和节点级联操作。
- **图色函数**：图像识别、找色、找图、比色、截图等自动化核心功能。
- **YOLO函数**：基于YOLOv8的目标检测，支持自定义模型。
- **OCR识别**：多种OCR引擎，支持文字识别与定位。
- **设备函数**：获取设备信息、屏幕参数、电池状态等。
- **文件函数**：文件读写、目录操作、复制、删除等。
- **网络函数**：HTTP请求、下载、WebSocket等网络通信能力。
- **线程函数**：多worker并发、线程间通信等。
- **输入法函数**：剪切板、输入法相关操作。
- **插件函数**：加载和调用自定义插件。
- **激活器函数**：与PC端激活器联动，远程控制设备。
- **多Worker函数**：多worker并发、隔离执行。
- **工具函数**：剪切板、通知、二维码、音乐播放等常用工具。
- **网络验证函数**：卡密、云变量等安全验证能力。
- **企业云控**：企业级云控相关API。

> 参考：[EasyClick官网-脚本函数总览](https://www.ieasyclick.net/iostjdocs/zh-cn/funcs)

---

### 全局模块

全局模块是指无需对象前缀，直接调用即可使用的API，涵盖了脚本生命周期、日志、配置、时间、服务检测等常用功能。

#### 主要API与用法

- **获取应用版本**
  ```javascript
  function main() {
      logd(version());
  }
  main();
  ```

- **脚本启停**
  - 退出脚本：`exit();`
  - 判断脚本是否已退出：`isScriptExit()`
  - 暂停执行：`sleep(1000);`
  - 执行外部JS：`execScript(2, "logd(1)")`
  - 重启脚本：`restartScript(null, false, 3)`

- **JS导入**
  - 导入模块：`let lib = require("res/lib.js");`

- **JSON处理**
  - 对象转JSON字符串：`JSON.stringify(obj)`
  - JSON字符串转对象：`JSON.parse(str)`

- **监听脚本和服务**
  - 设置停止回调：`setStopCallback(function(){ ... })`
  - 设置异常回调：`setExceptionCallback(function(e){ ... })`

- **日志消息方法**
  - 设置日志等级：`setLogLevel("D")`
  - 日志输出：`logd(msg), loge(msg), logw(msg), logi(msg)`
  - 显示行号：`setDisplayLineNumber(true)`
  - 保存日志到文件：`setSaveLogEx(true, "log.txt", 1024*1024)`

- **日志窗口**
  - 设置日志窗口属性：`setLogViewSizeEx(x, y, w, h, alpha)`
  - 显示/关闭日志窗口：`showLogWindow()`, `closeLogWindow()`

- **读取IEC包资源**
  - 读取文件/字符串/图片资源：`readIECFileAsString(path)`, `readResString(name)`, `readResAutoImage(path)`
  - 保存资源为文件：`saveResToFile(resPath, savePath)`
  - 查找IEC文件：`findIECFile(path)`

- **UI参数读取**
  - 删除/读取/更新配置：`deleteConfig(key)`, `readConfigInt(key, def)`, `readConfigString(key, def)`, `readConfigBoolean(key, def)`, `getConfigJSON()`, `updateConfig(key, value)`

- **自动化服务相关**
  - 检查服务状态：`isServiceOk()`
  - 启动自动化服务：`startEnv()`

- **告警发送**
  - 发送钉钉消息：`sendDingDingMsg(url, secret, msg, at)`

- **时间相关**
  - 当前时间戳：`time()`
  - 格式化时间：`timeFormat("yyyy-MM-dd HH:mm:ss")`
  - 计时：`console.time(label)`, `console.timeEnd(label)`

- **其他常用**
  - 判断是否发布版：`isReleaseIec()`
  - 获取授权到期时间：`getDeviceExpTime()`
  - 设置悬浮窗控制脚本启停：`setPipCtrlScript(true)`
  - 随机数：`random(min, max)`
  - 程序前台：`takeMeToFront()`
  - 获取自身包名/应用名：`getMyBundleId()`, `getMyAppName()`

> 参考：[EasyClick官网-全局模块](https://www.ieasyclick.net/iostjdocs/zh-cn/funcs/global/)

---

### 全局快捷事件

#### 说明
全局模块中封装的快捷事件，便于实现常用的点击、滑动、输入、方向、系统按键等自动化操作。

---

#### 点击函数

- **clickPoint 坐标点击**
  - 描述：点击指定坐标。
  - 参数：x, y（坐标）
  - 返回：boolean
  - 示例：
    ```javascript
    function main() {
        var result = clickPoint(100, 100);
        if (result) {
            logd("点击成功");
        } else {
            logd("点击失败");
        }
    }
    main();
    ```

- **clickPointPressure 带压力点击坐标**
  - 描述：带压力点击坐标，适合 EC 脱机 2.1.0+
  - 参数：x, y, pressure（0-1区间）
  - 返回：boolean
  - 示例：
    ```javascript
    function main() {
        var result = clickPointPressure(100, 100, 0.2);
        if (result) {
            logd("点击成功");
        } else {
            logd("点击失败");
        }
    }
    main();
    ```

- **longClickPoint 坐标长点击**
  - 描述：长点击指定坐标。
  - 参数：x, y
  - 返回：boolean
  - 示例：
    ```javascript
    function main() {
        var result = longClickPoint(100, 100);
        if (result) {
            logd("点击成功");
        } else {
            logd("点击失败");
        }
    }
    main();
    ```

- **doubleClickPoint 坐标双击**
  - 描述：双击指定坐标。
  - 参数：x, y
  - 返回：boolean
  - 示例：
    ```javascript
    function main() {
        var result = doubleClickPoint(100, 100);
        if (result) {
            logd("点击成功");
        } else {
            logd("点击失败");
        }
    }
    main();
    ```

- **press 坐标长按**
  - 描述：在指定坐标长按一段时间。
  - 参数：x, y, delay（毫秒）
  - 返回：boolean
  - 示例：
    ```javascript
    function main() {
        var result = press(100, 100, 5000);
        if (result) {
            logd("长按成功");
        } else {
            logd("长按失败");
        }
    }
    main();
    ```

---

#### 多点触摸

- **multiTouch 多点触摸**
  - 描述：模拟多个手指同时或依次触摸屏幕。
  - 参数：touch1~touch5（每个手指的触摸点数组），timeout（总超时时间，毫秒）
  - 返回：boolean
  - 示例：
    ```javascript
    function main() {
        // 数组式写法
        var touch1 = [
            {"action": 0, "x": 500, "y": 1200, "pointer": 1, "delay": 1},
            {"action": 2, "x": 500, "y": 1100, "pointer": 1, "delay": 20},
            {"action": 2, "x": 500, "y": 1000, "pointer": 1, "delay": 20},
            {"action": 1, "x": 500, "y": 1000, "pointer": 1, "delay": 20}
        ];
        // 链式调用写法
        var touch2 = MultiPoint.get()
            .action(0).x(300).y(1200).pointer(2).delay(1)
            .next()
            .action(2).x(300).y(1100).pointer(2).delay(1)
            .next()
            .action(1).x(300).y(1100).pointer(2).delay(1);
        var success = multiTouch(touch1, touch2, null, null, null, 30000);
        logd("多点触摸结果: " + success);
    }
    main();
    ```

---

#### 滑动函数

- **swipeToPoint 坐标点滑动**
  - 描述：从一个坐标滑动到另一个坐标。
  - 参数：startX, startY, endX, endY, duration（毫秒）
  - 返回：boolean
  - 示例：
    ```javascript
    function main() {
        var result = swipeToPoint(10, 10, 100, 100, 200);
        logd(result ? "滑动成功" : "滑动失败");
    }
    main();
    ```

- **swipeToPointPressure 带压力坐标点滑动**
  - 描述：带压力从一个坐标滑动到另一个坐标。
  - 参数：startX, startY, endX, endY, duration, pressure（0-1）
  - 返回：boolean
  - 示例：
    ```javascript
    function main() {
        var result = swipeToPointPressure(10, 10, 100, 100, 200, 0.2);
        logd(result ? "滑动成功" : "滑动失败");
    }
    main();
    ```

---

#### 输入数据

- **inputText 输入数据**
  - 描述：输入指定的文字内容。
  - 参数：content（字符串），duration（毫秒）
  - 返回：boolean
  - 示例：
    ```javascript
    function main() {
        var result = inputText("我是内容", 100);
        logd(result ? "输入成功" : "输入失败");
    }
    main();
    ```

- **ioHIDEvent 模拟键盘**
  - 描述：模拟底层人机交互事件，如键盘按键。
  - 参数：eventPageID, eventUsageID, delay
  - 返回：boolean
  - 示例：
    ```javascript
    function main() {
        // 模拟按下 'n' 键
        let x = ioHIDEvent("0x07", "0x11", 0.2);
        logd("ioHIDEvent 结果: " + x);
    }
    main();
    ```

---

#### 屏幕方向

- **setOrientation 设置屏幕方向**
  - 描述：设置屏幕方向，横屏只支持向右旋转90度。
  - 参数：orientation（1竖屏，2横屏）
  - 返回：boolean
  - 示例：
    ```javascript
    function main() {
        let x = setOrientation(1);
        logd("设置屏幕方向结果: " + x);
    }
    main();
    ```

- **getOrientation 获取屏幕方向**
  - 描述：获取当前屏幕的方向。
  - 返回：number（0竖屏，1横屏）
  - 示例：
    ```javascript
    function main() {
        let x = getOrientation();
        logd("当前屏幕方向: " + x);
    }
    main();
    ```

---

#### 系统按键相关

- **home 返回主页**
  - 返回：boolean
  - 示例：`home();`

- **homeScreen 强制进入主页**
  - 返回：boolean
  - 示例：`homeScreen();`

- **isLocked 屏幕是否锁定**
  - 返回：boolean
  - 示例：`logd("屏幕已锁定: " + isLocked());`

- **lockScreen 锁定屏幕**
  - 返回：boolean
  - 示例：
    ```javascript
    function main() {
        var result = lockScreen();
        if (result) {
            logd("成功");
        } else {
            logd("失败");
        }
    }
    main();
    ```

- **unlockScreen 解锁屏幕**
  - 描述：解锁屏幕，前提是屏幕没有密码。
  - 返回：boolean
  - 示例：
    ```javascript
    function main() {
        var result = unlockScreen();
        if (result) {
            logd("成功");
        } else {
            logd("失败");
        }
    }
    main();
    ```

- **appLaunch 运行程序**
  - 参数：bundleId（App的Bundle ID），ignoreState（"1"忽略之前打开的状态）
  - 返回：boolean
  - 示例：
    ```javascript
    function main() {
        var result = appLaunch("com.tencent.xin", "1");
        logd("启动App结果: " + result);
    }
    main();
    ```

- **appKillByBundleId 杀死程序**
  - 参数：bundleId、ignoreState
  - 返回：boolean
  - 示例：
    ```javascript
    function main() {
        var result = appKillByBundleId("com.tencent.xin", "1");
        logd("杀死App结果: " + result);
    }
    main();
    ```

- **setAgentTimeout 设置代理请求超时**
  - 参数：envTimeout（自动化超时时间，毫秒），readTimeout（其他请求超时时间，毫秒）
  - 返回：boolean
  - 示例：
    ```javascript
    setAgentTimeout(10000, 3000);
    ```

- **setAgentPort 设置代理运行的端口**
  - 参数：port（大于1024）
  - 返回：boolean
  - 示例：
    ```javascript
    setAgentPort(12008);
    ```

- **setComputeMode 设置算力模式**
  - 参数：type（1=agent，2=app）
  - 返回：无
  - 示例：
    ```javascript
    setComputeMode(2);
    ```

---

#### 中控相关函数

- **getCenterTaskInfo 获取中控任务参数**
  - 描述：获取中控下发的任务参数信息。
  - 返回：object（JSON对象）
  - 示例：
    ```javascript
    function main() {
        let taskInfo = getCenterTaskInfo();
        if (taskInfo) {
            logd(JSON.stringify(taskInfo));
            let value = taskInfo["valueJson"];
            logd(JSON.stringify(value));
        }
    }
    main();
    ```

---

#### 坐标系转换

- **convertPointToClickable 横屏坐标转竖屏点击坐标**
  - 描述：将横屏的坐标转换为可以点击的竖屏坐标。
  - 参数：x, y
  - 返回：object（{x, y}）
  - 示例：
    ```javascript
    function main() {
        let d = convertPointToClickable(100, 300);
        logd("x " + d.x + " y " + d.y);
    }
    main();
    ```

---
> 参考：[EasyClick官网-全局快捷事件](https://www.ieasyclick.net/iostjdocs/zh-cn/funcs/global/global-shortcut)

### 节点函数

#### 说明
节点模块函数主要用于UI节点的查找与操作，无需模块前缀，直接调用。部分机器获取节点较慢，建议获取节点后锁定节点再查找，也可通过设置节点参数优化性能。

---

#### setFetchNodeParam 设置节点参数
- 描述：设置获取节点的基础参数，可减少节点数量和提升速度。
- 参数：ext（map对象），如{"visibleFilter":1}
  - visibleFilter：1=全部，2=只获取visible=true
  - labelFilter：1=全部，2=只获取label有值
  - boundsFilter：1=不过滤，2=过滤无效区域
  - maxDepth：最大层级，建议1-50
  - maxChildCount：最大子节点数，0不限制
  - excludedAttributes：过滤属性，逗号分隔
- 返回：boolean
- 示例：
  ```javascript
  function main() {
      var data = setFetchNodeParam({
          "labelFilter": "2",
          "boundsFilter": "1",
          "maxDepth": "20",
          "visibleFilter": "2",
          "excludedAttributes": ""
      });
      logd(data);
  }
  main();
  ```

---

#### getNodeInfo 获取节点集合
- 描述：配合选择器使用，获取所有匹配的节点对象集合。
- 参数：timeout（毫秒）
- 返回：array（节点对象集合）
- 示例：
  ```javascript
  function main() {
      var data = label("aaa").getNodeInfo(1000);
      logd(JSON.stringify(data));
  }
  main();
  ```

#### getOneNodeInfo 获取单节点
- 描述：配合选择器使用，获取第一个匹配的节点对象。
- 参数：timeout（毫秒）
- 返回：NodeInfo（节点对象）
- 示例：
  ```javascript
  function main() {
      var data = label("aaa").getOneNodeInfo(1000);
      logd(JSON.stringify(data));
  }
  main();
  ```

---

#### 选择器函数

- **id / idMatch**
  - id：id属性全匹配
  - idMatch：id属性正则匹配
  - 示例：
    ```javascript
    setFetchNodeParam({"labelFilter": "2", "maxDepth": "20", "visibleFilter": "2", "excludedAttributes": ""});
    releaseNode();
    lockNode();
    let nd = id("设置").getOneNodeInfo(1000);
    if (nd) {
        let c = clickPoint(nd.bounds.centerX(), nd.bounds.centerY());
        logd("点击结果: " + c);
    }
    nd = idMatch(".*置.*").getNodeInfo(1000);
    if (nd) {
        logd("idMatch 查找到的节点信息: " + JSON.stringify(nd));
    }
    releaseNode();
    ```

- **xpath**
  - 描述：使用XPath选择器
  - 示例：
    ```javascript
    var selector = xpath("//node[@label='易点云测']");
    let n = selector.getNodeInfo(1000);
    logd(JSON.stringify(n));
    ```

- **label / labelMatch**
  - label：label属性全匹配
  - labelMatch：label属性正则匹配
  - 示例：
    ```javascript
    let nd = label("设置").getOneNodeInfo(1000);
    if (nd) {
        logd(JSON.stringify(nd));
    }
    ```

- **name / nameMatch**
  - name：name属性全匹配
  - nameMatch：name属性正则匹配
  - 示例：
    ```javascript
    let nd = name("设置").getOneNodeInfo(1000);
    if (nd) {
        logd(JSON.stringify(nd));
    }
    ```

- **type / typeMatch**
  - type：type属性全匹配
  - typeMatch：type属性正则匹配
  - 示例：
    ```javascript
    let nd = type("XCUIElementTypeOther").getOneNodeInfo(1000);
    if (nd) {
        logd(JSON.stringify(nd));
    }
    ```

- **value / valueMatch**
  - value：value属性全匹配
  - valueMatch：value属性正则匹配
  - 示例：
    ```javascript
    let nd = value("一些值").getOneNodeInfo(1000);
    if (nd) {
        logd(JSON.stringify(nd));
    }
    ```

- **其他属性选择器**
  - enable(boolean)、accessible(boolean)、visible(boolean)、index(number)、depth(number)、selected(boolean)、childCount(number)、bounds(l, t, r, b)
  - 多属性级联查询示例：
    ```javascript
    let nd = labelMatch(".*1.*").enabled(true).accessible(true).bounds(100, 100, 300, 300).getOneNodeInfo(1000);
    if (nd) {
        logd(JSON.stringify(nd));
    }
    ```

---

#### 节点点击操作
- **clickCenter / click**：点击节点中心点
- **clickRandom**：随机点击节点区域
- 示例：
  ```javascript
  let node = name("地图").getOneNodeInfo(10000);
  if (node) {
      logd(node.clickCenter());
      logd(node.clickRandom());
  }
  ```

---

#### 节点的级联操作
- **parent**：查询节点的父级
- **child**：取得单个子节点
- **allChildren**：取得所有子节点
- **siblings**：取得所有兄弟节点
- **previousSiblings**：取得前面的兄弟节点
- **nextSiblings**：取得后面的兄弟节点
- 示例：
  ```javascript
  let nd = labelMatch(".*1.*").getOneNodeInfo(1000);
  if (nd) {
      let parent = nd.parent();
      let child1 = nd.child(0);
      let allChildren = nd.allChildren();
      let siblings = nd.siblings();
      let previousSiblings = nd.previousSiblings();
      let nextSiblings = nd.nextSiblings();
      logd(JSON.stringify({parent, child1, allChildren, siblings, previousSiblings, nextSiblings}));
  }
  ```

---
> 参考：[EasyClick官网-节点函数](https://www.ieasyclick.net/iostjdocs/zh-cn/funcs/node-api)

### 激活器函数 (tjCenter)

#### 说明
`tjCenter`模块用于通过PC端的"脱机激活器"程序来控制手机，需要在同一局域网内。

#### 主要函数
- `tjCenter.setCenterUrl(url)`: 设置激活器的地址，如 "http://192.168.2.6:8020"。
- `tjCenter.appLaunch(deviceId, bundleId, killExist)`: 启动App。
- `tjCenter.appKillByBundleId(deviceId, bundleId)`: 杀死App。
- `tjCenter.flushDevImage(deviceId)`: 刷入开发者镜像。
- `tjCenter.startAgent(deviceId)`: 开启Agent程序以启动自动化。
- `tjCenter.authInit(deviceId)`: 初始化设备授权。
- `tjCenter.setWifiCon(deviceId, status)`: "1"开启，"2"关闭设备的WIFI连接功能。

---
*节点函数及激活器函数来源: [节点函数](https://www.ieasyclick.net/iostjdocs/zh-cn/funcs/node-api), [激活器函数](https://www.ieasyclick.net/iostjdocs/zh-cn/funcs/tjcenter-api)*

### 图色函数

#### 说明
图色函数用于处理图像、颜色，并在屏幕上进行查找，是自动化脚本中最常用的功能之一。所有函数均以`image.`为前缀调用。

---

#### 设置

- **image.setInitParam 初始化参数**
  - 描述：设置图色模块初始化参数。
  - 参数：params（对象）
  - 示例：
    ```javascript
    function main() {
        image.setInitParam({});
    }
    main();
    ```

- **image.useOpencvMat 切换图片存储模式**
  - 描述：切换图片存储为OpenCV的mat格式，提升速度、降低内存。
  - 参数：use（1=是，0=否）
  - 返回：boolean
  - 示例：
    ```javascript
    function main() {
        let r = image.useOpencvMat(1);
        logd(r);
    }
    main();
    ```

---

#### 截图

- **image.captureFullScreenEx 截取全屏Image对象（JPG）**
  - 描述：抓取全屏，格式为JPG，可调截图方式和质量。
  - 参数：ext（对象），如{"fetchImageMode":1, "fetchImageQuality":50}
  - 返回：AutoImage对象或null
  - 示例：
    ```javascript
    function main() {
        let cap = image.captureFullScreenEx({"fetchImageMode": "1", "fetchImageQuality": 50});
        image.saveTo(cap, "b.jpg");
        image.recycle(cap);
    }
    main();
    ```

- **image.captureFullScreen 截取全屏Image对象**
  - 描述：截取当前屏幕并返回Image对象，格式为JPG。
  - 返回：AutoImage对象或null
  - 示例：
    ```javascript
    function main() {
        let cap = image.captureFullScreen();
        image.recycle(cap);
    }
    main();
    ```

- **image.captureFullScreenUIImage 截屏UIImage对象**
  - 描述：截屏为UIImage对象，适配插件等场景。
  - 参数：ext（对象），type/quality可选
  - 返回：UIImage对象或null
  - 示例：
    ```javascript
    function main() {
        let img2 = image.captureFullScreenUIImage({});
        // 适配插件等场景
    }
    main();
    ```

---

#### 比色

- **image.cmpColor 多点比色**
  - 描述：单点或多点比色，所有点都符合返回true。
  - 参数：image1（图片），points（字符串），threshold（0.0~1.0），x, y, ex, ey（区域）
  - 返回：boolean
  - 示例：
    ```javascript
    function main() {
        let aimage = image.captureFullScreen();
        let points = "205|1130|0xff944b-0x101010,211|1158|0xff8e42,191|1175|0xfcfbf7";
        let result = image.cmpColor(aimage, points, 0.95, 0, 0, 0, 0);
        logd(result);
        image.recycle(aimage);
    }
    main();
    ```

---

#### 找色

- **image.findColor 单点找色**
  - 描述：在图片中查找某个颜色的所有出现位置。
  - 参数：image（图片），color（颜色），threshold，x, y, ex, ey，limit
  - 返回：坐标点对象数组或null
  - 示例：
    ```javascript
    function main() {
        let aimage = image.captureFullScreen();
        let result = image.findColor(aimage, "0xff944b", 0.95, 0, 0, 0, 0, 10);
        logd(JSON.stringify(result));
        image.recycle(aimage);
    }
    main();
    ```

- **image.findMultiColor 多点找色**
  - 描述：类似按键精灵的多点找色。
  - 参数：image，firstColor，points，threshold，x, y, ex, ey，limit
  - 返回：基准点坐标数组或null
  - 示例：
    ```javascript
    function main() {
        let aimage = image.captureFullScreen();
        let result = image.findMultiColor(aimage, "0xff944b", "10|10|0xff8e42", 0.95, 0, 0, 0, 0, 10);
        logd(JSON.stringify(result));
        image.recycle(aimage);
    }
    main();
    ```

---

#### 找图

- **image.findImage 找图（OpenCV模板匹配）**
  - 描述：在大图中寻找小图，使用OpenCV模板匹配。
  - 参数：image（大图），template（小图），threshold，x, y, ex, ey，limit，method
  - 返回：矩形区域对象数组或null
  - 示例：
    ```javascript
    function main() {
        let big = image.captureFullScreen();
        let small = image.readImage("small.png");
        let result = image.findImage(big, small, 0.9, 0, 0, 0, 0, 10, 5);
        logd(JSON.stringify(result));
        image.recycle(big);
        image.recycle(small);
    }
    main();
    ```

- **image.findImageByColor 透明找图**
  - 描述：根据颜色进行找图，可忽略小图中的某些颜色。
  - 参数：同findImage，但不含method
  - 返回：坐标点对象数组或null
  - 示例：
    ```javascript
    function main() {
        let big = image.captureFullScreen();
        let small = image.readImage("small.png");
        let result = image.findImageByColor(big, small, 0.9, 0, 0, 0, 0, 10);
        logd(JSON.stringify(result));
        image.recycle(big);
        image.recycle(small);
    }
    main();
    ```

---

#### 图片操作与转换

- **image.saveTo 保存到文件**
  - 描述：将Image对象保存到本地文件。
  - 参数：img（Image），path（字符串）
  - 返回：boolean

- **image.readImage 读取文件为Image**
  - 描述：从本地文件路径加载图片为Image对象。
  - 参数：path（字符串）
  - 返回：Image对象或null

- **image.clip 剪切图片**
  - 描述：从大图中裁剪出一块小图。
  - 参数：img，x, y, w, h
  - 返回：新的Image对象

- **image.pixel 图片某点颜色值**
  - 描述：获取图片上指定坐标点的颜色值。
  - 参数：img，x，y
  - 返回：number（ARGB格式）

- **image.recycle 回收图片**
  - 描述：回收Image对象，释放内存。
  - 参数：img

- **image.isRecycled 图片回收判断**
  - 描述：判断Image对象是否已被回收。
  - 参数：img
  - 返回：boolean

- **image.autoImageToUIImage / image.uiimageToAutoImage**
  - 描述：AutoImage与UIImage互转，适配插件等场景。

- **image.imageToMatFormat / image.matToImageFormat**
  - 描述：AutoImage与Mat格式互转，适合高效图像处理。

---
> 参考：[EasyClick官网-图色函数](https://www.ieasyclick.net/iostjdocs/zh-cn/funcs/image-api)

### YOLO函数

#### 说明
YOLO（You Only Look Once）是一种高效的目标检测算法。EasyClick集成了基于ncnn的YOLOv8，支持自定义模型，适用于EC脱机4.3.0+。

---

#### yolov8Api.newYolov8 初始化yolov8实例
- 描述：初始化yolov8实例。
- 返回：Yolov8Util对象
- 示例：
  ```javascript
  function main() {
      // 初始化YOLO实例
      let yolov8s = yolov8Api.newYolov8();
      // 初始化配置选项
      let config = yolov8s.getDefaultConfig("yolov8s-640", 640, 0.25, 0.35, "ALL", 0, [
          "aixin",
          "pinglun"
      ]);
      config["num_thread"] = 1; // 设置CPU线程数
      logd("config : " + JSON.stringify(config));
      // 准备模型文件
      let param = file.getSandBoxFilePath("model.ncnn.param");
      let bin = file.getSandBoxFilePath("model.ncnn.bin");
      saveResToFile("model.ncnn.param", param);
      saveResToFile("model.ncnn.bin", bin);
      // 初始化模型
      let inted = yolov8s.initYoloModel(config, param, bin);
      if (inted) {
          logd("初始化yolov8s成功");
      } else {
          logd("初始化yolov8s失败: " + yolov8s.getErrorMsg());
          return;
      }
      // 检测图片
      let bitmap = image.readImage(file.getSandBoxFilePath("1.png"));
      let result = yolov8s.detectImage(bitmap, []);
      image.recycle(bitmap);
      if (result == null || result == "") {
          logd("yolov8s 无结果: " + yolov8s.getErrorMsg());
      } else {
          logd("yolov8s 结果: " + result);
      }
      yolov8s.release();
  }
  main();
  ```

---

#### Yolov8Util.getDefaultConfig 获取yolov8默认配置
- 描述：获取yolov8默认配置。
- 参数：
  - model_name：模型名称，默认"yolov8s-640"
  - input_size：训练时imgsz参数，默认640
  - box_thr：检测框系数，默认0.25
  - iou_thr：输出系数，默认0.35
  - bind_cpu：ALL/BIG/LITTLE，默认ALL
  - use_vulkan_compute：1=启用硬件加速，0=否，默认0
  - obj_names：分类名称数组
- 返回：JSON对象
- 示例：见"初始化yolov8实例"

---

#### Yolov8Util.initYoloModel 初始化yolov8模型
- 描述：初始化yolov8模型，需param和bin文件。
- 参数：map（配置对象），paramPath（param文件路径），binPath（bin文件路径）
- 返回：boolean
- 示例：见"初始化yolov8实例"

---

#### Yolov8Util.detectImage 检测AutoImage
- 描述：对AutoImage对象进行目标检测。
- 参数：image（AutoImage对象），obj_names（分类过滤数组，可选）
- 返回：string（JSON数组字符串，每项含name、confidence、left、top、right、bottom）
- 示例：见"初始化yolov8实例"

#### Yolov8Util.detectBitmap 检测图片（UIImage）
- 描述：对UIImage对象进行目标检测。
- 参数：bitmap（UIImage对象），obj_names（分类过滤数组，可选）
- 返回：string（JSON数组字符串）
- 示例：见"初始化yolov8实例"

---

#### Yolov8Util.release 释放yolov8资源
- 描述：释放yolov8资源，脚本结束时调用。
- 返回：boolean
- 示例：见"初始化yolov8实例"

#### Yolov8Util.getErrorMsg 获取YOLOV8错误消息
- 描述：获取YOLOV8错误消息。
- 返回：string
- 示例：见"初始化yolov8实例"

---
> 参考：[EasyClick官网-YOLO函数](https://www.ieasyclick.net/iostjdocs/zh-cn/funcs/yolo-api)

### OCR识别

#### 说明
- OCR (Optical Character Recognition) 用于从图像中识别和提取文字。
- **提示**:
    - iOS的js引擎天生是单线程模式，无法实现多线程。这里使用多个jsvm的方式实现多个worker。
    - 多jsvm会启动多个独立的js虚拟机，在iOS进程中运行，相互之间数据隔离。
    - 每个jsvm独立运行，会重新加载所有脚本。需使用 `getCurrentWorkerName()` 来分流业务。
    - 主脚本的worker名称是 `mainWorker`。

#### getCurrentWorkerName
- **描述**: 获取当前的worker名称。
- **返回**: `string` - worker的名称。

#### workerThread.newWorker
- **描述**: 生成一个新的worker。
- **参数**: `name` (`string`) - worker的名称。
- **返回**: `string` - worker的名称，有值代表成功。

#### workerThread.isRunning
- **描述**: 判断指定的worker是否正在运行。
- **参数**: `name` (`string`) - worker的名称。
- **返回**: `boolean` - `true` 代表正在运行。

#### workerThread.hasWorkerFunction
- **描述**: 判断是否存在指定的worker函数。
- **参数**: `funcName` (`string`) - 函数名称。
- **返回**: `boolean`。

#### workerThread.addWorkerFunction
- **描述**: 新增一个工作函数给别的worker调用。
- **参数**: `funcName` (`string`), `callback` (`function`)。
- **返回**: `boolean` - `true` 代表成功。

#### workerThread.removeWorkerFunction
- **描述**: 删除一个工作函数。
- **参数**: `funcName` (`string`)。
- **返回**: `boolean` - `true` 代表成功。

#### workerThread.callWorkerFunction
- **描述**: 调用别的worker注册的函数。
- **参数**: `funcName` (`string`), `data` (参数，建议为字符串)。
- **返回**: `object` - 目标函数返回的对象。

#### workerThread.removeWorker
- **描述**: 取消一个worker。
- **参数**: `name` (`string`) - worker的名称。
- **返回**: `boolean` - `true` 代表成功。

#### workerThread.isCancelled
- **描述**: 判断一个worker是否已被取消。
- **参数**: `name` (`string`) - worker的名称。
- **返回**: `boolean` - `true` 代表已取消。

#### workerThread.stopAll
- **描述**: 取消所有正在运行的worker（无法取消主脚本线程）。
- **返回**: `boolean` - `true` 代表成功。

---
*多Worker函数来源: [EasyClick官网](https://www.ieasyclick.net/iostjdocs/zh-cn/funcs/worker-api)*

---

### 输入法函数 (imeApi)

#### 说明
- **提示**:
    - 输入法函数是脱机版本主程序自带的输入法程序，专门用于输入的。
    - 需要在手机的 `设置`>`通用`>`键盘` 中添加并启用 `[您的应用名称]` 输入法，并"允许完全访问"。
    - 只有当EasyClick自定义键盘（背景为鹅黄色）弹出后，相关函数才可调用，可使用 `imeApi.isOk()` 判断其是否准备就绪。
    - **不适用场景**: 密码输入框、或任何禁止第三方输入法的输入框。

#### imeApi.isOk 输入法状态是否可用
- **描述**: 检查自定义输入法是否已准备就绪 (EC iOS 脱机版 3.15.0+)。
- **返回**: `boolean` - `true` 代表可用, `false` 代表不可用。

#### imeApi.input 输入字符串
- **描述**: 输入指定的字符串 (EC iOS 脱机版 3.15.0+)。
- **参数**: `content` (`string`)。
- **返回**: `string` - 输入成功后输入框内的数据，如果为空则代表输入失败。

#### imeApi.paste 粘贴字符串
- **描述**: 将字符串粘贴到输入框 (EC iOS 脱机版 3.15.0+)。
- **参数**: `content` (`string`) - 如果此参数为空，则会直接粘贴剪切板中的内容。
- **返回**: `string` - 粘贴成功后输入框内的数据。

#### imeApi.pressDel 删除
- **描述**: 模拟删除键，删除输入框中的字符 (EC iOS 脱机版 3.15.0+)。
- **返回**: `string` - 删除后输入框剩余的数据。

#### imeApi.pressEnter 回车
- **描述**: 模拟回车键 (EC iOS 脱机版 3.15.0+)。
- **返回**: `string` - 按下回车后输入框内的数据。

#### imeApi.dismiss 隐藏键盘
- **描述**: 隐藏当前弹出的键盘 (EC iOS 脱机版 3.15.0+)。
- **返回**: `boolean`。

#### imeApi.copyToClipboard 复制
- **描述**: 复制输入框的当前内容到剪切板 (EC iOS 脱机版 3.15.0+)。
- **返回**: `string` - 被复制的数据。

...

#### imeApi.changeKeyboard 切换键盘
- **描述**: 切换到系统中的下一个输入法 (EC iOS 脱机版 3.15.0+)。
- **返回**: `boolean`。

#### imeApi.removeAllContent 清空
- **描述**: 清空输入框的所有内容 (EC iOS 脱机版 3.15.0+)。
- **返回**: `boolean`。

#### imeApi.getClipboard 获取剪切板内容
- **描述**: 读取剪切板的数据 (EC iOS 脱机版 3.15.0+)。
- **返回**: `string`。

#### imeApi.setClipboard 设置剪切板内容
- **描述**: 设置剪切板的数据 (EC iOS 脱机版 3.15.0+)。
- **参数**: `content` (`string`), `type` (`string`) - `"1"` 代表普通字符串, `"2"` 代表是URL。
- **返回**: `boolean`。

#### imeApi.openUrl 打开URL
- **描述**: 打开一个URL链接 (EC iOS 脱机版 3.15.0+)。
- **参数**: `url` (`string`)。
- **返回**: `boolean`。

#### imeApi.getText 获取输入框内容
- **描述**: 获取当前焦点输入框的数据 (EC iOS 脱机版 3.15.0+)。
- **返回**: `string`。

---
*输入法函数来源: [EasyClick官网](https://www.ieasyclick.net/iostjdocs/zh-cn/funcs/ime-api)*

---

### 插件函数

#### 说明
- 由于iOS的沙盒和签名机制，脱机版插件无法动态加载，需打包到ipa中。
- 仅支持iOS的.framework文件。
- 插件模块API前缀为`pluginLoader`。

---

- **loadPlugin 载入一个插件**
  - 描述：载入一个插件（.framework）。
  - 参数：pluginName（插件名称）
  - 返回：boolean，true为成功
  - 示例：
    ```javascript
    function main() {
        let pluginName = "helloworldplugin2"
        let loaded = pluginLoader.loadPlugin(pluginName)
        if (!loaded) {
            loge("载入插件失败")
            return
        } else {
            logd("载入插件成功")
        }
    }
    main();
    ```

- **makeInstance 载入一个类实例**
  - 描述：载入插件中的类实例。
  - 参数：pluginName、clzName
  - 返回：string，null或空为成功，其他为错误信息
  - 示例：
    ```javascript
    function main() {
        let name = "helloworldplugin2"
        let clzName = "Plugin1"
        let load = pluginLoader.loadPlugin(name)
        if (!load) {
            loge("载入插件失败: " + pluginLoader.getErrorMsg())
            return
        }
        logd("载入插件成功 {}", name)
        let ins = pluginLoader.makeInstance(name, clzName)
        if (ins == null || ins == "") {
            logd("实例化类成功: " + clzName)
        } else {
            loge("实例化类失败: " + clzName)
            return
        }
    }
    main();
    ```

- **getErrorMsg 错误信息**
  - 描述：获取插件相关操作的错误信息。
  - 返回：string
  - 示例：见上方makeInstance示例

- **callMethodStr 调用插件实例函数返回字符串**
  - 描述：调用插件实例方法，返回字符串。
  - 参数：pluginName、clzName、methodName、args（参数字符串）
  - 返回：string
  - 示例：
    ```javascript
    function main() {
        let name = "helloworldplugin2"
        let clzName = "Plugin1"
        let load = pluginLoader.loadPlugin(name)
        if (!load) {
            loge("载入插件失败: " + pluginLoader.getErrorMsg())
            return
        }
        logd("载入插件成功 {}", name)
        let ins = pluginLoader.makeInstance(name, clzName)
        if (ins == null || ins == "") {
            logd("实例化类成功: " + clzName)
        } else {
            loge("实例化类失败: " + clzName)
            return
        }
        let args = JSON.stringify({"a": 1, "b": "" + new Date()})
        let rs = pluginLoader.callMethodStr(name, clzName, "testMethod", args)
        logd("testMethod 返回结果 " + rs)
    }
    main();
    ```

- **callMethodData 调用实例函数**
  - 描述：调用插件实例方法，参数为Data对象，返回字符串。
  - 参数：pluginName、clzName、methodName、data
  - 返回：string
  - 示例：见callMethodReturnData示例

- **callMethodReturnData 调用实例函数**
  - 描述：调用插件实例方法，返回Data对象。
  - 参数：pluginName、clzName、methodName、args
  - 返回：Data对象
  - 示例：
    ```javascript
    function main() {
        let name = "helloworldplugin2"
        let clzName = "Plugin1"
        let load = pluginLoader.loadPlugin(name)
        if (!load) {
            loge("载入插件失败: " + pluginLoader.getErrorMsg())
            return
        }
        logd("载入插件成功 {}", name)
        let ins = pluginLoader.makeInstance(name, clzName)
        if (ins == null || ins == "") {
            logd("实例化类成功: " + clzName)
        } else {
            loge("实例化类失败: " + clzName)
            return
        }
        let args = JSON.stringify({"a": 1, "b": "" + new Date()})
        let rs = pluginLoader.callMethodReturnData(name, clzName, "testMethod", args)
        logd("testMethod 返回结果 " + rs)
        let anyR = pluginLoader.callMethodData(name, clzName, "testMethod", rs)
        logd("callMethodData 返回结果 " + anyR)
    }
    main();
    ```

- **callMethodAny 调用实例函数**
  - 描述：调用插件实例方法，参数和返回值均为Any类型。
  - 参数：pluginName、clzName、methodName、data
  - 返回：Any
  - 示例：
    ```javascript
    function main() {
        let name = "helloworldplugin2"
        let clzName = "Plugin1"
        let load = pluginLoader.loadPlugin(name)
        if (!load) {
            loge("载入插件失败: " + pluginLoader.getErrorMsg())
            return
        }
        logd("载入插件成功 {}", name)
        let ins = pluginLoader.makeInstance(name, clzName)
        if (ins == null || ins == "") {
            logd("实例化类成功: " + clzName)
        } else {
            loge("实例化类失败: " + clzName)
            return
        }
        let args = JSON.stringify({"a": 1, "b": "" + new Date()})
        let rs = pluginLoader.callMethodAny(name, clzName, "testMethod", args)
        logd("callMethodAny 返回结果 " + rs)
        // ...更多Any类型图片参数测试见官网...
    }
    main();
    ```

- **readBundleFile 读取插件的文件**
  - 描述：读取插件bundle中的文件内容。
  - 参数：pluginName、key（文件名，不含后缀）、ext（文件后缀）
  - 返回：string
  - 示例：
    ```javascript
    function main() {
        let name = "helloworldplugin2"
        let load = pluginLoader.loadPlugin(name)
        if (!load) {
            loge("载入插件失败: " + pluginLoader.getErrorMsg())
            return
        }
        logd("载入插件成功 {}", name)
        logd("读取插件中的test.txt文件内容")
        let ins = pluginLoader.readBundleFile(name, "test", "txt")
        logd("readBundleFile 返回结果 " + ins)
    }
    main();
    ```

- **copyBundleFile 复制插件的文件到某个路径**
  - 描述：复制插件bundle中的文件到指定路径。
  - 参数：pluginName、key、ext、dest
  - 返回：boolean
  - 示例：
    ```javascript
    function main() {
        let name = "helloworldplugin2"
        let load = pluginLoader.loadPlugin(name)
        if (!load) {
            loge("载入插件失败: " + pluginLoader.getErrorMsg())
            return
        }
        logd("载入插件成功 {}", name)
        let dest = file.getSandBoxFilePath("a.txt")
        logd("dest" + dest)
        logd("复制test.txt到" + dest)
        let ins = pluginLoader.copyBundleFile(name, "test", "txt", dest)
        logd("copyBundleFile 返回结果 " + ins)
    }
    main();
    ```

---
> 参考：[EasyClick官网-插件函数](https://www.ieasyclick.net/iostjdocs/zh-cn/funcs/plugin-api)

### 激活器函数

#### 说明
- 激活器模块函数用于通过PC端"脱机激活器"程序对手机进行操作。
- API前缀为`tjCenter`，需保证手机与激活器在同一局域网。

---

- **tjCenter.setCenterUrl 设置脱机激活器地址**
  - 描述：设置脱机激活器所在的地址。
  - 参数：url（激活器地址）
  - 返回：string，null或空为成功，其他为错误消息
  - 示例：
    ```javascript
    function main() {
        let set = tjCenter.setCenterUrl("http://192.168.2.6:8020")
        if (set == null || set == "") {
            logd("setCenterUrl  成功: " + set)
        } else {
            logd("setCenterUrl  失败: " + set)
            return
        }
    }
    main();
    ```

- **tjCenter.appLaunch 启动app**
  - 描述：通过脱机激活器启动App。
  - 参数：deviceId、bundleId、killExist
  - 返回：string，null或空为成功
  - 示例：
    ```javascript
    function main() {
        let set = tjCenter.setCenterUrl("http://192.168.2.6:8020")
        if (set == null || set == "") {
            logd("setCenterUrl  成功: " + set)
        } else {
            logd("setCenterUrl  失败: " + set)
            return
        }
        let deviceId = device.getDeviceId()
        logd("current deviceId : " + deviceId)
        let appLaunch = tjCenter.appLaunch(deviceId, "com.tencent.mttlite", false)
        if (appLaunch == null || appLaunch == "") {
            logd("appLaunch  成功 ")
        } else {
            logd("appLaunch  失败: " + appLaunch)
            return
        }
    }
    main();
    ```

- **tjCenter.appKillByBundleId 杀死app**
  - 描述：通过脱机激活器杀死App。
  - 参数：deviceId、bundleId
  - 返回：string，null或空为成功
  - 示例：
    ```javascript
    function main() {
        let set = tjCenter.setCenterUrl("http://192.168.2.6:8020")
        if (set == null || set == "") {
            logd("setCenterUrl  成功: " + set)
        } else {
            logd("setCenterUrl  失败: " + set)
            return
        }
        let deviceId = device.getDeviceId()
        logd("current deviceId : " + deviceId)
        let appKillByBundleId = tjCenter.appKillByBundleId(deviceId, "com.tencent.mttlite")
        if (appKillByBundleId == null || appKillByBundleId == "") {
            logd("appKillByBundleId  成功")
        } else {
            logd("appKillByBundleId  失败: " + appKillByBundleId)
            return
        }
    }
    main();
    ```

- **tjCenter.stopApp 杀死app（另一实现）**
  - 描述：通过脱机激活器杀死App（另一实现方式）。
  - 参数：deviceId、bundleId
  - 返回：string，null或空为成功
  - 示例：
    ```javascript
    function main() {
        let set = tjCenter.setCenterUrl("http://192.168.2.6:8020")
        if (set == null || set == "") {
            logd("setCenterUrl  成功: " + set)
        } else {
            logd("setCenterUrl  失败: " + set)
            return
        }
        let deviceId = device.getDeviceId()
        logd("current deviceId : " + deviceId)
        let stopApp = tjCenter.stopApp(deviceId, "com.tencent.mttlite")
        if (stopApp == null || stopApp == "") {
            logd("stopApp  成功")
        } else {
            logd("stopApp  失败: " + stopApp)
            return
        }
    }
    main();
    ```

- **tjCenter.flushDevImage 刷入开发者镜像**
  - 描述：通过脱机激活器刷入开发者镜像。
  - 参数：deviceId
  - 返回：string，null或空为成功
  - 示例：
    ```javascript
    function main() {
        let set = tjCenter.setCenterUrl("http://192.168.2.6:8020")
        if (set == null || set == "") {
            logd("setCenterUrl  成功: " + set)
        } else {
            logd("setCenterUrl  失败: " + set)
            return
        }
        let deviceId = device.getDeviceId()
        logd("current deviceId : " + deviceId)
        let devImage = tjCenter.flushDevImage(deviceId)
        if (devImage == null || devImage == "") {
            logd("flushDevImage  成功")
        } else {
            logd("flushDevImage  失败: " + devImage)
            return
        }
    }
    main();
    ```

- **tjCenter.startAgent 开启agent程序启动自动化**
  - 描述：通过脱机激活器开启agent程序。
  - 参数：deviceId
  - 返回：string，null或空为成功
  - 示例：
    ```javascript
    function main() {
        let set = tjCenter.setCenterUrl("http://192.168.2.6:8020")
        if (set == null || set == "") {
            logd("setCenterUrl  成功: " + set)
        } else {
            logd("setCenterUrl  失败: " + set)
            return
        }
        let deviceId = device.getDeviceId()
        logd("current deviceId : " + deviceId)
        let agent = tjCenter.startAgent(deviceId)
        if (agent == null || agent == "") {
            logd("startAgent  成功: " + set)
        } else {
            logd("startAgent  失败: " + set)
            return
        }
    }
    main();
    ```

- **tjCenter.authInit 初始化设备**
  - 描述：通过脱机激活器初始化设备。
  - 参数：deviceId
  - 返回：string，null或空为成功
  - 示例：
    ```javascript
    function main() {
        let set = tjCenter.setCenterUrl("http://192.168.2.6:8020")
        if (set == null || set == "") {
            logd("setCenterUrl  成功: " + set)
        } else {
            logd("setCenterUrl  失败: " + set)
            return
        }
        let deviceId = device.getDeviceId()
        logd("current deviceId : " + deviceId)
        let d = tjCenter.authInit(deviceId)
        if (d == null || d == "") {
            logd("authInit  成功: " + set)
        } else {
            logd("authInit  失败: " + set)
            return
        }
    }
    main();
    ```

- **tjCenter.setWifiCon 开启或关闭WIFI链接电脑**
  - 描述：开启或关闭WIFI连接电脑。
  - 参数：deviceId、status（1开启，2关闭）
  - 返回：string，null或空为成功
  - 示例：
    ```javascript
    function main() {
        let set = tjCenter.setCenterUrl("http://192.168.2.6:8020")
        if (set == null || set == "") {
            logd("setCenterUrl  成功: " + set)
        } else {
            logd("setCenterUrl  失败: " + set)
            return
        }
        let deviceId = device.getDeviceId()
        logd("current deviceId : " + deviceId)
        let d = tjCenter.setWifiCon(deviceId, "1")
        if (d == null || d == "") {
            logd("setWifiCon  成功: " + set)
        } else {
            logd("setWifiCon  失败: " + set)
            return
        }
    }
    main();
    ```

---
> 参考：[EasyClick官网-激活器函数](https://www.ieasyclick.net/iostjdocs/zh-cn/funcs/tjcenter-api)

### 工具函数

#### 说明
工具模块函数主要用于剪切板、URL、相册、加密、随机、Base64、音乐、通知、二维码等常用操作，API前缀为`utils.`。

---

#### 剪切板
- **setClipboardText 设置剪切板**
  - 描述：设置剪贴板文本。
  - 参数：text（文本）、type（1文本，2链接）
  - 返回：boolean
  - 示例：
    ```javascript
    function main() {
        takeMeToFront()
        sleep(1000)
        var r = utils.setClipboardText("22222", 1);
        logd(r)
    }
    main();
    ```
- **getClipboardText 读取剪切板**
  - 描述：读取剪贴板文本。
  - 返回：string
  - 示例：
    ```javascript
    function main() {
        takeMeToFront()
        sleep(1000)
        var r = utils.getClipboardText();
        logd(r)
    }
    main();
    ```

#### 打开URL
- **openUrl 打开URL**
  - 描述：打开url。
  - 参数：url（字符串）
  - 返回：boolean
  - 示例：
    ```javascript
    function main() {
        takeMeToFront()
        sleep(1000)
        var r = utils.openUrl("http://baidu.com");
        logd(r)
    }
    main();
    ```

#### 相册相关
- **saveImageToAlbum 保存图像到相册**
  - 描述：保存图片到相册。
  - 参数：img（AutoImage对象）
  - 返回：boolean
  - 示例：
    ```javascript
    function main() {
        utils.requestPhotoAuthorization()
        sleep(1000)
        let img = image.captureFullScreen()
        logd("img getHeight " + image.getHeight(img))
        logd("img getWidth " + image.getWidth(img))
        var r = utils.saveImageToAlbum(img);
        logd(r)
    }
    main();
    ```
- **saveImageToAlbumPath 保存图像路径到相册**
  - 描述：保存图像路径到相册。
  - 参数：path（文件路径）
  - 返回：boolean
- **saveVideoToAlbumPath 保存视频路径到相册**
  - 描述：通过路径保存视频到相册。
  - 参数：path（视频文件路径）
  - 返回：boolean
- **utils.requestPhotoAuthorization 请求相册权限**
  - 描述：请求相册权限。
  - 返回：boolean
- **utils.deleteAllPhotos 清空相册中的图片**
  - 描述：清空相册中的图片。
  - 返回：boolean
- **utils.deleteAllVideos 清空相册中的视频**
  - 描述：清空相册中的视频。
  - 返回：boolean

#### 其他
- **utils.dataMd5 数据的MD5**
  - 描述：计算数据的MD5。
  - 参数：data（字符串）
  - 返回：string
- **utils.fileMd5 文件的MD5**
  - 描述：计算文件的MD5。
  - 参数：path（文件路径）
  - 返回：string

#### 随机
- **utils.getRangeInt 取得某个范围的随机值**
  - 描述：获取范围内的随机整数。
  - 参数：min、max
  - 返回：int

#### Base64
- **utils.base64Encode base64编码**
  - 描述：Base64编码。
  - 参数：data（字符串）
  - 返回：string
- **utils.base64Decode base64解码**
  - 描述：Base64解码。
  - 参数：str（字符串）
  - 返回：string

#### 音乐播放
- **utils.playMp3 播放MP3音乐**
  - 描述：异步播放MP3。
  - 参数：path（文件路径）
- **utils.playMp3WaitEnd 同步播放MP3音乐**
  - 描述：同步播放MP3，等待播放结束。
  - 参数：path（文件路径）
- **utils.stopMp3 停止播放mp3音乐**
  - 描述：停止MP3播放。

#### 通知栏
- **utils.requestNotificationAuthorization 请求通知授权**
  - 描述：请求通知授权。
  - 返回：boolean
- **utils.showNotification 显示通知**
  - 描述：显示通知。
  - 参数：title、content、delay（秒）
  - 返回：string（通知ID）
- **utils.removeNotification 清除通知**
  - 描述：清除通知。
  - 参数：id（通知ID）
  - 返回：boolean
- **utils.removeAllNotification 清除所有已经显示的通知**
  - 描述：清除所有已显示的通知。
  - 返回：boolean

#### 二维码
- **utils.createQRCode 生成二维码**
  - 描述：生成二维码。
  - 参数：content、width、height、logoImage（可选）
  - 返回：AutoImage对象
- **utils.decodeQRCode 解析二维码**
  - 描述：解析二维码。
  - 参数：img（AutoImage对象）
  - 返回：string

---
> 参考：[EasyClick官网-工具函数](https://www.ieasyclick.net/iostjdocs/zh-cn/funcs/utils-api)

---

### 网络验证函数

#### 说明
- 网络验证模块用于卡密授权、云端变量等安全验证，API前缀为`ecNetCard.`。
- 需在[EasyClick用户中心](https://uc.ieasyclick.com)获取AppID和AppSecret。
- 适配EC iOS 脱机版3.1.0+。

---

#### 卡密相关
- **ecNetCard.netCardInit 初始化卡密**
  - 描述：初始化卡密。
  - 参数：appId（应用ID）、appSecret（密钥）、deviceIdType（1设备id，2ecid）
  - 返回：null为成功，JSON为失败
  - 示例：
    ```javascript
    function main() {
        let appId = "sjfjvkpw"
        let appSecret = "ykjscxcs"
        let cardNo = "cbwolrftnw"
        let inited = ecNetCard.netCardInit(appId, appSecret, "2")
        logd("inited card => " + JSON.stringify(inited));
        let bind = ecNetCard.netCardBind(cardNo)
        logd("bind " + JSON.stringify(bind))
        let bindResult = false;
        if (bind != null && bind["code"] == 0) {
            loge("卡密绑定成功")
            loge("剩余时间：" + bind['data']['leftDays'] + "天")
            loge("激活时间：" + bind['data']['startTime'])
            loge("过期时间：" + bind['data']['expireTime'])
            bindResult = true;
        } else {
            loge("卡密绑定失败: " + (bind ? bind["msg"] : "无返回值"))
        }
        if (!bindResult) return;
        // 云端变量演示
        let user_ageJson = ecNetCard.netCardGetCloudVar("user_age")
        loge("user age=> " + JSON.stringify(user_ageJson))
        loge("user age的字=> " + user_ageJson['data'])
        // 更新user_age的值
        let up = ecNetCard.netCardUpdateCloudVar("user_age", "12222");
        loge("netCardUpdateCloudVar => " + JSON.stringify(up))
        if (up['code'] == 0) {
            loge("netCardUpdateCloudVar 更新成功")
        }
        // 解绑（根据实际情况调用）
        let unddd = ecNetCard.netCardUnbind(cardNo, "12323")
        loge("netCardUnbind {}", JSON.stringify(unddd))
    }
    main();
    ```
- **ecNetCard.netCardBind 绑定卡密**
  - 描述：绑定卡密。
  - 参数：cardNo（卡号）
  - 返回：JSON对象
- **ecNetCard.netCardUnbind 解绑卡密**
  - 描述：解绑卡密。
  - 参数：cardNo、reason
  - 返回：JSON对象

#### 云端变量
- **ecNetCard.netCardGetCloudVar 获取远程变量**
  - 描述：获取云端变量。
  - 参数：key（变量名）
  - 返回：JSON对象
- **ecNetCard.netCardUpdateCloudVar 更新远程变量**
  - 描述：更新云端变量。
  - 参数：key、value
  - 返回：JSON对象

---
> 参考：[EasyClick官网-网络验证函数](https://www.ieasyclick.net/iostjdocs/zh-cn/funcs/netcard-api)

---

### 其他模块

---
*其他模块函数来源: [输入法](https://www.ieasyclick.net/iostjdocs/zh-cn/funcs/ime-api), [插件](https://www.ieasyclick.net/iostjdocs/zh-cn/funcs/plugin-api), [激活器](https://www.ieasyclick.net/iostjdocs/zh-cn/funcs/tjcenter-api), [工具](https://www.ieasyclick.net/iostjdocs/zh-cn/funcs/utils-api), [网络验证](https://www.ieasyclick.net/iostjdocs/zh-cn/funcs/netcard-api)*

---

## 高级功能与实践

### NPM和TypeScript支持

> 本章节内容基于 EC iOS 脱机版本 5.0+

#### NPM支持

- **安装npm**  
  - 可参考网络教程：  
    - [B站教程](https://www.bilibili.com/video/BV1wBDTYZECJ/)  
    - [博客园教程](https://www.cnblogs.com/yang37/p/18423524)  
  - 也可自行百度"安装npm"关键字。

- **工程支持npm**  
  - 在工程上右键选择"新增NPM支持"，会在工程目录下生成 `package.json` 文件。
  - 之后在工程目录下执行 `npm install xxx类库名称` 安装所需类库，如 `npm install md5`。
  - 使用方式参考对应npm类库官方说明。

- **注意事项**  
  - EasyClick脱机版运行环境为 JavaScriptCore，仅支持纯JS环境的npm类库。
  - 不是所有npm类库都能直接用，需自行测试。

#### TypeScript支持

- **安装TypeScript**  
  - 可参考网络教程：  
    - [菜鸟教程](https://www.runoob.com/typescript/ts-install.html)  
    - [CSDN教程](https://blog.csdn.net/cdns_1/article/details/140401513)  
  - 也可自行百度"安装TypeScript"关键字。

- **工程支持TypeScript**  
  - 在工程上右键选择"新增TypeScript支持"，会在工程目录下生成 `tsconfig.json` 文件，并为 libs 下的js生成 d.ts 引用文件。

- **js文件夹下编写ts**  
  - js文件夹下的ts/js文件可直接使用，不用require和export。
  - 例如：
    ```typescript
    // js/Car.ts
    class Car {  
        test(): void {  
            logd("i am car.");
        }  
    }
    ```
    ```javascript
    // js/main.js
    function main() {
        let car = new Car();  
        car.test();
    }
    ```

- **ts文件夹下编写ts文件**  
  - ts文件夹下的ts文件需用export导出，其他地方用require引用。
    ```typescript
    // ts/Car1.ts
    class Car1 {  
       test1(): void {  
           logd("i am car1.");
       }  
    }  
    export = {Car1};
    ```
    ```javascript
    // js/main.js
    function main() {
        let car = require("ts/Car1");
        let car1 = new car.Car1();
        car1.test1();
    }
    ```

#### js和ts混编建议

- 建议脚本的js和ts文件都放到js文件夹下编写，UI的js和ts文件都放到subjs文件夹下编写。
- js文件夹下的js/ts文件可直接被其他工程引用，其他文件夹下的ts无法被其他工程引用。
- 以上建议无需require即可直接使用，如需require模式，建议将js/ts文件放到非js文件夹，并建议混淆js文件。
- ts文件编译后的js会参与iec的编译，ts源文件不会。

> 参考：[EasyClick官网-NPM和TypeScript支持](https://www.ieasyclick.net/iostjdocs/zh-cn/advance/npmandtypescript)

### 打包IPA
EasyClick 提供了将脚本和资源文件打包成独立IPA应用的能力，通常在官方提供的开发工具中完成。

#### 打包流程详解

1. **选择工程**
   - 必须选择 EasyClick iOS 脱机版的工程，USB 版本的工程不支持打包 ipa。
   - 在 IDEA 顶部菜单栏选择：`EasyClick iOS版` → `脱机版打包工程` → `普通版打包`。

2. **打包参数设置**
   - 进入打包界面后，需要设置基础打包参数。
   - 一般情况下可以直接使用默认配置。
   - 如果是云控版本（需要连接 EasyClick 云控平台），可根据实际需求配置云控参数。普通版本可以忽略此项。
   - 配置完成后，点击"打包"按钮开始打包。

3. **打包完成与安装**
   - 打包过程结束后，EasyClick iOS 的运行日志会展示打包结果。
   - 打包成功后，会在工程目录下生成 ipa 文件。
   - 生成的 ipa 文件可以通过 sideloadly、牛蛙签名、爱思助手等工具进行签名，然后安装到手机上即可运行。

> 参考：[EasyClick官网-打包ipa](https://www.ieasyclick.net/iostjdocs/zh-cn/advance/pkgipa)

### 热更新

EasyClick 支持代码热更新功能，无需重新安装App即可更新关键自动化脚本。

#### 官方热更新服务
- 官方热更新服务支持加密链接，安卓和iOS脱机版通用，服务对接阿里云OSS，安全便捷。

#### 什么是热更新
- 热更新允许在无需重新安装App的情况下，直接更新关键代码（主要是自动化脚本）。
- 注意：update.json 文件的版本号要与服务端接口返回的版本号保持一致，否则可能导致异常。

#### 如何配置热更新

1. **配置 update.json**
   - 在工程目录下创建或编辑 `update.json`，示例内容如下：
     ```json
     {
       "update_url": "http://yourserver.com/update",
       "version": "100",
       "appendDeviceInfo": true,
       "timeout": 10000
     }
     ```
   - 参数说明：
     - `update_url`：服务端更新接口地址（需自建服务端）。
     - `version`：当前脚本版本号（整数，App会自动比较版本号）。
     - `appendDeviceInfo`：是否附加设备信息到请求参数。
     - `timeout`：请求超时时间（毫秒）。
   - 3.15.0+ 版本会自动拼接设备信息参数（如ecid、systemVersion、deviceId、model等）到请求URL。

2. **客户端请求**
   - App启动后会自动GET请求 `update_url`，并带上相关参数（如版本号、设备信息等）。

3. **服务端返回**
   - 服务端返回如下JSON（如无需更新，返回空字符串即可）：
     ```json
     {
       "download_url": "http://yourserver.com/xxx.iec",
       "version": "101",
       "download_timeout": 120,
       "dialog": true,
       "msg": "优化部分问题",
       "force": false,
       "md5": "xxx" // 可选，校验文件完整性
     }
     ```
   - 字段说明：
     - `download_url`：新包下载地址（iec文件）。
     - `version`：新包版本号。
     - `download_timeout`：下载超时时间（秒）。
     - `dialog`：是否弹窗提示。
     - `msg`：弹窗提示内容。
     - `force`：是否强制更新。
     - `md5`：可选，校验下载文件完整性。

4. **自动加载新包**
   - 配置无误后，App界面启动时会自动检测并更新脚本。

#### 脚本内热更新（代码方式）

- 可在脚本运行期间主动请求热更新，主要API如下（EC 脱机 3.19.0+）：

1. **hotupdater.updateReq**
   - 请求热更新接口。
   - 参数：`updateUrl`（可为空，使用update.json配置）、`version`（当前版本，整数）、`appendDeviceInfo`（true/false）、`timeout`（毫秒）。
   - 返回：`true` 代表有更新，`false` 代表无更新或失败。
   - 示例：
     ```javascript
     function main() {
         let version = JSON.parse(readIECFileAsString("update.json")).version;
         let updateResult = hotupdater.updateReq("", version, true, 9000);
         logd("请求更新是否有: " + updateResult);
         if (!updateResult) {
             logw("请求失败错误信息: " + hotupdater.getErrorMsg());
         } else {
             logd("请求数据: " + hotupdater.getUpdateResp());
             let path = hotupdater.updateDownload();
             logd("下载路径为: " + path);
             if (!path) {
                 logw("下载IEC文件错误信息: " + hotupdater.getErrorMsg());
             } else {
                 restartScript(path, true, 3);
                 return;
             }
         }
     }
     main();
     ```

2. **hotupdater.updateDownload**
   - 下载热更新IEC文件，返回文件路径。

3. **hotupdater.getUpdateResp**
   - 获取热更新请求结果。

4. **hotupdater.getErrorMsg**
   - 获取错误信息。

> 参考：[EasyClick官网-热更新](https://www.ieasyclick.net/iostjdocs/zh-cn/advance/hotupdate)

---
*高级功能来源: [打包IPA](https://www.ieasyclick.net/iostjdocs/zh-cn/advance/package-ipa), [热更新](https://www.ieasyclick.net/iostjdocs/zh-cn/advance/hot-update)*

---

## 常见问题 (FAQ)

1.  **Q: 为什么 `getDeviceId()` 获取不到设备ID？**
    A: `getDeviceId()` 以及其他几个获取设备唯一标识的函数，都必须先通过PC上的"脱机激活器"对手机进行一次初始化才能使用。

2.  **Q: 找图或OCR识别效率不高怎么办？**
    A: 对于图色函数，尝试调用 `image.useOpencvMat(1)` 切换到更高效的mat格式。对于OCR，确保使用的是 `appleVision` 引擎并选择了合适的识别级别 (`fast` 或 `accurate`)。

3.  **Q: 脚本中的图片等资源如何管理？**
    A: 建议将所有资源文件放在项目的 `res` 目录下，在代码中通过 `readRes()` 或 `readResAutoImage()` 等函数读取。

4.  **Q: 如何处理需要用户交互的弹窗 (如权限请求)？**
    A: 在脚本早期，集中处理所有可能出现的系统权限请求，例如使用 `requestPhotoAuthorization()` 请求相册权限。对于截屏权限，`image.requestScreenCapture()` 在首次执行时会弹出，应引导用户选择"总是允许"。

---
*常见问题来源: [EasyClick官网](https://www.ieasyclick.net/iostjdocs/zh-cn/question-answer)*

---

## UI函数 (H5)

### 说明
- EasyClick iOS 脱机版的 UI 使用 H5 编写，拥有标准的 HTML5 浏览器内核。
- 开发者可以利用整个 Web 生态，使用如 Vue、React 等现代化前端框架来构建功能强大、界面美观的 UI。
- UI 的入口文件通常是项目 `layout` 目录下的 `ui.js`。

### H5在线UI设计器

- EasyClick 官方提供了一个在线拖拽组件生成 H5 UI 的平台，适用于 iOS 脱机版、安卓等多平台。
- 通过可视化拖拽方式，开发者可以快速搭建美观、实用的前端界面，无需手写 HTML/CSS。
- 设计完成后可导出代码，直接集成到 EasyClick 工程的 layout 目录下使用。
- 设计器地址：[https://uc.ieasyclick.com/designer](https://uc.ieasyclick.com/designer)

> 参考：[EasyClick官网-H5在线UI设计器](https://www.ieasyclick.net/iostjdocs/zh-cn/ui-designer)

---
*UI函数来源: [UI编写](https://www.ieasyclick.net/iostjdocs/zh-cn/funcs/ui/), [H5在线UI设计器](https://www.ieasyclick.net/iostjdocs/zh-cn/ui-designer/)*

---

### H5 与 脚本基础交互

本章节主要讲述 H5 页面与原生脚本之间如何进行基础的通信。

#### 脚本加载H5页面
- 在工程的 `layout` 文件夹下新建 `ui.js` 和 `index.html` 文件。
- 在 `ui.js` 中调用 `ui.layout()` 即可展示指定的 `index.html` 页面。
- **示例 `ui.js`**:
  ```javascript
  function main() {
      // "index" 是此页面的标签名, "index.html" 是文件名
      ui.layout("index", "index.html");
  }
  main();
  ```

---

#### H5调用脚本预定义函数

在 H5 页面中，可以通过 `window.ec` 对象调用 EasyClick 预定义好的一系列原生功能。所有函数均为异步回调。

##### isServiceOk 检查自动化服务
- **描述**: 检查自动化服务是否正常。
- **H5调用**:
  ```javascript
  // resp = true 代表自动化服务正常
  window.ec.isServiceOk(function (resp) {
      console.log("服务是否正常: " + resp);
  });
  ```

##### start 启动脚本
- **描述**: 启动主脚本 (`main.js`)。
- **H5调用**:
  ```javascript
  // resp = true 代表成功
  window.ec.start(function (resp) {
      if (resp) {
          alert("脚本已启动");
      }
  });
  ```

##### stopTask 停止脚本
- **描述**: 停止当前正在运行的主脚本。
- **H5调用**:
  ```javascript
  // resp = true 代表成功
  window.ec.stopTask(function (resp) {
      if (resp) {
          alert("脚本已停止");
      }
  });
  ```

##### isScriptRunning 检查脚本运行状态
- **描述**: 判断主脚本当前是否正在运行。
- **H5调用**:
  ```javascript
  // resp = true 代表正在运行
  window.ec.isScriptRunning(function (resp) {
      alert("脚本是否在运行: " + resp);
  });
  ```

---

#### UI配置读写

##### getConfig 获取UI配置
- **描述**: 读取一个之前保存的UI配置项。
- **H5调用**:
  ```javascript
  window.ec.getConfig("my_key", function (resp) {
      console.log("获取到的配置值: " + resp);
  });
  ```

##### saveConfig 保存UI配置
- **描述**: 保存一个键值对作为UI配置，可跨脚本周期持久化。
- **H5调用**:
  ```javascript
  window.ec.saveConfig("my_key", "my_data", function (resp) {
      // resp = true 代表成功
      console.log("保存配置是否成功: " + resp);
  });
  ```

##### getAllConfig 获取所有UI配置
- **描述**: 获取所有已保存的UI配置项。
- **H5调用**:
  ```javascript
  // resp 是一个包含所有配置的 JSON 对象
  window.ec.getAllConfig(function (resp) {
      console.log(JSON.stringify(resp));
  });
  ```

##### removeConfig 移除UI配置
- **描述**: 删除一个指定的UI配置项。
- **H5调用**:
  ```javascript
  window.ec.removeConfig("my_key", function (resp) {
      // resp = true 代表成功
      console.log("删除配置是否成功: " + resp);
  });
  ```
---

#### 脚本暂停与继续

##### setScriptPause 暂停/继续脚本
- **描述**: 控制主脚本的暂停和继续。
- **参数**:
  - `pause` (`boolean`): `true`代表暂停, `false`代表继续。
  - `timeout` (`number`): 当 `pause=true` 时生效。如果大于0，代表暂停指定毫秒后自动恢复；如果等于0，代表永久暂停，直到被手动恢复。
- **H5调用**:
  ```javascript
  function pauseScript() {
      let params = {"pause": true, "timeout": 5000}; // 暂停5秒后自动恢复
      window.ec.setScriptPause(params, function (resp) {
          console.log("设置暂停结果: " + resp);
      });
  }
  ```

##### isScriptPause 检查脚本暂停状态
- **描述**: 判断主脚本当前是否处于暂停状态。
- **H5调用**:
  ```javascript
  // resp = true 代表正处于暂停状态
  window.ec.isScriptPause(function (resp) {
      alert("脚本是否暂停中: " + resp);
  });
  ```
---

#### H5扩展功能

##### ui.registeH5Function 向H5注入函数
- **描述**: 从脚本（`ui.js`）向 H5 页面注入一个自定义函数，从而实现 H5 调用脚本的扩展功能。
- **`ui.js` 中注入**:
  ```javascript
  function main() {
      // 注入一个名为 "customFunction" 的函数
      ui.registeH5Function("customFunction", function (data) {
          logd("H5 页面发来数据: " + data);
          // 可以返回数据给 H5
          return "这是来自脚本的回复: " + new Date().toString();
      });
      ui.layout("main", "main.html");
  }
  main();
  ```
- **H5 页面调用注入的函数**:
  - 在 H5 中，所有通过 `registeH5Function` 注入的函数，都通过 `window.ec.call()` 来调用。
  - **`window.ec.call(funcName, params, callback)`**:
    - `funcName`: 注入时定义的函数名。
    - `params`: 传递给脚本的参数，建议为JSON字符串。
    - `callback`: 接收脚本函数返回值。
  - **示例 `main.html`**:
    ```html
    <button onclick="test()">测试扩展函数</button>
    <script>
    function test() {
        let params = {"action": "myAction", "value": 123};
        window.ec.call('customFunction', JSON.stringify(params), function (response) {
            // response 就是从脚本返回的数据
            alert("收到脚本的回复: " + response);
        });
    }
    </script>
    ```

---
*H5与脚本基础交互来源: [EasyClick官网](https://www.ieasyclick.net/iostjdocs/zh-cn/funcs/ui/h5-js-interaction)*

---

### UI、脚本与H5互通交互 (高级)

对于更复杂的应用，EasyClick 提供了 `ui.js`、主脚本(`js/main.js`) 和 H5 三者之间更精细的互通能力。

#### 交互模型
1.  **脚本 (`main.js`) <-> UI层 (`ui.js`)**: 两者可以互相注册函数并调用，作为数据和逻辑的中转站。
2.  **UI层 (`ui.js`) -> H5**: `ui.js` 可以执行 H5 页面中的 JavaScript 函数，从而更新前端视图。

#### `ui.js` 和 脚本 (`main.js`) 互相调用

- **脚本注册函数给 `ui.js` 调用**:
  - 在 `main.js` 中使用 `registeScriptFunctionToUI(funcName, callback)`。
  - 在 `ui.js` 中使用 `ui.callScriptRegisteFunction(funcName, data)` 调用。

- **`ui.js` 注册函数给脚本调用**:
  - 在 `ui.js` 中使用 `ui.registeFunctionToScript(funcName, callback)`。
  - 在 `main.js` 中使用 `callUIRegisteFunction(funcName, data)` 调用。

- **示例**:
  ```javascript
  // main.js
  function main() {
    // 注册一个名为 scriptHello 的函数给 ui.js
    registeScriptFunctionToUI("scriptHello", function (data) {
        logd("ui.js 调用了 scriptHello，发来数据: " + data);
        return "你好 ui.js, 我是 main.js";
    });

    // 2秒后，调用 ui.js 注册的 uiHello 函数
    sleep(2000);
    let response = callUIRegisteFunction("uiHello", "你好，我是 main.js");
    logd("调用 uiHello 后收到回复: " + response);
  }
  main();
  ```
  ```javascript
  // ui.js
  function main() {
    // 注册一个名为 uiHello 的函数给 main.js
    ui.registeFunctionToScript("uiHello", function(data) {
        logd("main.js 调用了 uiHello，发来数据: " + data);
        // 调用 H5 页面中的函数来更新视图
        let jsCode = `updateVueData('${data}')`;
        ui.quickCallJs("参数设置", jsCode);
        return "你好 main.js, 我是 ui.js";
    });

    // 调用 main.js 注册的 scriptHello 函数
    let response = ui.callScriptRegisteFunction("scriptHello", "你好，我是 ui.js");
    logd("调用 scriptHello 后收到回复: " + response);

    ui.layout("参数设置", "main.html");
  }
  main();
  ```

#### `ui.js` 调用 H5 页面函数

- **`ui.quickCallJs(tabName, jsCode)`**:
  - `tabName`: `ui.layout` 中设置的页面标签名。
  - `jsCode`: 要在 H5 页面中执行的 JavaScript 代码字符串。

- **示例**:
  - 在 `ui.js` 中:
    ```javascript
    let message = "来自EC脚本的问候";
    let jsCode = `updateVueData('${message}')`; // 假设H5的Vue实例有此方法
    ui.quickCallJs("参数设置", jsCode);
    ```
  - 在 H5 页面 (`main.html`) 中:
    ```html
    <script>
        function updateVueData(data) {
            // vueInstance 是你的Vue实例
            vueInstance.message = data;
        }
    </script>
    ```

---
*互通交互来源: [EasyClick官网-安卓文档](https://ieasyclick.com/docs/zh-cn/funcs/ui/ui-js-inter-adv/)*

### 脱机插件编写

#### 插件开发环境说明
- 插件开发需使用 Xcode，推荐版本为 13.1 (13A1030d)，其他版本未完全测试。
- 支持 Swift、Objective-C 等语言，最终需编译为 framework 格式。
- 插件开发需用到 EC 官方提供的接口库 `pluginhost.framework`，可在官网示例插件下载页面获取。

#### 创建插件工程
1. 打开 Xcode，选择 `New Project`。
2. 选择 `iOS` → `Framework` 类型，点击 `Next`。
3. 输入插件名称（建议英文，不要用中文），如 `hplugin`，设置 Bundle Identifier。
4. 工程结构创建完成。

#### 加入官方接口库
1. 将下载的 `pluginhost.framework` 拷贝到工程目录下。
2. 在 Xcode 工程中添加 `pluginhost.framework` 的引用（Add Files）。
3. 设置 `pluginhost.framework` 的 Embed 属性为 `Do Not Embed`。

#### 创建插件类
1. 在工程中右键选择 `New File`，新建 Swift File（如 `Plugin1.swift`）。
2. 插件类需继承 `NSObject, ECPlugin, JSExport`，示例代码如下：

```swift
import Foundation
import pluginhost
import JavaScriptCore
import UIKit

public class Plugin1 : NSObject, ECPlugin, JSExport {
    public func callMethodAny(_ methodName: String, _ data: Any) -> Any? {
        print("callMethodAny --- ", data)
        if(data is String){
            print("any is string...")
        }else if (data is UIImage){
            print("any is ui image ...")
        }
        return ""
    }
    public func callMethodStr(_ methodName: String, _ args: String) -> String {
        return " callMethodStr " + methodName + "  " + args
    }
    public func callMethodData(_ methodName: String, _ data: Data) -> String {
        let a = String(data: data, encoding: .utf8)
        return " callMethodData " + methodName + "  " + (a ?? "")
    }
    public func callMethodReturnData(_ methodName: String, _ data: String) -> Data {
        let a = "callMethodDataReturnData " + methodName
        return a.data(using: .utf8)!
    }
    public func disposed() {
        print("disposed plugin...")
    }
    public required override init() {}
}
```

- 各方法与 EC 脚本中的 `pluginLoader.callMethodAny`、`callMethodStr`、`callMethodData`、`callMethodReturnData` 一一对应。

#### 插件打包

##### Xcode 编译
- 在 Xcode 顶部菜单选择 `Product` → `Build`，编译插件。
- 编译完成后，点击 `Show Build Folder in Finder`，在 `Release-iphoneos` 目录下找到 `.framework` 文件。

##### 命令行编译
- 可用如下 shell 脚本自动编译（将 `helloworldplugin` 替换为你的插件名）：

```bash
#!/bin/bash
WORK_DIR=`pwd`
echo $WORK_DIR

build_plugin_frame(){
  rm -rf /tmp/derivedDataPath/*
  xcodebuild build -project helloworldplugin.xcodeproj -scheme helloworldplugin -sdk iphoneos -configuration Release -derivedDataPath /tmp/derivedDataPath -allowProvisioningUpdates
  cp -r /tmp/derivedDataPath/Build/Products/Release-iphoneos/helloworldplugin.framework ./
  cd $WORK_DIR
}

build_plugin_frame
```

#### 插件使用

- **开发调试**：在 EC iOS 开发插件中新建工程，打调试包，选择"新增三方插件"，选择 framework 文件。
- **发布集成**：打包时选择插件文件，发布时选择"普通版本打包"或"企业版本打包"即可。

> 参考：[EasyClick官网-脱机插件编写](https://www.ieasyclick.net/iostjdocs/zh-cn/advance/pluginguid)

### 开放接口

#### 调试模式开放接口
- 专门用于与其他程序交互的开放接口，适合需要扩展EasyClick功能或与第三方系统集成的场景。
- 例如USB版本无法完成的功能，可以通过调用这些接口实现。
- 需要在手机上安装 EasyClick iOS 脱机版本主程序。
- 部分接口要求 EasyClick iOS 脱机版主程序在前台运行，具体要求请参考接口文档。

#### 接口文档地址
- 官方详细接口文档地址：  
  [https://www.apifox.cn/apidoc/shared-abbc7413-aba1-4472-b5f6-4b8b5f8420ac](https://www.apifox.cn/apidoc/shared-abbc7413-aba1-4472-b5f6-4b8b5f8420ac)  
  访问密码：`iX5syhND`

> 参考：[EasyClick官网-开放接口](https://www.ieasyclick.net/iostjdocs/zh-cn/advance/openapi)

#### 上传文件接口

- **接口地址**：`POST /api/uploadFile`
- **用途**：用于上传文件到 EasyClick iOS 脱机版的 Documents 目录下。

##### 请求参数

- **Body 类型**：`multipart/form-data`
- **参数说明**：
  - `file`（可选）：要上传的文件

##### 返回响应

- **HTTP 200 成功**
- **响应体**（application/json）：
  - `msg`（string）：消息
  - `code`（integer）：状态码，0为成功
  - `data`（string）：返回的文件路径

- **响应示例**：
  ```json
  {
      "msg": "string",
      "code": 0,
      "data": "string"
  }
  ```

##### 示例请求

- **Shell (cURL)**
  ```shell
  curl --location --request POST '/api/uploadFile' \
    --form 'file=@/path/to/your/file'
  ```

> 参考：[EasyClick iOS脱机版开放接口 - 上传文件](https://www.apifox.cn/apidoc/shared/abbc7413-aba1-4472-b5f6-4b8b5f8420ac/api-56515061)

#### 删除上传的文件接口

- **接口地址**：`POST /api/deleteUploadFile`
- **用途**：用于删除已上传到 EasyClick iOS 脱机版的文件。

##### 请求参数

- **Body 类型**：`application/json`
- **参数说明**：
  - `filePath`（string，必需）：要删除的文件路径

- **请求示例**：
  ```json
  {
      "filePath": "string"
  }
  ```

##### 返回响应

- **HTTP 200 成功**
- **响应体**（application/json）：空对象 `{}`

- **响应示例**：
  ```json
  {}
  ```

##### 示例请求

- **Shell (cURL)**
  ```shell
  curl --location --request POST '/api/deleteUploadFile' \
  --header 'Content-Type: application/json' \
  --data-raw '{
      "filePath": "string"
  }'
  ```

> 参考：[EasyClick iOS脱机版开放接口 - 删除上传的文件](https://www.apifox.cn/apidoc/shared/abbc7413-aba1-4472-b5f6-4b8b5f8420ac/api-56523016)

#### 相册操作接口

- **接口地址**：`POST /api/operateAlbum`
- **用途**：插入数据到相册，包括图片和视频。

##### 请求参数

- **Body 类型**：`application/json`
- **参数说明**：
  - `filePath`（string，必需）：文件路径
  - `type`（string，必需）：1=图片，2=视频
  - `ops`（string，必需）：操作类型，1=插入

- **请求示例**：
  ```json
  {
      "filePath": "/var/mobile/Containers/Data/Application/240F1A45-F1BE-4301-9C66-6D96AD1DA1C0/Documents/yjtp.png",
      "type": "1",
      "ops": "1"
  }
  ```

##### 返回响应

- **HTTP 200 成功**
- **响应体**（application/json）：
  - `code`（integer）：状态码，0为成功
  - `data`（string）：操作结果
  - `msg`（string）：消息

- **响应示例**：
  ```json
  {"code":0,"data":"true","msg":"true"}
  ```

##### 示例请求

- **Shell (cURL)**
  ```shell
  curl --location --request POST '/api/operateAlbum' \
  --header 'Content-Type: application/json' \
  --data-raw '{
      "filePath": "/var/mobile/Containers/Data/Application/240F1A45-F1BE-4301-9C66-6D96AD1DA1C0/Documents/yjtp.png",
      "type": "1",
      "ops": "1"
  }'
  ```

> 参考：[EasyClick iOS脱机版开放接口 - 相册操作](https://www.apifox.cn/apidoc/shared/abbc7413-aba1-4472-b5f6-4b8b5f8420ac/api-56528082)

#### 打开url接口

- **接口地址**：`POST /api/openUrl`
- **用途**：打开url地址或url schema地址。注意：EC iOS 脱机程序需要在前台，USB版本可通过相关函数让EC iOS App在前台运行。

##### 请求参数

- **Body 类型**：`application/json`
- **参数说明**：
  - `url`（string，必需）：url路径，例如 `http://baidu.com`

- **请求示例**：
  ```json
  {
      "url": "http://baidu.com"
  }
  ```

##### 返回响应

- **HTTP 200 成功**
- **响应体**（application/json）：
  - `code`（integer）：状态码，0为成功
  - `data`（string）：操作结果
  - `msg`（string）：消息

- **响应示例**：
  ```json
  {"code":0,"data":"true","msg":""}
  ```

##### 示例请求

- **Shell (cURL)**
  ```shell
  curl --location --request POST '/api/openUrl' \
  --header 'Content-Type: application/json' \
  --data-raw '{
      "url": "http://baidu.com"
  }'
  ```

> 参考：[EasyClick iOS脱机版开放接口 - 打开url](https://www.apifox.cn/apidoc/shared/abbc7413-aba1-4472-b5f6-4b8b5f8420ac/api-56533007)

#### 剪切板操作接口

- **接口地址**：`POST /api/operateClipboard`
- **用途**：读取或写入剪切板内容。注意：EC iOS 脱机程序需要在前台，USB版本可通过相关函数让EC iOS App在前台运行。

##### 请求参数

- **Body 类型**：`application/json`
- **参数说明**：
  - `content`（string，必需）：设置剪切板时需要用的内容
  - `type`（string，必需）：1=读取剪切板，2=设置剪切板

- **请求示例**（设置剪切板）：
  ```json
  {
      "content": "要设置的内容",
      "type": "2"
  }
  ```
- **请求示例**（读取剪切板）：
  ```json
  {
      "content": "",
      "type": "1"
  }
  ```

##### 返回响应

- **HTTP 200 成功**
- **响应体**（application/json）：
  - `msg`（string）：消息
  - `code`（integer）：状态码，0为成功
  - `data`（string）：如果type=1为读取结果，如果type=2为设置结果

- **响应示例**：
  ```json
  {"code":0,"data":"true","msg":"true"}
  ```

##### 示例请求

- **Shell (cURL)**
  ```shell
  curl --location --request POST '/api/operateClipboard' \
  --header 'Content-Type: application/json' \
  --data-raw '{
      "content": "要设置的内容",
      "type": "2"
  }'
  ```

> 参考：[EasyClick iOS脱机版开放接口 - 剪切板操作](https://www.apifox.cn/apidoc/shared/abbc7413-aba1-4472-b5f6-4b8b5f8420ac/api-56534520)

### 代码混淆

#### 什么是混淆
- 混淆是指在 JS 编译期间，对代码进行花指令、流程更改等转换，目的是为了保护代码，防止被反编译和分析。

#### 如何开始混淆的工作
- EC iOS 的 IDEA 开发工具在升级到 5.0.0 后，会在工程模块下自动创建一个 `obfuscator.json` 文件。
- 默认不开启混淆，需要正确设置 json 配置中的 `binPath` 路径才能支持混淆。

#### 安装和设置混淆器

1. **安装 Node.js**
   - 参考：[Node.js 安装教程](https://blog.csdn.net/qq_48485223/article/details/122709354)

2. **安装 javascript-obfuscator**
   - 在 Windows 的 cmd 或 PowerShell 中运行以下命令：
     ```shell
     npm install -g javascript-obfuscator
     npm install -g class-validator
     ```
   - 参考：[javascript-obfuscator 官方文档](https://www.npmjs.com/package/javascript-obfuscator)

#### 配置说明

- `obfuscator.json` 配置示例（更多参数可参考 [javascript-obfuscator 官网](https://www.npmjs.com/package/javascript-obfuscator)）：
  ```json
  {
    "nodeBinPath": "D:\\programe\\nodejs\\node.exe",
    "obfuscatorBinPath": "C:\\Users\\Administrator\\AppData\\Roaming\\npm\\node_modules\\javascript-obfuscator\\bin\\javascript-obfuscator",
    "target": "node",
    "compact": false,
    "log": true,
    "optionsPreset": "high-obfuscation",
    "deadCodeInjection": false,
    "simplify": false,
    "seed": 10,
    "controlFlowFlattening": true,
    "controlFlowFlatteningThreshold": 1,
    "unicodeEscapeSequence": false,
    "stringArray": true,
    "stringArrayRotate": false,
    "stringArrayShuffle": false,
    "stringArrayThreshold": 1,
    "stringArrayWrappersCount": 5,
    "stringArrayEncoding": ["rc4"],
    "stringArrayCallsTransform": false,
    "selfDefending": false,
    "splitStrings": false,
    "splitStringsChunkLength": 1
  }
  ```
- 其中：
  - `nodeBinPath`：node.exe 的路径
  - `obfuscatorBinPath`：javascript-obfuscator 的可执行文件路径（可通过 `npm root -g` 查找 node_modules 路径）

#### 特别说明

- 配置文件中 `obfuscatorBinPath` 路径配置正确且文件存在时，编译期间会自动进行混淆（包括 js 模式和 dex 模式）。
- 删除 `obfuscatorBinPath` 属性值或直接删除 `obfuscator.json`，则编译期间不会进行混淆。
- 混淆会增加代码体积，建议将长代码拆分为多个文件进行模块化。
- 修改混淆配置属性可能导致混淆后脚本无法运行，如遇问题可恢复默认设置。
- `log` 开关可在编译期间输出混淆详细信息。
- 混淆较耗电脑资源，建议开发调试时关闭混淆，仅在发布或打包时开启。

> 参考：[EasyClick官网-代码混淆](https://www.ieasyclick.net/iostjdocs/zh-cn/advance/jsobfuscator)

### UI编写

- iOS 脱机版本的 UI 使用 H5 编写，内置标准的 HTML5 浏览器内核。
- 支持使用 Vue、ReactJS 等现代前端框架进行开发，开发者可以充分利用 Web 生态的各种技术和组件。
- 支持 H5 与脚本的交互，便于实现复杂的前端界面与自动化脚本逻辑的联动。
- 推荐使用官方提供的 H5 在线 UI 设计器进行可视化拖拽开发，快速生成界面布局。

> 参考：[EasyClick官网-UI编写](https://www.ieasyclick.net/iostjdocs/zh-cn/funcs/ui/)

### H5 JS与UI交互

#### 说明
- 本章节主要讲述 H5 页面（JS）与 EasyClick UI 元素、自动化脚本之间的交互方式。

#### 如何使用
- 在工程的 `layout` 文件夹下新建 `ui.js` 和 `index.html` 文件，例如：
  ```javascript
  // ui.js
  function main() {
      ui.layout("index", "index.html");
  }
  main();
  ```
- 这样即可展示 `index.html` 页面。

#### H5 调用 EC 预定义函数
- H5 页面可通过 `window.ec` 对象调用 EasyClick 预定义的原生功能，所有函数均为异步回调。

##### 常用API示例

- **自动化服务是否正常**
  ```javascript
  window.ec.isServiceOk(function (resp) {
      // resp = true 代表自动化服务正常
  });
  ```
- **启动脚本**
  ```javascript
  window.ec.start(function (resp) {
      // resp = true 代表正常
  });
  ```
- **停止脚本**
  ```javascript
  window.ec.stopTask(function (resp) {
      // resp = true 代表正常
  });
  ```
- **脚本是否运行**
  ```javascript
  window.ec.isScriptRunning(function (resp) {
      // resp = true 代表脚本正在运行
  });
  ```
- **获取/保存/移除/获取所有UI配置**
  ```javascript
  window.ec.getConfig("key", function (resp) { console.log(resp); });
  window.ec.saveConfig("key", "data", function (resp) { console.log(resp); });
  window.ec.removeConfig("key", function (resp) { console.log(resp); });
  window.ec.getAllConfig(function (resp) { console.log(resp); });
  ```

#### 脚本暂停与继续
- **暂停/继续脚本**
  ```javascript
  window.ec.setScriptPause({"pause": true, "timeout": 3330}, function (resp) {
      // 脚本暂停，timeout毫秒后自动恢复
  });
  ```
- **判断脚本是否暂停**
  ```javascript
  window.ec.isScriptPause(function (resp) {
      alert("isScriptPause " + resp);
  });
  ```

#### H5扩展功能
- **向H5注入扩展函数**
  - 在 `ui.js` 中注入：
    ```javascript
    function main() {
        ui.registeH5Function("customFunction", function (data) {
            logd("h5 call-> " + data);
            return new Date().toString();
        });
        ui.layout("main", "main.html");
    }
    main();
    ```
  - 在 H5 页面中调用：
    ```html
    <button onclick="test()">测试扩展函数</button>
    <script>
    function test() {
        window.ec.call('customFunction',
            JSON.stringify({'action': '111'}),
            function (resp) {
                console.log("ddd  " + resp)
            });
    }
    </script>
    ```

> 参考：[EasyClick官网-H5 JS与UI交互](https://www.ieasyclick.net/iostjdocs/zh-cn/funcs/ui/ui-js-inter)

### UI与脚本互通交互

#### 说明
- 本章节主要讲述 H5、ui.js 以及主脚本三者之间的互通交互。
- 该功能需 iOS 脱机版 5.10.0+。

#### 典型调用流程

##### H5 -> ui.js -> 脚本
- 脚本通过 `registeScriptFunctionToUI` 注册函数给 ui.js。
- ui.js 通过 `ui.registeH5Function` 注册函数给 H5 页面。
- H5 页面通过 `window.ec.call` 调用 ui.js 注入的函数，ui.js 再调用脚本注册的函数。

##### 脚本 -> ui.js -> H5
- 脚本通过 `callUIRegisteFunction` 调用 ui.js 注册的函数，ui.js 可通过 `ui.quickCallJs` 或 `ui.evaluateJavaScript` 调用 H5 页面 JS。

#### 主要API与用法

##### ui.js 可用函数

- **ui.registeFunctionToScript**：注册函数给脚本调用
  ```javascript
  ui.registeFunctionToScript("ui-hello", function (data) {
      logd("ui hello call-> " + data);
      return new Date().toString();
  });
  ```
- **ui.callScriptRegisteFunction**：调用脚本注册的函数
  ```javascript
  let a = ui.callScriptRegisteFunction("script-hello", "hello");
  logd(a);
  ```
- **ui.evaluateJavaScript**：调用H5页面的JS代码
  ```javascript
  ui.evaluateJavaScript('alert("123")');
  ```
- **ui.removeFunctionToScript**：移除UI注入给脚本的函数
  ```javascript
  ui.removeFunctionToScript("ui-hello");
  ```
- **ui.removeAllScriptToUIfFunc**：移除所有脚本注册给UI的函数
  ```javascript
  ui.removeAllScriptToUIfFunc();
  ```
- **ui.removeAllUIToScriptFunc**：移除所有UI注册给脚本的函数
  ```javascript
  ui.removeAllUIToScriptFunc();
  ```

##### 脚本可用函数

- **registeScriptFunctionToUI**：注册函数给UI用
  ```javascript
  registeScriptFunctionToUI("script-hello", function (data) {
      logd("script hello call-> " + data);
      return new Date().toString();
  });
  ```
- **callUIRegisteFunction**：调用UI注册给脚本的函数
  ```javascript
  let a = callUIRegisteFunction("ui-hello", "hello");
  logd(a);
  ```
- **removeFunctionToUI**：移除脚本注册给UI的函数
  ```javascript
  removeFunctionToUI("script-hello");
  ```
- **removeAllScriptToUIfFunc**：移除所有脚本注册给UI的函数
  ```javascript
  removeAllScriptToUIfFunc();
  ```
- **removeAllUIToScriptFunc**：移除所有UI注册给脚本的函数
  ```javascript
  removeAllUIToScriptFunc();
  ```

#### 示例
- 详见官网页面，包含 H5、ui.js、main.js 的完整交互代码示例。

> 参考：[EasyClick官网-UI与脚本互通交互](https://www.ieasyclick.net/iostjdocs/zh-cn/funcs/ui/ui-js-inter-adv)

### 设备函数

#### 说明
设备模块函数主要用于获取与设备相关的信息，所有API均以`device.`为前缀调用。

---

- **device.getDeviceId 获取设备ID**
  - 描述：获取手机的唯一ID（需配合脱机激活器）。
  - 返回：字符串
  - 示例：
    ```javascript
    function main() {
        var xx = device.getDeviceId();
        logd(xx);
    }
    main();
    ```

- **device.getEcid 获取Ecid**
  - 描述：获取设备Ecid（需配合脱机激活器）。
  - 返回：字符串
  - 示例：
    ```javascript
    function main() {
        var xx = device.getEcid();
        logd(xx);
    }
    main();
    ```

- **device.getSerialNo 获取序列号**
  - 描述：获取设备序列号（需配合脱机激活器）。
  - 返回：字符串
  - 示例：
    ```javascript
    function main() {
        var xx = device.getSerialNo();
        logd(xx);
    }
    main();
    ```

- **device.getDeviceName 获取设备名称**
  - 描述：获取手机的名称。
  - 返回：字符串
  - 示例：
    ```javascript
    function main() {
        var xx = device.getDeviceName();
        logd(xx);
    }
    main();
    ```

- **device.getDeviceName2 获取设备名称2**
  - 描述：获取设备名称，iOS 16+推荐使用。
  - 返回：字符串
  - 示例：
    ```javascript
    function main() {
        var xx = device.getDeviceName2();
        logd(xx);
    }
    main();
    ```

- **device.getScreenWidthHeight 屏幕宽度高度**
  - 描述：获取屏幕宽度和高度，返回格式为"宽,高"。
  - 返回：字符串
  - 示例：
    ```javascript
    function main() {
        let aa = device.getScreenWidthHeight()
        logd("getScreenWidthHeight " + aa)
        let bb = aa.split(",")
        logd("width " + bb[0])
        logd("height " + bb[1])
    }
    main();
    ```

- **device.getScreenWidth 屏幕宽度**
  - 描述：[已过期] 获取屏幕宽度。
  - 返回：整型
  - 示例：
    ```javascript
    function main() {
        var width = device.getScreenWidth();
        logd(width);
    }
    main();
    ```

- **device.getScreenHeight 屏幕高度**
  - 描述：[已过期] 获取屏幕高度。
  - 返回：整型
  - 示例：
    ```javascript
    function main() {
        var height = device.getScreenHeight();
        logd(height);
    }
    main();
    ```

- **device.getScale 屏幕缩放比**
  - 描述：获取屏幕缩放比。
  - 返回：float
  - 示例：
    ```javascript
    function main() {
        var d = device.getScale();
        logd(d);
    }
    main();
    ```

- **device.getModel 取得机型**
  - 描述：获取手机机型。
  - 返回：字符串
  - 示例：
    ```javascript
    function main() {
        var model = device.getModel();
        logd(model);
    }
    main();
    ```

- **device.getOSVersion 取得手机版本号**
  - 描述：获取系统版本号。
  - 返回：字符串
  - 示例：
    ```javascript
    function main() {
        var osVersion = device.getOSVersion();
        logd(osVersion);
    }
    main();
    ```

- **device.getBattery 取得电量**
  - 描述：获取当前电量。
  - 返回：整型
  - 示例：
    ```javascript
    function main() {
        var res = device.getBattery();
        logd(res);
    }
    main();
    ```

- **device.isCharging 是否正在充电**
  - 描述：判断设备是否正在充电。
  - 返回：布尔型
  - 示例：
    ```javascript
    function main() {
        var res = device.isCharging();
        logd(res);
    }
    main();
    ```

---
> 参考：[EasyClick官网-设备函数](https://www.ieasyclick.net/iostjdocs/zh-cn/funcs/device-api)

### 文件函数

#### 说明
文件模块函数主要用于文件和文件夹的操作，所有API均以`file.`为前缀调用。

---

- **file.getInternalDir 获取内部存储地址**
  - 描述：获取内部存储地址。
  - 参数：type（documents, library, temp, libraryCaches）
  - 返回：字符串
  - 示例：
    ```javascript
    function main() {
        var data = file.getInternalDir("documents");
        logd(data);
    }
    main();
    ```

- **file.getSandBoxDir 获取沙盒的文件夹路径**
  - 描述：获取当前设备沙盒的文件夹路径。
  - 返回：字符串
  - 示例：
    ```javascript
    function main() {
        var data = file.getSandBoxDir();
        logd(data);
    }
    main();
    ```

- **file.getSandBoxFilePath 获取沙盒中的文件路径**
  - 描述：拼接出一个带沙盒路径的文件地址。
  - 返回：字符串
  - 示例：
    ```javascript
    function main() {
        var data = file.getSandBoxFilePath("a.txt");
        logd(data);
    }
    main();
    ```

- **file.readFile 读取为字符串**
  - 描述：将文件读取为字符串。
  - 参数：path（文件路径）
  - 返回：字符串
  - 示例：
    ```javascript
    function main() {
        let p = file.getSandBoxFilePath("a.txt");
        var data = file.readFile(p);
        logd(data);
    }
    main();
    ```

- **file.deleteLine 删除文件某一行**
  - 描述：删除文件某一行或根据包含条件删除。
  - 参数：path（文件路径）、line（行数，-1为不生效）、contains（包含字符串，null为不生效）
  - 返回：boolean
  - 示例：
    ```javascript
    function main() {
        let p = file.getSandBoxFilePath("a.txt");
        let r = file.deleteLine(p, -1, "时间");
        logd("r " + r);
        r = file.deleteLine(p, 3, null);
        logd("r " + r);
    }
    main();
    ```

- **file.deleteLineEx 删除文件某一行（大文件）**
  - 描述：适合大文件，参数同deleteLine。
  - 返回：boolean
  - 示例：
    ```javascript
    function main() {
        let p = file.getSandBoxFilePath("a.txt");
        let r = file.deleteLineEx(p, -1, "时间");
        logd("r " + r);
        r = file.deleteLineEx(p, 3, null);
        logd("r " + r);
    }
    main();
    ```

- **file.listDir 列出所有文件**
  - 描述：递归列出文件夹下所有文件。
  - 参数：path（路径）
  - 返回：字符串数组
  - 示例：
    ```javascript
    function main() {
        let p = file.getSandBoxDir();
        var data = file.listDir(p);
        for (var i = 0; i < data.length; i++) {
            logd("path " + data[i]);
        }
    }
    main();
    ```

- **file.listDir2 列出文件(递归配置)**
  - 描述：列出文件夹下文件和文件夹，可配置是否递归。
  - 参数：path（路径）、recursion（true递归，false不递归）
  - 返回：字符串数组
  - 示例：
    ```javascript
    function main() {
        let p = file.getSandBoxDir();
        var data = file.listDir2(p, false);
        for (var i = 0; i < data.length; i++) {
            logd("path " + data[i]);
        }
    }
    main();
    ```

- **file.writeFile 写入文件**
  - 描述：将字符串写入文件。
  - 参数：data（字符串）、path（文件路径）
  - 示例：
    ```javascript
    function main() {
        var data = "Test";
        let p = file.getSandBoxFilePath("a.txt");
        file.writeFile(data, p);
    }
    main();
    ```

- **file.create 创建文件**
  - 描述：创建一个文件。
  - 参数：path（文件路径）
  - 返回：boolean
  - 示例：
    ```javascript
    function main() {
        let p = file.getSandBoxFilePath("a.txt");
        var create = file.create(p);
        logd(create);
    }
    main();
    ```

- **file.mkdirs 创建文件夹**
  - 描述：创建文件夹。
  - 参数：path（路径）
  - 返回：boolean
  - 示例：
    ```javascript
    function main() {
        let p = file.getSandBoxDir();
        p = p + "/ad"
        var t = file.mkdirs(p);
        logd(t);
    }
    main();
    ```

- **file.deleteAllFile 删除文件/文件夹**
  - 描述：删除所有文件或文件夹。
  - 参数：path（文件或文件夹路径）
  - 示例：
    ```javascript
    function main() {
        let filePath = file.getSandBoxFilePath("a.txt");
        file.deleteAllFile(filePath);
        let dirPath = file.getSandBoxFilePath("a/");
        file.deleteAllFile(dirPath);
    }
    main();
    ```

- **file.appendLine 追加字符串**
  - 描述：写入一行到文件，追加模式。
  - 参数：data（行数据）、path（文件路径）
  - 返回：boolean
  - 示例：
    ```javascript
    function main() {
        var data = "sss";
        let p = file.getSandBoxFilePath("a.txt");
        var t = file.appendLine(data, p);
        logd(t);
    }
    main();
    ```

- **file.appendLineEx 追加字符串（大文件）**
  - 描述：适合大文件，参数同appendLine。
  - 返回：boolean
  - 示例：
    ```javascript
    function main() {
        var data = "sss";
        let p = file.getSandBoxFilePath("a.txt");
        var t = file.appendLineEx(data, p);
        logd(t);
    }
    main();
    ```

- **file.readLine 读取一行**
  - 描述：读取指定行号的数据。
  - 参数：path（路径）、lineNo（行号）
  - 返回：字符串
  - 示例：
    ```javascript
    function main() {
        let p = file.getSandBoxFilePath("a.txt");
        var t = file.readLine(p, 1);
        logd(t);
    }
    main();
    ```

- **file.readLineEx 读取一行（大文件）**
  - 描述：适合大文件，参数同readLine。
  - 返回：字符串
  - 示例：
    ```javascript
    function main() {
        let p = file.getSandBoxFilePath("a.txt");
        var t = file.readLineEx(p, 1);
        logd(t);
    }
    main();
    ```

- **file.readAllLines 读取所有行**
  - 描述：读取所有数据。
  - 参数：path（路径）
  - 返回：字符串数组|null
  - 示例：
    ```javascript
    function main() {
        let p = file.getSandBoxFilePath("a.txt");
        var t = file.readAllLines(p);
        logd(t);
    }
    main();
    ```

- **file.exists 是否存在**
  - 描述：判断文件或文件夹是否存在。
  - 参数：path（路径）
  - 返回：boolean
  - 示例：
    ```javascript
    function main() {
        let p = file.getSandBoxFilePath("a.txt");
        var t = file.exists(p);
        logd(t);
    }
    main();
    ```

- **file.copy 文件复制**
  - 描述：复制文件。
  - 参数：src（源文件路径）、dest（目标文件路径）
  - 返回：boolean
  - 示例：
    ```javascript
    function main() {
        let p1 = file.getSandBoxFilePath("a1.txt");
        let p2 = file.getSandBoxFilePath("a2.txt");
        var t = file.copy(p1, p2);
        logd(t);
    }
    main();
    ```

---
> 参考：[EasyClick官网-文件函数](https://www.ieasyclick.net/iostjdocs/zh-cn/funcs/file-api)

### 网络函数

#### 说明
网络模块函数主要用于网络请求和通信，所有API均以`http.`为前缀调用。

---

- **http.request 万能请求函数**
  - 描述：HTTP万能请求，支持GET/POST/PUT等，参数灵活。
  - 参数：param（map，详见官网参数说明）
  - 返回：Response对象或null
  - 示例：
    ```javascript
    function main() {
        let url = "http://192.168.0.5:8081/api/request";
        let params = {
            "url": url,
            "method": "POST",
            "userAgent": "xxx",
            "referrer": "baidu.com",
            "cookie": {"cookie1": "tst1", "cookie2": "tst2"},
            "data": {"a1": "aaa"},
            "file": {"file1": "a.png"}
        };
        let x = http.request(params);
        if (x) {
            logd("header=> " + JSON.stringify(x.header));
            logd("cookie=> " + JSON.stringify(x.cookie));
            logd("statusCode=" + x.statusCode);
            logd("statusMessage=" + x.statusMessage);
            logd("charset=" + x.charset);
            logd("contentType=" + x.contentType);
            logd("body=" + x.body);
        } else {
            loge("无结果");
        }
    }
    main();
    ```

- **http.requestEx 万能请求函数(扩展)**
  - 描述：参数与http.request一致，支持更多扩展。
  - 示例：同上

- **http.downloadFile 下载文件**
  - 描述：下载文件到本地。
  - 参数：url（字符串）、savePath（保存路径）、timeout（毫秒）、header（map，可选）
  - 返回：boolean
  - 示例：
    ```javascript
    function main() {
        let url = "http://example.com/a.png";
        let savePath = file.getSandBoxFilePath("a.png");
        let r = http.downloadFile(url, savePath, 10000, {"User-Agent": "test"});
        logd("result: " + r);
    }
    main();
    ```

- **http.downloadFile2 断点续传下载文件**
  - 描述：支持断点续传的下载。
  - 参数：同downloadFile

- **http.httpGet GET请求**
  - 描述：发起GET请求。
  - 参数：url、timeout、header
  - 返回：字符串
  - 示例：
    ```javascript
    function main() {
        let url = "http://example.com";
        let r = http.httpGet(url, 10000, {"User-Agent": "test"});
        logd(r);
    }
    main();
    ```

- **http.httpPost POST请求**
  - 描述：发起POST请求。
  - 参数：url、data、timeout、header
  - 返回：字符串
  - 示例：
    ```javascript
    function main() {
        let url = "http://example.com";
        let r = http.httpPost(url, {"a": 1}, 10000, {"User-Agent": "test"});
        logd(r);
    }
    main();
    ```

- **http.postJSON 发送JSON**
  - 描述：以JSON格式发送POST请求。
  - 参数：url、jsonObj、timeout、header
  - 返回：字符串

- **http.getLanIp 获取局域网IP**
  - 描述：获取局域网的IP（IPv4/IPv6）。
  - 返回：JSON字符串
  - 示例：
    ```javascript
    function main() {
        let x = http.getLanIp();
        logd("result: " + x);
    }
    main();
    ```

- **http.newWebsocket websocket通信**
  - 描述：创建WebSocket连接。
  - 参数：url（字符串）、header（map）
  - 返回：WebSocket对象
  - 示例：
    ```javascript
    function testwebsocket() {
        let ws = http.newWebsocket("ws://192.168.2.13:8120/api/ws/device?deviceId=111", {"t1": "100"});
        ws.setWriteTimeout(5);
        ws.setPingInterval(5);
        ws.setConnectionTimeout(5);
        ws.onOpen(function (ws1) { logi("onOpen"); });
        ws.onText(function (ws1, text) { logi("onText " + text); });
        ws.onClose(function (ws1, reason) { logi("onClose reason: " + reason); });
        ws.onError(function (ws1, msg) { logi("onError " + msg); });
        ws.onBinary(function (ws1, bytes) { logi("onBinary " + bytes); });
        let r = ws.connect();
        ws.setAutoReconnect(true);
        logd("connect result: " + r);
        ws.startHeartbeatInterval(5, function () { return "我是心跳数据" });
        // ... 省略循环与关闭逻辑 ...
    }
    testwebsocket();
    ```

---
> 参考：[EasyClick官网-网络函数](https://www.ieasyclick.net/iostjdocs/zh-cn/funcs/http-api)

### 线程函数

#### 说明
- iOS的js引擎天生是单线程模式，无法实现多线程。EasyClick通过多jsvm虚拟机实现伪多线程，线程间数据隔离。
- 线程模块是worker模块的简化版，适合直接执行代码片段，使用简单。
- 适配EC 脱机版本5.0.0+。

---

- **thread.execCodeAsync 异步执行代码块**
  - 描述：异步执行代码块，支持回调。
  - 参数：name（线程名称）、func（代码块）、callbackName（回调函数名）、callbackFunc（回调函数）
  - 返回：线程名称（string）
  - 示例：
    ```javascript
    function main() {
      thread.execCodeAsync("thread1", function () {
        while (!isScriptExit()) {
          sleep(1000)
          logd("sub thread " + new Date())
          var url = "http://baidu.com";
          var pa = {"b": "22"};
          var x = http.httpGet(url, pa, 10000, {"User-Agent": "test"});
          logd(" result-    " + x);
          let backdata = thread.invokeCallback("f1", "百度的数据:" + x)
          logd("backdata " + backdata)
        }
      }, "f1", function (name, data) {
        logd("callback " + data)
        return "ok->"
      })
      let timex = 0
      while (!isScriptExit()) {
        logd("main " + new Date())
        sleep(1000)
        timex = timex + 1000
        if (timex > 8000) {
          break
        }
      }
      thread.cancelThread("thread1")
      thread.stopAll();
      sleep(1000)
      logd("thread1 cancel " + thread.isCancelled("thread1"))
    }
    main();
    ```

- **thread.invokeCallback 调用回调函数**
  - 描述：调用addCallback设置的回调函数。
  - 参数：funcName（回调函数名）、data（回调数据）
  - 返回：回调函数返回的数据
  - 示例：见上方execCodeAsync示例

- **thread.newThread 新的线程**
  - 描述：创建一个新的线程封装类。
  - 参数：name（线程名称，可选）
  - 返回：ThreadClient对象或null
  - 示例：
    ```javascript
    function main() {
      let name = "thread2";
      let th = thread.newThread(name)
      th.addCallback("f1", function (name, data) {
        logd("callback " + data)
        return "ok"
      });
      th.execAsync(function () {
        var url = "http://baidu.com";
        var pa = { "b": "22" };
        var x = http.httpGet(url, pa, 10000, { "User-Agent": "test" });
        let backdata = thread.invokeCallback("f1", x)
        logd("backdata "+backdata)
      });
      sleep(5000);
      logd("结束 ");
    }
    main();
    ```

- **addCallback 增加回调函数**
  - 描述：在线程对象上增加回调函数。
  - 参数：name（函数名）、func（回调函数）
  - 示例：见newThread示例

- **thread.cancelThread 取消线程**
  - 描述：取消线程的执行。
  - 参数：t（线程对象ID或名称）
  - 返回：boolean
  - 示例：见execCodeAsync示例

- **thread.stopAll 停止所有线程**
  - 描述：取消所有正在运行的线程。
  - 示例：见execCodeAsync示例

- **thread.isCancelled 取消判断**
  - 描述：判断线程是否已被取消。
  - 参数：t（线程对象ID或名称）
  - 返回：boolean
  - 示例：见execCodeAsync示例

---
> 参考：[EasyClick官网-线程函数](https://www.ieasyclick.net/iostjdocs/zh-cn/funcs/thread-api)

### 多Worker函数

#### 说明
- iOS的js引擎天生是单线程，EasyClick通过多jsvm实现多个worker并发，数据隔离。
- 每个jsvm独立运行，主脚本worker名称为mainWorker，其他worker可自定义。
- worker间数据可通过文件读写实现。

---

- **getCurrentWorkerName 获取当前worker名称**
  - 描述：获取当前worker的名称。
  - 返回：string
  - 示例：
    ```javascript
    function main() {
        var m = getCurrentWorkerName();
        logd(m);
    }
    main();
    ```

- **workerThread.newWorker 生成一个新的worker**
  - 描述：新增一个worker。
  - 参数：name（worker名称）
  - 返回：string，worker名称
  - 示例：见下方完整多worker示例

- **workerThread.isRunning worker是否正在运行**
  - 描述：判断worker是否正在运行。
  - 参数：name（worker名称）
  - 返回：boolean

- **workerThread.hasWorkerFunction 是否有worker函数**
  - 描述：判断是否存在指定worker函数。
  - 参数：funcName（函数名称）
  - 返回：boolean

- **workerThread.addWorkerFunction 增加worker函数**
  - 描述：新增一个工作函数给别的worker调用。
  - 参数：funcName（函数名称）、callback（实现函数）
  - 返回：boolean

- **workerThread.removeWorkerFunction 删除worker函数**
  - 描述：删除一个工作函数。
  - 参数：funcName（函数名称）
  - 返回：boolean

- **workerThread.callWorkerFunction 调用worker注册函数**
  - 描述：调用别的worker注册的函数。
  - 参数：funcName（函数名称）、data（参数，建议字符串）
  - 返回：object

- **workerThread.removeWorker 取消worker**
  - 描述：取消worker。
  - 参数：name（worker名称）
  - 返回：boolean

- **workerThread.isCancelled 是否取消worker**
  - 描述：判断worker是否已被取消。
  - 参数：name（worker名称）
  - 返回：boolean

- **workerThread.stopAll 停止所有worker**
  - 描述：取消所有正在运行的worker（无法取消主脚本线程）。
  - 返回：boolean

---

#### 多Worker完整示例
```javascript
function startNewWorker(workName) {
    let name = workerThread.newWorker(workName);
    logd("startNewWorker " + name)
    sleep(1000)
    if (!workerThread.isRunning(workName)) {
        logd(workName + " 没运行");
        return false
    }
    return true;
}

function testworker() {
    logd("current worker name " + getCurrentWorkerName())
    if (getCurrentWorkerName() == "mainWorker") {
        logd("主脚本线程")
        startNewWorker("worker1");
        startNewWorker("worker2");
        startNewWorker("worker3");
        for (let i = 0; i < 10; i++) {
            if (isScriptExit()) {
                logd("mainworker 退出了")
                return
            }
            sleep(1000)
            logd(getCurrentWorkerName() + " --> " + new Date())
            if (i % 2 == 0) {
                let dsx = JSON.stringify({"日期": new Date()});
                if (workerThread.hasWorkerFunction("getWorker1Data")) {
                    let result = workerThread.callWorkerFunction("getWorker1Data", dsx)
                    logd("worker1#getWorker1Data 返回--->::::  " + result)
                    let removeWorker1 = workerThread.removeWorker("worker1")
                    logd("removeWorker1  " + removeWorker1)
                    logd("isCancelled worker1 " + workerThread.isCancelled("worker1"));
                    workerThread.removeWorkerFunction("getWorker1Data")
                } else {
                    logw("无 getWorker1Data 函数，不调用")
                }
            }
            if (i % 4 == 0) {
                let dsx = JSON.stringify({"日期": new Date()});
                let result = workerThread.callWorkerFunction("getWorker2Data", dsx)
                logd("worker2#getWorker2Data 返回--->::::  " + result)
            }
            if (i % 6 == 0) {
                let dsx = JSON.stringify({"日期": new Date()});
                let result = workerThread.callWorkerFunction("getWorker3Data", dsx)
                logd("worker3#getWorker3Data 返回--->::::  " + result)
                workerThread.stopAll()
            }
        }
    } else {
        logd("非主脚本线程 ------ ")
        if (getCurrentWorkerName() == "worker1") {
            workerThread.addWorkerFunction("getWorker1Data", function (data) {
                logd("---->worker1得到的参数  " + data)
                return "我是worker1#getWorker1Data 函数返回的数据 " + new Date()
            })
            while (true) {
                if (isScriptExit()) {
                    logd("worker1 退出了")
                    return
                }
                sleep(1000)
            }
        }
        if (getCurrentWorkerName() == "worker2") {
            workerThread.addWorkerFunction("getWorker2Data", function (data) {
                logd("---->worker2得到的参数  " + data)
                logd("getWorker2Data getCurrentWorkerName " + getCurrentWorkerName())
                return "我是worker2#getWorker2Data 函数返回的数据 " + new Date()
            })
            while (true) {
                if (isScriptExit()) {
                    logd("worker2 退出了")
                    return
                }
                sleep(1000)
            }
        }
        if (getCurrentWorkerName() == "worker3") {
            workerThread.addWorkerFunction("getWorker3Data", function (data) {
                logd("---->worker3得到的参数  " + data)
                return "我是worker3#getWorker3Data 函数返回的数据 " + new Date()
            })
            while (true) {
                if (isScriptExit()) {
                    logd("worker3 退出了")
                    return
                }
                sleep(1000)
            }
        }
    }
}
testworker()
```

---
> 参考：[EasyClick官网-多Worker函数](https://www.ieasyclick.net/iostjdocs/zh-cn/funcs/worker-api)

### 企业云控

#### 说明
- iOS企业云控需脱机版本2.2.0+。
- 企业云控适用于大规模设备的集中管理与自动化控制。
- 需在服务端（如阿里云、腾讯云等）部署云控服务端程序。
- 支持iOS与安卓脱机版本，云控API、安装与开发接口文档与安卓版本保持一致。
- 具体安装、使用、开发接口文档请参考安卓云控文档。

---
> 参考：[EasyClick官网-企业云控](https://www.ieasyclick.net/iostjdocs/zh-cn/funcs/ecloud-tj-api)