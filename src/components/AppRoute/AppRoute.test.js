import React from 'react';
import { MemoryRouter } from "react-router";
import Home from "../../pages/Home";
import PublicLayout from "../Layout/PublicLayout";
import AppRoute from './';
import auth from '../../services/auth';

fdescribe('AppRoute component', () => {

	let props;

	const setupProps = props => mount(
		<MemoryRouter initialEntries={['/']}>
			<AppRoute {...props}/>
		</MemoryRouter>
	);

	beforeEach(() => {
		props = {
			path: '/',
			component: Home,
			layout: PublicLayout,
			exact: true
		};

		auth.isAuthenticated = jest.fn();
	});

	describe('When is a private route', () => {

		beforeEach(() => {
			props.isPrivate = true;
		});

		describe('and is authenticated', () => {

			beforeEach(() => {
				auth.isAuthenticated.mockReturnValue(true);
			});

			it('should render the component', () => {
				const wrapper = setupProps(props);
				expect(wrapper.find(Home)).toHaveLength(1);
			});
		});

		describe('and is not authenticated', () => {

			beforeEach(() => {
				auth.isAuthenticated.mockReturnValue(false);
			});

			it('should redirect to login route', () => {
				const wrapper = setupProps(props);
				const routerWrapper = wrapper.find('Router');

				expect(wrapper.find(Home).length).toEqual(0);
				expect(routerWrapper.prop('history').location.pathname).toBe('/login');
			});
		});
	});

	describe('When is not a private route', () => {

		beforeEach(() => {
			props.isPrivate = false;
		});

		it('should render the component', () => {
			const wrapper = setupProps(props);
			expect(wrapper.find(Home)).toHaveLength(1);
		});
	});
});
