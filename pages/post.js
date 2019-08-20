import '../static/screen.scss';

import Head from 'next/head';
import Layout from '../components/Layout';

import fetchEntity from '../services/fetchEntry';

const PostPage = props => {
	return (
		<>
			<Head>
				<title>Steven Alan Wilson {props.content.title}</title>
			</Head>
			<Layout>
				<h1>{props.content.title}</h1>
				
			</Layout>
		</>
	)
}

PostPage.getInitialProps = async (context) => {
	const { id } = context.query;
	const entity = await fetchEntity(id);
	return {
		content: entity.fields
	};
}
export default PostPage