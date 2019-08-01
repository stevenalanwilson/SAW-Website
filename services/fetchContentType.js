import * as Sentry from '@sentry/browser';

const contentfulClient = require('../clients/contentfulClient');

Sentry.init({ dsn: "https://844ab33636a24edc9a0c6ce285555d9f@sentry.io/1508421" });


async function fetchContentType(contentType) {
    const articleContentType = await contentfulClient.getContentType(contentType)
    if (articleContentType) return articleContentType
    Sentry.captureMessage('Error getting article content type.')
}

module.exports = fetchContentType;