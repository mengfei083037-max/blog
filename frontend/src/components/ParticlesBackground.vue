<template>
  <div class="particles-bg">
    <VueParticles
      id="tsparticles"
      :options="particlesOptions"
    />
  </div>
</template>

<script setup>
import { particlesOptions } from '@/config/particles'
</script>

<style scoped>
.particles-bg {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  pointer-events: none;
}
</style>