import { call, put } from "redux-saga/effects";
import { createSubjectApi, disableSubjectApi, getSubjectApi, updateSubjectApi } from "../../../../../api/staff/category/subject/subjectApi";
import { createSubjectFail, createSubjectSuccess, disableSubjectFail, disableSubjectSuccess, loadSubjectDetailFail, loadSubjectDetailSuccess, updateSubjectFail, updateSubjectSuccess } from "../actions/subject.action";


export function* loadSubjectAsync(action) {
  try {
    const response = yield call(getSubjectApi, action.subjectId);
    if (response.statusCode < 300) {
      yield put(loadSubjectDetailSuccess(response.data));
    }
  } catch (error) {
    yield put(loadSubjectDetailFail(error.response.data.message));
  }
}

export function* createSubjectAsync(action) {
  try {
    const response = yield call(createSubjectApi, action.subject);
    if (response.statusCode < 300) {
      yield put(createSubjectSuccess());
    }
  } catch (error) {
    yield put(createSubjectFail(error.response.data.message));
  }
}

export function* updateSubjectAsync(action) {
  try {
    yield call(updateSubjectApi, action.subjectId, action.subject);
    yield put(updateSubjectSuccess());
  } catch (error) {
    yield put(updateSubjectFail(error.response.data.message));
  }
}

export function* disableSubjectAsync(action) {
  try {
    yield call(disableSubjectApi, action.subjectId);
    yield put(disableSubjectSuccess());
  } catch (error) {
    yield put(disableSubjectFail(error.response.data.message));
  }
}
