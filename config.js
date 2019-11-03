import { isProduction } from './utils/index'

module.exports = {
  appVersion: '0.1.0',
  appName: 'SAW',
  dev: !isProduction,
  production: isProduction,
  environment: process.env.NODE_ENV,
  sentry: {
    dsn: process.env.SENTRYDSN
  },
  space: process.env.SPACEID,
  accessToken: process.env.ACCESSTOKEN
}
