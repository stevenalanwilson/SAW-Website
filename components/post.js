function Post({ date, key, image, title, summary }) {
    return (
      <article className="post content-box borders bottom one">
       <figure>
          <img alt={title} src={image} />
          <figcaption>{title}</figcaption>
        </figure>
        <header  class="animated">
          <h4><a href="#" rel="bookmark">{title}</a></h4>
          <time datetime="2007-08-29T13:58Z"><i className="fa fa-calendar" aria-hidden="true"></i> {date}</time>
        </header>
        <p>{summary}</p>
        <style jsx>{`
        .post {
          flex: 0 0 48%;
          margin: 0 1% 2%;
        }
        figure {
          margin: 0;
        }
        `}</style>
      </article>
    )
  }
  export default Post
