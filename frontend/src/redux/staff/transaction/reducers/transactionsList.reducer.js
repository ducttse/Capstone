import * as types from "../constants/transactionsList.constant.js";

const initState = {
  loading: true,
  error: "",
  data: [],
  params: null,
  pagination: {
    current: 1,
  },
};

export default function transactionsList(state = initState, action) {
  switch (action.type) {
    // load list
    case types.LOAD_TRANSACTIONS_LIST_SUCCCESS:
      return {
        ...state,
        data: [...action.payload],
        error: "",
        loading: false,
      };
    case types.LOAD_TRANSACTIONS_LIST_FAIL:
      return {
        ...state,
        error: action.error,
        loading: false,
      };
    case types.LOAD_TRANSACTIONS_LIST_ASYNC:
      return {
        ...state,
        loading: true,
      };
    // search list
    case types.FILTER_TRANSACTIONS_SUCCESS:
      return {
        ...state,
        data: [...action.payload],
        error: "",
        loading: false,
      };
    case types.FILTER_TRANSACTIONS_FAIL:
      return {
        ...state,
        error: action.error,
        loading: false,
      };
    case types.FILTER_TRANSACTIONS_ASYNC:
      return {
        ...state,
        params: action.params,
        loading: true,
      };
    default:
      return state;
  }
}
