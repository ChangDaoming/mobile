// 数据分析阅读类型路由
const express = require('express')
const router = express.Router()
const TypeRead = require('../models/dTypeRead')

// 获取阅读列表
router.get('/list', async (req, res, next) => {
  try {
    const result = await TypeRead.find().sort({ _id: -1 })
    res.send({
      code: 200,
      data: result || ['暂无数据'],
      total: await TypeRead.countDocuments()
    })
  } catch (err) {
    next(err)
  }
})

// 添加阅读类型
router.post('/add', async (req, res, next) => {
  try {
    const result = new TypeRead(req.body)
    await result.save()
    res.send({
      code: 200,
      message: '添加成功'
    })
  } catch (err) {
    next(err)
  }
})


module.exports = router