import { defineConfig } from 'vitepress';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'zh-CN',
  title: "cup11's blog",
  description: "My personal blog",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: '前端教程', link: '/frontend-tutorial' },
    ],

    sidebar: [
      {
        text: '💻 前端教程',
        link: '/frontend-tutorial',
        items: [
          {
            text: 'A1. HTML 入门', link: '/frontend-tutorial/A1', items: [
              { text: 'A11. 初识网页开发', link: '/frontend-tutorial/A1/A11' },
              { text: 'A12. 元素的基础语法 格式元素', link: '/frontend-tutorial/A1/A12' },
              { text: 'A13. 元素的属性 超链接与图片元素', link: '/frontend-tutorial/A1/A13' },
              { text: 'A14. 元素的嵌套 调试', link: '/frontend-tutorial/A1/A14' },
              { text: 'A15. HTML 结构 基础语法', link: '/frontend-tutorial/A1/A15' },
            ], collapsed: true,
          },
          {
            text: 'A2. CSS 入门', link: '/frontend-tutorial/A2', items: [
              { text: 'A21. CSS 基础语法 长度属性值', link: '/frontend-tutorial/A2/A21' },
              { text: 'A22. 颜色 CSS 调试', link: '/frontend-tutorial/A2/A22' },
              { text: 'A23. 盒模型', link: '/frontend-tutorial/A2/A23' },
              { text: 'A24. CSS 选择器', link: '/frontend-tutorial/A2/A24' },
              { text: 'A25. CSS 常用属性 兼容性', link: '/frontend-tutorial/A2/A25' },
            ], collapsed: true,
          },
          {
            text: 'A3. JavaScript 入门', link: '/frontend-tutorial/A3', items: [
              { text: 'A31. 语句 数据类型', link: '/frontend-tutorial/A3/A31' },
              { text: 'A32. 流程控制 函数', link: '/frontend-tutorial/A3/A32' },
              { text: 'A33. 浏览器操作 DOM', link: '/frontend-tutorial/A3/A33' },
              { text: 'A34. 表单', link: '/frontend-tutorial/A3/A34' },
            ], collapsed: true,
          },
          {
            text: 'B1. Web通识及工具', link: '/frontend-tutorial/B1', items: [
              { text: 'B11. 常见标记语言', link: '/frontend-tutorial/B1/B11' },
              { text: 'B12. 网络与社区', link: '/frontend-tutorial/B1/B12' },
            ], collapsed: true,
          },
          {
            text: 'B2. HTML 进阶', link: '/frontend-tutorial/B2', items: [
              { text: 'B21. 列表与表格', link: '/frontend-tutorial/B2/B21' },
              { text: 'B22. 多媒体与嵌入', link: '/frontend-tutorial/B2/B22' },
            ], collapsed: true,
          },
          {
            text: 'B3. CSS 进阶', link: '/frontend-tutorial/B3', items: [
              { text: 'B31. 背景 阴影 变形 过渡', link: '/frontend-tutorial/B3/B31' },
              { text: 'B32. 层叠优先级 伪类 伪元素', link: '/frontend-tutorial/B3/B32' },
              { text: 'B33. 布局流 定位', link: '/frontend-tutorial/B3/B33' },
              { text: 'B34. CSS 变量', link: '/frontend-tutorial/B3/B34' },
            ], collapsed: true,
          },
          {
            text: 'B4. JavaScript 初级', link: '/frontend-tutorial/B4', items: [
              { text: 'B41. 浏览器 BOM 数学模块', link: '/frontend-tutorial/B4/B41' },
              { text: 'B42. 高阶函数 浏览器 API', link: '/frontend-tutorial/B4/B42' },
              { text: 'B43. JavaScript 数组', link: '/frontend-tutorial/B4/B43' },
              { text: 'B44. 简单对象 JSON', link: '/frontend-tutorial/B4/B44' },
              { text: 'B45. 日期时间 存储模块', link: '/frontend-tutorial/B4/B45' },
              { text: 'B46. 创建与删除 DOM', link: '/frontend-tutorial/B4/B46' }
            ], collapsed: true,
          },
          {
            text: 'C1. JavaScript 进阶', link: '/frontend-tutorial/C1', items: [
              { text: 'C11. 面向对象初步', link: '/frontend-tutorial/C1/C11' },
              { text: 'C12. this 上下文', link: '/frontend-tutorial/C1/C12' },
              { text: 'C13. 类的封装和继承', link: '/frontend-tutorial/C1/C13' },
              { text: 'C14. 正则表达式初步', link: '/frontend-tutorial/C1/C14' },
              { text: 'C15. 网络交互 异步回调', link: '/frontend-tutorial/C1/C15' },
              { text: 'C16. 异步编程 async/await', link: '/frontend-tutorial/C1/C16' },
              { text: 'C17. ES 新特性及常见 JavaScript 库', link: '/frontend-tutorial/C1/C17' },
            ], collapsed: true,
          },
          {
            text: 'C2. 环境部署与网页搭建', link: '/frontend-tutorial/C2', items: [
              { text: 'C21. Windows 终端命令行', link: '/frontend-tutorial/C2/C21' },
              { text: 'C22. Visual Studio Code 的安装与配置', link: '/frontend-tutorial/C2/C22' },
              { text: 'C23. NPM 包管理器', link: '/frontend-tutorial/C2/C23' },
              { text: 'C24. 在 Netlify 上部署项目', link: '/frontend-tutorial/C2/C24' },
              { text: 'C25. 初识 Electron', link: '/frontend-tutorial/C2/C25' },
            ], collapsed: true,
          },
          {
            text: 'C3. TypeScript 基础', link: '/frontend-tutorial/C3', items: [
              { text: 'C31. TypeScript 环境配置', link: '/frontend-tutorial/C3/C31' },
              { text: 'C32. 基础类型标注', link: '/frontend-tutorial/C3/C32' },
              { text: 'C33. 类型运算', link: '/frontend-tutorial/C3/C33' },
            ], collapsed: true,
          },
          {
            text: 'C4. Vue 基础', link: '/frontend-tutorial/C4', items: [
              { text: 'C41. Vue 环境配置', link: '/frontend-tutorial/C4/C41' },
              { text: 'C42. Vue 基础函数', link: '/frontend-tutorial/C4/C42' },
              { text: 'C43. MVVM 设计与实现', link: '/frontend-tutorial/C4/C43' },
              { text: 'C44. 条件渲染 列表渲染', link: '/frontend-tutorial/C4/C44' },
            ], collapsed: true,
          },
          {
            text: 'C5. CSS 高级', link: '/frontend-tutorial/C5', items: [
              { text: 'C51. Grid 网格布局', link: '/frontend-tutorial/C5/C51' },
              { text: 'C52. 媒体查询 响应式开发', link: '/frontend-tutorial/C5/C52' },
              { text: 'C53. CSS 动画', link: '/frontend-tutorial/C5/C53' },
              { text: 'C54. 原子化 CSS', link: '/frontend-tutorial/C5/C54' },
            ], collapsed: true,
          },
          {
            text: 'D1. 算法基础', link: '/frontend-tutorial/D1', items: [
              { text: 'D11. 枚举、模拟与算法复杂度', link: '/frontend-tutorial/D1/D11' },
              { text: 'D12. 递归、分治与二分查找', link: '/frontend-tutorial/D1/D12' },
              { text: 'D13. 线性数据结构', link: '/frontend-tutorial/D1/D13' },
              { text: 'D14. 集合与映射表', link: '/frontend-tutorial/D1/D14' },
              { text: 'D15. 排序算法', link: '/frontend-tutorial/D1/D15' },
              { text: 'D16. 防抖、节流与缓存', link: '/frontend-tutorial/D1/D16' },
            ], collapsed: true,
          },
          {
            text: 'D2. Typescript 进阶', link: '/frontend-tutorial/D2', items: [
              { text: 'D21. 高级类型操作', link: '/frontend-tutorial/D2/D21' },
              { text: 'D22. 定义复杂类型', link: '/frontend-tutorial/D2/D22' },
              { text: 'D23. TypeScript 的模块化', link: '/frontend-tutorial/D2/D23' },
              { text: 'D24. 使用 JavaScript 进行运行时验证', link: '/frontend-tutorial/D2/D24' },
            ], collapsed: true,
          },
          {
            text: 'D3. Vue 进阶', link: '/frontend-tutorial/D3', items: [
              { text: 'D31. Vue 组件化 生命周期', link: '/frontend-tutorial/D3/D31' },
              { text: 'D32. 响应式工具库 VueUse', link: '/frontend-tutorial/D3/D32' },
              { text: 'D33. 路由 vue-router', link: '/frontend-tutorial/D3/D33' },
              { text: 'D34. 状态管理 pinia', link: '/frontend-tutorial/D3/D34' },
            ], collapsed: true,
          },
          {
            text: 'D4. 前端原理', link: '/frontend-tutorial/D4', items: [
              { text: 'D41. 计算机硬件', link: '/frontend-tutorial/D4/D41' },
              { text: 'D42. 操作系统 进程 线程', link: '/frontend-tutorial/D4/D42' },
              { text: 'D43. 事件循环', link: '/frontend-tutorial/D4/D43' },
              { text: 'D44. 浏览器渲染原理', link: '/frontend-tutorial/D4/D44' },
            ], collapsed: true,
          },
          {
            text: 'E1. 服务器基础', link: '/frontend-tutorial/E1', items: [
              { text: 'E11. Linux 操作系统', link: '/frontend-tutorial/E1/E11' },
              { text: 'E12. 网络模型', link: '/frontend-tutorial/E1/E12' },
              { text: 'E13. 数据库', link: '/frontend-tutorial/E1/E13'},
              { text: 'E14. 密码学基础', link: '/frontend-tutorial/E1/E14' },
              { text: 'E15. 服务设计原则', link: '/frontend-tutorial/E1/E15' },
              { text: 'E16. 服务器安全', link: '/frontend-tutorial/E1/E16' },
            ], collapsed: true,
          },
          {
            text: 'E2. Express.js 基础', link: '/frontend-tutorial/E2', items: [
              { text: 'E21. Node.js 基础', link: '/frontend-tutorial/E2/E21' },
              { text: 'E22. Express.js 端口监听', link: '/frontend-tutorial/E2/E22' },
              { text: 'E23. WebSocket 双向即时通信', link: '/frontend-tutorial/E2/E23' },
              { text: 'E24. 简单联网互动游戏示例', link: '/frontend-tutorial/E2/E24' },
              { text: '结语：站在全栈的起点，向未来进发', link: '/frontend-tutorial/E2/epilog' },
            ], collapsed: true,
          },
          {
            text: '✨ 特辑', items: [
              { text: '01: 开学致辞 2025.2', link: '/frontend-tutorial/Special/Special01' },
              { text: '02: CSS 项目 I 爱心跳动', link: '/frontend-tutorial/Special/Special02' },
              { text: '03: CSS 项目 II 个人简历', link: '/frontend-tutorial/Special/Special03' },
              { text: '04: JavaScript 项目 I 全屏时钟', link: '/frontend-tutorial/Special/Special04' },
              { text: '05: JavaScript 项目 II 掐秒表', link: '/frontend-tutorial/Special/Special05' },
              { text: '06: JavaScript 项目 III 轰炸座位表', link: '/frontend-tutorial/Special/Special06' },
              { text: '07. 好文分享 — Troubleshooting (错误处理)', link: '/frontend-tutorial/Special/Special07' },
            ], collapsed: true,
          }
        ]
      },
      {
        text: '🧮 中学数理化',
        items: [
          { text: "三角形三条中线围成的面积", link: '/middle-school/20220829-math-triangle-median-area' },
          { text: "几何证明：扇形弧上任意一点到两边的垂线的垂足间的距离为一定值", link: '/middle-school/20230428-math-sector-perp-distance' },
          { text: "差比数列待定系数法求和", link: '/middle-school/20240614-math-series-diff-ratio-sum' },
          { text: "数列的S0与分段的关系", link: '/middle-school/20240614-math-series-sum-0-piecewise' },
          { text: "化学平衡常数的推导：为什么有“浓度的系数次方”", link: '/middle-school/20240616-chemistry-k-constant-deduction' },
          { text: "检验平面法向量", link: '/middle-school/20241130-math-check-normal-vector' },
          { text: "解析几何中直线的对称点快速算法", link: '/middle-school/20241201-math-line-symmetry-point' },
          { text: "导数与单调性的严格关系", link: '/middle-school/20250212-math-derivative-monotone' },
          { text: "ALG 不等式及二元平均值不等式的简洁证明", link: '/middle-school/20250225-math-alg-inequality-proof' },
          { text: "LC 振荡电路周期公式的推导", link: '/middle-school/20250225-physics-lc-cycle' },
          { text: "导数提高例题精析", link: '/middle-school/20250304-math-derivative-questions' },
        ],
        collapsed: true,
      },
      {
        text: '🎲 项目',
        items: [
          { text: "full-clock 一个开源可配置的全屏网页时钟", link: '/projects/full-clock' },
          { text: "【网页小游戏】增强版掐秒表，解压玩具", link: '/projects/stopwatch-game' },
        ],
        collapsed: true,
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/cup113' },
      { icon: 'bilibili', link: 'https://space.bilibili.com/1721126055' },
    ],

    footer: {
      message: 'Built by Vitepress | Apache 2.0 Licensed',
      copyright: 'Copyright © 2025 cup11',
    },

    search: {
      provider: 'local',
    },
    outline: [2, 3],
    editLink: {
      pattern: 'https://github.com/cup113/cup11-blogs/edit/main/:path',
      text: '在 Github 上编辑此页'
    },
  },
  head: [
    ['link', { rel: 'icon', href: '/cube.png' }]
  ],
  lastUpdated: true,
  markdown: {
    lineNumbers: true,
    math: true,
  },
  vite: {
    server: {
      port: 3000,
    }
  },
});
