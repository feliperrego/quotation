import React from "react";
import { Link } from "react-router-dom";
import Header from './index';

describe('Header component', () => {

	it('should contain a title', () => {
		const props = { title: 'quotation', location: { pathname: '/' } };
		const wrapper = shallow(<Header.WrappedComponent {...props} />);
		const headerSection = wrapper.find('header h1');

		expect(
			headerSection.containsMatchingElement('quotation')
		).toBe(true);
	});

	it('should contain a Link component when it is on the initial route', () => {
		const props = { title: 'quotation', location: { pathname: '/another' } };
		const wrapper = shallow(<Header.WrappedComponent {...props} />);
		const headerSection = wrapper.find('header h1');

		expect(
			headerSection.containsMatchingElement(<Link to='/'>quotation</Link>)
		).toBe(true);
	});

});
