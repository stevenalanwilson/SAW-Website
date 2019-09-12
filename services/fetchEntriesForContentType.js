async function fetchEntriesForContentType (contentType, contentfulClient, sentry) {
  const entries = await contentfulClient.getEntries({
    content_type: contentType
  })
  if (entries.items) return entries.items
  sentry.captureMessage(`Error getting Entries for ${contentType}.`)
}

module.exports = fetchEntriesForContentType
