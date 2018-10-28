import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import Header from "../Header";
import Footer from "../Footer";

export class PublicLayout extends Component {
	render() {
		return (
			<Fragment>
				<Header />
				{this.props.children}
				<Footer />
			</Fragment>
		);
	}
}
PublicLayout.propTypes = {
	children: PropTypes.element.isRequired
};
export default PublicLayout;
