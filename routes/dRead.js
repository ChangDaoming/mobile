// 数据分析阅读路由
const express = require('express')
const router = express.Router()
const dRead = require('../models/dRead')

// 获取阅读列表
router.get('/list', async (req, res, next) => {
  try {
    const read = await dRead.find().sort({ _id: -1 })
    res.send({
      code: 200,
      data: read || ['暂无数据'],
      total: await dRead.countDocuments()
    })
  } catch (err) {
    next(err)
  }
})

// 添加分析阅读
router.post('/add', async (req, res, next) => {
  try {
    const dReadData = new dRead(req.body)
    await dReadData.save()
    res.send({
      code: 200,
      message: '添加成功'
    })
  } catch (err) {
    next(err)
  }
})


module.exports = router