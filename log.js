import config from './config';
import * as Sentry from '@sentry/browser';

Sentry.init({ 
    dsn: config.sentry.dsn,
    environment: 'development',
    debug: true,
});

module.exports = Sentry;