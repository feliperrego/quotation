import Footer from "../Footer";
import React from "react";
import { Link } from "react-router-dom";

describe('Footer component', () => {
	let wrapper, footerSection;

	beforeEach(() => {
		wrapper = shallow(<Footer />);
		footerSection = wrapper.find('footer');
	});

	it('should contains a link to about page', () => {
		expect(
			footerSection.containsMatchingElement(<Link to="about">about</Link>)
		).toBe(true);
	});

	it('should contains a link to privacy page', () => {
		expect(
			footerSection.containsMatchingElement(<Link to="privacy">privacy</Link>)
		).toBe(true);
	});

	it('should contains a link to terms page', () => {
		expect(
			footerSection.containsMatchingElement(<Link to="terms">terms</Link>)
		).toBe(true);
	});
});
