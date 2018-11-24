import auth, { USER_INFO_KEY, TOKEN_KEY } from './';

fdescribe('Auth service', () => {

	describe('remove()', () => {
		it('should call localstorage.removeItem() with the key', () => {
			const key = 'key_to_remove';

			auth.remove(key);
			expect(localStorage.removeItem).toHaveBeenCalledWith(key);
		});
	});

	describe('clear()', () => {
		it('should call localstorage.clear()', () => {
			auth.clear();

			expect(localStorage.clear).toHaveBeenCalled();
		});
	});

	describe('get()', () => {
		it('should call localstorage.getItem() with the key', () => {
			const key = 'key_to_get';

			auth.get(key);
			expect(localStorage.getItem).toHaveBeenCalledWith(key);
		});

		it('should return the key value', () => {
			let key_value;
			const value = 'key_value';

			localStorage.getItem.mockReturnValueOnce(value);
			key_value = auth.get('key');

			expect(key_value).toEqual(value);
		});
	});

	describe('set()', () => {
		it('should call localstorage.setItem() with params', () => {
			const key = 'key_to_set';
			const value = 'ket_value';

			auth.set(key, value);
			expect(localStorage.setItem).toHaveBeenCalledWith(key, value);
		});
	});

	describe('getUserInfo()', () => {

		let user_info = {user: {}};

		beforeEach(() => {
			const get_return = JSON.stringify(user_info);
			auth.get = jest.fn().mockReturnValueOnce(get_return);
		});

		it('should call auth.get() with the key', () => {
			auth.getUserInfo();

			expect(auth.get).toHaveBeenCalledWith(USER_INFO_KEY);
		});

		it('should return a json parsed', () => {
			const result = auth.getUserInfo();

			expect(result).toEqual(user_info);
		});
	});

	describe('setUserInfo()', () => {

		beforeEach(() => {
			auth.set = jest.fn();
		});

		it('should call auth.set() with params', () => {
			const user_info = {user: {}};
			const string_user_info = JSON.stringify(user_info);
			auth.setUserInfo(user_info);

			expect(auth.set).toHaveBeenCalledWith(string_user_info, USER_INFO_KEY);
		});
	});

	describe('getToken()', () => {

		const user_token = 'user_token';

		beforeEach(() => {
			auth.get = jest.fn().mockReturnValueOnce(user_token);
		});

		it('should call auth.get()', () => {
			auth.getToken();

			expect(auth.get).toHaveBeenCalledWith(TOKEN_KEY);
		});

		it('should return the user token', () => {
			expect(auth.getToken()).toEqual(user_token);
		});
	});

	describe('setToken()', () => {
		it('should call the auth.set() with params', () => {
			const user_token = 'user_token';

			auth.set = jest.fn();
			auth.setToken(user_token);

			expect(auth.set).toHaveBeenCalledWith(user_token, TOKEN_KEY);
		});
	});

	describe('isAuthenticated()', () => {
		it('should return true when there is a token', () => {
			auth.getToken = jest.fn().mockReturnValueOnce('user_token');

			expect(auth.isAuthenticated()).toBe(true);
		});

		it('should return false, when there is no token', () => {
			expect(auth.isAuthenticated()).toBe(false);
		});
	});
});
