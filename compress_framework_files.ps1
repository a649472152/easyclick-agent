# EasyClick Framework文件压缩脚本
$basePath = "untitled\src\js\easyclick-tj-agent-source-5.12.0"

Write-Host "🔧 开始压缩framework文件..."

# 检查基础路径
if (-not (Test-Path $basePath)) {
    Write-Error "基础路径不存在: $basePath"
    exit 1
}

# 压缩iosauto.framework的各个组件
$frameworkPath = "$basePath\iosauto.framework"

Write-Host "📁 压缩iosauto.framework组件..."

# 1. Modules文件夹
if (Test-Path "$frameworkPath\Modules") {
    Compress-Archive -Path "$frameworkPath\Modules" -DestinationPath "iosauto_modules.zip" -CompressionLevel Optimal -Force
    Write-Host "✅ iosauto_modules.zip 创建成功"
} else {
    Write-Host "⚠️ Modules文件夹不存在"
}

# 2. Frameworks子文件夹
if (Test-Path "$frameworkPath\Frameworks") {
    Compress-Archive -Path "$frameworkPath\Frameworks" -DestinationPath "iosauto_subframeworks.zip" -CompressionLevel Optimal -Force
    Write-Host "✅ iosauto_subframeworks.zip 创建成功"
} else {
    Write-Host "⚠️ Frameworks文件夹不存在"
}

# 3. _CodeSignature文件夹
if (Test-Path "$frameworkPath\_CodeSignature") {
    Compress-Archive -Path "$frameworkPath\_CodeSignature" -DestinationPath "iosauto_codesignature.zip" -CompressionLevel Optimal -Force
    Write-Host "✅ iosauto_codesignature.zip 创建成功"
} else {
    Write-Host "⚠️ _CodeSignature文件夹不存在"
}

# 4. 原始Info.plist
if (Test-Path "$frameworkPath\Info.plist") {
    Copy-Item "$frameworkPath\Info.plist" -Destination "iosauto_info.plist" -Force
    Write-Host "✅ iosauto_info.plist 复制成功"
} else {
    Write-Host "⚠️ Info.plist文件不存在"
}

# 压缩WebDriverAgentLib.framework
$wdaLibPath = "$basePath\WebDriverAgentLib.framework"
if (Test-Path $wdaLibPath) {
    Compress-Archive -Path $wdaLibPath -DestinationPath "webdriveragentlib_framework.zip" -CompressionLevel Optimal -Force
    Write-Host "✅ webdriveragentlib_framework.zip 创建成功"
} else {
    Write-Host "⚠️ WebDriverAgentLib.framework不存在"
}

# 压缩PrivateHeaders
$privateHeadersPath = "$basePath\PrivateHeaders"
if (Test-Path $privateHeadersPath) {
    Compress-Archive -Path $privateHeadersPath -DestinationPath "private_headers.zip" -CompressionLevel Optimal -Force
    Write-Host "✅ private_headers.zip 创建成功"
} else {
    Write-Host "⚠️ PrivateHeaders文件夹不存在"
}

Write-Host "📊 压缩完成！生成的文件："
Get-ChildItem "*.zip" | ForEach-Object {
    Write-Host "  $($_.Name) - $([math]::Round($_.Length/1KB, 2)) KB"
}

Get-ChildItem "iosauto_info.plist" -ErrorAction SilentlyContinue | ForEach-Object {
    Write-Host "  $($_.Name) - $([math]::Round($_.Length, 0)) 字节"
} 