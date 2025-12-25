import markdownService from '../services/getMarkdownService'

import Layout from '../components/Layout'
import SiteTitle from '../components/SiteTitle'
import ListPosts from '../components/ListPosts'
import SEO from '../components/SEO'
import ContactCard from '../components/ContactCard'
import StatsCard from '../components/StatsCard'


export async function getStaticProps() {
  const posts = markdownService.getAllMarkdownPosts()
  return {
    props: { posts }
  }
}

const index = props => {
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
      <SEO />
      <Layout>

        <header>
          <div className='container mx-auto'>
            <SiteTitle />
          </div>
        </header>

        <main>
          <div className='container mx-auto'>
            <div className='flex flex-wrap'>
              <div className='w-full md:w-3/4'>
                <div className='mx-4 my-6'>
                  <ListPosts posts={props.posts} />
                </div>
              </div>

              <div className='w-full md:w-1/4'>
                <div className='mx-4 my-6'>
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
          </div>
        </main>
      </Layout>

    </>
  )
}



export default index
