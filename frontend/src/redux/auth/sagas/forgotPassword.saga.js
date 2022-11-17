import { call, put } from "redux-saga/effects";
import { forgotPasswordApi } from "../../../api/auth/forgot-password/forgotPasswordApi";
import { forgotPasswordFail, forgotPasswordSuccess } from "../actions/forgotPassword.action";

export function* forgotPasswordAsync(action) {
	const {confirmPassword, ...forgotPassInfo} = action.user;
	const {statusCode, message} = yield call(forgotPasswordApi, forgotPassInfo);
	if(statusCode < 300) 
		yield put(forgotPasswordSuccess());

	else 
		yield put(forgotPasswordFail(message));
}




