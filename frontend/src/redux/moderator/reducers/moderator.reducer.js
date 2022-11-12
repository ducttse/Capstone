import *as types from "../constants/moderator.constant.js";

const initState = {
  loading: true,
  error: null,
  data: null,
};

export default function moderator(state = initState, action) {
  switch (action.type) {
    case types.LOAD_MODERATOR_DETAIL:
      return {
        ...state,
        data: { ...action.payload },
        loading: false,
      };
    case types.LOAD_MODERATOR_DETAIL_ASYNC:
      return {
        ...state,
        loading: true,
      };

      case types.CREATE_MODERATOR:
        return {
          ...state,
          loading: false,
        };
    case types.CREATE_MODERATOR_ASYNC:
        return {
          ...state,
          loading: true,
        };

    case types.UPDATE_MODERATOR:
        return {
          ...state,
          data: { ...action.payload },
          loading: false,
        };
    case types.UPDATE_MODERATOR_ASYNC:
        return {
          ...state,
          loading: true,
        };
    case types.DISABLE_MODERATOR:
        return {
          ...state,
          loading: false,
        };
    case types.DISABLE_MODERATOR_ASYNC:
        return {
          ...state,
          loading: true,
        };
    default:
      return state;
  }
}
