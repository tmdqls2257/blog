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
Object.defineProperty(exports, "__esModule", { value: true });
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
//# sourceMappingURL=blog.js.map