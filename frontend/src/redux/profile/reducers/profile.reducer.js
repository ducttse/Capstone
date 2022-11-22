import moment from "moment";
import * as types from "../constants/profile.constant.js";

const initState = {
  loading: true,
  error: "",
  userInfo: null,
};

export default function profile(state = initState, action) {
  switch (action.type) {
    case types.GET_PROFILE_BY_ID_SUCCESS:
      return {
        ...state,
        userInfo: { 
              ...action.payload, 
            dateOfBirth: moment(action.payload.dateOfBirth)
            },
        error: "",
        loading: false,
      };
      case types.GET_PROFILE_BY_ID_FAIL:
        return {
          ...state,
          error: action.error,
          userInfo: null,
          loading: false,
        };
    case types.GET_PROFILE_BY_ID_ASYNC:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
}
