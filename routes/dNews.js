// 数据分析新闻路由
const express = require('express')
const router = express.Router()
const dNews = require('../models/dNews')

// 数据分析新闻
router.get('/list', async (req, res, next) => {
  try {
    const news = await dNews.find().sort({ _id: -1 })
    res.send({
      code: 200,
      data: news,
      total: await dNews.countDocuments()
    })
  } catch (error) {
    next(error)
  }
})

// 新增数据分析新闻
router.post('/add', async (req, res, next) => {
  try {
    const news = new dNews(req.body)
    await news.save()
    res.send({
      code: 200,
      message: '添加成功'
    })
  } catch (error) {
    next(error)
  }
})

module.exports = router