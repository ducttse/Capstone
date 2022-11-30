import { call, put } from "redux-saga/effects";
import {
  getCollaboratorsApi,
  searchCollaboratorsApi,
} from "../../../../api/admin/collaborator/collaboratorApi.js";
import {
  loadCollaboratorsListFail,
  loadCollaboratorsListSuccess,
  searchCollaboratorsFail,
  searchCollaboratorsSuccess,
} from "../actions/collaboratorsList.action.js";

export function* loadCollaboratorListAsync() {
  // call api simulate
  try {
    const response = yield call(getCollaboratorsApi);
    if (response.statusCode < 300) {
      yield put(loadCollaboratorsListSuccess(response.data));
    }
  } catch (error) {
    yield put(loadCollaboratorsListFail(error.response.data.message));
  }
}

export function* searchCollaboratorsAsync(action) {
  // call api simulate
  try {
    const response = yield call(searchCollaboratorsApi, action.searchValue);
    if (response.statusCode < 300) {
      yield put(searchCollaboratorsSuccess(response.data));
    }
  } catch (error) {
    yield put(searchCollaboratorsFail(error.response.data.message));
  }
}
