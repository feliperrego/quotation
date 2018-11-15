import React from 'react';
import { Link } from "react-router-dom";

const Footer = () =>  (
	<footer>
		<ul>
			<li>
				<Link to="about">about</Link>
			</li>
			<li>
				<Link to="privacy">privacy</Link>
			</li>
			<li>
				<Link to="terms">terms</Link>
			</li>
		</ul>
	</footer>
);

export default Footer;
