import React from "react";
import { shallow } from 'enzyme';
import Header from './index';

describe('Header component', function () {
	let wrapper, headerSection;

	beforeEach(() => {
		wrapper = shallow(<Header />);
		headerSection = wrapper.find('header');
	});

	it('should render properly', function () {
		expect(
			headerSection.containsMatchingElement(<h1>Header</h1>)
		).toBe(true);
	});
	it('should contain a title', function () {});
	it('should contain a Link component when it is on the initial route', function () {});
});
