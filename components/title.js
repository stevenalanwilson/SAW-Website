import theme from '../styles/theme'

function Title() {
    return (
        <section className="saw-title">
            <div className="container">
                <div className="page-title borders bottom one">
                    <h1 className="heading-1">Steven Alan Wilson</h1>
                </div>
                <div className="page-stapline">
                    <h2 className="heading-2">Full-stack Developer, Designer, Creative Technologist, Founder at <a href="http://www.dominion79.co.uk" target="_blank" title="Vist Dominion79">Dominion79</a>, Foodie, Gamer &amp; Father.</h2>
                </div>
                <div className="page-current">
                    <p className="medium"><strong>I'm currently at the HMPPS Digital Studio Sheffield</strong> <a href="mailto:hello@stevenalanwilson.com?subject=Website%20enquiry" title="Say Hello">but I'm still always intrested in meeting new people</a></p>
                </div>
            </div>
            <style jsx>{`
                .container {
                    width: 1200px;
                    margin: 0 auto;
                    display: flex;
                    flex-flow: row wrap;
                    justify-content: space-between;
                }
                
                .page-title {
                    flex: 1 100%;
                    padding: ${theme.spacing.basePadding}/2 0;
                    border-bottom: 1px solid ${theme.colours.black}; 
                    
                }
                .page-stapline {
                    flex: 2 73%;
                    padding: ${theme.spacing.basePadding}/2 0;
                    border-bottom: 3px solid ${theme.colours.black}; 
                    margin-right: 2%;
                }

                .page-current {
                    flex: 2 25%;
                    padding: ${theme.spacing.basePadding}/2 0;
                    border-bottom: 3px solid ${theme.colours.black}; 
                }
            
            `}</style>
        </section>
    )
}

export default Title