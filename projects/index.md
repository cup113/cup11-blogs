---
title: 个人项目
---

# 我的项目

<script setup>
import ProjectCard from '../.vitepress/theme/components/ProjectCard.vue'
import projects from './projects.data.json'
</script>

## 项目列表

<div class="project-list">
  <template v-for="project in projects" :key="project.name">
    <h2>{{ project.name }}</h2>
    <ProjectCard :project="project" />
  </template>
</div>

<style>
.project-badge {
  margin: 1rem 0;
}
</style>