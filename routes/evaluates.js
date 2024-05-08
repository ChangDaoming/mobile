// 评论相关路由
const express = require('express')
const router = express.Router()
const Evaluate = require('../models/evaluates')

// 获取评论列表
router.get('/list', async (req, res, next) => {
  try {
    const { heroId } = req.query
    const evaluates = await Evaluate.find({ heroId }).sort({ create_time: -1 })
    res.send({
      code: 200,
      data: evaluates || ['暂无评论'],
      total: await Evaluate.countDocuments()
    })
  } catch (error) {
    next(error)
  }
})

// 添加评论
router.post('/add', async (req, res, next) => {
  const { fromUserName, fromUserAvatar, evaluateContent, likeCount, evaluateUserId, heroId } = req.body
  try {
    await Evaluate.create({
      fromUserName,
      fromUserAvatar,
      evaluateContent,
      likeCount,
      evaluateUserId,
      heroId
    })
    res.send({
      code: 200,
      message: '评论添加成功'
    })
  } catch (error) {
    next(error)
  }
})




module.exports = router