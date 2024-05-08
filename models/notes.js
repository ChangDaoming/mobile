// 学习笔记模型
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const NoteSchema = new Schema({
  noteTitle: {    // 笔记标题
    type: String,
    required: true
  },
  noteContent: {  // 笔记内容
    type: String,
    required: true
  },
  studyHistoryId: {  // 所属学习历史id
    type: Number,
    default: 2
  },
  createDate: {
    type: Date,
    default: Date.now
  }
})
const Note = mongoose.model('Note', NoteSchema)

module.exports = Note