"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const helmet_1 = __importDefault(require("helmet"));
const morgan_1 = __importDefault(require("morgan"));
// import 'express-async-errors'
const auth_1 = __importDefault(require("./router/auth"));
const blog_1 = __importDefault(require("./router/blog"));
const mongoose_1 = __importDefault(require("mongoose"));
mongoose_1.default
    .connect(`
mongodb+srv://tmdqls2257:chl135@cluster0.qrrmv.mongodb.net/?retryWrites=true&w=majority`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log('MongoDb Connected'))
    .catch(err => console.log(err));
exports.app = express_1.default();
exports.app.use(express_1.default.json());
exports.app.use(helmet_1.default());
exports.app.use(cors_1.default());
exports.app.use(morgan_1.default('tiny'));
exports.app.use('/auth', auth_1.default);
exports.app.use('/blog', blog_1.default);
//  ctrl + shift + p 로 configure user snippets  검색
// "Express Callback": {
//     "prefix": "rr",
//     "body": ["(req, res, next) => {$1}"],
//     "description": "Express Callback"
//   }
// 처리해주지 않은 로직이 있습니다.
exports.app.use((req, res, next) => {
    res.sendStatus(404);
});
// 서브의 문제
exports.app.use((error, req, res, next) => {
    console.error(error);
    res.sendStatus(500);
});
exports.app.listen(3001);
//# sourceMappingURL=app.js.map