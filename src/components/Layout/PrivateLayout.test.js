import React from 'react';
import { PrivateLayout } from './';

describe('PublicLayout component', () => {

	let wrapper;

	beforeEach(() => {
		wrapper = shallow(<PrivateLayout><div/></PrivateLayout>);
	});

	it('should create', () => {
		expect(wrapper.exists()).toBe(true);
	});
});
