import React, { Component } from 'react';
import PropTypes from 'prop-types';
export class PrivateLayout extends Component {
	render() {
		return (
			<div>
				<h1>Private Layout</h1>
				{this.props.children}
			</div>
		);
	}
}

PrivateLayout.propTypes = {
	children: PropTypes.element.isRequired
};

export default PrivateLayout;
