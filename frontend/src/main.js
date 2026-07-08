import { createApp } from 'vue'
import { createPinia } from 'pinia'
import VueParticles from '@tsparticles/vue3'
import { loadSlim } from '@tsparticles/slim'
import App from './App.vue'
import router from './router'
import { statsApi } from './api'
import './assets/main.css'

const app = createApp(App)
app.use(createPinia())
app.use(router)
app.use(VueParticles, {
  init: async (engine) => {
    await loadSlim(engine)
  },
})

app.mount('#app')

// 记录页面访问（每次页面加载/刷新时统计一次，路由切换不重复统计）
statsApi.track().catch(() => {
  // 静默处理失败
})
