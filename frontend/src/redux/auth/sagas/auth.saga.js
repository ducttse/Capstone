import { call, put } from "redux-saga/effects";
import { checkLogin } from "../../../api/auth/authApi";
import { loginFail, loginSuccess } from "../actions/auth.action";

export function* loginAsync(action) {
	try {
		const user = yield call(checkLogin, action.payload);
		if (!user) throw new Error("login fail");
		yield put(loginSuccess(user));
	} catch (error) {
		yield put(loginFail());
	}
}
