import config from '../config/siteConfig'
import * as Sentry from '@sentry/browser'

Sentry.init({
  dsn: config.sentry.dsn,
  environment: 'development',
  debug: true,
  release: config.app.version,
})

export default Sentry
