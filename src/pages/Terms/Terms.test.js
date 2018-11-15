import React from 'react';
import Terms from './index';

describe('Terms page', () => {
	let wrapper;

	beforeEach(() => {
		wrapper = shallow(<Terms />);
	});

	it('should add a class on body', () => {
		expect(document.body.classList.contains('page')).toBe(true);
	});

	it('should remove a class of body, when unmounted', () => {
		wrapper.instance().componentWillUnmount();
		expect(document.body.classList.contains('page')).toBe(false);
	});
});
