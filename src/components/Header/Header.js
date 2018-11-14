import React from 'react';
import { Link } from "react-router-dom";
import { withRouter } from "react-router";

const Header = ({ title, location }) => {

	return (
		<header>
			<h1>{
				location.pathname === '/'
					? title
					: <Link to={"/"}>{title}</Link>
			}</h1>
		</header>
	);
};

export default withRouter(Header);
