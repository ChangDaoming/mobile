const express = require('express')
const router = express.Router()
const UserModel = require('../models/users')
const { genoJwt } = require('../config/jwt')

// 注册账户
router.post('/create', async (req, res, next) => {
  const { password } = req.body
  try {
    if (!password || password.length < 6) {
      return res.status(400).send({ message: '密码必传且长度不小于6位' })
    }

    let data = await UserModel.create(req.body)
    res.send({
      code: 200,
      message: '注册成功',
      data,
    })
  } catch (error) {
    res.send({
      code: 400,
      message: '用户名已被使用，注册失败',
    })
  }
})

// 登录账户
router.post('/login', async (req, res) => {
  const { username, password } = req.body
  try {
    if (!username || !password) {
      return res.send({
        code: 400,
        message: '请输入账号和密码',
      })
    }

    const result = await UserModel.findOne({ username })
    if (!result) {
      return res.send({
        code: 20002,
        message: '用户不存在',
      })
    } else if (result.password !== password) {
      return res.send({
        code: 20001,
        message: '密码错误',
      })
    }
    const { _id } = result
    const token = genoJwt({ _id, username })
    res.send({
      code: 200,
      message: '登录成功',
      token: token,
    })
  } catch (error) {
    next(error)
  }
})

// 删除账户
router.delete('/delete', async (req, res, next) => {
  const { _id } = req.body
  try {
    const result = await UserModel.findByIdAndDelete(_id)
    if (!result) {
      return res.status(404).send({ message: '用户不存在' })
    }
    res.send({
      code: 200,
      message: '删除成功',
    })
  } catch (error) {
    next(error)
  }
})

// 获取账户列表
router.get('/list', async (req, res, next) => {
  try {
    const data = await UserModel.find()
    res.send({
      code: 200,
      message: '获取成功',
      data,
    })
  } catch (error) {
    next(error)
  }
})

module.exports = router
