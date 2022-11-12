import * as types from "../constants/moderator.constant.js";

export function loadModeratorDetail(payload) {
  return {
    type: types.LOAD_MODERATOR_DETAIL,
    payload,
  };
}

export function loadModeratorDetailAsync(id) {
  return {
    type: types.LOAD_MODERATOR_DETAIL_ASYNC,
    moderatorId: id,
  };
}

export function createModerator() {
  return {
    type: types.CREATE_MODERATOR,
  };
}

export function creaeteModeratorAsync(moderator) {
  return {
    type: types.CREATE_MODERATOR_ASYNC,
    moderator: moderator,
  };
}

export function updateModerator(payload) {
  return {
    type: types.UPDATE_MODERATOR,
    payload,
  };
}

export function updateModeratorAsync(id, moderator) {
  return {
    type: types.UPDATE_MODERATOR_ASYNC,
    moderatorId: id,
    moderator: moderator
  };
}

export function disableModerator() {
  return {
    type: types.DISABLE_MODERATOR,
  };
}

export function diableModeratorAsync(id) {
  return {
    type: types.DISABLE_MODERATOR_ASYNC,
    moderatorId: id,
  };
}


