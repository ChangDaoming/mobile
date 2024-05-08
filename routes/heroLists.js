// 英雄列表路由
const express = require('express')
const router = express.Router()
const Hero = require('../models/heroLists')

// 获取英雄列表
router.get('/getHeroList', async (req, res, next) => {
  try {
    const heroList = await Hero.find().sort({ create_time: -1 })

    res.send({
      code: 200,
      data: heroList || ['暂无数据'], // 防止查询不到数据 
      total: await Hero.countDocuments() // 总数
    })
  } catch (err) {
    next(err)
  }
})

// 获取单个英雄
router.get('/getHero/:id', async (req, res, next) => {
  const { id } = req.params

  try {
    const hero = await Hero.findById(id)

    res.send({
      code: 200,
      data: hero || { 'msg': '暂无数据' } // 防止查询不到数据
    })
  } catch (err) {
    next(err)
  }
})

// 点击量+1
router.post('/addClickNum', async (req, res, next) => {
  const { id } = req.body

  try {
    const hero = await Hero.findByIdAndUpdate(id, { $inc: { clickNum: 1 } })

    res.send({
      code: 200,
      data: hero
    })
  } catch (err) {
    next(err)
  }
})


// 添加英雄
router.post('/add', async (req, res, next) => {
  const { img, name, introduction, title, content, storyUrl, clickNum } = req.body

  try {
    await Hero.create({
      img,
      name,
      introduction,
      title,
      content,
      storyUrl,
      clickNum
    })
    res.send({
      code: 200,
      msg: '添加成功'
    })
  } catch (err) {
    next(err)
  }

})


// 导出路由
module.exports = router