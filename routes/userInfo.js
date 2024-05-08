// 用户信息路由
const express = require('express')
const router = express.Router()
const userInfo = require('../models/userInfo')

// 获取用户信息
router.get('/getUserInfo', async (req, res, next) => {
  try {
    const result = await userInfo.find()
    res.send({
      code: 200,
      data: result || ['暂无数据'],
      msg: 'success'
    })
  } catch (error) {
    next(error)
  }
})

// 添加用户信息
router.post('/addUserInfo', async (req, res, next) => {
  try {
    const result = await userInfo.create(req.body)
    res.send({
      code: 200,
      data: result,
      msg: 'success'
    })
  } catch (error) {
    next(error)
  }
})

module.exports = router