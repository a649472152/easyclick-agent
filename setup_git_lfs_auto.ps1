# EasyClick Git LFS 自动化设置脚本

param(
    [string]$GitHubUsername = "",
    [string]$RepoName = "easyclick-agent"
)

Write-Host "🚀 EasyClick Git LFS 自动化设置" -ForegroundColor Green
Write-Host "================================" -ForegroundColor Green
Write-Host ""

# 检查Git安装
Write-Host "🔍 检查Git安装..." -ForegroundColor Yellow
try {
    $gitVersion = git --version
    Write-Host "✅ Git已安装: $gitVersion" -ForegroundColor Green
} catch {
    Write-Host "❌ Git未安装！" -ForegroundColor Red
    Write-Host "请先安装Git: https://git-scm.com/download/win" -ForegroundColor Yellow
    Write-Host "安装时请选择包含Git LFS的选项" -ForegroundColor Yellow
    exit 1
}

# 检查Git LFS安装
Write-Host "🔍 检查Git LFS安装..." -ForegroundColor Yellow
try {
    $lfsVersion = git lfs version
    Write-Host "✅ Git LFS已安装: $lfsVersion" -ForegroundColor Green
} catch {
    Write-Host "❌ Git LFS未安装！" -ForegroundColor Red
    Write-Host "请安装Git LFS: https://git-lfs.github.io/" -ForegroundColor Yellow
    Write-Host "或者重新安装Git for Windows并选择LFS组件" -ForegroundColor Yellow
    
    # 尝试自动安装Git LFS
    Write-Host "🔄 尝试自动安装Git LFS..." -ForegroundColor Yellow
    try {
        if (Get-Command winget -ErrorAction SilentlyContinue) {
            winget install --id Git.LFS
        } else {
            Write-Host "请手动安装Git LFS后重新运行此脚本" -ForegroundColor Red
            exit 1
        }
    } catch {
        Write-Host "自动安装失败，请手动安装" -ForegroundColor Red
        exit 1
    }
}

# 设置项目路径
$ProjectPath = "C:\easyclick-lfs-project"
$SourcePath = "C:\untitled\untitled\src\js\easyclick-tj-agent-source-5.12.0"

# 检查源文件是否存在
if (-not (Test-Path $SourcePath)) {
    Write-Host "❌ 源文件路径不存在: $SourcePath" -ForegroundColor Red
    exit 1
}

Write-Host "📁 创建项目目录..." -ForegroundColor Yellow
if (Test-Path $ProjectPath) {
    Remove-Item $ProjectPath -Recurse -Force
}
New-Item -ItemType Directory -Path $ProjectPath -Force | Out-Null
cd $ProjectPath

Write-Host "🔧 初始化Git仓库..." -ForegroundColor Yellow
git init
git lfs install

Write-Host "📋 配置Git LFS跟踪规则..." -ForegroundColor Yellow
# 跟踪大文件
git lfs track "*.framework/**"
git lfs track "iosauto"
git lfs track "WebDriverAgentLib"
git lfs track "*.dylib"
git lfs track "*.a"

Write-Host "📂 复制项目文件..." -ForegroundColor Yellow
Copy-Item "$SourcePath\*" . -Recurse -Force

Write-Host "📦 创建GitHub Actions工作流..." -ForegroundColor Yellow
$WorkflowDir = ".github\workflows"
New-Item -ItemType Directory -Path $WorkflowDir -Force | Out-Null

$WorkflowContent = @"
name: EasyClick编译（Git LFS版本）

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
        lfs: true
        
    - name: Git LFS检出大文件
      run: git lfs pull
      
    - name: 验证LFS文件
      run: |
        echo "检查framework文件..."
        ls -la *.framework/ || echo "Framework目录检查完毕"
        echo "检查LFS跟踪的文件..."
        git lfs ls-files
        
    - name: 设置Xcode
      uses: maxim-lobanov/setup-xcode@v1
      with:
        xcode-version: 'latest-stable'
    
    - name: 编译EasyClick Agent
      run: |
        echo "开始编译..."
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
    
    - name: 打包IPA文件
      run: |
        cd /tmp/derivedDataPath/Build/Products/Release-iphoneos
        echo "清理不需要的app..."
        rm -rf IntegrationApp.app || true
        echo "创建Payload目录..."
        mkdir -p Payload
        echo "移动app到Payload..."
        mv *.app Payload/ || true
        echo "打包IPA..."
        zip -r EasyClick-Agent-LFS.ipa Payload
        echo "IPA文件信息:"
        ls -la EasyClick-Agent-LFS.ipa
    
    - name: 上传IPA文件
      uses: actions/upload-artifact@v4
      with:
        name: EasyClick-Agent-LFS
        path: /tmp/derivedDataPath/Build/Products/Release-iphoneos/EasyClick-Agent-LFS.ipa
        retention-days: 30
        
    - name: 输出成功信息
      run: |
        echo "🎉 编译成功！"
        echo "📱 IPA文件已生成，可以下载安装到iOS设备"
        echo "🔧 这是EasyClick专用版本，包含完整的iosauto框架"
