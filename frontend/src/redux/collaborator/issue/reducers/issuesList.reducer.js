import * as types from "../constants/issuesList.constant.js";

const initState = {
  loading: true,
  error: "",
  data: [],
  params: null,
  pagination: {
    current: 1,
  },
};

export default function issuesList(state = initState, action) {
  switch (action.type) {
    // load list
    case types.LOAD_ISSUES_LIST_SUCCCESS:
      return {
        ...state,
        data: [...action.payload],
        error: "",
        loading: false,
      };
    case types.LOAD_ISSUES_LIST_FAIL:
      return {
        ...state,
        error: action.error,
        loading: false,
      };
    case types.LOAD_ISSUES_LIST_ASYNC:
      return {
        ...state,
        loading: true,
      };
    // search list
    case types.FILTER_ISSUES_SUCCESS:
      return {
        ...state,
        data: [...action.payload],
        error: "",
        loading: false,
      };
    case types.FILTER_ISSUES_FAIL:
      return {
        ...state,
        error: action.error,
        loading: false,
      };
    case types.FILTER_ISSUES_ASYNC:
      return {
        ...state,
        params: action.params,
        loading: true,
      };
    default:
      return state;
  }
}
