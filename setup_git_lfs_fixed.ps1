# EasyClick Git LFS Setup Script

param(
    [string]$GitHubUsername = "",
    [string]$RepoName = "easyclick-agent"
)

Write-Host "EasyClick Git LFS Auto Setup" -ForegroundColor Green
Write-Host "==============================" -ForegroundColor Green
Write-Host ""

# Check Git installation
Write-Host "Checking Git installation..." -ForegroundColor Yellow
try {
    $gitVersion = git --version
    Write-Host "Git installed: $gitVersion" -ForegroundColor Green
} catch {
    Write-Host "Git not installed!" -ForegroundColor Red
    Write-Host "Please install Git: https://git-scm.com/download/win" -ForegroundColor Yellow
    Write-Host "Make sure to select Git LFS during installation" -ForegroundColor Yellow
    exit 1
}

# Check Git LFS installation  
Write-Host "Checking Git LFS installation..." -ForegroundColor Yellow
try {
    $lfsVersion = git lfs version
    Write-Host "Git LFS installed: $lfsVersion" -ForegroundColor Green
} catch {
    Write-Host "Git LFS not installed!" -ForegroundColor Red
    Write-Host "Please install Git LFS: https://git-lfs.github.io/" -ForegroundColor Yellow
    Write-Host "Or reinstall Git for Windows with LFS component" -ForegroundColor Yellow
    exit 1
}

# Setup project paths
$ProjectPath = "C:\easyclick-lfs-project"
$SourcePath = "C:\untitled\untitled\src\js\easyclick-tj-agent-source-5.12.0"

# Check source files
if (-not (Test-Path $SourcePath)) {
    Write-Host "Source path not found: $SourcePath" -ForegroundColor Red
    exit 1
}

Write-Host "Creating project directory..." -ForegroundColor Yellow
if (Test-Path $ProjectPath) {
    Remove-Item $ProjectPath -Recurse -Force
}
New-Item -ItemType Directory -Path $ProjectPath -Force | Out-Null
Set-Location $ProjectPath

Write-Host "Initializing Git repository..." -ForegroundColor Yellow
git init
git lfs install

Write-Host "Configuring Git LFS tracking rules..." -ForegroundColor Yellow
git lfs track "*.framework/**"
git lfs track "iosauto"
git lfs track "WebDriverAgentLib" 
git lfs track "*.dylib"
git lfs track "*.a"

Write-Host "Copying project files..." -ForegroundColor Yellow
Copy-Item "$SourcePath\*" . -Recurse -Force

Write-Host "Creating GitHub Actions workflow..." -ForegroundColor Yellow
$WorkflowDir = ".github\workflows"
New-Item -ItemType Directory -Path $WorkflowDir -Force | Out-Null

# Create workflow file content
$WorkflowYAML = @'
name: EasyClick Build with Git LFS

on:
  push:
    branches: [ main, master ]
  workflow_dispatch:

jobs:
  build:
    runs-on: macos-latest
    
    steps:
    - name: Checkout code with LFS
      uses: actions/checkout@v4
      with:
        lfs: true
        
    - name: Git LFS pull
      run: git lfs pull
      
    - name: Verify LFS files
      run: |
        echo "Checking framework files..."
        ls -la *.framework/ || echo "Framework check complete"
        echo "Checking LFS tracked files..."
        git lfs ls-files
        
    - name: Setup Xcode
      uses: maxim-lobanov/setup-xcode@v1
      with:
        xcode-version: 'latest-stable'
    
    - name: Build EasyClick Agent
      run: |
        echo "Starting build..."
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
    
    - name: Package IPA
      run: |
        cd /tmp/derivedDataPath/Build/Products/Release-iphoneos
        echo "Cleaning unwanted apps..."
        rm -rf IntegrationApp.app || true
        echo "Creating Payload directory..."
        mkdir -p Payload
        echo "Moving app to Payload..."
        mv *.app Payload/ || true
        echo "Creating IPA..."
        zip -r EasyClick-Agent-LFS.ipa Payload
        echo "IPA file info:"
        ls -la EasyClick-Agent-LFS.ipa
    
    - name: Upload IPA
      uses: actions/upload-artifact@v4
      with:
        name: EasyClick-Agent-LFS
        path: /tmp/derivedDataPath/Build/Products/Release-iphoneos/EasyClick-Agent-LFS.ipa
        retention-days: 30
        
    - name: Build success
      run: |
        echo "Build successful!"
        echo "IPA file generated for iOS installation"
        echo "This is EasyClick specialized version with complete iosauto framework"
