// Single source of truth for all site configuration
const isProduction = process.env.NODE_ENV === 'production'

const siteConfig = {
  // Application metadata
  app: {
    version: '0.1.0',
    name: 'SAW',
    environment: process.env.NODE_ENV,
    dev: !isProduction,
    production: isProduction
  },

  // Site metadata
  site: {
    name: 'Steven Alan Wilson Limited',
    title: 'Steven Alan Wilson Limited - Technical Leadership Consultancy',
    tagline: 'Technical Leadership Consultancy',
    url: process.env.NEXT_PUBLIC_SITE_URL || 'https://stevenalanwilson.com',
    description: 'Seasoned technologist and leader with over 20 years of experience in designing and developing digital products and services.'
  },

  // Site owner information
  owner: {
    name: 'Steven Alan Wilson',
    firstName: 'Steve',
    title: 'Digital, Technical, and AI Leader',
    experience: '20+'
  },

  // Contact information
  contact: {
    phone: '07720846954',
    // Email is obfuscated to prevent spam bot scraping
    email: {
      user: 'hello',
      domain: 'stevenalanwilson.com'
    },
    location: 'Derby, England, UK',
    locations: ['London', 'Manchester', 'Leeds', 'Derby', 'Birmingham']
  },

  // Social media links
  social: {
    linkedin: {
      title: 'Connect on LinkedIn',
      link: 'https://www.linkedin.com/in/stevenalanwilson/'
    },
    twitter: {
      title: 'Follow me on Twitter',
      handle: '@d79design',
      link: 'https://twitter.com/d79design'
    },
    facebook: {
      title: 'Follow me on Facebook',
      link: 'https://www.facebook.com/stevenalanwilson79/'
    }
  },

  // Professional statistics
  stats: {
    title: 'Professional Network',
    items: [
      { label: 'LinkedIn Connections', value: '500+' },
      { label: 'Followers', value: '2K+' },
      { label: 'Years Experience', value: '20+' }
    ]
  },

  // Copyright information
  copyright: {
    url: 'www.stevenalanwilson.com'
  },

  // Content sections
  content: {
    // Author bio for blog posts
    authorBio: {
      greeting: 'Hi, I\'m',
      introduction: 'a Digital, Technical, and AI Leader with over 20 years of experience helping organizations build exceptional digital products and high-performing teams.',
      tagline: 'I share insights on leadership, technical strategy, and building great teams. Welcome to my corner of the internet.'
    },

    // Hero section content
    hero: {
      greeting: 'Hi,',
      introduction: 'I\'m Steve, a digital and technical leader',
      description: 'with a passion for technology and innovation, I help organizations deliver digital transformation at scale.',
      currentRole: {
        position: 'Digital, Technical, and AI Leader',
        company: 'Equal Experts',
        companyUrl: 'https://www.equalexperts.com',
        location: 'Manchester'
      },
      previousRoles: [
        { company: 'Aer Lingus', url: 'https://www.aerlingus.com' },
        { company: 'PUBLIC', url: 'https://www.public.io' },
        { company: 'Hackney Council', url: 'https://hackney.gov.uk' },
        { company: 'Ministry of Justice Digital', url: 'https://mojdigital.blog.gov.uk' }
      ]
    },

    // CTA section
    cta: {
      heading: 'Work With Me',
      message: 'Ready to transform your technical leadership and build high-performing teams?'
    }
  },

  // Navigation menu items
  navigation: {
    main: [
      { label: 'Home', href: '/', title: 'Home' },
      { label: 'About', href: '/about', title: 'About' },
      { label: 'Components', href: '/components', title: 'Components' }
    ]
  }
}

export default siteConfig
