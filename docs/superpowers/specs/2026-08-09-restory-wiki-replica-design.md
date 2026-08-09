# ReStory Wiki Replica Design

## Goal

将当前空项目实现为一个以 `taskbarhero.org` 为布局参考的 ReStory: Chill Electronics Repairs 粉丝 Wiki，至少提供首页、攻略导航页和攻略详情页，并保留可扩展的多语言、MDX 内容结构。

## Confirmed direction

- 目标站只作为视觉和信息架构参考，不保留其游戏名、文案、数据、链接、资产或法律页文字。
- 全站游戏名统一为 `ReStory: Chill Electronics Repairs`；日文使用调研确定的本地化主题名 `リ・ストーリー: 思い出修理屋`，俄文和德文沿用 Steam 可见的英文官方名。
- 首页使用前序调研中的真实文案和数据：2026 年 8 月 6 日发布、当前 Steam 价格 $17.99、主线 15+ 小时、50 个 Steam 成就、97% 好评、9 种界面/字幕语言。
- 兑换码没有经过调研确认，因此首页和侧边栏显示 `暂无`，不生成任何兑换码。
- 官方入口只使用已经核验过的 tinyBuild 游戏页、Steam、官方 Discord、tinyBuildGAMES YouTube 和官方 Gameplay Trailer。
- 默认亮色主题，夜间模式可切换。主题色沿用调研结果的 HSL：亮色 `166 57% 37%` / `166 54% 50%`，暗色 `166 72% 54%` / `166 66% 65%`。
- 多语言首批支持 English、Russian、German、Japanese 四种语言；语言切换使用路由前缀，默认英文首页保留在 `/`。

## Visual system

- 保留目标站的 1140px 居中容器、像素字体、顶部粘性导航、底部固定 Taskbar、虚线边框卡片、信息面板、breadcrumb、section kicker 和响应式折叠导航。
- 目标站的内容布局映射到 ReStory：
  - 首页：Hero、Quick lookup、Start Here、What is ReStory、真实数据卡、官方媒体、兑换码、底部 CTA。
  - 导航页：`/guides`，使用目标站的 breadcrumb + section kicker + 卡片栅格，呈现新手入门、维修流程、设备与配件、故事选择/成就、已知问题等入口。
  - 详情页：`/guides/beginner-guide`，使用目标站的 breadcrumb、双栏信息面板、章节内容、提示框、相关页面和侧边栏兑换码。
- CSS 变量统一使用 HSL 值，避免把主题色硬编码在组件内部；亮暗主题通过 `data-theme` 切换。

## Architecture

- Next.js App Router + TypeScript。
- `app/` 负责路由、metadata 和页面组合；`components/` 负责共享壳层；`lib/` 负责 locale 文案、导航数据、官方链接和 MDX 文章映射。
- `content/{en,ru,de,ja}/guides/*.mdx` 负责文章正文。列表页使用同一份文章元数据，详情页通过 locale + slug 映射到 MDX React 组件。
- 根路径渲染英文；`/[locale]` 渲染对应语言首页；`/[locale]/guides` 和 `/[locale]/guides/[slug]` 提供多语言路由。英文同时提供无 locale 的 `/guides` 与 `/guides/[slug]`。
- `privacy` 和 `terms` 页面也使用 ReStory 名称，并挂在共享页脚，确保目标游戏名不残留。

## Content boundaries

- 只使用前序调研中已经确认的事实；不补写未经核验的维修步骤细节、设备数量、结局数量、兑换码或第三方社群链接。
- 动态 Steam 价格和好评率作为调研时点的页面数据展示，并在正文以“当前 Steam 显示”表述，避免假装成永久静态事实。
- 详情正文涉及未确认的实机细节时明确写 `待确认`，而不是推断。

## Verification

- 页面契约测试必须确认旧游戏名、旧链接和旧品牌字符串不进入应用文案；确认 `sidebarCodes` 只输出 `暂无`。
- `npm run lint`、`npm test`、`npm run build` 必须通过。
- 启动本地站点后检查 `/`、`/guides`、`/guides/beginner-guide`、`/ru/guides`、`/ja/guides/beginner-guide`、`/privacy` 和 `/terms` 的 HTTP 状态与页面标题。
- 通过本地浏览器核对首页、导航页、文章详情页的桌面与窄屏布局，重点检查固定 Taskbar、语言菜单、主题切换、MDX 标题/表格和无残留文案。
