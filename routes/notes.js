// 学习笔记路由
const express = require('express')
const router = express.Router()
const Note = require('../models/notes')

// 获取所有笔记
router.get('/list', async (req, res, next) => {
  try {
    const notes = await Note.find()
    res.send({
      code: 200,
      message: '获取成功',
      data: notes || ['暂无数据']
    })
  } catch (err) {
    next(err)
  }
})

// 新增笔记
router.post('/add', async (req, res, next) => {
  try {
    const { noteTitle, noteContent } = req.body
    if (!noteTitle || !noteContent) {
      return res.send({
        code: 400,
        message: '标题或内容不能为空'
      })
    }
    const note = await Note.create({ noteTitle, noteContent })
    res.send({
      code: 200,
      message: '添加成功',
      data: note
    })
  } catch (err) {
    next(err)
  }
})



// 获取单个笔记
router.get('/list/:id', async (req, res) => {
  try {
    const { id } = req.params
    const note = await Note.findById(id)
    res.send({
      code: 200,
      message: '获取成功',
      data: note
    })
  } catch (err) {
    next(err)
  }
})


// 更新笔记
router.put('/list/:id', async (req, res, next) => {
  try {
    const { id } = req.params
    const { noteTitle, noteContent } = req.body

    // { new: true } 返回更新后的笔记
    const note = await Note.findByIdAndUpdate(id, { noteTitle, noteContent }, { new: true })

    res.send({
      code: 200,
      message: '更新成功',
      data: note
    })

  } catch (err) {
    next(err)
  }
})


// 删除笔记
router.delete('/list/:id', async (req, res, next) => {
  try {
    const { id } = req.params
    await Note.findByIdAndDelete(id)
    res.send({
      code: 200,
      message: '删除成功'
    })
  } catch (err) {
    next(err)
  }
})

module.exports = router