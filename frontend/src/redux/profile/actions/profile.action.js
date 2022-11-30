import * as types from "../constants/profile.constant.js";

export function getProfileByIdSuccess(payload) {
  return {
    type: types.GET_PROFILE_BY_ID_SUCCESS,
    payload,
  };
}

export function getProfileByIdFail(payload) {
  return {
    type: types.GET_PROFILE_BY_ID_FAIL,
    error: payload,
  };
}

export function getProfileByIdAsync(roleId, id) {
  return {
    type: types.GET_PROFILE_BY_ID_ASYNC,
    id: id,
    roleId: roleId
  };
}
