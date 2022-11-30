import * as types from "../constants/issuesList.constant.js";

export function loadIssuesListSuccess(payload) {
  return { type: types.LOAD_ISSUES_LIST_SUCCCESS, payload };
}

export function loadIssuesListFail(payload) {
  return {
    type: types.LOAD_ISSUES_LIST_SUCCCESS,
    error: payload,
  };
}

export function loadIssuesListAsync() {
  return { type: types.LOAD_ISSUES_LIST_ASYNC };
}

export function searchIssuesSuccess(payload) {
  return {
    type: types.FILTER_ISSUES_SUCCESS,
    payload,
  };
}

export function searchIssuesFail(payload) {
  return {
    type: types.FILTER_ISSUES_FAIL,
    error: payload,
  };
}

export function searchIssuesAsync(params) {
  return {
    type: types.FILTER_ISSUES_ASYNC,
    params: params,
  };
}
