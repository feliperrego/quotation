import React from 'react';
import { PublicLayout } from './';

describe('PublicLayout component', () => {

	let wrapper;

	beforeEach(() => {
		wrapper = shallow(<PublicLayout><div/></PublicLayout>);
	});

	it('should contain a Header component', () => {
		expect(wrapper.find('withRouter(Header)').exists()).toBe(true);
	});

	it('should contain a main element', () => {
		expect(wrapper.find('main').exists()).toBe(true);
	});

	it('should contain a Footer component', () => {
		expect(wrapper.find('Footer').exists()).toBe(true);
	});
});
