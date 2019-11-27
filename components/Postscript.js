import theme from '../styles/theme'
import PostscriptItem from '../components/PostscriptItem'
import PostscriptData from '../config/PostscriptData'

function Postscript () {
  return (
    <section className='postscript bg-gray-800'>
      <div className='container mx-auto'>
        <div className='flex flex-wrap'>
          {PostscriptData.length > 0
            ? PostscriptData.map(item => (
              <PostscriptItem
                title={item.title}
                key={item.key}
                image={item.image}
                caption={item.caption}
                description={item.description}
              />
            ))
            : null}
        </div>
      </div>
    </section>
  )
}

export default Postscript
