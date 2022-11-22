import { call, put } from "redux-saga/effects";
import { changePasswordApi } from "../../../api/profile/profileApi";
import { changePasswordFail, changePasswordSuccess } from "../actions/changePassword.action";

export function* changePasswordAsync(action) {
	try {
		const {statusCode} = yield call(changePasswordApi, action.changeInfo);
		if(statusCode < 300){
			yield put(changePasswordSuccess());
		}
	} catch (error) {
		yield put(changePasswordFail(error.response.data.message));
	}
}


