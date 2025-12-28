/**
 * FontAwesome Icon Library Configuration
 *
 * Centralized icon imports for tree-shaking optimization.
 * Only icons explicitly imported here will be included in the bundle.
 *
 * This approach reduces bundle size by ~5-10 KB compared to importing
 * full icon libraries in individual components.
 *
 * Usage in components:
 * import { faEnvelope, faLinkedin } from '@/config/icons'
 * import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
 */

// Solid Icons (free-solid-svg-icons)
export { faCopyright } from '@fortawesome/free-solid-svg-icons'
export { faEnvelope } from '@fortawesome/free-solid-svg-icons'
export { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'

// Brand Icons (free-brands-svg-icons)
export { faLinkedin } from '@fortawesome/free-brands-svg-icons'
