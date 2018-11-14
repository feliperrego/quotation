import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import Header from "../Header";
import Footer from "../Footer";

export class PublicLayout extends Component {
	render() {
		return (
			<Fragment>
				<Header title="quotation" />
				<main className="container-fluid wrapper">
					{this.props.children}
				</main>
				<Footer/>
			</Fragment>
		);
	}
}

PublicLayout.propTypes = {
	children: PropTypes.element.isRequired
};
export default PublicLayout;
