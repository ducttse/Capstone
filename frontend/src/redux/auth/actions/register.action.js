import * as types from "../constants/register.constant";


export function registerSuccess(payload) {
	return {
		type: types.REGISTER_SUCCESS,
		user: payload,
	};
}

export function registerFail(payload) {
	return {
		type: types.REGISTER_FAIL,
		error: payload
	};
}

export function registerAsync(payload) {
	return {
	  type: types.REGISTER_ASYNC,
	  user: payload,
	};
}

export function clearRegisterState() {
	return {
		type: types.CLEAR_REGISTER_STATE,
	};
}