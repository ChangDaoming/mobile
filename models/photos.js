// 图片模型
const mongoose = require('mongoose')

// 用于获取当前的最大sort值
async function getNextSortValue(model) {
  try {
    const maxSortDoc = await model.findOne().sort('-sort').select({ _id: 0, sort: 1 })
    return maxSortDoc ? maxSortDoc.sort + 1 : 1
  } catch (error) {
    throw error // 抛出错误给调用者处理
  }
}

// 创建图片模型
const photoSchema = new mongoose.Schema({
  fileName: { type: String, required: true },
  fileSize: { type: Number, required: true },
  base64: { type: String, required: true },
  createTime: { type: Date, default: Date.now },
  sort: { type: Number, required: true }
})

// 添加预处理中间件 用于处理sort值自动+1
/* 
  1. 文档保存之前做前置自动设置sort值 所以不必显示的传入sort值
  2. 检查文档中的 ‘sort'字段 是否在本次操作中被修改
  3. 如果sort值没有修改，则自动获取当前最大的sort值+1作为sort值
  4. 如果sort值修改了，则不做处理
  5. 静态方法是定义在Model上的，不能直接通过实例调用，而是通过Model本身调用 this.constructor
   
*/
photoSchema.pre('validate', async function (next) {
  try {
    if (!this.isModified('sort')) {
      this.sort = await getNextSortValue(this.constructor)
    }
    next()
  } catch (error) {
    next(error)
  }
})

const Photo = mongoose.model('Photos', photoSchema)

module.exports = Photo