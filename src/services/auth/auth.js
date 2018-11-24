export const TOKEN_KEY = 'token';
export const USER_INFO_KEY = 'user';

const auth = {
	remove(key) {
		localStorage.removeItem(key);
	},

	clear() {
		localStorage.clear();
	},

	get(key) {
		return localStorage.getItem(key);
	},

	set(key, value) {
		localStorage.setItem(key, value);
	},

	getUserInfo() {
		return JSON.parse(this.get(USER_INFO_KEY));
	},

	setUserInfo(value) {
		this.set(JSON.stringify(value), USER_INFO_KEY);
	},

	getToken() {
		return this.get(TOKEN_KEY);
	},

	setToken(value) {
		this.set(value, TOKEN_KEY);
	},

	isAuthenticated() {
		return !!this.getToken();
	}
};

export default auth;
