import React from 'react';
import PropTypes from 'prop-types';

import {Route, Redirect} from 'react-router';
import auth from '../../services/auth';

const AppRoute = ({isPrivate, component: Component, layout: Layout, ...rest}) => (
	<Route
		{...rest}
		render={props => {
			if (isPrivate) {
				//TODO: Remove 'auth.isAuthenticated()'.
				return auth.isAuthenticated() ? (
					<Layout>
						<Component {...props} />
					</Layout>
				) : (
					<Redirect
						to={{
							pathname: "/login",
							state: {from: props.location}
						}}
					/>
				);
			}
			return auth.isAuthenticated() ? (
				<Redirect to="/"/>
			) : (
				<Layout>
					<Component {...props} />
				</Layout>
			);
		}}
	/>
);

AppRoute.propTypes = {
	isPrivate: PropTypes.bool.isRequired,
	layout: PropTypes.func.isRequired,
	component: PropTypes.func.isRequired
};

export default AppRoute;
