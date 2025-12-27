import Layout from '../components/Layout'
import SEO from '../components/SEO'
import config from '../config'
import PageHero from '../components/PageHero'
import SectionHeading from '../components/SectionHeading'
import ExpertiseGrid from '../components/ExpertiseGrid'
import ContactCard from '../components/ContactCard'
import StatsCard from '../components/StatsCard'
import ExperienceCard from '../components/ExperienceCard'
import Sidebar from '../components/Sidebar'
import Post from '../components/Post'
import LoadingSpinner from '../components/LoadingSpinner'
import AuthorCard from '../components/AuthorCard'
import Tagline from '../components/Tagline'
import ServicesList from '../components/ServicesList'
import LatestPosts from '../components/LatestPosts'
import WorkWithMe from '../components/WorkWithMe'
import markdownService from '../services/getMarkdownService'

export async function getStaticProps() {
  const posts = markdownService.getAllMarkdownPosts()
  return {
    props: { posts }
  }
}

function Components({ posts = [] }) {
  return (
    <>
      <SEO
        title="Component Showcase"
        description="A showcase of all reusable components available in the application"
        url={`${config.siteUrl}/components`}
      />
      <Layout latestPosts={posts}>
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
                <ExpertiseGrid items={config.samples.expertise} />
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

            {/* AuthorCard Component */}
            <section className='mb-16'>
              <SectionHeading>AuthorCard Component</SectionHeading>
              <div className='bg-gray-50 p-6 mb-4 border-l-4 border-blue-500'>
                <h3 className='text-xl font-bold mb-2'>Example:</h3>
                <p className='mb-4 text-gray-700'>
                  The AuthorCard introduces readers to the author and welcomes them to the site.
                  Used at the top of blog post sidebars.
                </p>
                <div className='max-w-md'>
                  <AuthorCard />
                </div>
              </div>
              <div className='bg-gray-100 p-4 rounded'>
                <pre className='text-sm overflow-x-auto'>
{`<AuthorCard />`}
                </pre>
              </div>
            </section>

            {/* ContactCard Component */}
            <section className='mb-16'>
              <SectionHeading>ContactCard Component</SectionHeading>
              <div className='bg-gray-50 p-6 mb-4 border-l-4 border-blue-500'>
                <h3 className='text-xl font-bold mb-2'>Example:</h3>
                <p className='mb-4 text-gray-700'>
                  The ContactCard displays a call-to-action for working together, including operating areas and contact methods.
                  It uses the same content as the Work With Me footer component.
                </p>
                <div className='max-w-md'>
                  <ContactCard />
                </div>
              </div>
              <div className='bg-gray-100 p-4 rounded'>
                <pre className='text-sm overflow-x-auto'>
{`<ContactCard />`}
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
                    stats={config.samples.stats}
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

            {/* Post Component */}
            <section className='mb-16'>
              <SectionHeading>Post Component</SectionHeading>
              <div className='bg-gray-50 p-6 mb-4 border-l-4 border-blue-500'>
                <h3 className='text-xl font-bold mb-2'>Example:</h3>
                <p className='mb-4 text-gray-700'>
                  The Post component renders markdown content as styled HTML.
                </p>
                <Post content="# Sample Heading\n\nThis is a paragraph with **bold** text.\n\n## Another Heading\n\nMore content here." />
              </div>
              <div className='bg-gray-100 p-4 rounded'>
                <pre className='text-sm overflow-x-auto'>
{`<Post content={markdownString} />`}
                </pre>
              </div>
            </section>

            {/* LoadingSpinner Component */}
            <section className='mb-16'>
              <SectionHeading>LoadingSpinner Component</SectionHeading>
              <div className='bg-gray-50 p-6 mb-4 border-l-4 border-blue-500'>
                <h3 className='text-xl font-bold mb-2'>Example:</h3>
                <p className='mb-4 text-gray-700'>
                  Full-screen fixed position loading indicator that covers the entire viewport with a semi-transparent overlay.
                </p>
                <div className='bg-gray-200 p-4 rounded text-center'>
                  <p className='text-gray-600 italic'>
                    Note: The LoadingSpinner uses fixed positioning and covers the entire screen.
                    It&apos;s used for page transitions and is displayed in the post page when loading.
                  </p>
                </div>
              </div>
              <div className='bg-gray-100 p-4 rounded'>
                <pre className='text-sm overflow-x-auto'>
{`<LoadingSpinner message="Loading post..." />`}
                </pre>
              </div>
            </section>

            {/* Tagline Component */}
            <section className='mb-16'>
              <SectionHeading>Tagline Component</SectionHeading>
              <div className='bg-gray-50 p-6 mb-4 border-l-4 border-blue-500'>
                <h3 className='text-xl font-bold mb-2'>Example:</h3>
                <p className='mb-4 text-gray-700'>
                  A reusable tagline component used in the footer. Can display custom text.
                </p>
                <div className='bg-gray-900'>
                  <Tagline />
                </div>
              </div>
              <div className='bg-gray-100 p-4 rounded'>
                <pre className='text-sm overflow-x-auto'>
{`<Tagline text="Your custom tagline here" />`}
                </pre>
              </div>
            </section>

            {/* ServicesList Component */}
            <section className='mb-16'>
              <SectionHeading>ServicesList Component</SectionHeading>
              <div className='bg-gray-50 p-6 mb-4 border-l-4 border-blue-500'>
                <h3 className='text-xl font-bold mb-2'>Example:</h3>
                <p className='mb-4 text-gray-700'>
                  Displays the consultancy services from the footer. Pulls data from footerServices config.
                </p>
                <div className='bg-gray-900 p-6'>
                  <ServicesList />
                </div>
              </div>
              <div className='bg-gray-100 p-4 rounded'>
                <pre className='text-sm overflow-x-auto'>
{`<ServicesList />`}
                </pre>
              </div>
            </section>

            {/* LatestPosts Component */}
            <section className='mb-16'>
              <SectionHeading>LatestPosts Component</SectionHeading>
              <div className='bg-gray-50 p-6 mb-4 border-l-4 border-blue-500'>
                <h3 className='text-xl font-bold mb-2'>Example:</h3>
                <p className='mb-4 text-gray-700'>
                  Displays recent blog posts dynamically. Used in the footer and can be reused elsewhere.
                </p>
                <div className='bg-gray-900 p-6'>
                  <LatestPosts posts={posts} limit={2} />
                </div>
              </div>
              <div className='bg-gray-100 p-4 rounded'>
                <pre className='text-sm overflow-x-auto'>
{`<LatestPosts posts={posts} limit={2} />`}
                </pre>
              </div>
            </section>

            {/* WorkWithMe Component */}
            <section className='mb-16'>
              <SectionHeading>WorkWithMe Component</SectionHeading>
              <div className='bg-gray-50 p-6 mb-4 border-l-4 border-blue-500'>
                <h3 className='text-xl font-bold mb-2'>Example:</h3>
                <p className='mb-4 text-gray-700'>
                  Call-to-action component with operating areas and contact methods. Used in footer and sidebar.
                </p>
                <div className='bg-gray-900 p-6'>
                  <WorkWithMe />
                </div>
              </div>
              <div className='bg-gray-100 p-4 rounded'>
                <pre className='text-sm overflow-x-auto'>
{`<WorkWithMe />`}
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
