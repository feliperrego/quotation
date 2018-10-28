import React, {Component} from 'react';
import AppRoute from "./components/AppRoute";
import {PublicLayout} from './components/Layout';
import Home from './pages/Home';
import {Redirect, Switch} from "react-router";
import About from "./pages/About";

const routes = [
	{
		path: '/',
		component: Home,
		layout: PublicLayout,
		private: false,
		exact: true
	},
	{
		path: '/about',
		component: About,
		layout: PublicLayout,
		private: false,
		exact: true
	},
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
