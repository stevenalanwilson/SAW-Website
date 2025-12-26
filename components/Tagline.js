function Tagline({ text = 'Helping organizations build resilient technical teams and accelerate digital transformation' }) {
  return (
    <div className='w-full border-white border-b-2 mx-4 py-8'>
      <p className='text-center text-xl md:text-2xl text-white font-light'>
        {text}
      </p>
    </div>
  )
}

export default Tagline
