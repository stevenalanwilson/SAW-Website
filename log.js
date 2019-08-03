import config from './config';
import * as Sentry from '@sentry/browser';

Sentry.init({ 
    dsn: config.sentry.dsn,
    environment: 'development',
    debug: true,
    release: config.appVersion
});

module.exports = Sentry;