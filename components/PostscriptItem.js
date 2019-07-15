import theme from '../styles/theme'

function PostscriptItem({title, image, caption, description}) {
    return (
        <div className="postscript-item">
            <h3 className="heading-3">{title}</h3>
            <figure>
                <img alt={title} src={image} />
                <figcaption>{caption}</figcaption>
            </figure>
            <p>{description}</p>
            <style jsx>{`
                .postscript-item h3,
                .postscript-item a,
                .postscript-item p
                {
                    color: ${theme.colours.white};
                }
                .postscript-item h3 {
                    font-family: ${theme.fonts.secondryFont};
                }
                .postscript-item figure {
                    margin: 0;
                }
                .postscript-item {
                    flex: 0 0 24%;
                    margin: 0 1% 2%;
                }
            `}</style>
        </div>
    )
}

export default PostscriptItem