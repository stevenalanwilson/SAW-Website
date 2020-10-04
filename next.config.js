require('dotenv').config()

module.exports = {
  basePath: '/',
  target: process.env.NODE_ENV === 'development' ? 'server' : 'serverless',
  env: {
    SPACEID: process.env.SPACEID,
    ACCESSTOKEN: process.env.ACCESSTOKEN,
    SENTRYDSN: process.env.SENTRYDSN
  }
}
