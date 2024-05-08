// 评论模型
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const EvaluateSchema = new Schema({
  fromUserName: {  // 评论者
    type: String,
    required: true
  },
  fromUserAvatar: {  // 评论者头像
    type: String,
    required: true
  },
  evaluateContent: {  // 评论内容
    type: String,
    required: true
  },
  createDate: {  // 评论时间
    type: Date,
    default: Date.now
  },
  likeCount: {  // 点赞数
    type: Number,
    default: 0
  },
  evaluateUserId: {  // 评论者id
    type: Number,
    required: true,
    default: 1
  },
  heroId: {  // 英雄id
    type: String,
    required: true,
    default: '1'
  }
})

const Evaluate = mongoose.model('Evaluate', EvaluateSchema)

module.exports = Evaluate