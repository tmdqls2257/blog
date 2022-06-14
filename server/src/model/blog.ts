import mongoose from 'mongoose'

const productSchema = new mongoose.Schema({
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
})

const Product = mongoose.model('Product', productSchema)

module.exports = Product
