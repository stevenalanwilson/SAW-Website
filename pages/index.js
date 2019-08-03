import { useEffect, useState } from 'react';
import '../static/screen.scss';

import Head from 'next/head';
import Post from '../components/Post';
import Layout from '../components/Layout';

import fetchContentType from '../services/fetchContentType';
import fetchEntriesForContentType from '../services/fetchEntriesForContentType';


function HomePage() {

	const [posts, setPosts] = useState([])
	useEffect(() => {
		async function getPosts() {
			const contentArticleType = await fetchContentType('article');
			const allPosts = await fetchEntriesForContentType(contentArticleType.sys.id);
			setPosts([...allPosts])
		}
		getPosts()
	}, [])

	return (
		<>
			<Head>
				<title>Steven Alan Wilson</title>
			</Head>
			<Layout>
				{posts.length > 0
					? posts.map(p => (
						<Post
							date={p.fields.date}
							key={p.sys.id}
							image={p.fields.thumbnail.fields.file.url}
							title={p.fields.title}
							summary={p.fields.summary}
						/>
					))
					: null}
			</Layout>
		</>
	)
}

export default HomePage
