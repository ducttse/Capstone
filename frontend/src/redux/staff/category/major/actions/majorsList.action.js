import * as types from "../constants/majorsList.constant.js";

export function loadMajorsListSuccess(payload) {
  return { type: types.LOAD_MAJORS_LIST_SUCCCESS, payload };
}

export function loadMajorsListFail(payload) {
  return {
    type: types.LOAD_MAJORS_LIST_SUCCCESS,
    error: payload,
  };
}

export function loadMajorsListAsync() {
  return { type: types.LOAD_MAJORS_LIST_ASYNC };
}

export function searchMajorsSuccess(payload) {
  return {
    type: types.SEARCH_MAJORS_SUCCESS,
    payload,
  };
}

export function searchMajorsFail(payload) {
  return {
    type: types.SEARCH_MAJORS_FAIL,
    error: payload,
  };
}

export function searchMajorsAsync(value) {
  return {
    type: types.SEARCH_MAJORS_ASYNC,
    searchValue: value,
  };
}
