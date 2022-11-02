import {
	LOGIN_FAIL,
	LOGIN_SUCCESS,
	LOGOUT,
	REGISTER
} from "../constants/auth.constant.js";

export function loginSuccess(payload) {
	return {
		type: LOGIN_SUCCESS,
		payload: payload
	};
}

export function loginFail() {
	return {
		type: LOGIN_FAIL
	};
}

export function logout() {
	return {
		type: LOGOUT
	};
}

export function register() {
	return {
		type: REGISTER
	};
}
