// Use shared ESLint configuration from @saw/config
import { createEslintConfig } from '../../packages/config/eslint.config.mjs'

export default createEslintConfig('./tsconfig.json')
