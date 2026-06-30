<template>
  <div class="container about">
    <div class="card about-card">
      <h1 class="about-title">关于我</h1>
      <div class="about-content">
        <p>你好！我是一个热爱技术的开发者，有6年工作经验。</p>
        <p>这个博客是我的个人技术分享平台，在这里我会记录工作中的技术心得、学习笔记和生活感悟。</p>
        <p>我目前主要使用 Vue.js 进行前端开发，同时也在学习 Node.js 后端开发。</p>
        <p>希望通过这个博客能和大家一起交流进步！</p>
      </div>
      <div class="about-info">
        <h3>联系方式</h3>
        <!-- <p>GitHub: <a href="https://github.com" target="_blank">github.com/example</a></p> -->
        <p>Email: 1076336425@qq.com</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.about {
  max-width: 800px;
  margin: 0 auto;
}

.about-title {
  font-size: 24px;
  margin-bottom: 20px;
  color: #333;
  padding-bottom: 12px;
  border-bottom: 2px solid #1a73e8;
}

.about-content {
  font-size: 15px;
  line-height: 2;
  color: #555;
}

.about-content p {
  margin-bottom: 12px;
}

.about-info {
  margin-top: 30px;
  padding-top: 20px;
  border-top: 1px solid #eee;
}

.about-info h3 {
  font-size: 16px;
  margin-bottom: 12px;
  color: #333;
}

.about-info p {
  font-size: 14px;
  color: #666;
  margin-bottom: 6px;
}
</style>