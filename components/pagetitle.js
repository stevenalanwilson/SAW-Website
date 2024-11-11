import dayjs from 'dayjs';

export default function PageTitle({ title, summary, date }) {
  return (
    <section>
      <div className='flex flex-wrap'>
        <div className='flex flex-wrap w-1/4 p-4 pb-10'>
        </div>
        <div className='w-2/4 p-4 border-black border-b'>
          <h1 className='heading-1 font-bold text-6xl pb-5'>{title}</h1>
          <p className='text-2xl leading-relaxed'>{summary}</p>
        </div>
        <div className='flex flex-wrap w-1/4 p-4 pb-10'>
        </div>

      </div>
      <div className='flex flex-wrap'>
        <div className='flex flex-wrap w-1/4 p-4 pb-10'>
        </div>
        <div className='w-2/4 p-4 border-black border-b-4 border-t'>
          <p className='text-xl leading-relaxed'>{dayjs(date).format('D MMMM YYYY')}</p>
        </div>
        <div className='flex flex-wrap w-1/4 p-4 pb-10'>
        </div>
      </div>
    </section>
  )
}








