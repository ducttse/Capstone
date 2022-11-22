import * as types from "../constants/changePassword.constant";

const initState = {
  loading: false,
  error: "",
  isSuccess: false,
};

export default function changePassword(state = initState, action) {
  switch (action.type) {
    case types.CHANGE_PASSWORD_SUCCESS:
      return {
        ...state,
        error: "",
        loading: false,
        isSuccess: true,
      };
      case types.CHANGE_PASSWORD_FAIL:
        return {
          ...state,
          error: action.error,
          loading: false,
          isSuccess: false,
        };
    case types.CHANGE_PASSWORD_ASYNC:
      return {
        ...state,
        loading: true,
        error: "",
        isSuccess: false,
      };
    case types.CLEAR_MESSAGE:
        return {
          ...state,
          loading: false,
          error: "",
          isSuccess: false,
        };
    default:
      return state;
  }
}
