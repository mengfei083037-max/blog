// Mock 数据 - 博客文章
const posts = [
  {
    id: 1,
    title: 'Vue 3 Composition API 实战指南',
    author: '张三',
    category: '前端开发',
    tags: ['Vue', 'JavaScript', '前端'],
    excerpt: 'Vue 3 的 Composition API 为我们提供了更灵活的逻辑复用方式，本文将结合实际项目经验，详细介绍 Composition API 的核心概念和最佳实践...',
    content: `
      <h2>前言</h2>
      <p>Vue 3 的 Composition API 是 Vue 框架的一次重大革新，它解决了 Options API 在大型项目中逻辑复用困难的问题。</p>
      
      <h2>什么是 Composition API？</h2>
      <p>Composition API 是一组基于函数的 API，允许我们以更灵活的方式组织和复用组件逻辑。它通过 setup() 函数作为组件逻辑的入口点。</p>
      
      <h2>核心函数</h2>
      <p>ref 和 reactive 是 Composition API 中最核心的两个响应式 API。ref 用于定义基本类型的响应式数据，而 reactive 用于定义对象类型的响应式数据。</p>
      
      <h2>实际应用</h2>
      <p>在实际项目中，我们可以将相关的逻辑封装到独立的函数中，然后在组件中按需引入，大大提高了代码的可维护性。</p>
      
      <h2>总结</h2>
      <p>Composition API 让 Vue 3 在大型项目中的表现更加出色，值得每个 Vue 开发者深入学习。</p>
    `,
    createdAt: '2026-06-28T10:00:00Z',
    updatedAt: '2026-06-28T10:00:00Z'
  },
  {
    id: 2,
    title: 'Node.js 入门：从零搭建 RESTful API',
    author: '张三',
    category: '后端开发',
    tags: ['Node.js', 'Express', 'API'],
    excerpt: 'Node.js 让 JavaScript 跑在了服务器端，本文将带你从零开始，使用 Express 框架搭建一个完整的 RESTful API 服务...',
    content: `
      <h2>为什么选择 Node.js？</h2>
      <p>Node.js 基于 Chrome V8 引擎，具有高性能、事件驱动、非阻塞 I/O 等特点，非常适合构建高并发的 Web 应用。</p>
      
      <h2>环境搭建</h2>
      <p>首先需要安装 Node.js，然后使用 npm init 初始化项目，安装 Express 框架。</p>
      
      <h2>创建路由</h2>
      <p>Express 的路由系统非常灵活，我们可以通过 app.get()、app.post() 等方法定义不同的 HTTP 方法路由。</p>
      
      <h2>中间件</h2>
      <p>中间件是 Express 的核心概念之一，它可以在请求到达路由处理函数之前或之后执行一些操作。</p>
      
      <h2>总结</h2>
      <p>Node.js + Express 是构建后端服务的绝佳组合，学习曲线平缓，社区生态丰富。</p>
    `,
    createdAt: '2026-06-25T08:30:00Z',
    updatedAt: '2026-06-25T08:30:00Z'
  },
  {
    id: 3,
    title: 'CSS Grid 布局完全指南',
    author: '张三',
    category: '前端开发',
    tags: ['CSS', '布局', '前端'],
    excerpt: 'CSS Grid 是现代 Web 布局的终极解决方案，它让我们能够轻松创建复杂的二维布局结构...',
    content: `
      <h2>Grid 布局简介</h2>
      <p>CSS Grid 布局是一种二维布局系统，可以同时处理行和列，比 Flexbox 更适合复杂的页面布局。</p>
      
      <h2>基本概念</h2>
      <p>Grid 容器、Grid 项目、网格线、网格单元格、网格轨道是 Grid 布局的核心概念。</p>
      
      <h2>常用属性</h2>
      <p>grid-template-columns、grid-template-rows、gap、grid-column、grid-row 等属性让我们可以精确控制布局。</p>
      
      <h2>实战案例</h2>
      <p>通过一个响应式博客布局的案例，展示 Grid 布局的强大能力。</p>
    `,
    createdAt: '2026-06-20T14:00:00Z',
    updatedAt: '2026-06-20T14:00:00Z'
  },
  {
    id: 4,
    title: 'Git 工作流最佳实践',
    author: '张三',
    category: '开发工具',
    tags: ['Git', '版本控制', '团队协作'],
    excerpt: '合理的 Git 工作流能极大提升团队协作效率，本文将介绍几种主流的 Git 工作流模式...',
    content: `
      <h2>为什么需要 Git 工作流？</h2>
      <p>在团队开发中，统一的 Git 工作流可以规范代码提交、分支管理和版本发布流程。</p>
      
      <h2>Git Flow</h2>
      <p>Git Flow 是最经典的工作流模式，包含 master、develop、feature、release、hotfix 等分支类型。</p>
      
      <h2>GitHub Flow</h2>
      <p>GitHub Flow 更加轻量，适合持续部署的项目，只有 master 和 feature 分支。</p>
      
      <h2>总结</h2>
      <p>选择适合团队的工作流比追求完美更重要，关键是团队成员都能遵守约定。</p>
    `,
    createdAt: '2026-06-15T09:00:00Z',
    updatedAt: '2026-06-15T09:00:00Z'
  },
  {
    id: 5,
    title: 'JavaScript 异步编程进化史',
    author: '张三',
    category: '前端开发',
    tags: ['JavaScript', '异步', 'Promise'],
    excerpt: '从回调函数到 Promise，再到 async/await，JavaScript 的异步编程经历了怎样的演变？...',
    content: `
      <h2>回调函数时代</h2>
      <p>早期的 JavaScript 通过回调函数处理异步操作，但容易陷入回调地狱。</p>
      
      <h2>Promise 的诞生</h2>
      <p>Promise 提供了更优雅的异步处理方式，通过链式调用解决了回调地狱问题。</p>
      
      <h2>async/await</h2>
      <p>async/await 让异步代码看起来像同步代码一样直观，是目前最推荐的异步编程方式。</p>
    `,
    createdAt: '2026-06-10T11:00:00Z',
    updatedAt: '2026-06-10T11:00:00Z'
  },
  {
    id: 6,
    title: 'Linux 服务器部署入门',
    author: '张三',
    category: '运维部署',
    tags: ['Linux', 'Nginx', '部署'],
    excerpt: '将项目部署到云服务器是每个开发者的必备技能，本文将介绍从购买服务器到部署上线的完整流程...',
    content: `
      <h2>购买服务器</h2>
      <p>阿里云、腾讯云等云服务商都提供了丰富的服务器配置选择，入门可以选择 2核4G 的配置。</p>
      
      <h2>环境配置</h2>
      <p>安装 Node.js、Nginx、MySQL 等必要的运行环境。</p>
      
      <h2>部署流程</h2>
      <p>使用 Git 拉取代码，安装依赖，构建项目，配置 Nginx 反向代理。</p>
    `,
    createdAt: '2026-06-05T16:00:00Z',
    updatedAt: '2026-06-05T16:00:00Z'
  }
]

