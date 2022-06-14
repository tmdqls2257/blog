import express, { Request, Response, NextFunction } from 'express'
import bcrypt from 'bcrypt'
// import 'express-async-errors'

const Users = [{ id: 'tmdqls2257', password: 'chl135' }]

const router = express.Router()

router.post(
  '/signup',
  async (req: Request, res: Response, next: NextFunction) => {
    const { id, password } = req.body
    try {
      const user = await Users.find(User => User.id === id)
      if (user) {
        return res.redirect('/signup?error=exist')
      }
      const hash = await bcrypt.hash(password, 12)
      await Users.push({
        id,
        password: hash,
      })
      return res.redirect('/')
    } catch (err) {
      console.error(err)
      return next(err) // 에러 처리하는 곳으로 보내줍니다.
    }
  }
)
router.post(
  'signin',
  async (req: Request, res: Response, next: NextFunction) => {
    const { id, password } = req.body
  }
)
export default router
