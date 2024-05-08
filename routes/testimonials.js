// 学习感言路由
const express = require('express')
const router = express.Router()
const Testimonial = require('../models/testimonials')

// 学习感言列表
router.get('/list', async (req, res, next) => {
  try {
    const testimonials = await Testimonial.find()
    res.send({
      code: 200,
      data: testimonials || ['暂无数据'],
      total: await Testimonial.countDocuments()
    })
  } catch (err) {
    next(err)
  }
})


// 新增学习感言
router.post('/add', async (req, res, next) => {
  try {
    const { title, content } = req.body

    await Testimonial.create({
      title,
      content
    })

    res.send({
      code: 200,
      message: '添加成功',
      data: 1
    })
  } catch (err) {
    next(err)
  }
})


// 删除学习感言
router.delete('/delete/:id', async (req, res, next) => {
  try {
    const { id } = req.params

    await Testimonial.findByIdAndDelete(id)

    res.send({
      code: 200,
      message: '删除成功'
    })
  } catch (err) {
    next(err)
  }
})


module.exports = router