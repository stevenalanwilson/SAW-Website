async function fetchEntry (id, Sentry, contentfulClient) {
  const entry = await contentfulClient.getEntry(id)
  if (entry) return entry
  Sentry.captureMessage(`Error getting entry for id: ${id}.`)
}

module.exports = fetchEntry
