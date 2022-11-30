import * as types from "../constants/subjectsList.constant.js";

export function loadSubjectsListSuccess(payload) {
  return { type: types.LOAD_SUBJECTS_LIST_SUCCCESS, payload };
}

export function loadSubjectsListFail(payload) {
  return {
    type: types.LOAD_SUBJECTS_LIST_SUCCCESS,
    error: payload,
  };
}

export function loadSubjectsListAsync() {
  return { type: types.LOAD_SUBJECTS_LIST_ASYNC };
}

export function searchSubjectsSuccess(payload) {
  return {
    type: types.SEARCH_SUBJECTS_SUCCESS,
    payload,
  };
}

export function searchSubjectsFail(payload) {
  return {
    type: types.SEARCH_SUBJECTS_FAIL,
    error: payload,
  };
}

export function searchSubjectsAsync(value) {
  return {
    type: types.SEARCH_SUBJECTS_ASYNC,
    searchValue: value,
  };
}
