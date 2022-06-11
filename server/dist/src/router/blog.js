"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
exports.blogPosts = [
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
];
function getAll() {
    return __awaiter(this, void 0, void 0, function* () {
        return exports.blogPosts;
    });
}
exports.getAll = getAll;
const router = express_1.default.Router();
// GET /posts
// GET /posts?category=:category
router.get('/posts', (req, res, next) => {
    const category = req.query.category;
    console.log(category);
    const data = category
        ? exports.blogPosts.filter(post => post.category === category)
        : exports.blogPosts;
    res.status(200).json(data);
});
// GET /posts/:id
router.get('/posts/:id', (req, res, next) => {
    const id = req.params.id;
    const data = exports.blogPosts.find(post => post.id === id);
    data
        ? res.status(200).json(data)
        : res.status(404).json({ message: `${id}에 해당하는 글이 없습니다.` });
});
// POST /
router.post('/posts', (req, res, next) => {
    const { title, content, category } = req.body;
    console.log(req.body);
    const post = {
        id: Date.now().toString(),
        title,
        content,
        createAt: new Date(),
        category,
        userName: '테오구',
    };
    exports.blogPosts.push(post);
    res.status(201).json(exports.blogPosts);
});
// PUT /posts/:id
router.put('/posts/:id', (req, res, next) => {
    const id = req.params.id;
    const title = req.body.title;
    const content = req.body.content;
    const category = req.body.category;
    const blogPost = exports.blogPosts.find(post => post.id === id);
    if (blogPost) {
        blogPost.content = content;
        blogPost.title = title;
        blogPost.category = category;
        res.status(200).json(blogPost);
    }
    else {
        res.status(404).json({ message: `${id}에 해당하는 글이 없습니다.` });
    }
});
// DELETE /posts/:id
router.delete('/posts/:id', (req, res, next) => {
    const id = req.params.id;
    exports.blogPosts = exports.blogPosts.filter(post => post.id !== id);
    res.sendStatus(204);
});
exports.default = router;
//# sourceMappingURL=blog.js.map