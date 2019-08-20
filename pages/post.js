import '../static/screen.scss';
import theme from '../styles/theme'

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
				<div className="main">
					<h1>{props.content.title}</h1>
				</div>
				<div className="sidebar">
					<p>sidebar</p>
				</div>				
			</Layout>
			<style jsx>{`
                .main {
					flex: 0 0 72%;
                    margin: 0 1% 2%;
                    padding: ${theme.spacing.basePadding}/2 0;
				}
				.sidebar {
					flex: 0 0 24%;
                    margin: 0 1% 2%;
                    padding: ${theme.spacing.basePadding}/2 0;
				}
            `}</style>
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