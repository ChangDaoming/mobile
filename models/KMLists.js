// 楷模列表模型
const mongoose = require('mongoose')
// 创建楷模列表模型
const KMListsSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  // 图片的base64编码
  img: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  create_time: {
    type: Date,
    default: Date.now
  }
})

// 导出模型
module.exports = mongoose.model('KMLists', KMListsSchema)
