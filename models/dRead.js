// 数据分析阅读模型
const mongoose = require('mongoose')
const Schema = mongoose.Schema


const dReadSchema = new Schema({
  readName: { // 阅读人
    type: String,
    required: true
  },
  bookName: { // 书名
    type: String,
    required: true
  },
  bookTypeId: { // 书籍类型
    type: Number,
    required: true
  },
  readTime: { //阅读时间
    type: Date,
    default: Date.now
  }
})


const dRead = mongoose.model('dRead', dReadSchema)

module.exports = dRead