function Title () {
  return (
    <section>
      <div className='flex flex-wrap'>
        <div className='w-full p-2 border-black border-b py-4'>
          <h1 className='heading-1 font-bold text-6xl'>Steven Alan Wilson</h1>
        </div>
      </div>
      <div className='flex'>
        <div className='flex flex-wrap w-full md:w-3/4'>
          <div className='border-black border-b-4 pb-6 my-6 mx-4 flex'>
            <h2 className='heading-2 leading-tight text-4xl mr-40'>Principal developer at the Ministry of Justice, creative technologist, foodie, gamer, husband &amp; father</h2>
          </div>
        </div>

        <div className='flex flex-wrap w-full md:w-1/4'>
          <div className='border-black border-b-4 pb-6 my-6 mx-4 flex'>
            <p className='text-xl'><strong>I'm currently a principal developer for the Ministry of Justice</strong> <a href='mailto:hello@stevenalanwilson.com?subject=Website%20enquiry' title='Say Hello'>but I'm still always intrested in meeting new people</a></p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Title
