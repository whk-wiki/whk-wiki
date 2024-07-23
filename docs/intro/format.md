---
sidebar_position: 3
description: whk wiki 的格式手册．
---

# 格式手册

## 文档引用与存储的格式

- 所有文档文件均为后缀为 `.md` 的 Markdown 格式文件．
- 所有文档文件名均应小写，以 `-` 分割．
- 所有站内引用文件（如图片，`.ggb` 文件等）均应存放于文件所在根目录的 `./assets/<file-name>` 文件夹下．
- 所有站内链接引用均应使用相对路径．特别地，如果相对路径的开头为当前根目录，不应遗漏开头的 `./`．
- 图片和 ggb 文件的引用应全部使用站内引用．

## Markdown 格式

- 文件必须以 [front matter](https://docusaurus.io/docs/markdown-features#front-matter) 开头．
- **whk-wiki 的 front matter** 有以下规则：
  - 所有文档文件的 front matter 都有且仅有三个字段：`sidebar_position`，`description` 和 `slug`．其中，`sidebar_position` 和 `description` **必须被设定**．
  - 除上述字段外，其余字段均**不应被设定**．
  - `description` 字段的值应该是完整的一句话，末尾有句号．
- 文档文件 front matter 后紧跟文章的标题，用 Markdown H1 语法 `# title` 表示．这应该是整个文档文件**唯一的** Markdown H1 标题，细分标题均应从二级标题开始．
- 所有标题均应在`#`后加英文半角空格，如 `## whk-wiki`．
- 详细格式见 [Markdown Features | Docusaurus](https://docusaurus.io/docs/markdown-features).
