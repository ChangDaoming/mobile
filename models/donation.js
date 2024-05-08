// 物资捐赠模型
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const donationSchema = new Schema({
  img: { type: String, required: true }, // 捐赠图片
  content: { type: String, required: true }, // 捐赠内容
  number: { type: Number, required: true }, // 捐赠数量
  donationDate: [{ type: Date, default: Date.now }], // 捐赠日期
  donationUser: { type: String, required: true }, // 捐赠人
})

const Donation = mongoose.model('Donation', donationSchema)

module.exports = Donation