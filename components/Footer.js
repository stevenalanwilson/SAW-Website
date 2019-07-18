import theme from '../styles/theme';
import contactInfo from '../config/contactInfo';

console.log(contactInfo);

function Footer(){
	return (
		<footer className="footer">
			<div className="container">
				<div className="sitemap">
					<h3 className="heading-3">Sitemap</h3>
					<ul className="menu">
						<li><a href="/" title="Home page" className="cta">Home</a></li>
						<li><a href="/about/" title="About Steven Alan Wilson" className="cta">About</a></li>
					</ul>
				</div>
				<div className="contact-info">
					<h3 className="heading-3">Contact Info</h3>
					<ul className="menu">
						<li><p>t. {contactInfo.number}</p></li>
						<li><p><i className="fa fa-facebook-official" aria-hidden="true"></i> <a href={contactInfo.twitter[0].link} title={contactInfo.twitter[0].title}>{contactInfo.twitter[0].title}</a></p></li>
						<li><p><i className="fa fa-twitter" aria-hidden="true"></i> <a href={contactInfo.facebook[0].title} target="_blank" title={contactInfo.facebook[0].title}>{contactInfo.facebook[0].title}</a></p></li>
					</ul>
				</div>
				<div className="about">
					<h3 className="heading-3">About Steven</h3>
					<p>Hello, my name is Steven Wilson and I am a freelance full-stack digital developer and designer based in Derby UK. I’ve been in the industry for over 10 years and have had the pleasure of working with some of the UK's top creative agencies and also the UK's biggest brands such as Speedo International and Sainsburys.</p>
					<p>I have a passion for UI design, learning new technologies and experimenting with mixing the digital world with the physical world. In my spare time I like to cook for family and friends, game on my Xbox and spend time with my family.</p>
				</div>
				<div className="quote">
					<h4>All growth depends upon activity. There is no development physically or intellectually without effort, and effort means work.</h4>
				</div>
				<div className="copyright">
					<p>Steven Alan Wilson <i className="fa fa-copyright" aria-hidden="true"></i> 2017 | <a href="http://www.stevenalanwilson.com" title="www.stevenalanwilson.com">www.stevenalanwilson.com</a></p>
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
				.footer {
					background: ${theme.colours.black};
				}

				.footer .sitemap {
					flex: 0 0 23%;
					margin: 0 1% 2%;
					padding: ${theme.spacing.basePadding}/2 0;
				}

				.footer .contact-info {
					flex: 0 0 23%;
					margin: 0 1% 2%;
					padding: ${theme.spacing.basePadding}/2 0;
				}

				.footer .about {
					flex: 0 0 48%;
					margin: 0 1% 2%;
					padding: ${theme.spacing.basePadding}/2 0;
				}

				.footer .quote {
					flex: 0 0 98%;
					margin: 0 1% 2%;
					padding: ${theme.spacing.basePadding}/2 0;
				}

				.footer .copyright {
					flex: 0 0 98%;
					margin: 0 1% 2%;
					padding: ${theme.spacing.basePadding}/2 0;
				}
			`}</style>
		</footer>
	)
}

export default Footer