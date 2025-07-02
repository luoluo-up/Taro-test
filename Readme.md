# my-miniApp

基于 Taro + Vue3 + NutUI 的小程序项目，包含前后端代码，支持本地开发和调试。

## 目录结构

- `src/` 前端源码（Taro/Vue3）
- `src/server/` 后端源码（Node.js/Koa）
- `config/` Taro 配置
- 其他配置文件（`package.json`、`tsconfig.json` 等）

---

## 项目初始化

1. **安装依赖**

   推荐使用 [pnpm](https://pnpm.io/)：

   ```sh
   pnpm install
   ```

2. **前端开发启动**

   以微信小程序为例：

   ```sh
   pnpm run dev:weapp
   ```

   其他平台可用：

   - 支付宝小程序：`pnpm run dev:alipay`
   - 抖音小程序：`pnpm run dev:tt`
   - H5：`pnpm run dev:h5`
   - 具体命令详见 [package.json](package.json) 的 scripts 字段

3. **后端开发启动**

   进入 server 目录，使用 nodemon 热重载：

   ```sh
   cd src/server
   pnpm add -g nodemon # 如未全局安装
   nodemon app.js
   ```

   后端默认监听 3000 端口，静态资源和接口均可访问。

---

## 主要依赖

- [Taro](https://taro.jd.com/)
- [Vue3](https://vuejs.org/)
- [NutUI](https://nutui.jd.com/)
- [Koa](https://koajs.com/)（后端）

---

## 其他说明

- 前端入口：[`src/app.ts`](src/app.ts)
- 后端入口：[`src/server/app.js`](src/server/app.js)
- 静态资源目录：[`src/assets/images`](src/assets/images)
- 配置文件：[`config/index.ts`](config/index.ts)

---

## 常用命令

| 命令                | 说明                 |
| ------------------- | -------------------- |
| pnpm run dev:weapp  | 微信小程序开发模式   |
| pnpm run dev:alipay | 支付宝小程序开发模式 |
| pnpm run dev:tt     | 抖音小程序开发模式   |
| pnpm run dev:h5     | H5 开发模式          |
| nodemon app.js      | 启动后端服务         |

---

如需更多帮助，请查阅各依赖官方文档或项目源码。
