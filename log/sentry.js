import config from '../config'
import * as sentry from '@sentry/browser'

sentry.init({
  dsn: config.sentry.dsn,
  environment: 'development',
  debug: true,
  release: config.appVersion
})

module.exports = sentry
