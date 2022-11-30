import * as types from "../constants/studentList.constant.js";

export function loadStudentsListSuccess(payload) {
  return { type: types.LOAD_STUDENTS_LIST_SUCCCESS, payload };
}

export function loadStudentsListFail(payload) {
  return {
    type: types.LOAD_STUDENTS_LIST_SUCCCESS,
    error: payload,
  };
}

export function loadStudentsListAsync() {
  return { type: types.LOAD_STUDENTS_LIST_ASYNC };
}

export function searchStudentsSuccess(payload) {
  return {
    type: types.SEARCH_STUDENTS_SUCCESS,
    payload,
  };
}

export function searchStudentsFail(payload) {
  return {
    type: types.SEARCH_STUDENTS_FAIL,
    error: payload,
  };
}

export function searchStudentsAsync(value) {
  return {
    type: types.SEARCH_STUDENTS_ASYNC,
    searchValue: value,
  };
}
