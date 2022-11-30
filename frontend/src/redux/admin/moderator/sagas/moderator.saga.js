import { call, put } from "redux-saga/effects";
import {
  createModeratorApi,
  getModeratorProfileApi,
  updateModeratorProfileApi,
} from "../../../../api/admin/moderator/moderatorApi.js";
import { disableAccountdApi } from "../../../../api/disable-account/disableAccountApi.js";
import {
  createModeratorFail,
  createModeratorSuccess,
  disableModeratorFail,
  disableModeratorSuccess,
  loadModeratorDetailFail,
  loadModeratorDetailSuccess,
  updateModeratorFail,
  updateModeratorSuccess,
} from "../actions/moderator.action.js";

export function* loadModeratorAsync(action) {
  try {
    const response = yield call(getModeratorProfileApi, action.moderatorId);
    if (response.statusCode < 300) {
      yield put(loadModeratorDetailSuccess(response.data));
    }
  } catch (error) {
    yield put(loadModeratorDetailFail(error.response.data.message));
  }
}

export function* createModeratorAsync(action) {
  try {
    const response = yield call(createModeratorApi, action.moderator);
    if (response.statusCode < 300) {
      yield put(createModeratorSuccess());
    }
  } catch (error) {
    yield put(createModeratorFail(error.response.data.message));
  }
}

export function* updateModeratorAsync(action) {
  try {
    yield call(updateModeratorProfileApi, action.moderatorId, action.moderator);
    yield put(updateModeratorSuccess());
  } catch (error) {
    yield put(updateModeratorFail(error.response.data.message));
  }
}

export function* disableModeratorAsync(action) {
  try {
    yield call(disableAccountdApi, action.accountId);
    yield put(disableModeratorSuccess());
  } catch (error) {
    yield put(disableModeratorFail(error.response.data.message));
  }
}
