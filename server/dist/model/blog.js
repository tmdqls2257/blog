"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const productSchema = new mongoose_1.default.Schema({
    title: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    createAt: {
        type: Date,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    userName: {
        type: String,
        required: true,
    },
});
const Product = mongoose_1.default.model('Product', productSchema);
module.exports = Product;
//# sourceMappingURL=blog.js.map