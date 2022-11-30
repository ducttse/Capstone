import * as types from "../constants/subject.constant.js";

// mod detail

export function loadSubjectDetailSuccess(payload) {
  return {
    type: types.LOAD_SUBJECT_DETAIL_SUCCESS,
    payload,
  };
}

export function loadSubjectDetailFail(payload) {
  return {
    type: types.LOAD_SUBJECT_DETAIL_FAIL,
    error: payload,
  };
}

export function loadSubjectDetailAsync(id) {
  return {
    type: types.LOAD_SUBJECT_DETAIL_ASYNC,
    subjectId: id,
  };
}

// create

export function createSubjectSuccess() {
  return {
    type: types.CREATE_SUBJECT_SUCCESS,
  };
}

export function createSubjectFail(payload) {
  return {
    type: types.CREATE_SUBJECT_FAIL,
    error: payload,
  };
}

export function creaeteSubjectAsync(subject) {
  return {
    type: types.CREATE_SUBJECT_ASYNC,
    subject: subject,
  };
}

//update

export function updateSubjectSuccess(payload) {
  return {
    type: types.UPDATE_SUBJECT_SUCCESS,
    payload,
  };
}

export function updateSubjectFail(payload) {
  return {
    type: types.UPDATE_SUBJECT_FAIL,
    error: payload,
  };
}

export function updateSubjectAsync(id, subject) {
  return {
    type: types.UPDATE_SUBJECT_ASYNC,
    subjectId: id,
    subject: subject,
  };
}

// disable

export function disableSubjectSuccess() {
  return {
    type: types.DISABLE_SUBJECT_SUCCESS,
  };
}

export function disableSubjectFail(payload) {
  return {
    type: types.DISABLE_SUBJECT_FAIL,
    error: payload,
  };
}

export function diableSubjectAsync(id) {
  console.log(id);
  return {
    type: types.DISABLE_SUBJECT_ASYNC,
    subjectId: id,
  };
}

export function clearSubjectMessage() {
  return {
    type: types.CLEAR_SUBJECT_MESSAGE,
  };
}
