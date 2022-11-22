import { call, put } from "redux-saga/effects";
import {  updateProfileApi } from "../../../api/profile/profileApi";
import { updateProfileFail, updateProfileSuccess } from "../actions/updateProfile.action";

export function* updateProfileAsync(action) {
	try {
		const {statusCode} = yield call(updateProfileApi,action.roleId, action.id, action.changeInfo);
		if(statusCode < 300){
			yield put(updateProfileSuccess());
		}
	} catch (error) {
		yield put(updateProfileFail(error.response.data.message));
	}
}


