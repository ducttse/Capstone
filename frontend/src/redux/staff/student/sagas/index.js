import { takeLatest } from "redux-saga/effects";
import * as types from "../constants/index.js";
import { disableStudentAsync, loadStudentAsync, updateStudentAsync } from "./student.saga.js";
import { loadStudentListAsync, searchStudentsAsync } from "./studentList.saga.js";

export default function* studentSaga() {
	yield takeLatest(types.LOAD_STUDENTS_LIST_ASYNC, loadStudentListAsync);
	yield takeLatest(types.LOAD_STUDENT_DETAIL_ASYNC, loadStudentAsync);
	yield takeLatest(types.UPDATE_STUDENT_ASYNC, updateStudentAsync);
	yield takeLatest(types.DISABLE_STUDENT_ASYNC, disableStudentAsync);
	yield takeLatest(types.SEARCH_STUDENTS_ASYNC, searchStudentsAsync);
}
