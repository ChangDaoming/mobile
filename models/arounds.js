// 身边英雄模型
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const AroundSchema = new Schema({
  img: { type: String, required: true }, // 英雄图片
  name: { type: String, required: true }, // 英雄名称
  introduction: { type: String, required: true }, // 英雄介绍
  title: { type: String, required: true }, // 英雄标题
  content: { type: String, required: true }, // 英雄故事内容
  storyImg: { type: String, required: true }, // 英雄故事图片
  createDate: { type: Date, default: Date.now }, // 创建时间
  clickNum: { type: Number, default: 0 } // 点击数
})

const Around = mongoose.model('Around', AroundSchema)

module.exports = Around