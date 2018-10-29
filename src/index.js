import React from 'react';
import registerServiceWorker from './registerServiceWorker';
import ReactDOM from 'react-dom';
import { Router } from 'react-router';

import Routes from './routes';
import createBrowserHistory from 'history/createBrowserHistory';

import './assets/styles/main.scss';

const history = createBrowserHistory();

ReactDOM.render(
	<Router history={history}>
		<Routes />
	</Router>,
	document.getElementById('root')
);
registerServiceWorker();
