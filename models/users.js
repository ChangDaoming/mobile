// 用户模型
const mongoose = require('mongoose')

const usersSchema = new mongoose.Schema({
  username: {
    type: String,
    // 必填项
    required: true,
    // 唯一索引
    unique: true
  },
  password: {
    type: String,
    required: true
  }
})

const Model = mongoose.model('Users', usersSchema)

module.exports = Model