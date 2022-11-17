import { call, put } from "redux-saga/effects";
import { sendOtpApi } from "../../../api/auth/otp/otpApi";
import { sendOtpFail, sendOtpSuccess } from "../actions/otp.action";

export function* sendOtpAsync(action) {
	const {statusCode, message} = yield call(sendOtpApi, action.data);
	console.log(statusCode);
	if(statusCode < 300) 
		yield put(sendOtpSuccess());

	else 
		yield put(sendOtpFail(message));

}





