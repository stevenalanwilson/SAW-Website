const withSass = require('@zeit/next-sass')

module.exports = withSass({
  target: process.env.NODE_ENV === "development" ? "server" : "serverless",
  env: {
    SPACE_ID: process.env.SPACE_ID,
    ACCESS_TOKEN: process.env.ACCESS_TOKEN
  }
})
  