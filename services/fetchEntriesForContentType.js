import contentfulClient from '../clients/contentfulClient'

const Sentry = require('../log')

async function fetchEntriesForContentType (contentType) {
  const entries = await contentfulClient.getEntries({
    content_type: contentType
  })
  if (entries.items) return entries.items
  Sentry.captureMessage(`Error getting Entries for ${contentType}.`)
}

module.exports = fetchEntriesForContentType
