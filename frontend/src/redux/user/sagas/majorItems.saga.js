import { call, put } from "redux-saga/effects";
import { getMajors } from "../../../api/user/majors/index.js";
import { loadMajors } from "../actions/majorItems.action.js";

export function* loadMajorsAsync(action) {
	const majors = yield call(getMajors);
	yield put(loadMajors(majors));
}
