const withSass = require('@zeit/next-sass')

module.exports = withSass({
  cssModules: true,
  target: 'serverless',
  env: {
    SPACE_ID: process.env.SPACE_ID,
    ACCESS_TOKEN: process.env.ACCESS_TOKEN
  }
})
  