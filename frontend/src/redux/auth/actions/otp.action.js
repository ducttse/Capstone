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

export function submitOtpSuccess() {
	return {
		type: types.SUBMIT_OTP_SUCCESS,
	};
}

export function submitOtpFail(payload) {
	return {
		type: types.SUBMIT_OTP_FAIL,
		payload: payload
	};
}

export function submitOtpAsync(payload) {
	return {
	  type: types.SUBMIT_OTP_ASYNC,
	  data: payload,
	};
}

export function clearSubmitOtpState() {
	return {
		type: types.CLEAR_SUBMIT_OTP_STATE,
	};
}