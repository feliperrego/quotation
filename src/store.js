import { createStore, applyMiddleware } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import history from './history';
import reducers from './reducers';

const middleware = routerMiddleware(history);

export default function configureStore() {
	const store = createStore(
		reducers,
		composeWithDevTools(applyMiddleware(thunk, middleware))
	);
	return store;
}
