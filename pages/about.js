import Link from 'next/link'
import Layout from '../components/Layout.js'
import SEO from '../components/SEO'
import config from '../config'
import PageHero from '../components/PageHero'
import SectionHeading from '../components/SectionHeading'
import ExpertiseGrid from '../components/ExpertiseGrid'
import Sidebar from '../components/Sidebar'
import markdownService from '../services/getMarkdownService'

export async function getStaticProps() {
  const posts = markdownService.getAllMarkdownPosts()
  return {
    props: { posts }
  }
}

function About({ posts = [] }) {
  return (
    <>
      <SEO
        title={config.content.about.title}
        description={config.content.about.description}
        url={`${config.siteUrl}/about`}
      />
      <Layout latestPosts={posts}>
        <div className='container mx-auto'>
          <PageHero
            title="About Me"
            subtitle={<>{config.content.about.subtitle.text} <strong>{config.content.about.subtitle.name}</strong>{config.content.about.subtitle.role}</>}
          />

          {/* Main Content */}
          <div className='flex flex-wrap mx-4 my-8'>
            {/* Main Column */}
            <div className='w-full lg:w-2/3 pr-0 lg:pr-8'>
              {/* Overview */}
              <section className='mb-12'>
                <SectionHeading>Overview</SectionHeading>
                {config.content.about.overview.map((paragraph, index) => (
                  <p key={index} className='text-xl leading-relaxed mb-4'>
                    {index === 0 ? (
                      <>
                        I am a seasoned technologist and leader with over <strong>20 years of experience</strong> in designing and developing digital products and services. I have successfully led multidisciplinary teams, including designers, developers, content strategists, delivery managers, and product managers, to create impactful services for both the UK Government and various commercial organizations.
                      </>
                    ) : (
                      paragraph
                    )}
                  </p>
                ))}
              </section>

              {/* Current Role */}
              <section className='mb-12'>
                <SectionHeading>Current Role</SectionHeading>
                <div className='bg-gray-50 p-6 border-l-4 border-gray-900'>
                  <h3 className='text-2xl font-bold mb-2'>
                    {config.content.about.currentRole.title}
                  </h3>
                  <p className='text-xl mb-4'>
                    <Link
                      href={config.content.about.currentRole.companyUrl}
                      className='font-bold underline decoration-2 underline-offset-4 hover:no-underline'
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      {config.content.about.currentRole.company}
                    </Link> | {config.content.about.currentRole.location}
                  </p>
                  <p className='text-lg leading-relaxed'>
                    {config.content.about.currentRole.description}
                  </p>
                </div>
              </section>

              {/* Experience Highlights */}
              <section className='mb-12'>
                <SectionHeading>Experience Highlights</SectionHeading>
                <div className='space-y-6'>
                  {config.experience.map((exp, index) => (
                    <div key={index} className='border-l-4 border-gray-300 pl-6 py-2'>
                      <h3 className='text-2xl font-bold mb-2'>
                        <Link
                          href={exp.companyUrl}
                          className='underline decoration-2 underline-offset-4 hover:no-underline'
                          target='_blank'
                          rel='noopener noreferrer'
                        >
                          {exp.company}
                        </Link>
                      </h3>
                      <p className='text-lg mb-2'>{exp.title}</p>
                      <p className='text-base leading-relaxed'>
                        {exp.description}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Expertise */}
              <section className='mb-12'>
                <SectionHeading>Areas of Expertise</SectionHeading>
                <ExpertiseGrid items={config.expertise} />
              </section>

              {/* Education */}
              <section className='mb-12'>
                <SectionHeading>Education</SectionHeading>
                <div className='border-l-4 border-gray-300 pl-6 py-2'>
                  <h3 className='text-2xl font-bold mb-2'>{config.education.institution}</h3>
                  <p className='text-lg'>{config.education.period}</p>
                </div>
              </section>
            </div>

            {/* Sidebar */}
            <div className='w-full lg:w-1/3 mt-8 lg:mt-0'>
              <Sidebar />
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}

export default About
