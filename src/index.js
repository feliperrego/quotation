import React from 'react';
import registerServiceWorker from './registerServiceWorker';
import {render } from 'react-snapshot';
import { Router } from 'react-router';

import Routes from './routes';
import createBrowserHistory from 'history/createBrowserHistory';

const history = createBrowserHistory();

render(
	<Router history={history}>
		<Routes />
	</Router>,
	document.getElementById('root')
);
registerServiceWorker();
