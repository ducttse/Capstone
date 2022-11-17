import { takeLatest } from "redux-saga/effects";
import * as types from "../constants/index.js";
import { loginAsync } from "./auth.saga.js";
import { forgotPasswordAsync } from "./forgotPassword.saga.js";
import { sendOtpAsync } from "./otp.saga.js";

export default function* authSaga() {
	yield takeLatest(types.LOGIN_ASYNC, loginAsync);
	yield takeLatest(types.FORGOT_PASSWORD_ASYNC, forgotPasswordAsync);
	yield takeLatest(types.SEND_OTP_ASYNC, sendOtpAsync);
}
