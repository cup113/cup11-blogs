// .vitepress/theme/index.js
import DefaultTheme from 'vitepress/theme'
import ProjectCard from './components/ProjectCard.vue'

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    // 注册全局组件
    app.component('ProjectCard', ProjectCard)
  }
}