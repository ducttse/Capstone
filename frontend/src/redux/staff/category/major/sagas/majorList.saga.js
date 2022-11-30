import { call, put } from "redux-saga/effects";
import { getMajorsApi, searchMajorsApi } from "../../../../../api/staff/category/major/majorApi";
import { loadMajorsListFail, loadMajorsListSuccess, searchMajorsFail, searchMajorsSuccess } from "../actions/majorsList.action";


export function* loadMajorListAsync() {
  // call api simulate
  try {
    const response = yield call(getMajorsApi);
    if (response.statusCode < 300) {
      yield put(loadMajorsListSuccess(response.data));
    }
  } catch (error) {
    yield put(loadMajorsListFail(error.response.data.message));
  }
}

export function* searchMajorsAsync(action) {
  // call api simulate
  try {
    const response = yield call(searchMajorsApi, action.searchValue);
    if (response.statusCode < 300) {
      yield put(searchMajorsSuccess(response.data));
    }
  } catch (error) {
    yield put(searchMajorsFail(error.response.data.message));
  }
}
