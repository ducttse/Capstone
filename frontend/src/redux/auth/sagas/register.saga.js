import { call, put } from "redux-saga/effects";
import { registerApi } from "../../../api/auth/register/registerApi";
import { registerFail, registerSuccess } from "../actions/register.action";

export function* registerAsync(action) {
	const {confirmPassword, ...registerInfo} = action.user;
	try {
		const {statusCode, message} = yield call(registerApi, registerInfo);
		if(statusCode < 300) {
			yield put(registerSuccess(action.user));
		}

	} catch (error) {
		yield put(registerFail(error.response.data.message));
	}
	
}




