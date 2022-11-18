import { call, put } from "redux-saga/effects";
import { checkLogin } from "../../../api/auth/authApi";
import { loginFail, loginSuccess } from "../actions/auth.action";

export function* loginAsync(action) {
	try {
		const user = yield call(checkLogin, action.payload);
		yield put(loginSuccess(user));
	} catch (error) {
		const message = "Email hoặc mật khẩu không đúng";
		yield put(loginFail(message));
	}
}
