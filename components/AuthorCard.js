export default function AuthorCard({ className = '' }) {
  return (
    <div className={`bg-white border-2 border-gray-900 p-6 mb-6 ${className}`}>
      <h2 className='text-2xl font-bold mb-3'>About the Author</h2>
      <p className='text-base leading-relaxed mb-4'>
        Hi, I&apos;m <strong>Steven Alan Wilson</strong>, a Digital, Technical, and AI Leader
        with over 20 years of experience helping organizations build exceptional
        digital products and high-performing teams.
      </p>
      <p className='text-base leading-relaxed'>
        I share insights on leadership, technical strategy, and building great teams.
        Welcome to my corner of the internet.
      </p>
    </div>
  )
}
