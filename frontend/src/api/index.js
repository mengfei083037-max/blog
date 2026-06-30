import axios from 'axios'

const api = axios.create({
  baseURL: '/api',
  timeout: 10000
})

// 响应拦截器
api.interceptors.response.use(
  response => response.data,
  error => {
    console.error('API Error:', error)
    return Promise.reject(error)
  }
)

// 博客文章 API
export const postApi = {
  // 获取文章列表
  getList(params) {
    return api.get('/posts', { params })
  },
  // 获取文章详情
  getDetail(id) {
    return api.get(`/posts/${id}`)
  },
  // 获取分类列表
  getCategories() {
    return api.get('/categories')
  },
  // 获取标签列表
  getTags() {
    return api.get('/tags')
  }
}

// 评论 API
export const commentApi = {
  // 获取文章评论
  getList(postId) {
    return api.get(`/comments`, { params: { postId } })
  },
  // 提交评论
  create(data) {
    return api.post('/comments', data)
  }
}

export default api