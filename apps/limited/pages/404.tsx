import Link from 'next/link'
import Layout from '@/components/layout/Layout'
import SEO from '@/components/ui/SEO'

export default function Custom404() {
  return (
    <>
      <SEO
        title='404 - Page Not Found'
        description="The page you're looking for could not be found."
      />
      <Layout>
        <div className='min-h-screen flex items-center justify-center bg-theme-bg'>
          <div className='text-center p-8'>
            <h1 className='text-9xl font-bold text-theme-primary mb-4'>404</h1>
            <h2 className='text-4xl font-bold text-theme-text mb-6'>Page Not Found</h2>
            <p className='text-xl text-theme-text opacity-80 mb-8 max-w-md mx-auto'>
              Sorry, we couldn&apos;t find the page you&apos;re looking for. It might have been
              moved or deleted.
            </p>
            <div className='flex gap-4 justify-center flex-wrap'>
              <Link
                href='/'
                className='bg-theme-primary text-theme-bg py-3 px-6 rounded hover:opacity-90 transition-opacity font-semibold'
              >
                Go Home
              </Link>
              <Link
                href='/about'
                className='bg-transparent text-theme-text py-3 px-6 rounded border-2 border-theme-text hover:bg-theme-text hover:text-theme-bg transition-colors font-semibold'
              >
                About
              </Link>
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}
