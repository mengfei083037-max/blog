<template>
  <div id="app">
    <ParticlesBackground />
    <AppHeader />
    <main class="main-content">
      <router-view />
    </main>
    <AppFooter />
  </div>
</template>

<script setup>
import ParticlesBackground from '@/components/ParticlesBackground.vue'
import AppHeader from '@/components/AppHeader.vue'
import AppFooter from '@/components/AppFooter.vue'
</script>

<style scoped>
.main-content {
  min-height: calc(100vh - 140px);
  padding: 20px 0;
}
</style>