// 公益活动路由
const express = require('express')
const router = express.Router()
const activity = require('../models/activitys')



// 获取活动列表
router.get('/list', async (req, res, next) => {
  try {
    const result = await activity.find().sort({ createDate: -1 })
    res.send({
      code: 200,
      message: '获取成功',
      data: result,
      total: await activity.countDocuments()
    })
  } catch (error) {
    next(error)
  }
})


// 获取活动详情
router.get('/list/:id', async (req, res, next) => {
  const { id } = req.params
  try {
    const result = await activity.findById(id)
    res.send({
      code: 200,
      message: '获取成功',
      data: result
    })
  } catch (error) {
    next(error)
  }
})

// 发布活动
router.post('/add', async (req, res, next) => {
  const { activityName, img, activityDetail, initiator, briefIntroduction } = req.body
  try {
    const result = await activity.create({
      activityName,
      img,
      activityDetail,
      initiator,
      briefIntroduction
    })
    res.send({
      code: 200,
      message: '发布成功',
      data: result
    })
  } catch (error) {
    next(error)
  }
})



module.exports = router