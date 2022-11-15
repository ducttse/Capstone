import { call, put } from "redux-saga/effects";
import { checkLogin } from "../../../api/auth/authApi";
import { loginFail, loginSuccess } from "../actions/auth.action";

export function* loginAsync(action) {
	const user = yield call(checkLogin, action.payload);
	if(!user) 
		yield put(loginFail());

	else 
		yield put(loginSuccess(user));

}




