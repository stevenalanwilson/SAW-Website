import Link from 'next/link'
import Layout from '../components/Layout.js'
import SEO from '../components/SEO'
import config from '../config'
import PageHero from '../components/PageHero'
import SectionHeading from '../components/SectionHeading'
import ExpertiseGrid from '../components/ExpertiseGrid'
import ContactCard from '../components/ContactCard'
import StatsCard from '../components/StatsCard'

function About() {
  const expertiseItems = [
    {
      title: 'Technical Leadership',
      description: 'Leading multidisciplinary engineering teams to deliver complex digital products'
    },
    {
      title: 'Digital Transformation',
      description: 'Driving organizational change through modern technology and practices'
    },
    {
      title: 'AI & Innovation',
      description: 'Leveraging artificial intelligence to solve business challenges'
    },
    {
      title: 'Government Digital Services',
      description: 'Building user-centered services for the public sector'
    },
    {
      title: 'Engineering Excellence',
      description: 'Modern development practices, DevOps, and continuous delivery'
    },
    {
      title: 'Team Building',
      description: 'Growing high-performing, collaborative engineering cultures'
    }
  ]

  const contactLinks = [
    { label: 'LinkedIn Profile', url: 'https://www.linkedin.com/in/stevenalanwilson/' },
    { label: 'Twitter', url: 'https://twitter.com/d79design' },
    { label: 'Facebook', url: 'https://www.facebook.com/stevenalanwilson79/' }
  ]

  const professionalStats = [
    { label: 'LinkedIn Connections', value: '500+' },
    { label: 'Followers', value: '2K+' },
    { label: 'Years Experience', value: '20+' }
  ]

  return (
    <>
      <SEO
        title="About Steven Alan Wilson"
        description="Seasoned Digital, Technical, and AI Leader with over 20 years of experience in designing and developing digital products and services for government and commercial organizations."
        url={`${config.siteUrl}/about`}
      />
      <Layout>
        <div className='container mx-auto'>
          <PageHero
            title="About Me"
            subtitle={<>Hi, I&apos;m <strong>Steven Alan Wilson</strong> — a seasoned Digital, Technical, and AI Leader based in Derby, England.</>}
          />

          {/* Main Content */}
          <div className='flex flex-wrap mx-4 my-8'>
            {/* Main Column */}
            <div className='w-full lg:w-2/3 pr-0 lg:pr-8'>
              {/* Overview */}
              <section className='mb-12'>
                <SectionHeading>Overview</SectionHeading>
                <p className='text-xl leading-relaxed mb-4'>
                  I am a seasoned technologist and leader with over <strong>20 years of experience</strong> in designing and developing digital products and services. I have successfully led multidisciplinary teams, including designers, developers, content strategists, delivery managers, and product managers, to create impactful services for both the UK Government and various commercial organizations.
                </p>
                <p className='text-xl leading-relaxed'>
                  With a passion for technology and innovation, I help organizations deliver digital transformation at scale, focusing on user-centered design, modern engineering practices, and strategic leadership.
                </p>
              </section>

              {/* Current Role */}
              <section className='mb-12'>
                <SectionHeading>Current Role</SectionHeading>
                <div className='bg-gray-50 p-6 border-l-4 border-gray-900'>
                  <h3 className='text-2xl font-bold mb-2'>
                    Digital, Technical, and AI Leader
                  </h3>
                  <p className='text-xl mb-4'>
                    <Link
                      href='https://www.equalexperts.com'
                      className='font-bold underline decoration-2 underline-offset-4 hover:no-underline'
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      Equal Experts
                    </Link> | Manchester, United Kingdom
                  </p>
                  <p className='text-lg leading-relaxed'>
                    Leading digital transformation initiatives, providing strategic technical guidance, and helping organizations leverage AI and modern technologies to solve complex business challenges.
                  </p>
                </div>
              </section>

              {/* Experience Highlights */}
              <section className='mb-12'>
                <SectionHeading>Experience Highlights</SectionHeading>
                <div className='space-y-6'>
                  <div className='border-l-4 border-gray-300 pl-6 py-2'>
                    <h3 className='text-2xl font-bold mb-2'>
                      <Link
                        href='https://www.aerlingus.com'
                        className='underline decoration-2 underline-offset-4 hover:no-underline'
                        target='_blank'
                        rel='noopener noreferrer'
                      >
                        Aer Lingus
                      </Link>
                    </h3>
                    <p className='text-lg mb-2'>Technical Leadership Team Member</p>
                    <p className='text-base leading-relaxed'>
                      Contributed to technical strategy and digital transformation initiatives for Ireland&apos;s leading airline.
                    </p>
                  </div>

                  <div className='border-l-4 border-gray-300 pl-6 py-2'>
                    <h3 className='text-2xl font-bold mb-2'>
                      <Link
                        href='https://www.public.io'
                        className='underline decoration-2 underline-offset-4 hover:no-underline'
                        target='_blank'
                        rel='noopener noreferrer'
                      >
                        PUBLIC
                      </Link>
                    </h3>
                    <p className='text-lg mb-2'>Key Technical Leadership Role</p>
                    <p className='text-base leading-relaxed'>
                      Led technical teams in building modern digital products and services.
                    </p>
                  </div>

                  <div className='border-l-4 border-gray-300 pl-6 py-2'>
                    <h3 className='text-2xl font-bold mb-2'>
                      <Link
                        href='https://hackney.gov.uk'
                        className='underline decoration-2 underline-offset-4 hover:no-underline'
                        target='_blank'
                        rel='noopener noreferrer'
                      >
                        Hackney Council
                      </Link>
                    </h3>
                    <p className='text-lg mb-2'>Technical Leadership Position</p>
                    <p className='text-base leading-relaxed'>
                      Delivered digital services for one of London&apos;s most innovative local authorities.
                    </p>
                  </div>

                  <div className='border-l-4 border-gray-300 pl-6 py-2'>
                    <h3 className='text-2xl font-bold mb-2'>
                      <Link
                        href='https://mojdigital.blog.gov.uk'
                        className='underline decoration-2 underline-offset-4 hover:no-underline'
                        target='_blank'
                        rel='noopener noreferrer'
                      >
                        Ministry of Justice Digital
                      </Link>
                    </h3>
                    <p className='text-lg mb-2'>Technical Leadership Role</p>
                    <p className='text-base leading-relaxed'>
                      Helped transform digital services across the justice system, working on critical government infrastructure.
                    </p>
                  </div>
                </div>
              </section>

              {/* Expertise */}
              <section className='mb-12'>
                <SectionHeading>Areas of Expertise</SectionHeading>
                <ExpertiseGrid items={expertiseItems} />
              </section>

              {/* Education */}
              <section className='mb-12'>
                <SectionHeading>Education</SectionHeading>
                <div className='border-l-4 border-gray-300 pl-6 py-2'>
                  <h3 className='text-2xl font-bold mb-2'>University of Derby</h3>
                  <p className='text-lg'>1998 - 2002</p>
                </div>
              </section>
            </div>

            {/* Sidebar */}
            <div className='w-full lg:w-1/3 mt-8 lg:mt-0'>
              <ContactCard
                location="Derby, England, UK"
                links={contactLinks}
                className="mb-6"
              />

              <StatsCard
                title="Professional Network"
                stats={professionalStats}
              />
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}

export default About
