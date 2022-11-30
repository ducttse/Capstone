import { takeLatest } from "redux-saga/effects";
import * as types from "../constants/index.js";
import { createSubjectAsync, disableSubjectAsync, loadSubjectAsync, updateSubjectAsync } from "./subject.saga.js";
import { loadSubjectListAsync, searchSubjectsAsync } from "./subjectList.saga.js";

export default function* subjectSaga() {
	yield takeLatest(types.LOAD_SUBJECTS_LIST_ASYNC, loadSubjectListAsync);
	yield takeLatest(types.LOAD_SUBJECT_DETAIL_ASYNC, loadSubjectAsync);
	yield takeLatest(types.CREATE_SUBJECT_ASYNC, createSubjectAsync);
	yield takeLatest(types.UPDATE_SUBJECT_ASYNC, updateSubjectAsync);
	yield takeLatest(types.DISABLE_SUBJECT_ASYNC, disableSubjectAsync);
	yield takeLatest(types.SEARCH_SUBJECTS_ASYNC, searchSubjectsAsync);
}
