import config from '../config'

const contentfulClient = require('contentful').createClient({
  space: config.space,
  accessToken: config.accessToken
})

module.exports = contentfulClient
