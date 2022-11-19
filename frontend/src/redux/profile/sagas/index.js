import { takeLatest } from "redux-saga/effects";
import * as types from "../constants/index.js";
import { getProfileByIdAsync } from "./profile.saga.js";

export default function* profileSaga() {
	yield takeLatest(types.GET_PROFILE_BY_ID_ASYNC, getProfileByIdAsync);
}
