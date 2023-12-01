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

- 文件必须以 front matter（用 `---` 括起来的 YAML 部分）开头．front matter 有以下规则：
	- 所有文档文件的 front matter 都有两个 **必须设定** 的字段：`sidebar_position` 和 `description`．
	- 除上述两个必须设定字段外，其余字段均 **不应设定**．例外：部分特殊页面需要 `slug` 字段．
	- `description` 字段的值应该是完整的一句话，末尾有句号．
- 文件紧跟 front matter 后面的开头应该是文章的标题，用 Markdown H1 语法 `# 标题` 表示．这应该是全篇唯一一个出现了 Markdown H1 标题的地方，章节和更细分的标题应该采用二级及以上的标题．
- 所有标题均应在井号后加英文半角空格，如 `## Markdown 格式`．
