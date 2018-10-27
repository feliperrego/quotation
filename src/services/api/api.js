import axios from 'axios';
import auth from './auth';

const Api = axios.create();

Api.defaults.headers.common['Content-Type'] = 'application/json';

Api.interceptors.request.use(config => {
	config.headers.Authorization = `Token ${auth.getToken()}`;
	return config;
});

export default Api;
