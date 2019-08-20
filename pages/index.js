import { useEffect, useState } from 'react';
import '../static/screen.scss';

import Head from 'next/head';
import Post from '../components/Post';
import Layout from '../components/Layout';

import fetchContentType from '../services/fetchContentType';
import fetchEntriesForContentType from '../services/fetchEntriesForContentType';

const HomePage = props => {
	return (
		<>
			<Head>
				<title>Steven Alan Wilson</title>
			</Head>
			<Layout>
				{props.posts.length > 0
					? props.posts.map(p => (
						<Post
							key={p.sys.id}
							date={p.fields.date}
							id={p.sys.id}
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

HomePage.getInitialProps = async () => {
	const contentArticleType = await fetchContentType('article');
	const allPosts = await fetchEntriesForContentType(contentArticleType.sys.id);
	return {
		posts: allPosts
	}
}

export default HomePage
