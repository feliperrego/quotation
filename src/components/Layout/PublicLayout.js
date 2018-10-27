import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from "../Header";

export class PublicLayout extends Component {
	render() {
		return (
			<div>
				{this.props.children}
			</div>
		);
	}
}
PublicLayout.propTypes = {
	children: PropTypes.element.isRequired
};
export default PublicLayout;
