// 物资捐赠路由
const express = require('express')
const router = express.Router()
const donation = require('../models/donation')

// 捐赠列表
router.get('/list', async (req, res, next) => {
  try {
    const donations = await donation.find()
    res.send({
      code: 200,
      data: donations || ['暂无数据'],
      total: await donation.countDocuments()
    })
  } catch (error) {
    next(error)
  }
})

// 新增捐赠
router.post('/add', async (req, res, next) => {
  const { img, content, number, donationUser } = req.body
  try {
    await donation.create({
      img,
      content,
      number,
      donationUser
    })
    res.send({
      code: 200,
      message: '捐赠成功'
    })
  } catch (error) {
    next(error)
  }
})


module.exports = router