import React from "react";
import CurrencyButton from "../CurrencyButton";

describe('CurrentButton component', () => {

	let wrapper, props;

	describe('getFlagImage()', () => {

		describe('', () => {

			beforeEach(() => {
				props = { alt: 'Brazil Flag', code: 'brl', image: 'brazil.svg' };
				wrapper = shallow(<CurrencyButton {...props} />);
			});

			it('should return an image require', () => {
				const expected = require('../../assets/images/flags/' + props.image);
				const image = wrapper.instance().getFlagImage(props.image);

				expect(image).toEqual(expected);
			});
		});

		describe('', () => {

			beforeEach(() => {
				props = { alt: 'Brazil Flag', code: 'brl', image: '' };
				wrapper = shallow(<CurrencyButton {...props} />);
			});

			it('should return an empty string', () => {
				const image = wrapper.instance().getFlagImage(props.image);

				expect(image).toEqual('');
			});
		});
	});
});
