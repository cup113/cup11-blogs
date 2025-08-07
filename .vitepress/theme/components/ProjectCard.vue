<template>
  <div class="project-card" :data-status="project.status">
    <div class="project-card__header">
      <div class="project-card__icon-wrapper">
        <img :src="project.icon" :alt="project.name + '图标'" class="project-card__icon" loading="lazy"
          @error="handleImageError">
      </div>
      <div class="project-card__info">
        <div class="project-card__title-wrapper">
          <h3 class="project-card__name">{{ project.name }}</h3>
          <img :src="project.badgeUrl" />
        </div>
        <div class="project-card__repo">{{ project.repoName }}</div>
      </div>
    </div>

    <div class="project-card__tags">
      <span v-for="tag in project.tags" :key="tag" class="project-card__tag">
        {{ tag }}
      </span>
    </div>

    <div class="project-card__meta">
      <div class="project-card__platform">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"
          stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect>
          <line x1="8" y1="6" x2="16" y2="6"></line>
          <line x1="8" y1="12" x2="16" y2="12"></line>
          <line x1="8" y1="18" x2="12" y2="18"></line>
        </svg>
        {{ project.platform }}
      </div>
      <div class="project-card__status" :class="`project-card__status--${project.status}`"
        :aria-label="'项目状态: ' + project.statusText">
        <span class="project-card__status-indicator"></span>
        {{ project.statusText }}
      </div>
      <!-- 移除了文件大小显示 -->
    </div>

    <div v-if="project.preview" class="project-card__preview-wrapper">
      <img :src="project.preview" :alt="project.name + '概览图'" class="project-card__preview" loading="lazy"
        @error="handleImageError">
    </div>

    <p class="project-card__description">{{ project.description }}</p>

    <div class="project-card__actions">
      <a :href="project.link" target="_blank" rel="noopener noreferrer" class="project-card__link">
        <span>{{ project.linkText }}</span>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"
          stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
          <polyline points="15 3 21 3 21 9"></polyline>
          <line x1="10" y1="14" x2="21" y2="3"></line>
        </svg>
      </a>
    </div>
  </div>
</template>

<script setup>
defineProps({
  project: {
    type: Object,
    required: true
  }
})

const handleImageError = (event) => {
  event.target.style.display = 'none'
}
</script>

<style scoped>
.project-card {
  border: 2px solid var(--vp-c-divider);
  border-radius: 12px;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  background: var(--vp-c-bg-elv);
  height: 100%;
  position: relative;
  overflow: hidden;
}

