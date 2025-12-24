import Link from 'next/link'

function SiteTitle() {
  return (
    <section>
      <div className='flex flex-wrap'>
        <div className='w-full p-2 border-black border-b border-t lg:border-t-0 py-4 mx-4 my-6 lg:my-1'>
          <h1 className='heading-1 font-bold text-3xl lg:text-6xl'>Steven Alan Wilson</h1>
        </div>
      </div>
      <div className='hidden lg:flex'>
        <div className='flex flex-wrap w-full md:w-3/4'>
          <div className='border-black border-b-4 pb-6 my-6 mx-4 flex'>
            <h2 className='heading-2 leading-tight text-4xl mr-40'>Hi, <strong>I&apos;m Steve, a technical leader</strong> with a passion for technology and innovation, I help organizations deliver digital transformation at scale.</h2>
          </div>
        </div>

        <div className='flex flex-wrap w-full md:w-1/4'>
          <div className='border-black border-b-4 pb-6 my-6 mx-4 flex'>
            <p className='text-xl'>Currently a member of the <strong>technical leadership team at <Link href={`https://www.aerlingus.com`} className='font-bold underline decoration-3 underline-offset-8 hover:no-underline'>Aer Lingus</Link></strong>. Previously held key technical leadership roles at <Link href={`https://www.public.io`} className='font-bold underline decoration-3 underline-offset-8 hover:no-underline'>PUBLIC</Link>, <Link href={`https://hackney.gov.uk`} className='font-bold underline decoration-3 underline-offset-8 hover:no-underline'>Hackney Council</Link>, and the <Link href={`https://mojdigital.blog.gov.uk`} className='font-bold underline decoration-3 underline-offset-8 hover:no-underline'>Ministry of Justice Digital</Link>.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SiteTitle






