// 学习感言模型
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const TestimonialSchema = new Schema({
  title: {  // 标题
    type: String,
    required: true
  },
  content: {  // 内容
    type: String,
    required: true
  },
  userId: {  // 用户ID
    type: Schema.Types.ObjectId,
    ref: 'users'
  },
  createDate: {  // 创建时间
    type: Date,
    default: Date.now
  }
})

const Testimonial = mongoose.model('Testimonial', TestimonialSchema)

module.exports = Testimonial