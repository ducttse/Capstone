import * as types from "../constants/forgotPassword.constant";

const initialState = {
  isSuccess: false,
  error: "",
};

export default function forgotPassword(state = initialState, action) {
  switch (action.type) {
    case types.FORGOT_PASSWORD_ASYNC:
      return {
        ...state,
        isSuccess: false,
      };

    case types.FORGOT_PASSWORD_SUCCESS:
      return {
        ...state,
        isSuccess: true,
        error: "",
      };
    case types.FORGOT_PASSWORD_FAIL:
      return {
        ...state,
        isSuccess: false,
        error: action.error,
      };
    case types.CLEAR_FORGOT_PASSWORD_STATE:
      return {
        ...state,
        ...initialState
      };

    default:
      return state;
  }
}
