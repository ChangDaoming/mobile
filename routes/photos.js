// 轮播图片上传 获取图片列表接口
const express = require('express')
const router = express.Router()
const PhotoModel = require('../models/photos')


// 上传图片
router.post('/uploadPhoto', async (req, res, next) => {
  const { filename, filesize, base64 } = req.body

  try {
    await PhotoModel.create({
      filename,
      filesize,
      base64
    })
    res.send({
      code: 200,
      message: '上传成功'
    })
  } catch (error) {
    next(error)
  }
})

// 获取图片列表
router.get('/getPhotoList', async (req, res, next) => {
  try {
    const photoList = await PhotoModel.find()

    res.send({
      code: 200,
      message: '获取成功',
      data: photoList || ['暂无图片'],
      total: await PhotoModel.countDocuments() // 图片总数
    })
  } catch (error) {
    next(error)
  }
})

module.exports = router