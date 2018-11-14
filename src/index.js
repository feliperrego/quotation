import './assets/styles/main.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import registerServiceWorker from './registerServiceWorker';

import Routes from './routes';
import history from './history';
import configureStore from './store';

const store = configureStore();

ReactDOM.render(
	<Provider store={store}>
		<ConnectedRouter history={history}>
			<Routes />
		</ConnectedRouter>
	</Provider>,
	document.getElementById('root')
);
registerServiceWorker();
