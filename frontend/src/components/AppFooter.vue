<template>
  <footer class="footer">
    <div class="container">
      <p>&copy; 2026 我的博客 - 用 Vue 3 + Node.js 构建</p>
      <p class="site-stats">
        <span>
          <i class="icon">👁️</i>
          总访问量：<span class="stat-value">{{ stats.pv }}</span>
        </span>
        <span class="divider">|</span>
        <span>
          <i class="icon">👤</i>
          今日访客：<span class="stat-value">{{ stats.uv }}</span>
        </span>
      </p>
    </div>
  </footer>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { statsApi } from '@/api'

const stats = ref({
  pv: 0,
  uv: 0
})

onMounted(async () => {
  try {
    const res = await statsApi.get()
    stats.value = res.data
  } catch (err) {
    console.error('获取站点统计失败:', err)
  }
})
</script>

<style scoped>
.footer {
  background: #fff;
  border-top: 1px solid #eee;
  padding: 20px 0;
  text-align: center;
  color: #999;
  font-size: 14px;
}

.site-stats {
  margin-top: 8px;
  font-size: 13px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
}

.site-stats .icon {
  font-style: normal;
  margin-right: 2px;
}

.site-stats .divider {
  color: #ddd;
}

.stat-value {
  font-weight: 600;
  color: #666;
}
</style>
