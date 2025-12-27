// Single source of truth for all site configuration
const isProduction = process.env.NODE_ENV === 'production'

const siteConfig = {
  // Application metadata
  app: {
    version: '0.1.0',
    name: 'SAW',
    environment: process.env.NODE_ENV,
    dev: !isProduction,
    production: isProduction,
  },

  // Site metadata
  site: {
    name: 'Steven Alan Wilson Limited',
    title: 'Steven Alan Wilson Limited - Technical Leadership Consultancy',
    tagline: 'Technical Leadership Consultancy',
    url: process.env.NEXT_PUBLIC_SITE_URL || 'https://stevenalanwilson.com',
    description:
      'Seasoned technologist and leader with over 20 years of experience in designing and developing digital products and services.',
  },

  // Site owner information
  owner: {
    name: 'Steven Alan Wilson',
    firstName: 'Steve',
    title: 'Digital, Technical, and AI Leader',
    experience: '20+',
  },

  // Contact information
  contact: {
    phone: '07720846954',
    // Email is obfuscated to prevent spam bot scraping
    email: {
      user: 'hello',
      domain: 'stevenalanwilson.com',
    },
    location: 'Derby, England, UK',
    locations: ['London', 'Manchester', 'Leeds', 'Derby', 'Birmingham'],
  },

  // Social media links
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

  // Professional statistics
  stats: {
    title: 'Professional Network',
    items: [
      { label: 'LinkedIn Connections', value: '500+' },
      { label: 'Followers', value: '2K+' },
      { label: 'Years Experience', value: '20+' },
    ],
  },

  // Copyright information
  copyright: {
    url: 'www.stevenalanwilson.com',
  },

  // Content sections
  content: {
    // Author bio for blog posts
    authorBio: {
      greeting: "Hi, I'm",
      introduction:
        'a Digital, Technical, and AI Leader with over 20 years of experience helping organizations build exceptional digital products and high-performing teams.',
      tagline:
        'I share insights on leadership, technical strategy, and building great teams. Welcome to my corner of the internet.',
    },

    // Hero section content
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

    // CTA section
    cta: {
      heading: 'Work With Me',
      message: 'Ready to transform your technical leadership and build high-performing teams?',
    },

    // About page content
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

  // Areas of expertise
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

  // Experience highlights
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

  // Education
  education: {
    institution: 'University of Derby',
    period: '1998 - 2002',
  },

  // Sample data for component showcase
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

  // Navigation menu items
  navigation: {
    main: [
      { label: 'Home', href: '/', title: 'Home' },
      { label: 'About', href: '/about', title: 'About' },
      { label: 'Components', href: '/components', title: 'Components' },
    ],
  },

  // Sentry configuration (optional)
  sentry: {
    dsn: process.env.SENTRY_DSN || '',
  },
}

export default siteConfig
