const contentfulClient = require('../clients/contentfulClient');

async function fetchContentType(contnetType) {
    const articleContentType = await contentfulClient.getContentType(contnetType)
    if (articleContentType) return articleContentType
    console.log('Error getting article content type.')
}

module.exports = fetchContentType
;