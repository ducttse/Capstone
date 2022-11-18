import {
	LOGIN_FAIL,
	LOGIN_SUCCESS,
	LOGIN_ASYNC,
	LOGOUT,
	CLEAR_LOGIN_MESSAGE,
} from "../constants/auth.constant.js";

export function loginSuccess(payload) {
	return {
		type: LOGIN_SUCCESS,
		payload: payload
	};
}

export function loginFail(payload) {
	return {
		type: LOGIN_FAIL,
		error: payload
	};
}

export function loginAsync(payload) {
	return {
	  type: LOGIN_ASYNC,
	  payload: payload,
	};
  }

export function clearLoginMessage(payload) {
	return {
		type: CLEAR_LOGIN_MESSAGE,
	};
}

export function logout() {
	return {
		type: LOGOUT
	};
}



