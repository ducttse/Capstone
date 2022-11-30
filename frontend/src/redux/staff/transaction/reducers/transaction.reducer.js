import moment from "moment";
import * as types from "../constants/transaction.constant.js";

const initState = {
  loading: false,
  isLoadSuccess: false,
  isSuccess: false,
  error: "",
  data: null,
};

export default function transaction(state = initState, action) {
  switch (action.type) {
    // detail
    case types.LOAD_TRANSACTION_DETAIL_SUCCESS:
      return {
        ...state,
        data: {
          ...action.payload,
          createdTime: moment(action.payload.createdTime),
        },
        isLoadSuccess: true,
        error: "",
        loading: false,
      };
    case types.LOAD_TRANSACTION_DETAIL_FAIL:
      return {
        ...state,
        data: null,
        isLoadSuccess: false,
        error: action.error,
        loading: false,
      };
    case types.LOAD_TRANSACTION_DETAIL_ASYNC:
      return {
        ...state,
        loading: true,
      };
    // //create
    // case types.CREATE_TRANSACTION_SUCCESS:
    //   return {
    //     ...state,
    //     error: "",
    //     isSuccess: true,
    //     loading: false,
    //   };

    // case types.CREATE_TRANSACTION_FAIL:
    //   console.log(action);

    //   return {
    //     ...state,
    //     error: action.error,
    //     isSuccess: false,
    //     loading: false,
    //   };
    // case types.CREATE_TRANSACTION_ASYNC:
    //   return {
    //     ...state,
    //     loading: true,
    //   };
    // // update
    // case types.UPDATE_TRANSACTION_SUCCESS:
    //   return {
    //     ...state,
    //     data: { ...action.payload },
    //     error: "",
    //     loading: true,
    //     isSuccess: true,
    //   };
    // case types.UPDATE_TRANSACTION_FAIL:
    //   return {
    //     ...state,
    //     error: action.error,
    //     isSuccess: false,
    //     loading: false,
    //   };
    // case types.UPDATE_TRANSACTION_ASYNC:
    //   return {
    //     ...state,
    //     loading: true,
    //   };
    // //disable
    // case types.DISABLE_TRANSACTION_SUCCESS:
    //   return {
    //     ...state,
    //     error: "",
    //     isSuccess: true,
    //     loading: false,
    //   };

    // case types.DISABLE_TRANSACTION_FAIL:
    //   return {
    //     ...state,
    //     error: action.error,
    //     loading: false,
    //     isSuccess: false,
    //   };
    // case types.DISABLE_TRANSACTION_ASYNC:
    //   return {
    //     ...state,
    //     loading: true,
    //   };
    case types.CLEAR_TRANSACTION_MESSAGE:
      return {
        ...state,
        loading: false,
        isLoadSuccess: false,
        isSuccess: false,
        error: "",
      };
    default:
      return state;
  }
}
