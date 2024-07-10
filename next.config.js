require('dotenv').config()

module.exports = {
  env: {
    SPACEID: process.env.SPACEID,
    ACCESSTOKEN: process.env.ACCESSTOKEN,
    SENTRYDSN: process.env.SENTRYDSN
  }
}
