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

    let result = await UserModel.create(req.body)
    res.send(result)
  } catch (error) {
    next(error)
  }
})

// 登录账户
router.post('/login', async (req, res) => {
  const { username, password } = req.body
  try {
    if (!username || !password) {
      return res.status(400).send({ message: '请输入手机号和密码' })
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
      token: token
    })
  } catch (error) {
    next(error)
  }

})





module.exports = router