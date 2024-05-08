// 数据分析新闻数据模型
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const dNewsSchema = new Schema({
  newId: {  // 新闻id
    type: Number,
    required: true
  },
  newsTitle: {  // 新闻标题
    type: String,
    required: true
  },
  newsContent: {  // 新闻内容
    type: String,
    required: true
  },
  newsTime: {  // 新闻发布时间
    type: Date,
    default: Date.now
  },
  commentContent: {  // 评论内容
    type: String,
    required: true
  },
  commentTime: {  // 评论时间
    type: Date,
    default: Date.now
  },
  commentUserName: {  // 评论用户名
    type: String,
    required: true
  },
  commentUserSex: {  // 评论用户性别
    type: String,
    required: true
  }
})

const dNews = mongoose.model('dNews', dNewsSchema)

module.exports = dNews