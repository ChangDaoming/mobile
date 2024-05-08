// 活动报名路由
const express = require('express')
const router = express.Router()
const actApply = require('../models/actApply')

// 获取活动报名列表
router.get('/list', async (req, res, next) => {
  try {
    const result = await actApply.find().sort({ createDate: -1 })
    res.send({
      code: 200,
      data: result || ['暂无数据'],
      total: await actApply.countDocuments()
    })
  } catch (err) {
    next(err)
  }
})

// 新增活动报名
router.post('/add', async (req, res, next) => {
  const { actId } = req.body
  try {
    const result = await actApply.create({ actId })
    res.send({
      code: 200,
      data: result,
      message: '活动报名成功'
    })
  } catch (err) {
    next(err)
  }
})



module.exports = router