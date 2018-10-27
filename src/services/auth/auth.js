const TOKEN_KEY = 'token';
const USER_INFO_KEY = 'user';

const auth = {
	clearItem(key) {
		localStorage.removeItem(key);
	},

	clearAll() {
		localStorage.clear();
	},

	get(key) {
		return localStorage.getItem(key);
	},

	set(value, key) {
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
