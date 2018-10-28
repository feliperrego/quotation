import React, { Component } from 'react';
import { Redirect, Switch } from "react-router";
import { PublicLayout } from './components/Layout';
import AppRoute from "./components/AppRoute";

import Home from './pages/Home';
import About from "./pages/About";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms/Terms";

const routes = [
	{ path: '/', component: Home, layout: PublicLayout, private: false, exact: true },
	{ path: '/about', component: About, layout: PublicLayout, private: false, exact: true },
	{	path: '/privacy', component: Privacy, layout: PublicLayout, private: false, exact: true },
	{	path: '/terms', component: Terms, layout: PublicLayout, private: false, exact: true },
];

class Routes extends Component {
	render() {
		return (
			<Switch>
				{routes.map((route, key) => (
					<AppRoute
						key={key}
						path={route.path}
						exact={route.exact}
						isPrivate={route.private}
						layout={route.layout}
						component={route.component}
					/>
				))};
				<Redirect to="/"/>
			</Switch>
		);
	}
}

export default Routes;
