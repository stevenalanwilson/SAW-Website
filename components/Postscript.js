import theme from '../styles/theme'
import PostscriptItem from '../components/PostscriptItem'
import PostscriptData from '../config/PostscriptData'

function Postscript() {
    return (
        <section className="postscript hide-on-mobile">
            <div className="container">
            {PostscriptData.length > 0
                ? PostscriptData.map(item => (
                    <PostscriptItem
                        title={item.title}
                        image={item.image}
                        caption={item.caption}
                        description={item.description}
                    />
                    ))
            : null}
            </div>
            <style jsx>{`
                .container {
                    width: 1200px;
                    margin: 0 auto;
                    display: flex;
                    flex-flow: row no-wrap;
                    justify-content: space-between;
                }
                .postscript {
                    background: ${theme.colours.darkGrey};
                }
            `}</style>
        </section>
    )
}

export default Postscript