# iosauto文件分片脚本
$sourceFile = "untitled\src\js\easyclick-tj-agent-source-5.12.0\iosauto.framework\iosauto"
$chunkSize = 5MB

Write-Host "开始分片 $sourceFile..."
Write-Host "每片大小: $($chunkSize/1MB) MB"

if (-not (Test-Path $sourceFile)) {
    Write-Error "源文件不存在: $sourceFile"
    exit
}

$fileSize = (Get-Item $sourceFile).Length
Write-Host "源文件大小: $($fileSize/1MB) MB"

$reader = [System.IO.File]::OpenRead($sourceFile)
$partNum = 0
$buffer = New-Object byte[] $chunkSize

try {
    while (($bytesRead = $reader.Read($buffer, 0, $chunkSize)) -gt 0) {
        $partFile = "iosauto_part_$partNum"
        
        # 只写入实际读取的字节
        $actualData = $buffer[0..($bytesRead-1)]
        [System.IO.File]::WriteAllBytes($partFile, $actualData)
        
        Write-Host "创建片段: $partFile ($([math]::Round($bytesRead/1MB, 2)) MB)"
        $partNum++
    }
}
finally {
    $reader.Close()
}

Write-Host "分片完成！共创建 $partNum 个文件"
Write-Host "片段文件："
Get-ChildItem "iosauto_part_*" | ForEach-Object {
    Write-Host "  $($_.Name) - $([math]::Round($_.Length/1MB, 2)) MB"
} 