// Use shared Tailwind CSS configuration from @saw/config
const { createTailwindConfig } = require('../../packages/config/tailwind.config')

/** @type {import('tailwindcss').Config} */
module.exports = createTailwindConfig([
  // Add app-specific content paths here if needed
])
