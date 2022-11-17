import * as types from "../constants/otp.constant";

export function sendOtpAsync(payload) {
	return {
	  type: types.SEND_OTP_ASYNC,
	  data: payload,
	};
}

export function sendOtpSuccess() {
	return {
		type: types.SEND_OTP_SUCCESS,
	};
}

export function sendOtpFail(payload) {
	return {
		type: types.SEND_OTP_FAIL,
		payload: payload
	};
}

export function clearSendOtpState() {
	return {
		type: types.CLEAR_SEND_OTP_STATE,
	};
}

