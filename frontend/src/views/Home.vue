<template>
  <div class="container home">
    <div class="home-layout">
      <!-- 主要内容 -->
      <div class="main-content">
        <div v-if="loading" class="loading">加载中...</div>
        <template v-else>
          <PostCard v-for="post in blogStore.posts" :key="post.id" :post="post" />
          <div v-if="blogStore.posts.length === 0" class="empty">
            暂无文章
          </div>
        </template>
      </div>
      <!-- 侧边栏 -->
      <aside class="sidebar">
        <div class="card">
          <h3 class="sidebar-title">关于博客</h3>
          <p class="sidebar-text">分享技术、生活和学习心得。用代码记录成长。</p>
        </div>
        <div class="card">
          <h3 class="sidebar-title">分类</h3>
          <ul class="category-list">
            <li v-for="cat in blogStore.categories" :key="cat.id" class="category-item">
              {{ cat.name }}
              <span class="count">({{ cat.count }})</span>
            </li>
          </ul>
        </div>
        <div class="card">
          <h3 class="sidebar-title">标签</h3>
          <div class="tags-wrap">
            <span v-for="tag in blogStore.tags" :key="tag.id" class="tag">{{ tag.name }}</span>
          </div>
        </div>
      </aside>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { storeToRefs } from 'pinia'
import { useBlogStore } from '@/stores/blog'
import PostCard from '@/components/PostCard.vue'

const blogStore = useBlogStore()
const { loading } = storeToRefs(blogStore)

onMounted(() => {
  blogStore.fetchPosts()
  blogStore.fetchCategories()
  blogStore.fetchTags()
})
</script>

<style scoped>
.home-layout {
  display: grid;
  grid-template-columns: 1fr 300px;
  gap: 30px;
}

.sidebar-title {
  font-size: 16px;
  margin-bottom: 12px;
  color: #333;
  padding-bottom: 8px;
  border-bottom: 2px solid #1a73e8;
}

.sidebar-text {
  font-size: 14px;
  color: #666;
  line-height: 1.8;
}

.category-list {
  list-style: none;
}

.category-item {
  padding: 8px 0;
  font-size: 14px;
  color: #666;
  cursor: pointer;
  border-bottom: 1px solid #f0f0f0;
  display: flex;
  justify-content: space-between;
}

.category-item:hover {
  color: #1a73e8;
}

.count {
  color: #999;
}

.tags-wrap {
  display: flex;
  flex-wrap: wrap;
}

.empty {
  text-align: center;
  padding: 60px 0;
  color: #999;
  font-size: 16px;
}

@media (max-width: 768px) {
  .home-layout {
    grid-template-columns: 1fr;
  }
}
</style>