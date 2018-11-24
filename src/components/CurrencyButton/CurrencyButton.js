import React, { Component } from 'react';
import { Button } from "reactstrap";

class CurrencyButton extends Component {

	getFlagImage(imageName) {
		let image;
		try { image = require('../../assets/images/flags/' + imageName); } catch (e) { image = ''; }
		return image;
	}

	render() {

		const { alt, code, image } = this.props;

		return (
			<Button>
				<img src={this.getFlagImage(image)} alt={alt}/>
				<span>{code}</span>
			</Button>
		);
	}
}

export default CurrencyButton;
