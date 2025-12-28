import Link from 'next/link'
import Layout from '../components/layout/Layout'
import SEO from '../components/ui/SEO'

export default function Custom404() {
  return (
    <>
      <SEO
        title='404 - Page Not Found'
        description="The page you're looking for could not be found."
      />
      <Layout>
        <div className='min-h-screen flex items-center justify-center bg-gray-50'>
          <div className='text-center p-8'>
            <h1 className='text-9xl font-bold text-gray-900 mb-4'>404</h1>
            <h2 className='text-4xl font-bold text-gray-800 mb-6'>Page Not Found</h2>
            <p className='text-xl text-gray-600 mb-8 max-w-md mx-auto'>
              Sorry, we couldn&apos;t find the page you&apos;re looking for. It might have been
              moved or deleted.
            </p>
            <div className='flex gap-4 justify-center flex-wrap'>
              <Link
                href='/'
                className='bg-gray-900 text-white py-3 px-6 rounded hover:bg-gray-800 transition-colors'
              >
                Go Home
              </Link>
              <Link
                href='/about'
                className='bg-white text-gray-900 py-3 px-6 rounded border-2 border-gray-900 hover:bg-gray-100 transition-colors'
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
