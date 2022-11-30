import * as types from "../constants/student.constant.js";

// mod detail

export function loadStudentDetailSuccess(payload) {
  return {
    type: types.LOAD_STUDENT_DETAIL_SUCCESS,
    payload,
  };
}

export function loadStudentDetailFail(payload) {
  return {
    type: types.LOAD_STUDENT_DETAIL_FAIL,
    error: payload,
  };
}

export function loadStudentDetailAsync(id) {
  return {
    type: types.LOAD_STUDENT_DETAIL_ASYNC,
    studentId: id,
  };
}

//update

export function updateStudentSuccess(payload) {
  return {
    type: types.UPDATE_STUDENT_SUCCESS,
    payload,
  };
}

export function updateStudentFail(payload) {
  return {
    type: types.UPDATE_STUDENT_FAIL,
    error: payload,
  };
}

export function updateStudentAsync(id, student) {
  return {
    type: types.UPDATE_STUDENT_ASYNC,
    studentId: id,
    student: student,
  };
}

// disable

export function disableStudentSuccess() {
  return {
    type: types.DISABLE_STUDENT_SUCCESS,
  };
}

export function disableStudentFail(payload) {
  return {
    type: types.DISABLE_STUDENT_FAIL,
    error: payload,
  };
}

export function diableStudentAsync(id) {
  return {
    type: types.DISABLE_STUDENT_ASYNC,
    accountId: id,
  };
}

export function clearStudentMessage(id) {
  return {
    type: types.CLEAR_STUDENT_MESSAGE,
  };
}
