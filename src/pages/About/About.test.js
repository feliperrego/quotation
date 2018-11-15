import React from 'react';
import About from './index';

describe('About page', () => {
	let wrapper;

	beforeEach(() => {
		wrapper = shallow(<About />);
	});

	it('should add a class on body', () => {
		expect(document.body.classList.contains('page')).toBe(true);
	});

	it('should remove a class of body, when unmounted', () => {
		wrapper.instance().componentWillUnmount();
		expect(document.body.classList.contains('page')).toBe(false);
	});
});
