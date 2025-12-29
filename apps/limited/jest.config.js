// Use shared Jest configuration from @saw/config
const createJestConfig = require('../../packages/config/jest.config')

/** @type {import('jest').Config} */
module.exports = createJestConfig('./')
