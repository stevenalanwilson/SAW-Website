import Link from 'next/link';

function Post({ date, id, image, title, summary }) {
	return (
		<article className="post content-box borders bottom one">
			<figure>
				<Link href={`/post/${id}`}>
					<a>
						<img alt={title} src={image} />
					</a>
				</Link>
				<figcaption>{title}</figcaption>
			</figure>
			<header>
				<h4 className="heading-4">
					<Link href={`/post/${id}`}>
						<a>{title}</a>
					</Link>
				</h4>
				<time dateTime="2007-08-29T13:58Z"><i className="fa fa-calendar" aria-hidden="true"></i> {date}</time>
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
