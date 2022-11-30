import moment from "moment";
import * as types from "../constants/collaborator.constant.js";

const initState = {
  loading: false,
  isLoadSuccess: false,
  isSuccess: false,
  error: "",
  data: null,
};

export default function collaborator(state = initState, action) {
  switch (action.type) {
    // detail
    case types.LOAD_COLLABORATOR_DETAIL_SUCCESS:
      return {
        ...state,
        data: {
          ...action.payload,
          dateOfBirth: moment(action.payload.dateOfBirth),
        },
        isLoadSuccess: true,
        error: "",
        loading: false,
      };
    case types.LOAD_COLLABORATOR_DETAIL_FAIL:
      return {
        ...state,
        data: null,
        isLoadSuccess: false,
        error: action.error,
        loading: false,
      };
    case types.LOAD_COLLABORATOR_DETAIL_ASYNC:
      return {
        ...state,
        loading: true,
      };
    //create
    case types.CREATE_COLLABORATOR_SUCCESS:
      return {
        ...state,
        error: "",
        isSuccess: true,
        loading: false,
      };

    case types.CREATE_COLLABORATOR_FAIL:
      return {
        ...state,
        error: action.error,
        isSuccess: false,
        loading: false,
      };
    case types.CREATE_COLLABORATOR_ASYNC:
      return {
        ...state,
        loading: true,
      };
    // update
    case types.UPDATE_COLLABORATOR_SUCCESS:
      return {
        ...state,
        data: { ...action.payload },
        error: "",
        loading: true,
        isSuccess: true,
      };
    case types.UPDATE_COLLABORATOR_FAIL:
      return {
        ...state,
        error: action.error,
        isSuccess: false,
        loading: false,
      };
    case types.UPDATE_COLLABORATOR_ASYNC:
      return {
        ...state,
        loading: true,
      };
    //disable
    case types.DISABLE_COLLABORATOR_SUCCESS:
      return {
        ...state,
        error: "",
        isSuccess: true,
        loading: false,
      };

    case types.DISABLE_COLLABORATOR_FAIL:
      return {
        ...state,
        error: action.error,
        loading: false,
        isSuccess: false,
      };
    case types.DISABLE_COLLABORATOR_ASYNC:
      return {
        ...state,
        loading: true,
      };
    case types.CLEAR_COLLABORATOR_MESSAGE:
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
