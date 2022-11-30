import * as types from "../constants/collaboratorList.constant.js";

export function loadCollaboratorsListSuccess(payload) {
  return { type: types.LOAD_COLLABORATORS_LIST_SUCCCESS, payload };
}

export function loadCollaboratorsListFail(payload) {
  return {
    type: types.LOAD_COLLABORATORS_LIST_SUCCCESS,
    error: payload,
  };
}

export function loadCollaboratorsListAsync() {
  return { type: types.LOAD_COLLABORATORS_LIST_ASYNC };
}

export function searchCollaboratorsSuccess(payload) {
  return {
    type: types.SEARCH_COLLABORATORS_SUCCESS,
    payload,
  };
}

export function searchCollaboratorsFail(payload) {
  return {
    type: types.SEARCH_COLLABORATORS_FAIL,
    error: payload,
  };
}

export function searchCollaboratorsAsync(value) {
  return {
    type: types.SEARCH_COLLABORATORS_ASYNC,
    searchValue: value,
  };
}
