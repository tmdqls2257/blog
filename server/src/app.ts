import express, { NextFunction, Request, Response } from 'express'
import cors from 'cors'
import helmet from 'helmet'
import morgan from 'morgan'
// import 'express-async-errors'
import signUpRoute from './router/signUp'
import blogRoute from './router/blog'
const app = express()

app.use(express.json())
app.use(helmet())
app.use(cors())
app.use(morgan('tiny'))

app.use('/signUp', signUpRoute)
app.use('/blog', blogRoute)

//  ctrl + shift + p 로 configure user snippets  검색
// "Express Callback": {
//     "prefix": "rr",
//     "body": ["(req, res, next) => {$1}"],
//     "description": "Express Callback"
//   }

// 처리해주지 않은 로직이 있습니다.
app.use((req: Request, res: Response, next: NextFunction) => {
  res.sendStatus(404)
})

// 서브의 문제
app.use((error: any, req: Request, res: Response, next: NextFunction) => {
  console.error(error)
  res.sendStatus(500)
})

app.listen(3001)
