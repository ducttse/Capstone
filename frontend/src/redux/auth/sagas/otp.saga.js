import { call, put } from "redux-saga/effects";
import { sendOtpApi } from "../../../api/auth/otp/otpApi";
import { sendOtpFail, sendOtpSuccess } from "../actions/otp.action";

export function* sendOtpAsync(action) {

	try {
		const {statusCode, message} = yield call(sendOtpApi, action.data);
		if(statusCode < 300) 
		yield put(sendOtpSuccess());
	} catch (error) {
		yield put(sendOtpFail(error.response.data.message));
	}
}





