# 如何为前置讲义做贡献

感谢你关注太原理工大学"一生一芯"工作室的前置讲义！这份指南将帮助你快速上手，顺利参与项目。无论是修正错别字还是修复失效链接，这里都有对应的流程与规范。

## 本地开发

本讲义基于 [VitePress](https://vitepress.dev/) 构建。提交 Pull Request 之前，建议先在本地预览改动效果：

```bash
npm install
npm run dev
```

## 行为准则

我们希望为每一位参与者营造友好、安全、包容的环境，请在交流中始终保持尊重、耐心与建设性。

- **友善待人** —— 每个人都是从新手成长起来的。
- **乐于助人** —— 如果你能解答他人的疑问，欢迎伸出援手。
- **建设性反馈** —— 欢迎提出批评，同时请给出改进建议。

## 我可以贡献什么

| 我擅长 | 我可以 |
|--------|--------|
| 发现讲义有错误 | 提 Issue 或直接提交 PR 修正 |
| 写前端 | 改进网站样式、功能、交互 |
| 什么都不会但想帮忙 | 检查失效链接、修正错别字、转发给需要的同学 |

别担心经验不足，任何微小的改进都有价值。

## Issue 规范

### 提交 Issue 之前

1. 先搜索[已有 Issues](https://github.com/TYUT-YSYX-studio/Pre-docs/issues)，确认问题未被重复提出。
2. 根据内容选择合适的 Issue 模板（Bug 报告 / 内容建议）。

### 以下情况可能无法及时回复

- 问题描述过于简短，缺少必要的上下文。
- 在讲义或搜索引擎中能轻易找到答案的问题。
- 态度恶劣或不尊重他人。

清晰的描述有助于我们更快定位和解决问题，感谢理解！

## Pull Request 规范

### 分支命名

**请勿直接在 `main` 分支上开发。** 始终从最新的 `main` 创建新分支，推荐按以下前缀命名：

| 前缀 | 用途 | 示例 |
|------|------|------|
| `feat/` | 新增内容或功能 | `feat/git-advanced-notes` |
| `fix/` | 修复 bug 或错误 | `fix/deadlink-in-module1` |
| `docs/` | 文档相关更新 | `docs/update-readme` |
| `chore/` | 杂项（配置、依赖等） | `chore/update-deps` |

### Commit 信息

我们采用 [Conventional Commits](https://www.conventionalcommits.org/zh-hans/) 规范，格式为：

```
<type>(<scope>): <subject>
```

- **type** 必须为以下之一：`feat`、`fix`、`docs`、`style`、`refactor`、`chore`。
- **scope**（可选）用于说明影响范围，如 `notes`、`config`、`ui`。
- **subject** 请使用中文简要描述，不超过 50 字，结尾不加句号。

示例：

```
feat(notes): 添加 Git 进阶笔记
fix(config): 修复导航链接 404 问题
docs(readme): 完善贡献指南
```

规范的提交信息能让项目历史一目了然，感谢您的配合。
