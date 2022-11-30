import { call, put } from "redux-saga/effects";
import { disableAccountdApi } from "../../../../api/disable-account/disableAccountApi.js";
import * as actions from "../actions/student.action.js";
import * as apis from "../../../../api/staff/students/studentApi.js";

export function* loadStudentAsync(action) {
  try {
    const response = yield call(apis.getStudentProfileApi, action.studentId);
    if (response.statusCode < 300) {
      yield put(actions.loadStudentDetailSuccess(response.data));
    }
  } catch (error) {
    yield put(actions.loadStudentDetailFail(error.response.data.message));
  }
}

export function* updateStudentAsync(action) {
  try {
    yield call(apis.updateStudentProfileApi, action.studentId, action.student);
    yield put(actions.updateStudentSuccess());
  } catch (error) {
    yield put(actions.updateStudentFail(error.response.data.message));
  }
}

export function* disableStudentAsync(action) {
  try {
    yield call(disableAccountdApi, action.accountId);
    yield put(actions.disableStudentSuccess());
  } catch (error) {
    yield put(actions.disableStudentFail(error.response.data.message));
  }
}
