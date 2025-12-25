import Layout from '../components/Layout'
import SEO from '../components/SEO'
import config from '../config'
import PageHero from '../components/PageHero'
import SectionHeading from '../components/SectionHeading'
import ExpertiseGrid from '../components/ExpertiseGrid'
import ContactCard from '../components/ContactCard'
import StatsCard from '../components/StatsCard'
import ExperienceCard from '../components/ExperienceCard'
import PageTitle from '../components/PageTitle'
import Sidebar from '../components/Sidebar'

function Components() {
  const sampleExpertiseItems = [
    { title: 'Skill 1', description: 'Description of skill 1' },
    { title: 'Skill 2', description: 'Description of skill 2' },
    { title: 'Skill 3', description: 'Description of skill 3' },
    { title: 'Skill 4', description: 'Description of skill 4' }
  ]

  const sampleContactLinks = [
    { label: 'Link 1', url: '#' },
    { label: 'Link 2', url: '#' },
    { label: 'Link 3', url: '#' }
  ]

  const sampleStats = [
    { label: 'Metric 1', value: '100+' },
    { label: 'Metric 2', value: '50+' },
    { label: 'Metric 3', value: '25+' }
  ]

  return (
    <>
      <SEO
        title="Component Showcase"
        description="A showcase of all reusable components available in the application"
        url={`${config.siteUrl}/components`}
      />
      <Layout>
        <div className='container mx-auto'>
          <PageHero
            title="Component Showcase"
            subtitle="A collection of all reusable components available in this application"
          />

          <div className='mx-4 my-8'>
            {/* PageHero Component */}
            <section className='mb-16'>
              <SectionHeading>PageHero Component</SectionHeading>
              <div className='bg-gray-50 p-6 mb-4 border-l-4 border-blue-500'>
                <h3 className='text-xl font-bold mb-2'>Example:</h3>
                <PageHero
                  title="Sample Page Title"
                  subtitle="This is a sample subtitle for the page hero component"
                />
              </div>
              <div className='bg-gray-100 p-4 rounded'>
                <pre className='text-sm overflow-x-auto'>
{`<PageHero
  title="Sample Page Title"
  subtitle="This is a sample subtitle"
/>`}
                </pre>
              </div>
            </section>

            {/* SectionHeading Component */}
            <section className='mb-16'>
              <SectionHeading>SectionHeading Component</SectionHeading>
              <div className='bg-gray-50 p-6 mb-4 border-l-4 border-blue-500'>
                <h3 className='text-xl font-bold mb-2'>Example:</h3>
                <SectionHeading>Sample Section Heading</SectionHeading>
              </div>
              <div className='bg-gray-100 p-4 rounded'>
                <pre className='text-sm overflow-x-auto'>
{`<SectionHeading>Sample Section Heading</SectionHeading>`}
                </pre>
              </div>
            </section>

            {/* ExpertiseGrid Component */}
            <section className='mb-16'>
              <SectionHeading>ExpertiseGrid Component</SectionHeading>
              <div className='bg-gray-50 p-6 mb-4 border-l-4 border-blue-500'>
                <h3 className='text-xl font-bold mb-2'>Example:</h3>
                <ExpertiseGrid items={sampleExpertiseItems} />
              </div>
              <div className='bg-gray-100 p-4 rounded'>
                <pre className='text-sm overflow-x-auto'>
{`<ExpertiseGrid items={[
  { title: 'Skill 1', description: 'Description of skill 1' },
  { title: 'Skill 2', description: 'Description of skill 2' }
]} />`}
                </pre>
              </div>
            </section>

            {/* ExperienceCard Component */}
            <section className='mb-16'>
              <SectionHeading>ExperienceCard Component</SectionHeading>
              <div className='bg-gray-50 p-6 mb-4 border-l-4 border-blue-500'>
                <h3 className='text-xl font-bold mb-2'>Example (Normal):</h3>
                <ExperienceCard
                  company="Sample Company"
                  url="https://example.com"
                  title="Senior Developer"
                  description="Led development of major features and mentored junior developers"
                />
                <h3 className='text-xl font-bold mb-2 mt-6'>Example (Highlighted):</h3>
                <ExperienceCard
                  company="Current Company"
                  url="https://example.com"
                  title="Lead Developer"
                  description="Currently leading the engineering team"
                  highlighted={true}
                />
              </div>
              <div className='bg-gray-100 p-4 rounded'>
                <pre className='text-sm overflow-x-auto'>
{`<ExperienceCard
  company="Sample Company"
  url="https://example.com"
  title="Senior Developer"
  description="Led development of major features"
  highlighted={false}
/>`}
                </pre>
              </div>
            </section>

            {/* ContactCard Component */}
            <section className='mb-16'>
              <SectionHeading>ContactCard Component</SectionHeading>
              <div className='bg-gray-50 p-6 mb-4 border-l-4 border-blue-500'>
                <h3 className='text-xl font-bold mb-2'>Example:</h3>
                <div className='max-w-md'>
                  <ContactCard
                    location="City, Country"
                    links={sampleContactLinks}
                  />
                </div>
              </div>
              <div className='bg-gray-100 p-4 rounded'>
                <pre className='text-sm overflow-x-auto'>
{`<ContactCard
  location="City, Country"
  links={[
    { label: 'Link 1', url: '#' },
    { label: 'Link 2', url: '#' }
  ]}
/>`}
                </pre>
              </div>
            </section>

            {/* StatsCard Component */}
            <section className='mb-16'>
              <SectionHeading>StatsCard Component</SectionHeading>
              <div className='bg-gray-50 p-6 mb-4 border-l-4 border-blue-500'>
                <h3 className='text-xl font-bold mb-2'>Example:</h3>
                <div className='max-w-md'>
                  <StatsCard
                    title="Sample Statistics"
                    stats={sampleStats}
                  />
                </div>
              </div>
              <div className='bg-gray-100 p-4 rounded'>
                <pre className='text-sm overflow-x-auto'>
{`<StatsCard
  title="Sample Statistics"
  stats={[
    { label: 'Metric 1', value: '100+' },
    { label: 'Metric 2', value: '50+' }
  ]}
/>`}
                </pre>
              </div>
            </section>

            {/* PageTitle Component */}
            <section className='mb-16'>
              <SectionHeading>PageTitle Component</SectionHeading>
              <div className='bg-gray-50 p-6 mb-4 border-l-4 border-blue-500'>
                <h3 className='text-xl font-bold mb-2'>Example:</h3>
                <PageTitle
                  title="Sample Blog Post Title"
                  summary="This is a sample summary for a blog post"
                  date="2024-12-25"
                />
              </div>
              <div className='bg-gray-100 p-4 rounded'>
                <pre className='text-sm overflow-x-auto'>
{`<PageTitle
  title="Sample Blog Post Title"
  summary="This is a sample summary"
  date="2024-12-25"
/>`}
                </pre>
              </div>
            </section>

            {/* Sidebar Component */}
            <section className='mb-16'>
              <SectionHeading>Sidebar Component</SectionHeading>
              <div className='bg-gray-50 p-6 mb-4 border-l-4 border-blue-500'>
                <h3 className='text-xl font-bold mb-2'>Example:</h3>
                <p className='mb-4 text-gray-700'>
                  The Sidebar component combines ContactCard and StatsCard with predefined data from the config.
                </p>
                <div className='max-w-md'>
                  <Sidebar />
                </div>
              </div>
              <div className='bg-gray-100 p-4 rounded'>
                <pre className='text-sm overflow-x-auto'>
{`<Sidebar />`}
                </pre>
              </div>
            </section>
          </div>
        </div>
      </Layout>
    </>
  )
}

export default Components