// 分类
const categories = [
  { id: 1, name: '前端开发', count: 3 },
  { id: 2, name: '后端开发', count: 1 },
  { id: 3, name: '开发工具', count: 1 },
  { id: 4, name: '运维部署', count: 1 }
]

// 标签
const tags = [
  { id: 1, name: 'Vue' },
  { id: 2, name: 'JavaScript' },
  { id: 3, name: '前端' },
  { id: 4, name: 'Node.js' },
  { id: 5, name: 'Express' },
  { id: 6, name: 'API' },
  { id: 7, name: 'CSS' },
  { id: 8, name: '布局' },
  { id: 9, name: 'Git' },
  { id: 10, name: '版本控制' },
  { id: 11, name: '团队协作' },
  { id: 12, name: '异步' },
  { id: 13, name: 'Promise' },
  { id: 14, name: 'Linux' },
  { id: 15, name: 'Nginx' },
  { id: 16, name: '部署' }
]

// 评论
const comments = [
  { id: 1, postId: 1, author: '小明', content: '写得很详细，对我帮助很大！', createdAt: '2026-06-29T08:00:00Z' },
  { id: 2, postId: 1, author: '小红', content: '期待更多 Vue 3 的文章', createdAt: '2026-06-29T09:30:00Z' },
  { id: 3, postId: 2, author: '小李', content: 'Node.js 确实很好入门', createdAt: '2026-06-26T10:00:00Z' },
  { id: 4, postId: 3, author: '小王', content: 'Grid 布局太强大了', createdAt: '2026-06-21T15:00:00Z' }
]

module.exports = { posts, categories, tags, comments }