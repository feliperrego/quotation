import React from 'react';
import Home from './';

describe('PublicLayout component', () => {

	let wrapper;

	beforeEach(() => {
		wrapper = shallow(<Home />);
	});

	it('should create', () => {
		expect(wrapper.exists()).toBe(true);
	});
});
