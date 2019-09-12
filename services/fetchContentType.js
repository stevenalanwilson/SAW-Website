async function fetchContentType (contentType, contentfulClient, sentry) {
  const articleContentType = await contentfulClient.getContentType(contentType)
  if (articleContentType) return articleContentType
  sentry.captureMessage('Error getting article content type.')
}

module.exports = fetchContentType
