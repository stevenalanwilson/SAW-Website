import { useEffect, useState } from 'react';
import '../static/screen.scss';

import Head from 'next/head';
import Post from '../components/Post';
import Layout from '../components/Layout';
import Title from '../components/Title'


import fetchContentType from '../services/fetchContentType';
import fetchEntriesForContentType from '../services/fetchEntriesForContentType';

const HomePage = props => {
	return (
		<>
			<Head>
				<title>Steven Alan Wilson</title>
			</Head>
			<Layout>
			<Title />

				{props.posts.length > 0
					? props.posts.map(post => (
						<Post
							key={post.sys.id}
							date={post.fields.date}
							id={post.sys.id}
							image={post.fields.thumbnail.fields.file.url}
							title={post.fields.title}
							summary={post.fields.summary}
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
