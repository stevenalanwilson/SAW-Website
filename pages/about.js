import Link from 'next/link'
import Layout from '../components/Layout.js'
import SEO from '../components/SEO'

function About() {
  return (
    <>
      <SEO
        title="About Steven Alan Wilson"
        description="Seasoned Digital, Technical, and AI Leader with over 20 years of experience in designing and developing digital products and services for government and commercial organizations."
        url="https://stevenalanwilson.com/about"
      />
      <Layout>
        <div className='container mx-auto'>
          {/* Hero Section */}
          <section className='border-black border-b border-t lg:border-t-0 py-8 mx-4 my-6'>
            <h1 className='heading-1 font-bold text-4xl lg:text-6xl mb-4'>About Me</h1>
            <p className='text-2xl lg:text-3xl leading-relaxed'>
              Hi, I&apos;m <strong>Steven Alan Wilson</strong> — a seasoned Digital, Technical, and AI Leader based in Derby, England.
            </p>
          </section>

          {/* Main Content */}
          <div className='flex flex-wrap mx-4 my-8'>
            {/* Main Column */}
            <div className='w-full lg:w-2/3 pr-0 lg:pr-8'>
              {/* Overview */}
              <section className='mb-12'>
                <h2 className='text-3xl font-bold mb-6 border-b-2 border-black pb-2'>Overview</h2>
                <p className='text-xl leading-relaxed mb-4'>
                  I am a seasoned technologist and leader with over <strong>20 years of experience</strong> in designing and developing digital products and services. I have successfully led multidisciplinary teams, including designers, developers, content strategists, delivery managers, and product managers, to create impactful services for both the UK Government and various commercial organizations.
                </p>
                <p className='text-xl leading-relaxed'>
                  With a passion for technology and innovation, I help organizations deliver digital transformation at scale, focusing on user-centered design, modern engineering practices, and strategic leadership.
                </p>
              </section>

              {/* Current Role */}
              <section className='mb-12'>
                <h2 className='text-3xl font-bold mb-6 border-b-2 border-black pb-2'>Current Role</h2>
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
                <h2 className='text-3xl font-bold mb-6 border-b-2 border-black pb-2'>Experience Highlights</h2>
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
                <h2 className='text-3xl font-bold mb-6 border-b-2 border-black pb-2'>Areas of Expertise</h2>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                  <div className='bg-gray-50 p-4 border-l-2 border-gray-900'>
                    <h3 className='font-bold text-lg mb-2'>Technical Leadership</h3>
                    <p className='text-base'>Leading multidisciplinary engineering teams to deliver complex digital products</p>
                  </div>
                  <div className='bg-gray-50 p-4 border-l-2 border-gray-900'>
                    <h3 className='font-bold text-lg mb-2'>Digital Transformation</h3>
                    <p className='text-base'>Driving organizational change through modern technology and practices</p>
                  </div>
                  <div className='bg-gray-50 p-4 border-l-2 border-gray-900'>
                    <h3 className='font-bold text-lg mb-2'>AI & Innovation</h3>
                    <p className='text-base'>Leveraging artificial intelligence to solve business challenges</p>
                  </div>
                  <div className='bg-gray-50 p-4 border-l-2 border-gray-900'>
                    <h3 className='font-bold text-lg mb-2'>Government Digital Services</h3>
                    <p className='text-base'>Building user-centered services for the public sector</p>
                  </div>
                  <div className='bg-gray-50 p-4 border-l-2 border-gray-900'>
                    <h3 className='font-bold text-lg mb-2'>Engineering Excellence</h3>
                    <p className='text-base'>Modern development practices, DevOps, and continuous delivery</p>
                  </div>
                  <div className='bg-gray-50 p-4 border-l-2 border-gray-900'>
                    <h3 className='font-bold text-lg mb-2'>Team Building</h3>
                    <p className='text-base'>Growing high-performing, collaborative engineering cultures</p>
                  </div>
                </div>
              </section>

              {/* Education */}
              <section className='mb-12'>
                <h2 className='text-3xl font-bold mb-6 border-b-2 border-black pb-2'>Education</h2>
                <div className='border-l-4 border-gray-300 pl-6 py-2'>
                  <h3 className='text-2xl font-bold mb-2'>University of Derby</h3>
                  <p className='text-lg'>1998 - 2002</p>
                </div>
              </section>
            </div>

            {/* Sidebar */}
            <div className='w-full lg:w-1/3 mt-8 lg:mt-0'>
              {/* Contact Card */}
              <div className='bg-gray-900 text-white p-6 mb-6 border-t-4 border-white'>
                <h2 className='text-2xl font-bold mb-4 border-b-2 border-white pb-2'>Get In Touch</h2>
                <div className='space-y-4'>
                  <div>
                    <p className='text-sm uppercase tracking-wide mb-1'>Location</p>
                    <p className='text-lg'>Derby, England, UK</p>
                  </div>
                  <div>
                    <p className='text-sm uppercase tracking-wide mb-1'>Connect</p>
                    <div className='space-y-2'>
                      <p>
                        <Link
                          href='https://www.linkedin.com/in/stevenalanwilson/'
                          className='underline decoration-2 underline-offset-4 hover:no-underline'
                          target='_blank'
                          rel='noopener noreferrer'
                        >
                          LinkedIn Profile
                        </Link>
                      </p>
                      <p>
                        <Link
                          href='https://twitter.com/d79design'
                          className='underline decoration-2 underline-offset-4 hover:no-underline'
                          target='_blank'
                          rel='noopener noreferrer'
                        >
                          Twitter
                        </Link>
                      </p>
                      <p>
                        <Link
                          href='https://www.facebook.com/stevenalanwilson79/'
                          className='underline decoration-2 underline-offset-4 hover:no-underline'
                          target='_blank'
                          rel='noopener noreferrer'
                        >
                          Facebook
                        </Link>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Stats Card */}
              <div className='bg-gray-50 p-6 border-l-4 border-gray-900'>
                <h2 className='text-2xl font-bold mb-4'>Professional Network</h2>
                <div className='space-y-3'>
                  <div className='flex justify-between items-center'>
                    <span className='text-lg'>LinkedIn Connections</span>
                    <span className='text-2xl font-bold'>500+</span>
                  </div>
                  <div className='flex justify-between items-center'>
                    <span className='text-lg'>Followers</span>
                    <span className='text-2xl font-bold'>2K+</span>
                  </div>
                  <div className='flex justify-between items-center'>
                    <span className='text-lg'>Years Experience</span>
                    <span className='text-2xl font-bold'>20+</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}

export default About