"@

Set-Content -Path "$WorkflowDir\build.yml" -Value $WorkflowContent -Encoding UTF8

# 创建README
$ReadmeContent = @"
# EasyClick Agent (Git LFS版本)

这是EasyClick专用版本的WebDriverAgent，使用Git LFS处理大文件。

## 特性

- ✅ 完整的iosauto.framework
- ✅ 完整的WebDriverAgentLib.framework  
- ✅ 图色识别功能
- ✅ 计算机视觉支持
- ✅ 自动化测试功能

## 使用方法

1. Clone这个仓库
2. 进入GitHub Actions页面
3. 手动触发"EasyClick编译（Git LFS版本）"工作流
4. 等待编译完成
5. 下载生成的IPA文件

## 文件说明

使用Git LFS跟踪的大文件：
- \`iosauto.framework/**\` - iOS自动化框架
- \`WebDriverAgentLib.framework/**\` - WebDriver库
- \`*.dylib\` - 动态链接库

## 本地编译

如果你有Mac电脑：

\`\`\`bash
git clone --recursive https://github.com/你的用户名/$RepoName.git
cd $RepoName
git lfs pull  # 确保下载所有LFS文件
./buildipa.sh
\`\`\`

## 安装要求

- iOS 12.0+
- 需要开发者证书签名
"@

Set-Content -Path "README.md" -Value $ReadmeContent -Encoding UTF8

Write-Host "➕ 添加文件到Git..." -ForegroundColor Yellow
git add .gitattributes
git add .

Write-Host "📊 检查Git LFS状态..." -ForegroundColor Yellow
try {
    git lfs status
    $lfsFiles = git lfs ls-files
    if ($lfsFiles) {
        Write-Host "✅ 以下文件将使用LFS存储:" -ForegroundColor Green
        $lfsFiles | ForEach-Object { Write-Host "   📦 $_" -ForegroundColor Cyan }
    }
} catch {
    Write-Host "⚠️  LFS状态检查失败，但可以继续" -ForegroundColor Yellow
}

Write-Host "💾 提交到Git..." -ForegroundColor Yellow
git commit -m "Initial commit: EasyClick Agent with Git LFS"

Write-Host ""
Write-Host "🎉 项目准备完成！" -ForegroundColor Green
Write-Host "📁 项目路径: $ProjectPath" -ForegroundColor Cyan
Write-Host ""
Write-Host "📋 下一步操作：" -ForegroundColor Yellow
Write-Host "1. 在GitHub创建新仓库（建议名称：$RepoName）" -ForegroundColor White

if ($GitHubUsername) {
    Write-Host "2. 运行以下命令推送到GitHub：" -ForegroundColor White
    Write-Host "   git remote add origin https://github.com/$GitHubUsername/$RepoName.git" -ForegroundColor Cyan
    Write-Host "   git branch -M main" -ForegroundColor Cyan
    Write-Host "   git push -u origin main" -ForegroundColor Cyan
} else {
    Write-Host "2. 运行以下命令推送到GitHub：" -ForegroundColor White
    Write-Host "   git remote add origin https://github.com/你的用户名/$RepoName.git" -ForegroundColor Cyan
    Write-Host "   git branch -M main" -ForegroundColor Cyan
    Write-Host "   git push -u origin main" -ForegroundColor Cyan
}

Write-Host "3. 进入GitHub仓库，点击Actions选项卡" -ForegroundColor White
Write-Host "4. 手动触发'EasyClick编译（Git LFS版本）'工作流" -ForegroundColor White
Write-Host "5. 等待编译完成，下载IPA文件" -ForegroundColor White
Write-Host ""
Write-Host "💡 提示：" -ForegroundColor Yellow
Write-Host "   • 首次推送可能需要较长时间（上传LFS文件）" -ForegroundColor White
Write-Host "   • 确保GitHub账户有足够的LFS配额" -ForegroundColor White
Write-Host "   • 免费账户有1GB LFS存储限制" -ForegroundColor White

# 显示项目文件统计
Write-Host ""
Write-Host "📊 项目文件统计：" -ForegroundColor Cyan
$totalSize = (Get-ChildItem -Recurse | Measure-Object -Property Length -Sum).Sum
Write-Host "   总文件大小: $([math]::Round($totalSize/1MB,2)) MB" -ForegroundColor White

try {
    $lfsFiles = git lfs ls-files
    if ($lfsFiles) {
        Write-Host "   LFS跟踪文件数: $($lfsFiles.Count)" -ForegroundColor White
    }
} catch {
    Write-Host "   LFS文件统计失败" -ForegroundColor Yellow
} 