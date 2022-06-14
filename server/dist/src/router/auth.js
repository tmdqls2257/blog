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
const bcrypt_1 = __importDefault(require("bcrypt"));
// import 'express-async-errors'
const Users = [{ id: 'tmdqls2257', password: 'chl135' }];
const router = express_1.default.Router();
router.post('/signup', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { id, password } = req.body;
    try {
        const user = yield Users.find(User => User.id === id);
        if (user) {
            return res.redirect('/signup?error=exist');
        }
        const hash = yield bcrypt_1.default.hash(password, 12);
        yield Users.push({
            id,
            password: hash,
        });
        return res.redirect('/');
    }
    catch (err) {
        console.error(err);
        return next(err); // 에러 처리하는 곳으로 보내줍니다.
    }
}));
router.post('signin', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { id, password } = req.body;
}));
exports.default = router;
//# sourceMappingURL=auth.js.map