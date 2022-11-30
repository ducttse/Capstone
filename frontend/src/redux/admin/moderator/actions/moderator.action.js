import * as types from "../constants/moderator.constant.js";

// mod detail

export function loadModeratorDetailSuccess(payload) {
  return {
    type: types.LOAD_MODERATOR_DETAIL_SUCCESS,
    payload,
  };
}

export function loadModeratorDetailFail(payload) {
  return {
    type: types.LOAD_MODERATOR_DETAIL_FAIL,
    error: payload,
  };
}

export function loadModeratorDetailAsync(id) {
  return {
    type: types.LOAD_MODERATOR_DETAIL_ASYNC,
    moderatorId: id,
  };
}

// create

export function createModeratorSuccess() {
  return {
    type: types.CREATE_MODERATOR_SUCCESS,
  };
}

export function createModeratorFail(payload) {
  return {
    type: types.CREATE_MODERATOR_FAIL,
    error: payload,
  };
}


export function creaeteModeratorAsync(moderator) {
  return {
    type: types.CREATE_MODERATOR_ASYNC,
    moderator: moderator,
  };
}


//update

export function updateModeratorSuccess(payload) {
  return {
    type: types.UPDATE_MODERATOR_SUCCESS,
    payload,
  };
}

export function updateModeratorFail(payload) {
  return {
    type: types.UPDATE_MODERATOR_FAIL,
    error: payload,
  };
}

export function updateModeratorAsync(id, moderator) {
  return {
    type: types.UPDATE_MODERATOR_ASYNC,
    moderatorId: id,
    moderator: moderator
  };
}

// disable

export function disableModeratorSuccess() {
  return {
    type: types.DISABLE_MODERATOR_SUCCESS,
  };
}

export function disableModeratorFail(payload) {
  return {
    type: types.DISABLE_MODERATOR_FAIL,
    error: payload,
  };
}

export function diableModeratorAsync(id) {
  return {
    type: types.DISABLE_MODERATOR_ASYNC,
    accountId: id,
  };
}


export function clearModeratorMessage(id) {
  return {
    type: types.CLEAR_MODERATOR_MESSAGE,
  };
}


