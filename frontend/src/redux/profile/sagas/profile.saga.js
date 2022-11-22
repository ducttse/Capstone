import { call, put } from "redux-saga/effects";
import { getProfileApi } from "../../../api/profile/profileApi.js";
import { getProfileByIdFail, getProfileByIdSuccess } from "../actions/profile.action.js";

export function* getProfileByIdAsync(action) {
	try {
		const {data: userInfo, statusCode} = yield call(getProfileApi, action.roleId, action.id);
		if(statusCode < 300){
			yield put(getProfileByIdSuccess(userInfo));
		}
	} catch (error) {
		yield put(getProfileByIdFail(error.response.data.message));
	}
}


