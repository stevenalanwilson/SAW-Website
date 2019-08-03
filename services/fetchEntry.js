import contentfulClient from '../clients/contentfulClient';

const Sentry = require('../log');

async function fetchEntry(id) {
    const entry = await contentfulClient.getEntry(id)
    if (entry) return entry
    Sentry.captureMessage(`Error getting entry for id: ${id}.`)
}

module.exports = fetchContentType;