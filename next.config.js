require('dotenv').config()

const withSass = require('@zeit/next-sass')

module.exports = withSass({
  target: process.env.NODE_ENV === 'development' ? 'server' : 'serverless',
  env: {
    SPACEID: process.env.SPACEID,
    ACCESSTOKEN: process.env.ACCESSTOKEN,
    SENTRYDSN: process.env.SENTRYDSN
  }
})
