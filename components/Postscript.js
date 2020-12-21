import PostscriptItem from './PostscriptItem'

const Postscript = data => {
  return (
    <section className='postscript bg-gray-800'>
      <div className='container mx-auto'>
        <div className='flex flex-wrap'>
          {/* {console.log(data)} */}
          {/* {data.map(activity => (
              <PostscriptItem
                title={activity.activity}
                key={activity.key}
                image={activity.image}
                caption={activity.description}
                description={activity.description}
              />
            ))} */}
        </div>
      </div>
    </section>
  )
}

export default Postscript
