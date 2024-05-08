const { expressjwt: exjwt } = require('express-jwt')
var jwt = require('jsonwebtoken')

// 密匙
const SECRET_KEY = 'alifn_mobile_jwt_8756'


// 生成jwt
function genoJwt(data) {
  let token = jwt.sign(data, SECRET_KEY, { expiresIn: '7d' })
  return token
}

// 验证jwt
function verifyJwt() {
  return exjwt({
    secret: SECRET_KEY,
    algorithms: ['HS256'],
    credentialsRequired: false,
    requestProperty: 'auth',
    getToken: req => {
      let { authorization } = req.headers
      if (authorization && authorization.split(' ')[0] === 'Bearer') {
        let token = authorization.split(' ')[1]
        if (token) {
          return token
        } else {
          console.log(req.url, token)
          return 'token error'
        }
      } else {
        return authorization
      }
    },
  }).unless({
    path: ['/api/users/create', '/api/users/login'],
  })
}
module.exports = {
  genoJwt,
  verifyJwt,
}