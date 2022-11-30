import * as types from "../constants/major.constant.js";

// mod detail

export function loadMajorDetailSuccess(payload) {
  return {
    type: types.LOAD_MAJOR_DETAIL_SUCCESS,
    payload,
  };
}

export function loadMajorDetailFail(payload) {
  return {
    type: types.LOAD_MAJOR_DETAIL_FAIL,
    error: payload,
  };
}

export function loadMajorDetailAsync(id) {
  return {
    type: types.LOAD_MAJOR_DETAIL_ASYNC,
    majorId: id,
  };
}

// create

export function createMajorSuccess() {
  return {
    type: types.CREATE_MAJOR_SUCCESS,
  };
}

export function createMajorFail(payload) {
  return {
    type: types.CREATE_MAJOR_FAIL,
    error: payload,
  };
}

export function creaeteMajorAsync(major) {
  return {
    type: types.CREATE_MAJOR_ASYNC,
    major: major,
  };
}

//update

export function updateMajorSuccess(payload) {
  return {
    type: types.UPDATE_MAJOR_SUCCESS,
    payload,
  };
}

export function updateMajorFail(payload) {
  return {
    type: types.UPDATE_MAJOR_FAIL,
    error: payload,
  };
}

export function updateMajorAsync(id, major) {
  return {
    type: types.UPDATE_MAJOR_ASYNC,
    majorId: id,
    major: major,
  };
}

// disable

export function disableMajorSuccess() {
  return {
    type: types.DISABLE_MAJOR_SUCCESS,
  };
}

export function disableMajorFail(payload) {
  return {
    type: types.DISABLE_MAJOR_FAIL,
    error: payload,
  };
}

export function diableMajorAsync(id) {
  return {
    type: types.DISABLE_MAJOR_ASYNC,
    majorId: id,
  };
}

export function clearMajorMessage() {
  return {
    type: types.CLEAR_MAJOR_MESSAGE,
  };
}
