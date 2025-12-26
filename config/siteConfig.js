// Single source of truth for all site configuration
const siteConfig = {
  // Site owner information
  owner: {
    name: 'Steven Alan Wilson',
    title: 'Technical Leadership Consultancy'
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
  }
}

export default siteConfig
