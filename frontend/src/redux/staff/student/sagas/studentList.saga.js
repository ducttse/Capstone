import { call, put } from "redux-saga/effects";
import { getStudentsApi, searchStudentsApi } from "../../../../api/staff/students/studentApi.js";
import { loadStudentsListFail, loadStudentsListSuccess, searchStudentsFail, searchStudentsSuccess } from "../actions/studentsList.action.js";

export function* loadStudentListAsync() {
  // call api simulate
  try {
    const response = yield call(getStudentsApi);
    if (response.statusCode < 300) {
      yield put(loadStudentsListSuccess(response.data));
    }
  } catch (error) {
    yield put(loadStudentsListFail(error.response.data.message));
  }
}

export function* searchStudentsAsync(action) {
  // call api simulate
  try {
    const response = yield call(searchStudentsApi, action.searchValue);
    if (response.statusCode < 300) {
      yield put(searchStudentsSuccess(response.data));
    }
  } catch (error) {
    yield put(searchStudentsFail(error.response.data.message));
  }
}
