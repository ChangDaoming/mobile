//  用户信息模型
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userInfoSchema = new Schema({
  userId: { type: Number, default: 1 }, // 用户id
  userName: { type: String, required: true }, // 用户名
  nickName: { type: String, required: true }, // 昵称
  sex: { type: Number, default: 0 },  // 性别
  phonenumber: { type: Number, required: true }, // 手机号
  email: { type: String, required: true },  // 邮箱
  idCard: { type: String, required: true }, // 身份证号
  balance: { type: Number, default: 0 }, // 余额
  avatar: { type: String, required: true }, // 头像
  score: { type: Number, default: 0 }, // 积分
  educationBackground: { type: String, default: '本科' }, // 学历
  createDate: { type: Date, default: Date.now }, // 创建时间
})

const userInfoModel = mongoose.model('userInfo', userInfoSchema)

module.exports = userInfoModel