const express = require('express')
const cors = require('cors')
const { posts, categories, tags, comments } = require('./mock')

const app = express()
const PORT = 3001

// 中间件
app.use(cors())
app.use(express.json())

// ========== 站点统计（内存存储） ==========
const stats = {
  pv: 0,
  // 存储今天已计数的 UV key（IP+UA 的 hash），格式: { 'ip:uaHash': true }
  todayUV: new Map(),
  lastResetDate: new Date().toDateString()
}

// 重置每日 UV 记录
function resetDailyUV() {
  const today = new Date().toDateString()
  if (stats.lastResetDate !== today) {
    stats.todayUV = new Map()
    stats.lastResetDate = today
  }
}

// 简单的字符串哈希
function hashString(str) {
  let hash = 0
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i)
    hash = ((hash << 5) - hash) + char
    hash = hash & hash // Convert to 32bit integer
  }
  return Math.abs(hash).toString(36)
}

// POST /api/track - 记录页面访问（由前端路由切换时调用）
app.post('/api/track', (req, res) => {
  resetDailyUV()

  // PV：每次访问 +1
  stats.pv++

  // UV：基于 IP + User-Agent 去重，每天只计一次
  const ip = req.headers['x-forwarded-for']?.split(',')[0]?.trim() || req.ip || 'unknown'
  const ua = req.headers['user-agent'] || ''
  const uvKey = `${ip}:${hashString(ua)}`

  if (!stats.todayUV.has(uvKey)) {
    stats.todayUV.set(uvKey, true)
  }

  res.json({
    code: 200,
    message: 'ok'
  })
})

// GET /api/stats - 获取站点统计信息
app.get('/api/stats', (req, res) => {
  resetDailyUV()
  res.json({
    code: 200,
    data: {
      pv: stats.pv,
      uv: stats.todayUV.size
    }
  })
})

// ========== 博客文章接口 ==========

// GET /api/posts - 获取文章列表
app.get('/api/posts', (req, res) => {
  const { page = 1, pageSize = 10, category } = req.query
  let filteredPosts = [...posts]

  // 按分类筛选
  if (category) {
    filteredPosts = filteredPosts.filter(p => p.category === category)
  }

  // 按创建时间倒序排列
  filteredPosts.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))

  const total = filteredPosts.length
  const start = (page - 1) * pageSize
  const data = filteredPosts.slice(start, start + Number(pageSize))

  res.json({
    code: 200,
    data,
    total,
    page: Number(page),
    pageSize: Number(pageSize)
  })
})

// GET /api/posts/:id - 获取文章详情
app.get('/api/posts/:id', (req, res) => {
  const post = posts.find(p => p.id === Number(req.params.id))
  if (!post) {
    return res.status(404).json({ code: 404, message: '文章不存在' })
  }
  res.json({ code: 200, data: post })
})

// ========== 分类接口 ==========

// GET /api/categories - 获取分类列表
app.get('/api/categories', (req, res) => {
  res.json({ code: 200, data: categories })
})

// ========== 标签接口 ==========

// GET /api/tags - 获取标签列表
app.get('/api/tags', (req, res) => {
  res.json({ code: 200, data: tags })
})

// ========== 评论接口 ==========

// GET /api/comments - 获取文章评论
app.get('/api/comments', (req, res) => {
  const { postId } = req.query
  if (!postId) {
    return res.status(400).json({ code: 400, message: '缺少 postId 参数' })
  }
  const postComments = comments.filter(c => c.postId === Number(postId))
  res.json({ code: 200, data: postComments })
})

// POST /api/comments - 提交评论
app.post('/api/comments', (req, res) => {
  const { postId, content, author } = req.body
  if (!postId || !content || !author) {
    return res.status(400).json({ code: 400, message: '缺少必要参数' })
  }

  const newComment = {
    id: comments.length + 1,
    postId: Number(postId),
    author,
    content,
    createdAt: new Date().toISOString()
  }
  comments.push(newComment)

  res.json({ code: 200, message: '评论成功', data: newComment })
})

// 启动服务
app.listen(PORT, () => {
  console.log(`🚀 博客后端服务已启动: http://localhost:${PORT}`)
  console.log(`📝 API 基础路径: http://localhost:${PORT}/api`)
})