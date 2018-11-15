import React from 'react';
import Privacy from './index';

describe('Privacy page', () => {
	let wrapper;

	beforeEach(() => {
		wrapper = shallow(<Privacy />);
	});

	it('should add a class on body', () => {
		expect(document.body.classList.contains('page')).toBe(true);
	});

	it('should remove a class of body, when unmounted', () => {
		wrapper.instance().componentWillUnmount();
		expect(document.body.classList.contains('page')).toBe(false);
	});
});
