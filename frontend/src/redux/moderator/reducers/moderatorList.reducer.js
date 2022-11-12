import * as types from "../constants/moderatorsList.constant.js";

const initState = {
  loading: true,
  error: null,
  data: [],
  searchValue: "",
  pagination: {
    current: 1,
  },
};

export default function moderatorsList(state = initState, action) {
  switch (action.type) {
    case types.LOAD_MODERATORS_LIST:
      return {
        ...state,
        data: [...action.payload],
        loading: false,
      };
    case types.LOAD_MODERATORS_LIST_ASYNC:
      return {
        ...state,
        loading: true,
      };

    case types.SEARCH_MODERATORS:
        return {
          ...state,
          data: [...action.payload],
          loading: false,
        };
    case types.SEARCH_MODERATORS_ASYNC:
        return {
          ...state,
          searchValue: action.searchValue,
          loading: true,
        };
    default:
      return state;
  }
}
