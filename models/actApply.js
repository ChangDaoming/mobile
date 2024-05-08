// 活动报名模型
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const actApplySchema = new Schema({
  actId: { type: Schema.Types.ObjectId, ref: 'activity', required: true }, // 活动ID
  userId: { type: Number, default: 1 }, // 用户ID
  createTime: { type: Date, default: Date.now }, // 报名时间
  activityStatus: { type: Number, default: 1 }, // 报名状态 0: 未报名 1: 已报名 
})

const actApply = mongoose.model('actApply', actApplySchema)

module.exports = actApply