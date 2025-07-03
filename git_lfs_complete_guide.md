# Git LFS 完整操作指南

## 📥 第1步：安装Git和Git LFS

### 方法1：安装Git for Windows（推荐）
1. 访问 https://git-scm.com/download/win
2. 下载并安装最新版Git for Windows
3. 安装时选择"Additional icons" > "Git LFS"
4. 或者安装完Git后，再安装Git LFS

### 方法2：单独安装Git LFS
1. 先确保已安装Git
2. 访问 https://git-lfs.github.io/
3. 下载Git LFS Windows版本
4. 运行安装程序

## 🔧 第2步：验证安装

```powershell
# 检查Git版本
git --version

# 检查Git LFS版本
git lfs version
```

## 🚀 第3步：EasyClick项目Git LFS设置

### 3.1 创建项目目录并初始化

```powershell
# 创建工作目录
$ProjectPath = "C:\easyclick-lfs"
New-Item -ItemType Directory -Path $ProjectPath -Force
cd $ProjectPath

# 初始化Git仓库
git init

# 安装Git LFS到这个仓库
git lfs install
```

### 3.2 配置LFS跟踪规则

```powershell
# 跟踪所有framework二进制文件
git lfs track "*.framework/iosauto"
git lfs track "*.framework/WebDriverAgentLib"

# 跟踪所有动态库
git lfs track "*.dylib"

# 跟踪所有framework目录（推荐）
git lfs track "*.framework/**"

# 查看跟踪规则
cat .gitattributes
```

### 3.3 复制EasyClick项目文件

```powershell
# 复制源文件
$SourcePath = "C:\untitled\untitled\src\js\easyclick-tj-agent-source-5.12.0"
Copy-Item "$SourcePath\*" . -Recurse -Force

# 检查大文件
git lfs ls-files
```

### 3.4 提交文件到Git

```powershell
# 添加gitattributes文件
git add .gitattributes

# 添加所有文件
git add .

# 检查哪些文件将被LFS处理
git lfs status

# 提交
git commit -m "Initial commit with Git LFS"
```

## 🌐 第4步：推送到GitHub

### 4.1 在GitHub创建仓库
1. 访问 https://github.com
2. 点击"New repository"
3. 填写仓库名（如：easyclick-agent）
4. 选择Public或Private
5. 点击"Create repository"

### 4.2 连接远程仓库并推送

```powershell
# 添加远程仓库
git remote add origin https://github.com/你的用户名/easyclick-agent.git

# 设置主分支
git branch -M main

# 推送代码（包含LFS文件）
git push -u origin main
```

## 🛠️ 第5步：GitHub Actions编译配置

在项目根目录创建 `.github/workflows/build.yml`：

```yaml
name: EasyClick编译（Git LFS）

on:
  push:
    branches: [ main, master ]
  workflow_dispatch:

jobs:
  build:
    runs-on: macos-latest
    
    steps:
    - name: 检出代码（启用LFS）
      uses: actions/checkout@v4
      with:
        lfs: true  # 关键：启用LFS
        
    - name: Git LFS检出大文件
      run: git lfs pull
      
    - name: 验证文件
      run: |
        ls -la iosauto.framework/
        ls -la WebDriverAgentLib.framework/
        
    - name: 设置Xcode
      uses: maxim-lobanov/setup-xcode@v1
      with:
        xcode-version: 'latest-stable'
    
    - name: 编译EasyClick
      run: |
        xcodebuild build-for-testing \
          -project tj-easyclick-agent.xcodeproj \
          -scheme WebDriverAgentRunner \
          -sdk iphoneos \
          -configuration Release \
          -derivedDataPath /tmp/derivedDataPath \
          -allowProvisioningUpdates \
          CODE_SIGN_IDENTITY="" \
          CODE_SIGNING_REQUIRED=NO \
          CODE_SIGNING_ALLOWED=NO
    
    - name: 打包IPA
      run: |
        cd /tmp/derivedDataPath/Build/Products/Release-iphoneos
        rm -rf IntegrationApp.app || true
        mkdir -p Payload
        mv *.app Payload/ || true
        zip -r EasyClick-Agent.ipa Payload
        ls -la EasyClick-Agent.ipa
    
    - name: 上传IPA
      uses: actions/upload-artifact@v4
      with:
        name: EasyClick-Agent-LFS
        path: /tmp/derivedDataPath/Build/Products/Release-iphoneos/EasyClick-Agent.ipa
        retention-days: 30
```

## 📋 常用Git LFS命令

```powershell
# 查看LFS跟踪的文件
git lfs ls-files

# 查看LFS状态
git lfs status

# 手动下载LFS文件
git lfs pull

# 查看LFS跟踪规则
cat .gitattributes

# 迁移已有大文件到LFS
git lfs migrate import --include="*.framework/**"
```

## ⚠️ 注意事项

1. **GitHub LFS限制**：
   - 免费账户：1GB存储，1GB/月带宽
   - 付费账户：更大存储和带宽

2. **文件大小限制**：
   - 单文件最大2GB
   - 推荐超过100MB的文件使用LFS

3. **CI/CD注意事项**：
   - 必须在checkout时设置`lfs: true`
   - 可能需要`git lfs pull`确保文件完整

## 🆘 如果Git LFS失败的备选方案

如果Git LFS安装有问题，可以使用压缩方案：

```powershell
# 运行压缩脚本
powershell -ExecutionPolicy Bypass -File "C:\untitled\compress_upload.ps1"
```

这会将大文件压缩成zip，大大减小上传体积。 