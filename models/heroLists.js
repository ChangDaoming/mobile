// 英雄列表模型
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const HeroSchema = new Schema({
  // 图片的base64编码
  img: {
    type: String,
    required: true
  },
  name: {   //姓名
    type: String,
    required: true
  },
  introduction: {   //介绍
    type: String,
    required: true
  },
  title: {    //标题
    type: String,
    required: true
  },
  content: {    //内容
    type: String,
    required: true
  },
  storyUrl: {    //故事图片
    type: String,
    required: true
  },
  create_time: {   //创建时间
    type: Date,
    default: Date.now
  },
  clickNum: {   //点击数
    type: Number,
    default: 0
  }
}

)

const Hero = mongoose.model('Hero', HeroSchema)

module.exports = Hero