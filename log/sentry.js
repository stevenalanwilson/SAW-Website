import config from '../config/siteConfig'
import * as sentry from '@sentry/browser'

sentry.init({
  dsn: config.sentry.dsn,
  environment: 'development',
  debug: true,
  release: config.app.version
})

module.exports = sentry
