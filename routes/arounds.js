// 身边英雄路由
const express = require('express')
const router = express.Router()
const AroundHero = require('../models/arounds')

// 获取身边英雄列表
router.get('/list', async (req, res, next) => {
  try {
    const arounds = await AroundHero.find()
    res.send({
      code: 200,
      data: arounds || ['暂无数据'],
      total: await AroundHero.countDocuments()
    })
  } catch (err) {
    next(err)
  }
})

// 新增身边英雄
router.post('/add', async (req, res, next) => {
  try {
    const { img, name, introduction, title, content, storyImg, clickNum } = req.body
    await AroundHero.create({
      img,
      name,
      introduction,
      title,
      content,
      storyImg,
      clickNum
    })

    res.send({
      code: 200,
      message: '添加成功'
    })
  } catch (err) {
    next(err)
  }
})

module.exports = router