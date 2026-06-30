import { defineStore } from 'pinia'
import { postApi, commentApi } from '@/api'

export const useBlogStore = defineStore('blog', {
  state: () => ({
    posts: [],
    currentPost: null,
    categories: [],
    tags: [],
    comments: [],
    loading: false,
    total: 0,
    page: 1,
    pageSize: 10
  }),
  actions: {
    async fetchPosts(params = {}) {
      this.loading = true
      try {
        const res = await postApi.getList({ page: this.page, pageSize: this.pageSize, ...params })
        this.posts = res.data || res
        this.total = res.total || 0
      } catch (error) {
        console.error('获取文章列表失败:', error)
      } finally {
        this.loading = false
      }
    },
    async fetchPostDetail(id) {
      this.loading = true
      try {
        const res = await postApi.getDetail(id)
        this.currentPost = res.data || res
      } catch (error) {
        console.error('获取文章详情失败:', error)
      } finally {
        this.loading = false
      }
    },
    async fetchCategories() {
      try {
        const res = await postApi.getCategories()
        this.categories = res.data || res
      } catch (error) {
        console.error('获取分类失败:', error)
      }
    },
    async fetchTags() {
      try {
        const res = await postApi.getTags()
        this.tags = res.data || res
      } catch (error) {
        console.error('获取标签失败:', error)
      }
    },
    async fetchComments(postId) {
      try {
        const res = await commentApi.getList(postId)
        this.comments = res.data || res
      } catch (error) {
        console.error('获取评论失败:', error)
      }
    },
    async submitComment(data) {
      try {
        await commentApi.create(data)
        await this.fetchComments(data.postId)
      } catch (error) {
        console.error('提交评论失败:', error)
      }
    }
  }
})