#!/bin/bash
# 部署脚本：将 repo-pulse-docs 目录部署到 gh-pages 分支

set -e

echo "🚀 开始部署到 GitHub Pages..."

# 保存当前分支
CURRENT_BRANCH=$(git branch --show-current)

# 创建临时目录
cd repo-pulse-docs

# 初始化 git（如果需要）
if [ ! -d .git ]; then
    git init
    git remote add origin https://github.com/BruceY-rgb/Repo-pulse-docs.git
fi

# 切换到 gh-pages 分支（如果不存在则创建）
git checkout -B gh-pages

# 添加所有文件
git add -A

# 提交
git commit -m "Deploy to GitHub Pages - $(date '+%Y-%m-%d %H:%M:%S')" || echo "没有变更需要提交"

# 强制推送到远程 gh-pages 分支
git push origin gh-pages --force

echo "✅ 部署完成！"
echo ""
echo "📋 接下来请在 GitHub 上完成以下设置："
echo "   1. 访问 https://github.com/BruceY-rgb/Repo-pulse-docs/settings/pages"
echo "   2. 在 'Build and deployment' 部分："
echo "      - Source 选择 'Deploy from a branch'"
echo "      - Branch 选择 'gh-pages'，文件夹选择 '/ (root)'"
echo "   3. 点击 Save"
echo ""
echo "🌐 你的网站将会在几分钟后可用：https://brucey-rgb.github.io/Repo-pulse-docs/"
