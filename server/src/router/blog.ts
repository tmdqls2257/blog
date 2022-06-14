import express, { Request, Response, NextFunction } from 'express'
import {
  deleteBlogPost,
  getBlogPostById,
  getCategoryBlogPost,
  postBlog,
  putBlog,
} from '../controller/blog'

const router = express.Router()

// GET /posts
// GET /posts?category=:category
router.get('/posts', getCategoryBlogPost)
// GET /posts/:id
router.get('/posts/:id', getBlogPostById)

// POST /
router.post('/posts', postBlog)
// PUT /posts/:id
router.put('/posts/:id', putBlog)

// DELETE /posts/:id
router.delete('/posts/:id', deleteBlogPost)

export default router
