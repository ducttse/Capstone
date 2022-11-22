import * as types from "../constants/updateProfile.constant";

const initState = {
  loading: false,
  error: "",
  isSuccess: false,
};

export default function updateProfile(state = initState, action) {
  switch (action.type) {
    case types.UPDATE_PROFILE_SUCCESS:
      return {
        ...state,
        error: "",
        loading: false,
        isSuccess: true,
      };
      case types.UPDATE_PROFILE_FAIL:
        return {
          ...state,
          error: action.error,
          loading: false,
          isSuccess: false,
        };
    case types.UPDATE_PROFILE_ASYNC:
      return {
        ...state,
        loading: true,
        error: "",
        isSuccess: false,
      };
    case types.CLEAR_UPDATE_MESSAGE:
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
