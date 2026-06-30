<template>
  <article class="post-card card">
    <h2 class="post-title">
      <router-link :to="`/post/${post.id}`">{{ post.title }}</router-link>
    </h2>
    <div class="post-meta">
      <span class="meta-item">{{ post.author }}</span>
      <span class="meta-item">{{ formatDate(post.createdAt) }}</span>
      <span class="meta-item">{{ post.category }}</span>
    </div>
    <p class="post-excerpt">{{ post.excerpt }}</p>
    <div class="post-tags">
      <span v-for="tag in post.tags" :key="tag" class="tag">{{ tag }}</span>
    </div>
    <router-link :to="`/post/${post.id}`" class="read-more">阅读全文 →</router-link>
  </article>
</template>

<script setup>
defineProps({
  post: {
    type: Object,
    required: true
  }
})

function formatDate(dateStr) {
  const date = new Date(dateStr)
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`
}
</script>

<style scoped>
.post-card {
  transition: transform 0.2s;
}

.post-card:hover {
  transform: translateY(-2px);
}

.post-title {
  font-size: 20px;
  margin-bottom: 10px;
}

.post-title a {
  color: #333;
}

.post-title a:hover {
  color: #1a73e8;
}

.post-meta {
  font-size: 13px;
  color: #999;
  margin-bottom: 12px;
}

.meta-item {
  margin-right: 15px;
}

.meta-item::before {
  content: '·';
  margin-right: 6px;
}

.meta-item:first-child::before {
  content: '';
  margin-right: 0;
}

.post-excerpt {
  color: #666;
  font-size: 14px;
  line-height: 1.8;
  margin-bottom: 12px;
}

.post-tags {
  margin-bottom: 12px;
}

.read-more {
  font-size: 14px;
  font-weight: 500;
}
</style>