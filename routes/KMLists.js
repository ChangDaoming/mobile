// 楷模列表创建 获取路由
const express = require('express')
const router = express.Router()
const KMListsModel = require('../models/KMLists')

// 添加一个新的楷模列表
router.post('/add', async (req, res, next) => {
  const { title, img, content, name } = req.body

  try {
    await KMListsModel.create({ title, img, content, name })
    res.send({
      code: 200,
      message: '添加成功'
    })
  } catch (error) {
    next(error)
  }
})


// 获取所有楷模列表
router.get('/getKMLists', async (req, res, next) => {
  try {
    const { pageNum = 1, pageSize = 5 } = req.query // 从请求查询参数中获取页码和每页数量，默认值分别为1和5
    const skip = (pageNum - 1) * pageSize // 计算跳过的条数
    // 查询所有楷模列表，并按创建时间升序排列，同时实现分页
    const kmLists = await KMListsModel.find()
      .sort({ create_time: -1 })
      .skip(skip)
      .limit(pageSize)


    const totalCount = await KMListsModel.countDocuments() // 计算总条数

    res.send({
      code: 200,
      message: '获取成功',
      data: kmLists || ['暂无数据'], // 防止查询不到数据
      total: totalCount, // 计算总条数
      totalPages: Math.ceil(totalCount / pageSize) // 计算总页数
    })
  } catch (error) {
    next(error)
  }
})


module.exports = router
