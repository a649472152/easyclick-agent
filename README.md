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

`bash
git clone --recursive https://github.com/yourusername/easyclick-agent.git
cd easyclick-agent
git lfs pull
./buildipa.sh
`

## Requirements

- iOS 12.0+
- Developer certificate for signing