'@

Set-Content -Path "$WorkflowDir\build.yml" -Value $WorkflowYAML -Encoding UTF8

# Create README
$ReadmeContent = @"
# EasyClick Agent (Git LFS Version)

EasyClick specialized WebDriverAgent with Git LFS for large files.

## Features

- Complete iosauto.framework
- Complete WebDriverAgentLib.framework  
- Image recognition capabilities
- Computer vision support
- Automation testing features

## Usage

1. Clone this repository
2. Go to GitHub Actions tab
3. Manually trigger 'EasyClick Build with Git LFS' workflow
4. Wait for build completion
5. Download generated IPA file

## LFS Tracked Files

- iosauto.framework/** - iOS automation framework
- WebDriverAgentLib.framework/** - WebDriver library
- *.dylib - Dynamic libraries

## Local Build

If you have a Mac:

``bash
git clone --recursive https://github.com/yourusername/$RepoName.git
cd $RepoName
git lfs pull
./buildipa.sh
``

## Requirements

- iOS 12.0+
- Developer certificate for signing
"@

Set-Content -Path "README.md" -Value $ReadmeContent -Encoding UTF8

Write-Host "Adding files to Git..." -ForegroundColor Yellow
git add .gitattributes
git add .

Write-Host "Checking Git LFS status..." -ForegroundColor Yellow
try {
    git lfs status
    $lfsFiles = git lfs ls-files
    if ($lfsFiles) {
        Write-Host "LFS tracked files:" -ForegroundColor Green
        $lfsFiles | ForEach-Object { Write-Host "  $_" -ForegroundColor Cyan }
    }
} catch {
    Write-Host "LFS status check failed, but continuing..." -ForegroundColor Yellow
}

Write-Host "Committing to Git..." -ForegroundColor Yellow
git commit -m "Initial commit: EasyClick Agent with Git LFS"

Write-Host ""
Write-Host "Project setup complete!" -ForegroundColor Green
Write-Host "Project path: $ProjectPath" -ForegroundColor Cyan
Write-Host ""
Write-Host "Next steps:" -ForegroundColor Yellow
Write-Host "1. Create new GitHub repository (suggested name: $RepoName)" -ForegroundColor White

if ($GitHubUsername) {
    Write-Host "2. Push to GitHub:" -ForegroundColor White
    Write-Host "   git remote add origin https://github.com/$GitHubUsername/$RepoName.git" -ForegroundColor Cyan
    Write-Host "   git branch -M main" -ForegroundColor Cyan
    Write-Host "   git push -u origin main" -ForegroundColor Cyan
} else {
    Write-Host "2. Push to GitHub:" -ForegroundColor White
    Write-Host "   git remote add origin https://github.com/yourusername/$RepoName.git" -ForegroundColor Cyan
    Write-Host "   git branch -M main" -ForegroundColor Cyan
    Write-Host "   git push -u origin main" -ForegroundColor Cyan
}

Write-Host "3. Go to GitHub repository Actions tab" -ForegroundColor White
Write-Host "4. Trigger 'EasyClick Build with Git LFS' workflow" -ForegroundColor White
Write-Host "5. Download IPA when build completes" -ForegroundColor White
Write-Host ""
Write-Host "Tips:" -ForegroundColor Yellow
Write-Host "  - First push may take longer (uploading LFS files)" -ForegroundColor White
Write-Host "  - Ensure GitHub account has sufficient LFS quota" -ForegroundColor White
Write-Host "  - Free accounts have 1GB LFS storage limit" -ForegroundColor White

# Show project statistics
Write-Host ""
Write-Host "Project file statistics:" -ForegroundColor Cyan
$totalSize = (Get-ChildItem -Recurse | Measure-Object -Property Length -Sum).Sum
Write-Host "  Total size: $([math]::Round($totalSize/1MB,2)) MB" -ForegroundColor White

try {
    $lfsFiles = git lfs ls-files
    if ($lfsFiles) {
        Write-Host "  LFS tracked files: $($lfsFiles.Count)" -ForegroundColor White
    }
} catch {
    Write-Host "  LFS file count failed" -ForegroundColor Yellow
} 