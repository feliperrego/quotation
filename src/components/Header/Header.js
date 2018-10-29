import React from 'react';
import { Link } from "react-router-dom";

const Header = () => {

	const title = 'quotation';

	return (
		<header>
			<h1>{
				window.location.pathname === '/'
					? title
					: <Link to={"/"}>{title}</Link>
			}</h1>
		</header>
	);
};

export default Header;
