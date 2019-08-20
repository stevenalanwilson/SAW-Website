import '../static/screen.scss'
import Head from 'next/head'
import Header from '../components/Header'
import Postscript from '../components/Postscript'
import Footer from '../components/Footer';	




const Layout = props => (
    <>
        <Head>
            <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto|Roboto+Mono"
            type="text/css"
            />
            <script 
            src="https://use.fontawesome.com/4e7732d1f5.js"
            ></script>
        </Head>
        <Header />
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

        <Postscript />
        <Footer />
    </>
);

export default Layout