import '../static/screen.scss'
import Head from 'next/head'
import Header from '../components/Header'
import Title from '../components/Title'

const Layout = props => (
    <>
        <Head>
            <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto|Roboto+Mono"
            type="text/css"
            />
        </Head>
        <Header />
        <Title />
        <main>
            <div className="container">
                {props.children}
            </div>
            <style jsx>{`
                .container {
                    width: 1200px;
                    margin: 0 auto;
                    display: flex;
                    flex-flow: row wrap;
                }
            `}</style>
        </main>
    </>
);

export default Layout