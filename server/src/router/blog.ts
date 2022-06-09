import express, { Request, Response, NextFunction } from 'express'

// import 'express-async-errors'

export type BlogPost = {
  id: string
  title: string
  content: string
  createAt: Date
  category: string
  userName: string
}
export let blogPosts: BlogPost[] = [
  {
    id: '0',
    title: '시멘틱 웹',
    userName: '테오구',
    content: '블로그 포스팅',
    createAt: new Date(),
    category: 'HTML',
  },
  {
    id: '1',
    title: '시멘틱 웹',
    userName: '테오구',
    content: '블로그 포스팅',
    createAt: new Date(),
    category: 'CSS',
  },
  {
    id: '2',
    title: '시멘틱 웹',
    userName: '테오구',
    content: '블로그 포스팅',
    createAt: new Date(),
    category: 'JavaScript',
  },
]

export async function getAll(): Promise<BlogPost[]> {
  return blogPosts
}

const router = express.Router()

// GET /posts
// GET /posts?category=:category
router.get('/posts', (req: Request, res: Response, next: NextFunction) => {
  const category = req.query.category
  console.log(category)
  const data = category
    ? blogPosts.filter(post => post.category === category)
    : blogPosts
  res.status(200).json(data)
})
// GET /posts/:id
router.get('/posts/:id', (req: Request, res: Response, next: NextFunction) => {
  const id = req.params.id
  const data = blogPosts.find(post => post.id === id)
  data
    ? res.status(200).json(data)
    : res.status(404).json({ message: `${id}에 해당하는 글이 없습니다.` })
})

// POST /
router.post('/posts', (req: Request, res: Response, next: NextFunction) => {
  const { title, content, category } = req.body
  console.log(req.body)

  const post: BlogPost = {
    id: Date.now().toString(),
    title,
    content,
    createAt: new Date(),
    category,
    userName: '테오구',
  }
  blogPosts.push(post)
  res.status(201).json(blogPosts)
})
// PUT /posts/:id
router.put('/posts/:id', (req: Request, res: Response, next: NextFunction) => {
  const id = req.params.id
  const title = req.body.title
  const content = req.body.content
  const category = req.body.category
  const blogPost = blogPosts.find(post => post.id === id)
  if (blogPost) {
    blogPost.content = content
    blogPost.title = title
    blogPost.category = category
    res.status(200).json(blogPost)
  } else {
    res.status(404).json({ message: `${id}에 해당하는 글이 없습니다.` })
  }
})

// DELETE /posts/:id
router.delete(
  '/posts/:id',
  (req: Request, res: Response, next: NextFunction) => {
    const id = req.params.id
    blogPosts = blogPosts.filter(post => post.id !== id)
    res.sendStatus(204)
  }
)

export default router
