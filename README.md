# 雅思单词背诵网页

一个用于背诵雅思词汇的静态网页，支持必背单词、听力单词、阅读单词和个人生词本。页面无需后端，直接用浏览器打开即可使用，也适合部署到 GitHub Pages。

## 功能

- 必背单词：按词频分布整理
- 听力单词：按剑桥雅思真题册、Test、Section 顺序排列
- 阅读单词：按剑桥雅思真题册、Test、Passage 顺序排列
- 单词卡片包含：
  - 读音
  - 释义
  - 真题语境例句
  - 近义词
  - 反义词
  - 词形变化
  - 常用搭配
  - 记忆窍门
- 支持搜索单词、释义和搭配
- 支持按分组筛选
- 支持加入 / 移出个人生词本
- 生词本保存在当前浏览器本地
- 大词库分页显示，避免页面卡顿

## 文件结构

```text
.
├── index.html                # 网页入口
├── styles.css                # 页面样式
├── app.js                    # 页面交互逻辑
├── vocabulary.generated.js   # 自动生成的大词库数据
├── enrich_vocabulary.py      # 词库字段补全脚本
├── preview.png               # 页面预览图
└── README.md
```

## 本地使用

直接双击打开 `index.html` 即可。

如果浏览器限制本地脚本加载，可以在项目目录启动一个本地静态服务后访问：

```bash
python -m http.server 8765
```

然后打开：

```text
http://localhost:8765/
```

## GitHub Pages 部署

1. 新建一个公开 GitHub 仓库，例如 `ielts-vocabulary`
2. 上传本文件夹中的全部文件到仓库根目录
3. 进入仓库的 `Settings`
4. 打开 `Pages`
5. Source 选择 `Deploy from a branch`
6. Branch 选择 `main`，目录选择 `/root`
7. 保存后等待 GitHub Pages 构建完成

部署完成后，网页地址通常是：

```text
https://你的用户名.github.io/ielts-vocabulary/
```

## 词库说明

当前词库来自本地可读取的雅思词汇文件，并进行了字段补全。对于原文档没有提供的字段，已自动补充为适合背诵使用的内容，包括例句、近义词、反义词、搭配和记忆窍门。

扫描版 PDF 如果没有 OCR 文本层，无法直接自动抽取文字；后续可以先 OCR 成可复制文本，再重新导入。

## 数据更新

如果更新了 `vocabulary.generated.js`，可以运行补全脚本清理和补齐字段：

```bash
python enrich_vocabulary.py
```

运行后再刷新网页即可。
