# 企业官网前端工程

这是基于 Vue 3、TypeScript、Vite 和 pnpm 的企业官网前端工程基础架构。目前首页只保留三屏业务模块的占位组件，不包含完整视觉页面或实际业务展示内容。

## 本地开发

```bash
pnpm install
pnpm dev
```

生产构建（包含 Vue/TypeScript 类型检查）：

```bash
pnpm build
```

本地预览构建产物：

```bash
pnpm preview
```

## 目录与文件说明

### 应用入口与页面

| 文件 | 功能 |
| --- | --- |
| `index.html` | Vite HTML 入口，定义页面语言、视口、主题色和基础标题，并挂载 Vue 应用。 |
| `src/main.ts` | 创建 Vue 应用、加载全局 SCSS、安装路由并挂载到 `#app`。 |
| `src/App.vue` | 根组件，通过 `<RouterView />` 显示当前路由页面。 |
| `src/router/index.ts` | 配置 Vue Router 4、HTML5 History 模式、懒加载首页、滚动回顶和页面标题。产品详情路由尚未实现。 |
| `src/views/Home/index.vue` | 首页容器，组合页头、三屏占位区和页脚。 |
| `src/views/Home/sections/CompanySection.vue` | 公司介绍第一屏的语义化占位组件。 |
| `src/views/Home/sections/ProductsSection.vue` | 产品展示第二屏的语义化占位组件。 |
| `src/views/Home/sections/DigitalSection.vue` | 小程序、后台系统及资质展示第三屏的语义化占位组件。 |

### 共享组件与可复用逻辑

| 文件 | 功能 |
| --- | --- |
| `src/components/layout/AppHeader.vue` | 全局页头占位组件，后续放置品牌标识和主导航。 |
| `src/components/layout/AppFooter.vue` | 全局页脚占位组件，后续放置版权及辅助信息。 |
| `src/composables/useActiveSection.ts` | 基于 `IntersectionObserver` 追踪当前可见区块 ID 的组合式函数；当前占位首页尚未接入。 |

### API 与样式

| 文件 | 功能 |
| --- | --- |
| `src/api/request.ts` | 基于浏览器 `fetch` 的轻量泛型 JSON 请求封装，检查 HTTP 状态并解析响应；目前没有页面调用它。 |
| `src/assets/styles/variables.scss` | 集中定义品牌色、背景/文字色、容器宽度和响应式断点。 |
| `src/assets/styles/global.scss` | 全局 Reset、字体、基础元素样式、通用容器和 Section 占位布局；同时加载动画样式。 |
| `src/assets/styles/animations.scss` | 通用动画关键帧、动画工具类以及 `prefers-reduced-motion` 无障碍规则。 |

### 工程配置

| 文件 | 功能 |
| --- | --- |
| `package.json` | 项目信息、依赖及 `dev`、`build`、`preview` 脚本。 |
| `pnpm-lock.yaml` | 锁定依赖解析结果，保证 pnpm 安装一致。 |
| `pnpm-workspace.yaml` | pnpm 工作区配置；允许 `@parcel/watcher` 安装时执行构建脚本，以满足当前 Sass/Vite 工具链的安装要求。 |
| `vite.config.ts` | 注册 Vue 插件，并配置 `@` 指向 `src/` 的路径别名。 |
| `tsconfig.json` | TypeScript 项目引用入口，组合应用与 Node 配置。 |
| `tsconfig.app.json` | Vue 应用侧 TypeScript 配置，包含 `@/` 路径映射和严格的未使用项检查。 |
| `tsconfig.node.json` | Vite 配置等 Node 侧文件的 TypeScript 配置。 |
| `.gitignore` | 忽略依赖、构建产物及本地环境文件等不应纳入版本控制的内容。 |

### 静态资源目录

| 目录 | 用途 |
| --- | --- |
| `public/images/company/` | 公司介绍相关静态图片，使用固定 URL 访问。 |
| `public/images/products/` | 产品相关静态图片。 |
| `public/images/systems/` | 小程序或管理系统相关静态图片。 |
| `public/images/certificates/` | 企业资质和证书图片。 |
| `src/assets/images/` | 需要由 Vite 构建处理的图片资源。 |
| `src/assets/icons/` | 需要由 Vite 构建处理的图标资源。 |

上述资源目录当前用于规划，尚未放入业务素材。静态展示数据可放入 `src/data/`，共享 TypeScript 类型可放入 `src/types/`，纯工具函数可放入 `src/utils/`；这些目录目前没有实现文件。
