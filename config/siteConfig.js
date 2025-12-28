/**
 * @fileoverview Site Configuration - Single Source of Truth
 *
 * This file contains all site-wide configuration settings, content, and metadata.
 * All components import from this centralized config to ensure consistency.
 *
 * @version 1.0.0
 * @author Steven Alan Wilson
 *
 * TABLE OF CONTENTS
 * =================================================================================
 *
 * SECTION 1: APPLICATION METADATA ................................................ 50
 *   - Version, environment, and runtime flags
 *
 * SECTION 2: SITE METADATA ....................................................... 65
 *   - Site name, title, tagline, URL, and description
 *
 * SECTION 3: OWNER INFORMATION ................................................... 80
 *   - Personal information about the site owner
 *
 * SECTION 4: CONTACT INFORMATION ................................................. 95
 *   - Phone, email (obfuscated), location, and service areas
 *
 * SECTION 5: SOCIAL MEDIA LINKS ................................................. 115
 *   - LinkedIn, Twitter, Facebook profiles
 *
 * SECTION 6: PROFESSIONAL STATISTICS ............................................ 135
 *   - Network stats, experience metrics
 *
 * SECTION 7: COPYRIGHT & LEGAL .................................................. 150
 *   - Copyright information and legal details
 *
 * SECTION 8: CONTENT SECTIONS ................................................... 165
 *   8.1 Author Bio (for blog posts) ............................................ 170
 *   8.2 Hero Section (homepage) ................................................ 185
 *   8.3 CTA (Call-to-Action) ................................................... 220
 *   8.4 About Page Content ..................................................... 235
 *
 * SECTION 9: EXPERTISE AREAS .................................................... 265
 *   - Areas of professional expertise
 *
 * SECTION 10: EXPERIENCE HIGHLIGHTS ............................................. 295
 *   - Key roles and companies worked with
 *
 * SECTION 11: EDUCATION ......................................................... 330
 *   - Academic background
 *
 * SECTION 12: SERVICES OFFERED .................................................. 345
 *   - Services displayed in footer
 *
 * SECTION 13: SAMPLE DATA ....................................................... 370
 *   - Demo data for component showcase page
 *
 * SECTION 14: NAVIGATION ........................................................ 390
 *   - Site navigation menu items
 *
 * SECTION 15: INTEGRATIONS ...................................................... 405
 *   - Third-party service configurations (Sentry, etc.)
 *
 * =================================================================================
 */

// =================================================================================
// SECTION 1: APPLICATION METADATA
// =================================================================================

/**
 * Determines if the application is running in production mode.
 * @type {boolean}
 * @private
 */
const isProduction = process.env.NODE_ENV === 'production'

/**
 * Site configuration object - single source of truth for all application settings.
 * @type {Object}
 */
