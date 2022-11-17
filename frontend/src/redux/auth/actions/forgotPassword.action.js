import * as types from "../constants/forgotPassword.constant";

export function forgotPasswordSuccess() {
  return {
    type: types.FORGOT_PASSWORD_SUCCESS,
  };
}

export function forgotPasswordFail(payload) {
  return {
    type: types.FORGOT_PASSWORD_FAIL,
    error: payload,
  };
}

export function forgotPasswordAsync(payload) {
  return {
    type: types.FORGOT_PASSWORD_ASYNC,
    user: payload,
  };
}

export function clearForgotPasswordState() {
  return {
    type: types.CLEAR_FORGOT_PASSWORD_STATE,
  };
}
