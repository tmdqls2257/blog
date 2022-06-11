'use strict'
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod }
  }
Object.defineProperty(exports, '__esModule', { value: true })
const express_1 = __importDefault(require('express'))
const cors_1 = __importDefault(require('cors'))
const helmet_1 = __importDefault(require('helmet'))
const morgan_1 = __importDefault(require('morgan'))
// import 'express-async-errors'
const signUp_1 = __importDefault(require('./router/signUp'))
const blog_1 = __importDefault(require('./router/blog'))
const app = express_1.default()
app.use(express_1.default.json())
app.use(helmet_1.default())
app.use(cors_1.default())
app.use(morgan_1.default('tiny'))
app.use('/signUp', signUp_1.default)
app.use('/blog', blog_1.default)
//  ctrl + shift + p 로 configure user snippets  검색
// "Express Callback": {
//     "prefix": "rr",
//     "body": ["(req, res, next) => {$1}"],
//     "description": "Express Callback"
//   }
// 처리해주지 않은 로직이 있습니다.

app.use((req, res, next) => {
  res.sendStatus(404)
})
// 서브의 문제
app.use((error, req, res, next) => {
  console.error(error)
  res.sendStatus(500)
})
app.listen(3001)
//# sourceMappingURL=app.js.map
