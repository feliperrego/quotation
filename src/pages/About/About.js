import React, { Component } from 'react';
import { Link } from "react-router-dom";

class About extends Component {

	componentDidMount() {
		document.body.classList.add('page');
	}

	componentWillUnmount() {
		document.body.classList.remove('page');
	}

	render() {
		return (
			<div className="row">
				<div className="col-xs-4 col-sm-3 last-sm">
					<h1>currency quotation. simple.</h1>
					<p>The <strong>quotation.</strong> has emerged as a simple and practical solution for currency conversion in
						the world.</p>
					<p>This project was created by <a href="https://feliperego.com/" target="_blank" rel="noopener noreferrer">Felipe Rêgo</a> and <a
						href="https://janklever.com.br/" target="_blank" rel="noopener noreferrer">Jan Klever</a> from Brazil.</p>
					<p>Today we counted on the conversion between 24 currencies.</p>

					<section className="row">
						<div className="col-xs-4 col-sm-2">
							<ul>
								<li>Argentine Peso</li>
								<li>Australian Dollar</li>
								<li>Brazilian Real</li>
								<li>British Pound Sterling</li>
								<li>Canadian Dollar</li>
								<li>Chilean Peso</li>
								<li>Colombian Peso</li>
								<li>Euro</li>
								<li>Hong Kong Dollar</li>
								<li>Indian Rupee</li>
								<li>Japanese Yen</li>
								<li>Mexican Peso</li>
							</ul>
						</div>
						<div className="col-xs-4 col-sm-2">
							<ul>
								<li>New Zealand Dollar</li>
								<li>Norwegian Krone</li>
								<li>Renminbi</li>
								<li>Russian Ruble</li>
								<li>Singapore Dollar</li>
								<li>South African Rand</li>
								<li>South Korean Won</li>
								<li>Swedish Krona</li>
								<li>Swiss Franc</li>
								<li>Turkish Lira</li>
								<li>Uruguayan Peso</li>
								<li>US Dollar</li>
							</ul>
						</div>
					</section>

					<h3>types.</h3>
					<p>Catamaran is a Unicode-compliant Latin and Tamil text type family designed for the digital age and making
						it a versatile family that strikes a balance between typographic conventions and that bit of sparkle. It
						currently comprises of 9 text weights, making it a versatile family that strikes a balance between
						typographic conventions and that bit of sparkle.</p>
					<p><a href="https://github.com/VanillaandCream/Catamaran" target="_blank" rel="noopener noreferrer">The Catamaran project</a> is led by
						Pria Ravichandran, a type designer from India.</p>

					<h3>icons.</h3>
					<p>The icons designed by <a href="https://janklever.com.br/" target="_blank" rel="noopener noreferrer">Jan Klever</a> based on the type
						family style used, Catameran.</p>
					<p>They were transformed into a webfont generated by <a href="https://icomoon.io/" target="_blank" rel="noopener noreferrer">IcoMoon</a>.
					</p>

					<h3>flags.</h3>
					<p>The flags designed by Freepik from <a href="https://www.flaticon.com/" target="_blank" rel="noopener noreferrer">Flaticon</a>.</p>

					<h3>favicons.</h3>
					<p>The favicons generated by <a href="https://realfavicongenerator.net/" target="_blank" rel="noopener noreferrer">Real Favicon
						Generator</a>.</p>

					<h3>api.</h3>
					<p>Information used to convert currencies is provided through the <a href="https://finance.yahoo.com/"
																																							 target="_blank" rel="noopener noreferrer">Yahooo Finance</a> API.
					</p>

				</div>
				<nav className="col-xs-4 col-sm-1">
					<ul>
						<li className="current-page">
							<Link to="about">about</Link>
						</li>
						<li>
							<Link to="privacy">privacy</Link>
						</li>
						<li>
							<Link to="terms">terms</Link>
						</li>
					</ul>
				</nav>
			</div>
		);
	}
}

export default About;
