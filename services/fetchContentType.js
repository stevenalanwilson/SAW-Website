import contentfulClient from '../clients/contentfulClient'

const Sentry = require('../log')

async function fetchContentType (contentType) {
  const articleContentType = await contentfulClient.getContentType(contentType)
  if (articleContentType) return articleContentType
  Sentry.captureMessage('Error getting article content type.')
}

module.exports = fetchContentType
