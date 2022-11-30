import { call, put } from "redux-saga/effects";
import {
  createCollaboratorApi,
  getCollaboratorProfileApi,
  updateCollaboratorProfileApi,
} from "../../../../api/admin/collaborator/collaboratorApi.js";
import { disableAccountdApi } from "../../../../api/disable-account/disableAccountApi.js";
import {
  createCollaboratorFail,
  createCollaboratorSuccess,
  disableCollaboratorFail,
  disableCollaboratorSuccess,
  loadCollaboratorDetailFail,
  loadCollaboratorDetailSuccess,
  updateCollaboratorFail,
  updateCollaboratorSuccess,
} from "../actions/collaborator.action.js";

export function* loadCollaboratorAsync(action) {
  try {
    const response = yield call(
      getCollaboratorProfileApi,
      action.collaboratorId
    );
    if (response.statusCode < 300) {
      yield put(loadCollaboratorDetailSuccess(response.data));
    }
  } catch (error) {
    yield put(loadCollaboratorDetailFail(error.response.data.message));
  }
}

export function* createCollaboratorAsync(action) {
  try {
    const response = yield call(createCollaboratorApi, action.collaborator);
    if (response.statusCode < 300) {
      yield put(createCollaboratorSuccess());
    }
  } catch (error) {
    yield put(createCollaboratorFail(error.response.data.message));
  }
}

export function* updateCollaboratorAsync(action) {
  try {
    const response = yield call(
      updateCollaboratorProfileApi,
      action.collaboratorId,
      action.collaborator
    );
    if (response.statusCode < 300) {
      yield put(updateCollaboratorSuccess());
    }
  } catch (error) {
    yield put(updateCollaboratorFail(error.response.data.message));
  }
}

export function* disableCollaboratorAsync(action) {
  try {
    const response = yield call(disableAccountdApi, action.accountId);
    if (response.statusCode < 300) {
      yield put(disableCollaboratorSuccess());
    }
  } catch (error) {
    yield put(disableCollaboratorFail(error.response.data.message));
  }
}
