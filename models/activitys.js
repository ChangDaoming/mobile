// 公益活动模型
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const activitySchema = new Schema({
  activityName: { type: String, required: true }, // 活动名称
  img: { type: String, required: true }, // 图片
  startEndTime: { type: String, default: '2022/04/10 09:00 ~ 2022/04/10 11:30' }, // 开始结束时间
  activityDetail: { type: String, required: true }, // 活动详情
  applyNum: { type: Number, default: 1205 }, // 报名人数
  initiator: { type: String, required: true }, // 发起方
  briefIntroduction: { type: String, required: true }, // 活动简介
  overTime: { type: String, default: '2022/04/10 12:00' }, // 结束时间
  status: { type: String, required: true, default: 0 }, // 状态
  createDate: { type: Date, default: Date.now }, // 创建时间
})

const Activity = mongoose.model('Activity', activitySchema)

module.exports = Activity