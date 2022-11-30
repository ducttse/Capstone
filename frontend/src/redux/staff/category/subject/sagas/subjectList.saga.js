import { call, put } from "redux-saga/effects";
import { getSubjectsApi, searchSubjectsApi } from "../../../../../api/staff/category/subject/subjectApi";
import { loadSubjectsListFail, loadSubjectsListSuccess, searchSubjectsFail, searchSubjectsSuccess } from "../actions/subjectsList.action";


export function* loadSubjectListAsync() {
  // call api simulate
  try {
    const response = yield call(getSubjectsApi);
    if (response.statusCode < 300) {
      yield put(loadSubjectsListSuccess(response.data));
    }
  } catch (error) {
    yield put(loadSubjectsListFail(error.response.data.message));
  }
}

export function* searchSubjectsAsync(action) {
  // call api simulate
  try {
    const response = yield call(searchSubjectsApi, action.searchValue);
    if (response.statusCode < 300) {
      yield put(searchSubjectsSuccess(response.data));
    }
  } catch (error) {
    yield put(searchSubjectsFail(error.response.data.message));
  }
}
