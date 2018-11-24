import Api from './';
import auth from '../auth';
import axios from 'axios';
import moxios from 'moxios'

describe('Api service', () => {

	beforeEach(() => {
		moxios.install()
	});

	afterEach(() => {
		moxios.uninstall()
	});

	it('should set default headers on requests', () => {
		const common_headers = Api.defaults.headers.common;
		expect(common_headers.hasOwnProperty('Content-Type')).toBe(true);
		expect(common_headers['Content-Type']).toBe('application/json');
	});

	it('should set default Authorization header', done => {
		const user_token = 'USER_TOKEN';
		auth.getToken = jest.fn().mockReturnValueOnce(user_token);

		moxios.withMock(() => {
			axios.get('/test');

			moxios.wait(() => {
				const request = moxios.requests.mostRecent();
				Api.interceptors.request.handlers[0].fulfilled(request.config);

				request.respondWith(Promise.resolve({}))
					.then(() => {
						expect(request.config.headers.hasOwnProperty('Authorization')).toBe(true);
						expect(request.config.headers['Authorization']).toBe(`Token ${user_token}`);
						done();
					}).catch(done);
			});
		});
	});
});
