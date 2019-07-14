import Link from 'next/link';
import theme from '../styles/theme';

function Header(){
    return (
        <header className="saw--header">
            <div className="container">
                <a href="/" title="Steven Alan Wilson" className="logo cta button hvr-grow large">
                Steven Alan Wilson
                </a>
                <nav className="main-menu" id="mm">
                    <ul>
                        <li>
                            <Link href="/">
                                <a>Home</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/about">
                                <a>About</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/hello">
                                <a>Say hello</a>
                            </Link>
                        </li>
                    </ul>
                </nav>
                <a href="#" title="Open menu" id="mt" className="mob-menu cta button hvr-grow"><i className="fa fa-bars" aria-hidden="true"></i></a>
            </div>
            <style jsx>{`
                .mob-menu  {
                    display: none;
                }

                .main-menu {
                    align-self: flex-end;
                }

                .main-menu ul {
                    display: flex;
                    margin: 0;
                    padding: 0;
                }

                .main-menu ul li {
                    margin: ${theme.spacing.baseMargin};
                }

                .container {
                    width: 1200px;
                    margin: 0 auto;
                    display: flex;
                    justify-content: space-between;
                }

                .saw--header {
                    background: ${theme.colours.black};
                    padding: ${theme.spacing.basePadding};
                    top: 0px;
                    left: 0px;
                    box-sizing: border-box;
                    z-index: 202;
                    width:100%;
                    height:auto;
                    position: relative;
                }
                .saw--header a {
                    color: ${theme.colours.white};
                    font-family: ${theme.fonts.primaryFont};
                }

                .saw--header a.logo {
                    margin: ${theme.spacing.baseMargin};
                    color: ${theme.colours.white};
                    font-family: ${theme.fonts.secondryFont};
                } 
            `}</style>
        </header>
    )
}

export default Header