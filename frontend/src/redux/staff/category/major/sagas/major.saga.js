import { call, put } from "redux-saga/effects";
import { createMajorApi, disableMajorApi, getMajorApi, updateMajorApi } from "../../../../../api/staff/category/major/majorApi";
import { createMajorFail, createMajorSuccess, disableMajorFail, disableMajorSuccess, loadMajorDetailFail, loadMajorDetailSuccess, updateMajorFail, updateMajorSuccess } from "../actions/major.action";


export function* loadMajorAsync(action) {
  try {
    const response = yield call(getMajorApi, action.majorId);
    if (response.statusCode < 300) {
      yield put(loadMajorDetailSuccess(response.data));
    }
  } catch (error) {
    yield put(loadMajorDetailFail(error.response.data.message));
  }
}

export function* createMajorAsync(action) {
  try {
    const response = yield call(createMajorApi, action.major);
    if (response.statusCode < 300) {
      yield put(createMajorSuccess());
    }
  } catch (error) {
    yield put(createMajorFail(error.response.data.message));
  }
}

export function* updateMajorAsync(action) {
  try {
    yield call(updateMajorApi, action.majorId, action.major);
    yield put(updateMajorSuccess());
  } catch (error) {
    yield put(updateMajorFail(error.response.data.message));
  }
}

export function* disableMajorAsync(action) {
  try {
    yield call(disableMajorApi, action.majorId);
    yield put(disableMajorSuccess());
  } catch (error) {
    yield put(disableMajorFail(error.response.data.message));
  }
}
