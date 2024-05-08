// 导入 express 包
const express = require('express')
// 数据库：初始化数据库
const dbInit = require('./config/db')
// 路由：初始化路由
const routerInit = require('./config/router')
// jwt 验证：初始化 jwt 验证
const { verifyJwt } = require('./config/jwt')

// 创建 express 实例
const app = express()

// 允许接收 json 数据 请求对象的“req.body”属性
app.use(express.json())
// 允许跨域
app.use(require('cors')())
// 路由：express 静态文件托管
app.use('/static', express.static('public'))

// jwt 验证：中间件
app.use(verifyJwt())

// 数据库：中间件
app.use(dbInit)

// 路由：注册路由
routerInit(app)

// 监听端口
const port = 9000





// 捕获 404 错误
app.use((req, res, next) => {
  res.status(404).send('Not Found')
})
// 捕获 500 400 错误
app.use((err, req, res, next) => {
  // console.error(err.stack);
  let err400 = ['ValidationError', 'CastError', 'BSONError', 'MulterError']
  let code = err400.includes(err.name) ? 400 : err.status || 500
  if (err.name == 'BSONError') {
    err.message = 'ID错误'
  }
  res.status(code).send({
    name: err.name,
    message: err.message,
  })
})

// 在 9000 端口上监听
app.listen(port, () => {
  console.log(`App is listening on port ${port}`)
  console.log(`http://localhost:${port}`)
})