// 数据分析阅读类型模型
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const dTypeReadSchema = new Schema({
  readName: { type: String, required: true }, // 阅读人
  bookName: { type: String, required: true }, // 书名
  bookTypeId: { type: Number, required: true }, // 阅读类型ID
  readTime: { type: Date, default: null }, // 阅读时间
  bookTypeName: { type: String, required: true }, // 阅读类型名称
})

const dTypeRead = mongoose.model('dTypeRead', dTypeReadSchema)

module.exports = dTypeRead