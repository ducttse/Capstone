import * as types from "../constants/collaborator.constant.js";

// mod detail

export function loadCollaboratorDetailSuccess(payload) {
  return {
    type: types.LOAD_COLLABORATOR_DETAIL_SUCCESS,
    payload,
  };
}

export function loadCollaboratorDetailFail(payload) {
  return {
    type: types.LOAD_COLLABORATOR_DETAIL_FAIL,
    error: payload,
  };
}

export function loadCollaboratorDetailAsync(id) {
  return {
    type: types.LOAD_COLLABORATOR_DETAIL_ASYNC,
    collaboratorId: id,
  };
}

// create

export function createCollaboratorSuccess() {
  return {
    type: types.CREATE_COLLABORATOR_SUCCESS,
  };
}

export function createCollaboratorFail(payload) {
  return {
    type: types.CREATE_COLLABORATOR_FAIL,
    error: payload,
  };
}

export function creaeteCollaboratorAsync(collaborator) {
  return {
    type: types.CREATE_COLLABORATOR_ASYNC,
    collaborator: collaborator,
  };
}

//update

export function updateCollaboratorSuccess(payload) {
  return {
    type: types.UPDATE_COLLABORATOR_SUCCESS,
    payload,
  };
}

export function updateCollaboratorFail(payload) {
  return {
    type: types.UPDATE_COLLABORATOR_FAIL,
    error: payload,
  };
}

export function updateCollaboratorAsync(id, collaborator) {
  return {
    type: types.UPDATE_COLLABORATOR_ASYNC,
    collaboratorId: id,
    collaborator: collaborator,
  };
}

// disable

export function disableCollaboratorSuccess() {
  return {
    type: types.DISABLE_COLLABORATOR_SUCCESS,
  };
}

export function disableCollaboratorFail(payload) {
  return {
    type: types.DISABLE_COLLABORATOR_FAIL,
    error: payload,
  };
}

export function diableCollaboratorAsync(id) {
  return {
    type: types.DISABLE_COLLABORATOR_ASYNC,
    accountId: id,
  };
}

export function clearCollaboratorMessage(id) {
  return {
    type: types.CLEAR_COLLABORATOR_MESSAGE,
  };
}
