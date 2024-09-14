export default function PageTitle({ title }) {
  console.log(title)
  return (
    <section>
      <div className='flex flex-wrap'>
        <div className='flex flex-wrap w-1/4 p-4 pb-10'>
        </div>
        <div className='w-2/4 p-4 border-black border-b'>
          <h1 className='heading-1 font-bold text-6xl pb-5'>{title}</h1>
          <p className='text-2xl leading-relaxed'> A story of how I stumbled upon my leadership style, which I now recognise as servant leadership.</p>
        </div>
        <div className='flex flex-wrap w-1/4 p-4 pb-10'>
        </div>

      </div>
      <div className='flex flex-wrap'>
        <div className='flex flex-wrap w-1/4 p-4 pb-10'>
        </div>
        <div className='w-2/4 p-4 border-black border-b-4 border-t'>
          <p className='text-xl leading-relaxed'>21st May 1979</p>
        </div>
        <div className='flex flex-wrap w-1/4 p-4 pb-10'>
        </div>
      </div>
    </section>
  )
}