const siteConfig = {
  // =================================================================================
  // SECTION 1: APPLICATION METADATA
  // =================================================================================

  /**
   * Application metadata and environment settings.
   * @property {string} version - Semantic version number
   * @property {string} name - Short application name/identifier
   * @property {string} environment - Current Node environment (development/production/test)
   * @property {boolean} dev - True when running in development mode
   * @property {boolean} production - True when running in production mode
   */
  app: {
    version: '0.1.0',
    name: 'SAW',
    environment: process.env.NODE_ENV,
    dev: !isProduction,
    production: isProduction,
  },

  // =================================================================================
  // SECTION 2: SITE METADATA
  // =================================================================================

  /**
   * Core site metadata used for SEO, Open Graph, and branding.
   * @property {string} name - Full legal/business name
   * @property {string} title - HTML title tag (appears in browser tabs)
   * @property {string} tagline - Short descriptive tagline
   * @property {string} url - Canonical site URL (from env var or default)
   * @property {string} description - Meta description for SEO (max 155-160 chars)
   */
  site: {
    name: 'Steven Alan Wilson Limited',
    title: 'Steven Alan Wilson Limited - Technical Leadership Consultancy',
    tagline: 'Technical Leadership Consultancy',
    url: process.env.NEXT_PUBLIC_SITE_URL || 'https://stevenalanwilson.com',
    description:
      'Seasoned technologist and leader with over 20 years of experience in designing and developing digital products and services.',
  },

  // =================================================================================
  // SECTION 3: OWNER INFORMATION
  // =================================================================================

  /**
   * Personal information about the site owner/author.
   * @property {string} name - Full legal name
   * @property {string} firstName - First name / preferred name
   * @property {string} title - Professional title/role
   * @property {string} experience - Years of professional experience
   */
  owner: {
    name: 'Steven Alan Wilson',
    firstName: 'Steve',
    title: 'Digital, Technical, and AI Leader',
    experience: '20+',
  },

  // =================================================================================
  // SECTION 4: CONTACT INFORMATION
  // =================================================================================

  /**
   * Contact methods and service locations.
   * @property {string} phone - Contact phone number
   * @property {Object} email - Email address (obfuscated to prevent spam scraping)
   * @property {string} email.user - Username part before @
   * @property {string} email.domain - Domain part after @
   * @property {string} location - Primary location
   * @property {string[]} locations - All service areas/operating locations
   */
  contact: {
    phone: '07720846954',
    email: {
      user: 'hello',
      domain: 'stevenalanwilson.com',
    },
    location: 'Derby, England, UK',
    locations: ['London', 'Manchester', 'Leeds', 'Derby', 'Birmingham'],
  },

  // =================================================================================
  // SECTION 5: SOCIAL MEDIA LINKS
  // =================================================================================

  /**
   * Social media profiles and links.
   * Each platform includes title (for aria-labels) and link URL.
   * @property {Object} linkedin - LinkedIn profile
   * @property {Object} twitter - Twitter/X profile
   * @property {Object} facebook - Facebook profile
   */
  social: {
    linkedin: {
      title: 'Connect on LinkedIn',
      link: 'https://www.linkedin.com/in/stevenalanwilson/',
    },
    twitter: {
      title: 'Follow me on Twitter',
      handle: '@d79design',
      link: 'https://twitter.com/d79design',
    },
    facebook: {
      title: 'Follow me on Facebook',
      link: 'https://www.facebook.com/stevenalanwilson79/',
    },
  },

  // =================================================================================
  // SECTION 6: PROFESSIONAL STATISTICS
  // =================================================================================

  /**
   * Professional network and achievement statistics.
   * Displayed in the sidebar StatsCard component.
   * @property {string} title - Section heading
   * @property {Array<{label: string, value: string}>} items - Individual stats
   */
  stats: {
    title: 'Professional Network',
    items: [
      { label: 'LinkedIn Connections', value: '500+' },
      { label: 'Followers', value: '2K+' },
      { label: 'Years Experience', value: '20+' },
    ],
  },

  // =================================================================================
  // SECTION 7: COPYRIGHT & LEGAL
  // =================================================================================

  /**
   * Copyright and legal information.
   * @property {string} url - URL displayed in copyright notice
   */
  copyright: {
    url: 'www.stevenalanwilson.com',
  },

  // =================================================================================
  // SECTION 8: CONTENT SECTIONS
  // =================================================================================

  /**
   * Content for various page sections and components.
   */
  content: {
    // ---------------------------------------------------------------------------
    // 8.1 Author Bio (Blog Posts)
    // ---------------------------------------------------------------------------

    /**
     * Author bio displayed at the bottom of blog posts.
     * @property {string} greeting - Opening greeting
     * @property {string} introduction - Brief introduction
     * @property {string} tagline - Closing tagline
     */
    authorBio: {
      greeting: "Hi, I'm",
      introduction:
        'a Digital, Technical, and AI Leader with over 20 years of experience helping organizations build exceptional digital products and high-performing teams.',
      tagline:
        'I share insights on leadership, technical strategy, and building great teams. Welcome to my corner of the internet.',
    },

    // ---------------------------------------------------------------------------
    // 8.2 Hero Section (Homepage)
    // ---------------------------------------------------------------------------

    /**
     * Homepage hero section content.
     * @property {string} greeting - Opening greeting
     * @property {string} introduction - Main introduction text
     * @property {string} description - Supporting description
     * @property {Object} currentRole - Current employment details
     * @property {Array<Object>} previousRoles - Previous companies worked with
     */
    hero: {
      greeting: 'Hi,',
      introduction: "I'm Steve, a digital and technical leader",
      description:
        'with a passion for technology and innovation, I help organizations deliver digital transformation at scale.',
      currentRole: {
        position: 'Digital, Technical, and AI Leader',
        company: 'Equal Experts',
        companyUrl: 'https://www.equalexperts.com',
        location: 'Manchester',
      },
      previousRoles: [
        { company: 'Aer Lingus', url: 'https://www.aerlingus.com' },
        { company: 'PUBLIC', url: 'https://www.public.io' },
        { company: 'Hackney Council', url: 'https://hackney.gov.uk' },
        { company: 'Ministry of Justice Digital', url: 'https://mojdigital.blog.gov.uk' },
      ],
    },

    // ---------------------------------------------------------------------------
    // 8.3 CTA (Call-to-Action)
    // ---------------------------------------------------------------------------

    /**
     * Call-to-action section content.
     * Used in ContactCard and WorkWithMe components.
     * @property {string} heading - CTA heading
     * @property {string} message - CTA message/pitch
     */
    cta: {
      heading: 'Work With Me',
      message: 'Ready to transform your technical leadership and build high-performing teams?',
    },

    // ---------------------------------------------------------------------------
    // 8.4 About Page Content
    // ---------------------------------------------------------------------------

    /**
     * About page content and structure.
     * @property {string} title - Page title
     * @property {string} description - Meta description
     * @property {Object} subtitle - Page subtitle configuration
     * @property {string[]} overview - Paragraphs of overview text
     * @property {Object} currentRole - Current position details
     */
    about: {
      title: 'About Steven Alan Wilson',
      description:
        'Seasoned Digital, Technical, and AI Leader with over 20 years of experience in designing and developing digital products and services for government and commercial organizations.',
      subtitle: {
        text: "Hi, I'm",
        name: 'Steven Alan Wilson',
        role: ' — a seasoned Digital, Technical, and AI Leader based in Derby, England.',
      },
      overview: [
        'I am a seasoned technologist and leader with over 20 years of experience in designing and developing digital products and services. I have successfully led multidisciplinary teams, including designers, developers, content strategists, delivery managers, and product managers, to create impactful services for both the UK Government and various commercial organizations.',
        'With a passion for technology and innovation, I help organizations deliver digital transformation at scale, focusing on user-centered design, modern engineering practices, and strategic leadership.',
      ],
      currentRole: {
        title: 'Digital, Technical, and AI Leader',
        company: 'Equal Experts',
        companyUrl: 'https://www.equalexperts.com',
        location: 'Manchester, United Kingdom',
        description:
          'Leading digital transformation initiatives, providing strategic technical guidance, and helping organizations leverage AI and modern technologies to solve complex business challenges.',
      },
    },
  },

  // =================================================================================
  // SECTION 9: EXPERTISE AREAS
  // =================================================================================

  /**
   * Areas of professional expertise.
   * Displayed in the ExpertiseGrid component.
   * @type {Array<{title: string, description: string}>}
   */
  expertise: [
    {
      title: 'Technical Leadership',
      description:
        'Leading multidisciplinary engineering teams to deliver complex digital products',
    },
    {
      title: 'Digital Transformation',
      description: 'Driving organizational change through modern technology and practices',
    },
    {
      title: 'AI & Innovation',
      description: 'Leveraging artificial intelligence to solve business challenges',
    },
    {
      title: 'Government Digital Services',
      description: 'Building user-centered services for the public sector',
    },
    {
      title: 'Engineering Excellence',
      description: 'Modern development practices, DevOps, and continuous delivery',
    },
    {
      title: 'Team Building',
      description: 'Growing high-performing, collaborative engineering cultures',
    },
  ],

  // =================================================================================
  // SECTION 10: EXPERIENCE HIGHLIGHTS
  // =================================================================================

  /**
   * Key professional experience and career highlights.
   * Displayed in the ExperienceCard component.
   * @type {Array<{company: string, companyUrl: string, title: string, description: string}>}
   */
  experience: [
    {
      company: 'Aer Lingus',
      companyUrl: 'https://www.aerlingus.com',
      title: 'Technical Leadership Team Member',
      description:
        "Contributed to technical strategy and digital transformation initiatives for Ireland's leading airline.",
    },
    {
      company: 'PUBLIC',
      companyUrl: 'https://www.public.io',
      title: 'Key Technical Leadership Role',
      description: 'Led technical teams in building modern digital products and services.',
    },
    {
      company: 'Hackney Council',
      companyUrl: 'https://hackney.gov.uk',
      title: 'Technical Leadership Position',
      description:
        "Delivered digital services for one of London's most innovative local authorities.",
    },
    {
      company: 'Ministry of Justice Digital',
      companyUrl: 'https://mojdigital.blog.gov.uk',
      title: 'Technical Leadership Role',
      description:
        'Helped transform digital services across the justice system, working on critical government infrastructure.',
    },
  ],

  // =================================================================================
  // SECTION 11: EDUCATION
  // =================================================================================

  /**
   * Educational background.
   * @property {string} institution - Name of institution
   * @property {string} period - Years attended
   */
  education: {
    institution: 'University of Derby',
    period: '1998 - 2002',
  },

  // =================================================================================
  // SECTION 12: SERVICES OFFERED
  // =================================================================================

  /**
   * Services and offerings.
   * Displayed in the ServicesList component (footer).
   * @type {Array<{title: string, description: string}>}
   */
  services: [
    {
      title: 'Technical Leadership Coaching',
      description: 'Develop effective technical leadership skills',
    },
    {
      title: 'Team Building & Culture',
      description: 'Build resilient, high-performing teams',
    },
    {
      title: 'Digital Transformation',
      description: 'Navigate organizational change successfully',
    },
    {
      title: 'Professional Development',
      description: 'Advance your career in technology',
    },
  ],

  // =================================================================================
  // SECTION 13: SAMPLE DATA
  // =================================================================================

  /**
   * Sample/demo data for the component showcase page.
   * Only used on /components page for demonstration purposes.
   * @property {Array<Object>} expertise - Sample expertise items
   * @property {Array<Object>} stats - Sample statistics
   */
  samples: {
    expertise: [
      { title: 'Skill 1', description: 'Description of skill 1' },
      { title: 'Skill 2', description: 'Description of skill 2' },
      { title: 'Skill 3', description: 'Description of skill 3' },
      { title: 'Skill 4', description: 'Description of skill 4' },
    ],
    stats: [
      { label: 'Metric 1', value: '100+' },
      { label: 'Metric 2', value: '50+' },
      { label: 'Metric 3', value: '25+' },
    ],
  },

  // =================================================================================
  // SECTION 14: NAVIGATION
  // =================================================================================

  /**
   * Site navigation structure.
   * @property {Array<{label: string, href: string, title: string}>} main - Main nav items
   */
  navigation: {
    main: [
      { label: 'Home', href: '/', title: 'Home' },
      { label: 'About', href: '/about', title: 'About' },
      { label: 'Components', href: '/components', title: 'Components' },
    ],
  },

  // =================================================================================
  // SECTION 15: INTEGRATIONS
  // =================================================================================

  /**
   * Third-party service integrations.
   * @property {Object} sentry - Sentry error tracking configuration
   */
  sentry: {
    dsn: process.env.SENTRY_DSN || '',
  },
}

export default siteConfig
