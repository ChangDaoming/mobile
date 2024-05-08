// 学习历史路由
const express = require('express')
const router = express.Router()
const History = require('../models/historys')

// 学习历史列表
router.get('/list', async (req, res, next) => {
  try {
    const { userId } = req.query

    if (userId || typeof userId === 'string') {
      userId = parseInt(userId, 10) // 转为数字
    }
    const historys = await History.find({ userId })
    res.send({
      code: 200,
      data: historys || ['暂无学习历史'],
      total: await History.countDocuments()
    })


  } catch (err) {
    next(err)
  }
})

// 新增学习历史
router.post('/add', async (req, res, next) => {
  try {
    const { title, content } = req.body
    const history = await History.create({ title, content })
    res.send({
      code: 200,
      msg: '添加成功',
      data: history
    })
  } catch (err) {
    next(err)
  }
})


module.exports = router