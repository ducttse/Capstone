import { call, put } from "redux-saga/effects";
import { sendOtpApi, submitOtpApi } from "../../../api/auth/otp/otpApi";
import { sendOtpFail, sendOtpSuccess, submitOtpFail, submitOtpSuccess } from "../actions/otp.action";

export function* sendOtpAsync(action) {

	try {
		const {statusCode, message} = yield call(sendOtpApi, action.data);
		if(statusCode < 300) 
			yield put(sendOtpSuccess());
	} catch (error) {
		yield put(sendOtpFail(error.response.data.message));
	}
}

export function* submitOtpAsync(action) {

	try {
		const {statusCode, message} = yield call(submitOtpApi, action.data);
		if(statusCode < 300) 
			yield put(submitOtpSuccess());
	} catch (error) {
		yield put(submitOtpFail(error.response.data.message));
	}
}





