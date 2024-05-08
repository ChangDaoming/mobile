// 学习历史模型
const mongoose = require('mongoose')
const Schema = mongoose.Schema

// const historyNoteSchema = new Schema({
//   title: { type: String, required: true }, // 标题
//   issueTime: { type: Date, required: true }, // 发布时间
//   content: { type: String, required: true }, // 内容
//   userId: { type: Number, required: true, default: 1 }, // 用户id
//   img: { type: String, required: true }, // 图片
//   status: { type: Number, required: true, default: 1 }, // 状态 1: 发布 2: 审核中 3: 审核通过 4: 审核不通过
//   wstudyNote: { type: String, required: true }, // 学习笔记
//   noteId: { type: Number, required: true }, // 笔记id
//   noteTitle: { type: String, required: true }, // 笔记标题
//   noteContent: { type: String, required: true }, // 笔记内容
//   studyHistoryId: { type: Number, required: true, default: 1 }, // 学习历史id
//   createDate: { type: Date, default: Date.now } // 创建时间
// })

const historySchema = new Schema({
  title: { type: Number, required: true }, // 标题
  content: { type: String, required: true }, // 内容
  userId: { type: Number, default: 1 }, // 用户id
  createDate: { type: Date, default: Date.now }, // 创建时间
  // historyNotes: [historyNoteSchema] // 学习历史笔记记录
})

const History = mongoose.model('History', historySchema)

module.exports = History