"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const blog_1 = require("../controller/blog");
const router = express_1.default.Router();
// GET /posts
// GET /posts?category=:category
router.get('/posts', blog_1.getCategoryBlogPost);
// GET /posts/:id
router.get('/posts/:id', blog_1.getBlogPostById);
// POST /
router.post('/posts', blog_1.postBlog);
// PUT /posts/:id
router.put('/posts/:id', blog_1.putBlog);
// DELETE /posts/:id
router.delete('/posts/:id', blog_1.deleteBlogPost);
exports.default = router;
//# sourceMappingURL=blog.js.map