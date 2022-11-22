import { takeLatest } from "redux-saga/effects";
import * as types from "../constants/index.js";
import { changePasswordAsync } from "./changePassword.saga.js";
import { getProfileByIdAsync } from "./profile.saga.js";
import { updateProfileAsync } from "./updateProfile.saga.js";

export default function* profileSaga() {
	yield takeLatest(types.GET_PROFILE_BY_ID_ASYNC, getProfileByIdAsync);
	yield takeLatest(types.CHANGE_PASSWORD_ASYNC, changePasswordAsync);
	yield takeLatest(types.UPDATE_PROFILE_ASYNC, updateProfileAsync);
}
