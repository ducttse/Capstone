import moment from "moment";
import * as types from "../constants/student.constant.js";

const initState = {
  loading: false,
  isLoadSuccess: false,
  isSuccess: false,
  error: "",
  data: null,
};

export default function student(state = initState, action) {
  switch (action.type) {
    // detail
    case types.LOAD_STUDENT_DETAIL_SUCCESS:
      return {
        ...state,
        data: {
          ...action.payload,
          dateOfBirth: moment(action.payload.dateOfBirth) 
        },
        isLoadSuccess: true,
        error: "",
        loading: false,
      };
    case types.LOAD_STUDENT_DETAIL_FAIL:
      return {
        ...state,
        data: null,
        isLoadSuccess: false,
        error: action.error,
        loading: false,
      };
    case types.LOAD_STUDENT_DETAIL_ASYNC:
      return {
        ...state,
        loading: true,
      };
    // update
    case types.UPDATE_STUDENT_SUCCESS:
      return {
        ...state,
        data: { ...action.payload },
        error: "",
        loading: true,
        isSuccess: true,
      };
    case types.UPDATE_STUDENT_FAIL:
      return {
        ...state,
        error: action.error,
        isSuccess: false,
        loading: false,
      };
    case types.UPDATE_STUDENT_ASYNC:
      return {
        ...state,
        loading: true,
      };
    //disable
    case types.DISABLE_STUDENT_SUCCESS:
      return {
        ...state,
        error: "",
        isSuccess: true,
        loading: false,
      };

    case types.DISABLE_STUDENT_FAIL:
      return {
        ...state,
        error: action.error,
        loading: false,
        isSuccess: false,
      };
    case types.DISABLE_STUDENT_ASYNC:
      return {
        ...state,
        loading: true,
      };
    case types.CLEAR_STUDENT_MESSAGE:
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
