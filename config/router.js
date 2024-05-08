// express 注册路由
// 用户注册登录相关路由
const userRouter = require('../routes/users.js')
// 图片上传相关路由
const photoRouter = require('../routes/photos.js')
// 楷模列表相关路由
const KMListsRouter = require('../routes/KMLists.js')
// 英雄列表相关路由
const heroListsRouter = require('../routes/heroLists.js')
// 评论相关路由
const evaluateRouter = require('../routes/evaluates.js')
// 身边英雄相关路由
const heroesAroundRouter = require('../routes/arounds.js')
// 学习感言相关路由
const testimonialsRouter = require('../routes/testimonials.js')
// 学习历史相关路由
const historyRouter = require('../routes/historys.js')
// 学习笔记相关路由
const notesRouter = require('../routes/notes.js')
// 公益活动相关路由
const activityRouter = require('../routes/activitys.js')
// 活动报名相关路由
const actApplyRouter = require('../routes/actApply.js')
// 物资捐赠相关路由
const donationRouter = require('../routes/donation.js')
// 数据分析新闻评论相关路由
const newsRouter = require('../routes/dNews.js')
// 数据分析阅读列表相关路由
const readRouter = require('../routes/dRead.js')
// 数据分析书籍类型相关路由
const typeReadRouter = require('../routes/dTypeRead.js')
// 用户信息相关路由
const userInfoRouter = require('../routes/userInfo.js')

const router = (app) => {
  app.use('/api/users', userRouter)
  app.use('/api/photo', photoRouter)
  app.use('/api/models', KMListsRouter)
  app.use('/api/heroes', heroListsRouter)
  app.use('/api/evaluate', evaluateRouter)
  app.use('/api/around', heroesAroundRouter)
  app.use('/api/testimonials', testimonialsRouter)
  app.use('/api/history', historyRouter)
  app.use('/api/notes', notesRouter)
  app.use('/api/activity', activityRouter)
  app.use('/api/actApply', actApplyRouter)
  app.use('/api/donation', donationRouter)
  app.use('/api/news', newsRouter)
  app.use('/api/read', readRouter)
  app.use('/api/rtype', typeReadRouter)
  app.use('/api/userInfo', userInfoRouter)
}

module.exports = router