.project-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 4px;
  background: linear-gradient(90deg,
      var(--status-color, #6b7280) 0%,
      var(--status-color, #6b7280) 100%);
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.3s ease;
}

.project-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 10px 25px -3px rgba(0, 0, 0, 0.2), 0 4px 6px -4px rgba(0, 0, 0, 0.1);
}

.project-card:hover::before {
  transform: scaleX(1);
}

.project-card[data-status="dev"] {
  --status-color: #ef4444;
}

.project-card[data-status="test"] {
  --status-color: #f97316;
}

.project-card[data-status="release"] {
  --status-color: #22c55e;
}

.project-card[data-status="deprecated"] {
  --status-color: #6b7280;
}

/* 项目卡片头部 */
.project-card__header {
  display: flex;
  gap: 1rem;
  align-items: center;
}

.project-card__icon-wrapper {
  flex-shrink: 0;
  width: 64px;
  height: 64px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #f3f4f6 0%, #e5e7eb 100%);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
}

.project-card__icon {
  width: 40px;
  height: 40px;
  object-fit: contain;
}

.project-card__info {
  flex: 1;
  min-width: 0;
}

.project-card__title-wrapper {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.project-card__name {
  font-size: 1.5rem;
  font-weight: 700;
  margin: 0;
  color: var(--vp-c-text-1);
  line-height: 1.2;
}

.project-card__repo {
  color: var(--vp-c-text-2);
  font-size: 0.95rem;
  margin-top: 0.25rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

/* 项目标签 */
.project-card__tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.project-card__tag {
  background-color: var(--vp-c-default-soft);
  border-radius: 6px;
  padding: 0.25rem 0.75rem;
  font-size: 0.8125rem;
  font-weight: 500;
  color: var(--vp-c-text-2);
  transition: all 0.2s ease;
}

.project-card__tag:hover {
  background-color: var(--vp-c-default-1);
  color: var(--vp-c-text-1);
  transform: translateY(-1px);
}

/* 项目元信息 */
.project-card__meta {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 0.75rem;
  padding-top: 0.75rem;
  padding-bottom: 0.25rem;
  border-top: 1px solid var(--vp-c-divider);
}

.project-card__platform,
.project-card__size {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.875rem;
  color: var(--vp-c-text-2);
}

.project-card__status {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.875rem;
  font-weight: 500;
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
}

.project-card__status-indicator {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  flex-shrink: 0;
}

.project-card__status--dev {
  background-color: #fee2e2;
  color: #ef4444;
}

.project-card__status--dev .project-card__status-indicator {
  background-color: #ef4444;
}

.project-card__status--test {
  background-color: #ffedd5;
  color: #f97316;
}

.project-card__status--test .project-card__status-indicator {
  background-color: #f97316;
}

.project-card__status--release {
  background-color: #dcfce7;
  color: #22c55e;
}

.project-card__status--release .project-card__status-indicator {
  background-color: #22c55e;
}

.project-card__status--deprecated {
  background-color: #e5e7eb;
  color: #6b7280;
}

.project-card__status--deprecated .project-card__status-indicator {
  background-color: #6b7280;
}

/* 项目预览图 */
.project-card__preview-wrapper {
  border-radius: 8px;
  overflow: hidden;
  background: linear-gradient(135deg, #f3f4f6 0%, #e5e7eb 100%);
  aspect-ratio: 16/9;
  display: flex;
  align-items: center;
  justify-content: center;
}

.project-card__preview {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.project-card__preview-wrapper:hover .project-card__preview {
  transform: scale(1.05);
}

/* 项目描述 */
.project-card__description {
  color: var(--vp-c-text-1);
  line-height: 1.6;
  font-size: 0.95rem;
  margin: 0;
  flex-grow: 1;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

/* 项目链接 */
.project-card__actions {
  margin-top: auto;
}

.project-card__link {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--vp-c-brand-1);
  text-decoration: none;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  background-color: var(--vp-c-default-soft);
  transition: all 0.2s ease;
  width: 100%;
  justify-content: center;
}

.project-card__link:hover {
  background-color: var(--vp-c-default-1);
  color: var(--vp-c-brand-2);
  transform: translateY(-1px);
}

/* 响应式设计 */
@media (max-width: 1024px) {
  .project-card {
    padding: 1.25rem;
  }

  .project-card__name {
    font-size: 1.375rem;
  }

  .project-card__icon-wrapper {
    width: 56px;
    height: 56px;
  }

  .project-card__icon {
    width: 32px;
    height: 32px;
  }
}

@media (max-width: 768px) {
  .project-card__header {
    gap: 0.875rem;
  }

  .project-card__name {
    font-size: 1.25rem;
  }

  .project-card__meta {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }

  .project-card__platform,
  .project-card__status {
    width: 100%;
  }

  .project-card__status {
    justify-content: center;
  }
}

@media (max-width: 480px) {
  .project-card {
    padding: 1rem;
  }

  .project-card__header {
    gap: 0.75rem;
  }

  .project-card__icon-wrapper {
    width: 48px;
    height: 48px;
  }

  .project-card__icon {
    width: 28px;
    height: 28px;
  }

  .project-card__title-wrapper {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.25rem;
  }

  .project-card__name {
    font-size: 1.125rem;
  }

  .project-card__tag {
    padding: 0.125rem 0.5rem;
    font-size: 0.75rem;
  }
}
</style>