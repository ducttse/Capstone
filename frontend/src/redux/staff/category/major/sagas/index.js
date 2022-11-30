import { takeLatest } from "redux-saga/effects";
import * as types from "../constants/index.js";
import {createMajorAsync, disableMajorAsync, loadMajorAsync, updateMajorAsync } from "./major.saga.js";
import { loadMajorListAsync, searchMajorsAsync } from "./majorList.saga.js";

export default function* majorSaga() {
	yield takeLatest(types.LOAD_MAJORS_LIST_ASYNC, loadMajorListAsync);
	yield takeLatest(types.LOAD_MAJOR_DETAIL_ASYNC, loadMajorAsync);
	yield takeLatest(types.CREATE_MAJOR_ASYNC, createMajorAsync);
	yield takeLatest(types.UPDATE_MAJOR_ASYNC, updateMajorAsync);
	yield takeLatest(types.DISABLE_MAJOR_ASYNC, disableMajorAsync);
	yield takeLatest(types.SEARCH_MAJORS_ASYNC, searchMajorsAsync);
}
