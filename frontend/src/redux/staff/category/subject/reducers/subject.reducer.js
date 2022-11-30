import moment from "moment";
import * as types from "../constants/subject.constant.js";

const initState = {
  loading: false,
  isLoadSuccess: false,
  isSuccess: false,
  error: "",
  data: null,
};

export default function subject(state = initState, action) {
  switch (action.type) {
    // detail
    case types.LOAD_SUBJECT_DETAIL_SUCCESS:
      return {
        ...state,
        data: {
          ...action.payload,
        },
        isLoadSuccess: true,
        error: "",
        loading: false,
      };
    case types.LOAD_SUBJECT_DETAIL_FAIL:
      return {
        ...state,
        data: null,
        isLoadSuccess: false,
        error: action.error,
        loading: false,
      };
    case types.LOAD_SUBJECT_DETAIL_ASYNC:
      return {
        ...state,
        loading: true,
      };
    //create
    case types.CREATE_SUBJECT_SUCCESS:
      return {
        ...state,
        error: "",
        isSuccess: true,
        loading: false,
      };

    case types.CREATE_SUBJECT_FAIL:
      return {
        ...state,
        error: action.error,
        isSuccess: false,
        loading: false,
      };
    case types.CREATE_SUBJECT_ASYNC:
      return {
        ...state,
        loading: true,
      };
    // update
    case types.UPDATE_SUBJECT_SUCCESS:
      return {
        ...state,
        data: { ...action.payload },
        error: "",
        loading: true,
        isSuccess: true,
      };
    case types.UPDATE_SUBJECT_FAIL:
      return {
        ...state,
        error: action.error,
        isSuccess: false,
        loading: false,
      };
    case types.UPDATE_SUBJECT_ASYNC:
      return {
        ...state,
        loading: true,
      };
    //disable
    case types.DISABLE_SUBJECT_SUCCESS:
      return {
        ...state,
        error: "",
        isSuccess: true,
        loading: false,
      };

    case types.DISABLE_SUBJECT_FAIL:
      return {
        ...state,
        error: action.error,
        loading: false,
        isSuccess: false,
      };
    case types.DISABLE_SUBJECT_ASYNC:
      return {
        ...state,
        loading: true,
      };
    case types.CLEAR_SUBJECT_MESSAGE:
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
