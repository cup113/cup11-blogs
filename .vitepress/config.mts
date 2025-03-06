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
        text: '前端教程',
        link: '/frontend-tutorial',
        items: [
          {
            text: 'A1. HTML入门', link: '/frontend-tutorial/A1', items: [
              { text: 'A11. 初识网页开发', link: '/frontend-tutorial/A1/A11' },
              { text: 'A12. 元素的基础语法 格式元素', link: '/frontend-tutorial/A1/A12' },
              { text: 'A13. 元素的属性 超链接与图片元素', link: '/frontend-tutorial/A1/A13' },
              { text: 'A14. 元素的嵌套 调试', link: '/frontend-tutorial/A1/A14' },
              { text: 'A15. HTML结构 基础语法', link: '/frontend-tutorial/A1/A15' },
            ], collapsed: false,
          },
          {
            text: 'A2. CSS入门', link: '/frontend-tutorial/A2', items: [
              { text: 'A21. CSS基础语法 长度属性值', link: '/frontend-tutorial/A2/A21' },
              { text: 'A22. 颜色 CSS调试', link: '/frontend-tutorial/A2/A22' },
              { text: 'A23. 盒模型', link: '/frontend-tutorial/A2/A23' },
              { text: 'A24. CSS选择器', link: '/frontend-tutorial/A2/A24' },
              { text: 'A25. CSS常用属性 兼容性', link: '/frontend-tutorial/A2/A25' },
            ], collapsed: false,
          },
          {
            text: 'A3. JavaScript入门', link: '/frontend-tutorial/A3', items: [
              { text: 'A31. 语句 数据类型', link: '/frontend-tutorial/A3/A31' },
              { text: 'A32. 流程控制 函数', link: '/frontend-tutorial/A3/A32' },
              { text: 'A33. 浏览器操作 DOM', link: '/frontend-tutorial/A3/A33' },
              { text: 'A34. 表单', link: '/frontend-tutorial/A3/A34' },
            ], collapsed: false,
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
              { text: 'B31. CSS 进阶属性：背景 阴影 过渡', link: '/frontend-tutorial/B3/B31' },
              { text: 'B32. 层叠优先级 伪类 伪元素', link: '/frontend-tutorial/B3/B32' },
              { text: 'B33. 布局流 定位', link: '/frontend-tutorial/B3/B33' },
            ], collapsed: true,
          },
          {
            text: 'B4. JavaScript 初级', link: '/frontend-tutorial/B4', items: [
              { text: 'B41. 浏览器 BOM 数学模块', link: '/frontend-tutorial/B4/B41' },
              { text: 'B42. 高阶函数 浏览器 API', link: '/frontend-tutorial/B4/B42' },
              { text: 'B43. JavaScript 数组', link: '/frontend-tutorial/B4/B43' },
              { text: 'B44. 简单对象 JSON', link: '/frontend-tutorial/B4/B44' },
              { text: 'B45. 日期时间 存储模块', link: '/frontend-tutorial/B4/B45' },
              { text: 'B46. 创建与删除 DOM', link: '/frontend-tutorial/B4/B46'  }
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
            text: '特辑', items: [
              { text: 'Special 01: 开学致辞 2025.2', link: '/frontend-tutorial/Special/Special01' },
              { text: 'Special 02: CSS 项目 I 爱心跳动', link: '/frontend-tutorial/Special/Special02' },
            ], collapsed: true,
          }
        ]
      },
      {
        text: '中学数理化',
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
        text: '项目',
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
      copyright: 'Copyright © 2025 cup11',
    },

    search: {
      provider: 'local',
    },
    outline: [2, 3],
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
