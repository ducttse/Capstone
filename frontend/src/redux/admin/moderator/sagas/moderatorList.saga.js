import { call, put } from "redux-saga/effects";
import {
  getModeratorsApi,
  searchModeratorsApi,
} from "../../../../api/admin/moderator/moderatorApi";
import {
  loadModeratorsListFail,
  loadModeratorsListSuccess,
  searchModeratorsFail,
  searchModeratorsSuccess,
} from "../actions/moderatorsList.action.js";

export function* loadModeratorListAsync() {
  // call api simulate
  try {
    const response = yield call(getModeratorsApi);
    if (response.statusCode < 300) {
      yield put(loadModeratorsListSuccess(response.data));
    }
  } catch (error) {
    yield put(loadModeratorsListFail(error.response.data.message));
  }
}

export function* searchModeratorsAsync(action) {
  // call api simulate
  try {
    const response = yield call(searchModeratorsApi, action.searchValue);
    if (response.statusCode < 300) {
      yield put(searchModeratorsSuccess(response.data));
    }
  } catch (error) {
    yield put(searchModeratorsFail(error.response.data.message));
  }
}
