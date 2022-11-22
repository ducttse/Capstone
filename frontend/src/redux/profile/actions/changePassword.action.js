import * as types from "../constants/changePassword.constant";

export function changePasswordSuccess() {
  return {
    type: types.CHANGE_PASSWORD_SUCCESS,
  };
}

export function changePasswordFail(payload) {
  return {
    type: types.CHANGE_PASSWORD_FAIL,
    error: payload,
  };
}

export function changePasswordAsync(payload) {
  return {
    type: types.CHANGE_PASSWORD_ASYNC,
    changeInfo: payload,
  };
}

export function clearChangePasswordMessage() {
  return {
    type: types.CLEAR_MESSAGE
  };
}
