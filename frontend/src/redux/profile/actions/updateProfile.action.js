import * as types from "../constants/updateProfile.constant";

export function updateProfileSuccess() {
  return {
    type: types.UPDATE_PROFILE_SUCCESS,
  };
}

export function updateProfileFail(payload) {
  return {
    type: types.UPDATE_PROFILE_FAIL,
    error: payload,
  };
}

export function updateProfileAsync(roleId,id, changeInfo) {
  return {
    type: types.UPDATE_PROFILE_ASYNC,
    id: id,
    changeInfo: changeInfo,
    roleId: roleId
  };
}

export function clearupdateProfileMessage() {
  return {
    type: types.CLEAR_UPDATE_MESSAGE
  };
}
