import { takeLatest } from "redux-saga/effects";
import * as types from "../constants/index.js";
import { loginAsync } from "./auth.saga.js";
import { forgotPasswordAsync } from "./forgotPassword.saga.js";
import { sendOtpAsync, submitOtpAsync } from "./otp.saga.js";
import { registerAsync } from "./register.saga.js";

export default function* authSaga() {
	yield takeLatest(types.LOGIN_ASYNC, loginAsync);
	yield takeLatest(types.REGISTER_ASYNC, registerAsync);
	yield takeLatest(types.FORGOT_PASSWORD_ASYNC, forgotPasswordAsync);
	yield takeLatest(types.SEND_OTP_ASYNC, sendOtpAsync);
	yield takeLatest(types.SUBMIT_OTP_ASYNC, submitOtpAsync);
}
