import * as types from "../constants/collaboratorList.constant.js";

const initState = {
  loading: true,
  error: "",
  data: [],
  searchValue: "",
  pagination: {
    current: 1,
  },
};

export default function collaboratorsList(state = initState, action) {
  switch (action.type) {
    // load list
    case types.LOAD_COLLABORATORS_LIST_SUCCCESS:
      return {
        ...state,
        data: [...action.payload],
        error: "",
        loading: false,
      };
    case types.LOAD_COLLABORATORS_LIST_FAIL:
      return {
        ...state,
        error: action.error,
        loading: false,
      };
    case types.LOAD_COLLABORATORS_LIST_ASYNC:
      return {
        ...state,
        loading: true,
      };
    // search list
    case types.SEARCH_COLLABORATORS_SUCCESS:
      return {
        ...state,
        data: [...action.payload],
        error: "",
        loading: false,
      };
    case types.SEARCH_COLLABORATORS_FAIL:
      return {
        ...state,
        error: action.error,
        loading: false,
      };
    case types.SEARCH_COLLABORATORS_ASYNC:
      return {
        ...state,
        searchValue: action.searchValue,
        loading: true,
      };
    default:
      return state;
  }
}
