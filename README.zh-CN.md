# Steam 在线工具箱

免费、开源的 Steam 工具集合。所有计算均在浏览器本地完成，不上传任何数据到服务器。

**[English](./README.md)**

## 功能

- **Steam TOTP 验证码生成器** — 生成 Steam 手机令牌验证码，支持拖拽 `.maFile` 文件导入。
- **CS2 物品 ID 字典** — 查询 CS2 物品在 BUFF、C5、YOUPIN、HALOSKINS 等平台的 ID。

## 技术栈

- Vite 6 — 构建工具
- Tailwind CSS 4 — 样式框架
- 原生 JavaScript — 无框架依赖
- i18n — 支持英语和中文

## 开发

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建生产版本
npm run build

# 预览生产构建
npm run preview
```

## 部署到 Cloudflare Pages

1. 将此仓库推送到 GitHub
2. 前往 [Cloudflare 控制台](https://dash.cloudflare.com/?to=/:account/workers-and-pages) > **Workers & Pages** > **Create application** > **Pages**
3. 连接你的 GitHub 仓库
4. 配置构建设置：
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
5. 点击 **Save and Deploy**

每次推送到仓库都会自动触发新的部署。

## 隐私

所有加密运算和数据处理完全在浏览器中完成，不会向任何外部服务器发送数据。

## 许可证

MIT
