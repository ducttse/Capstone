import { takeLatest } from "redux-saga/effects";
import * as types from "../constants/auth.constant.js";
import { loginAsync } from "./auth.saga.js";

export default function* authSaga() {
	yield takeLatest(types.LOGIN_ASYNC, loginAsync);

}
