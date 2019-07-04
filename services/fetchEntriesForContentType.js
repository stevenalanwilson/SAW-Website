const contentfulClient = require('../clients/contentfulClient');

async function fetchEntriesForContentType(contentType) {
    const entries = await contentfulClient.getEntries({
        content_type: contentType
    })
    if (entries.items) return entries.items
    console.log(`Error getting Entries for ${contentType}.`)
}

module.exports = fetchEntriesForContentType;