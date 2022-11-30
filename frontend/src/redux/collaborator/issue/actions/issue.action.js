import * as types from "../constants/issue.constant.js";

// mod detail

export function loadIssueDetailSuccess(payload) {
  return {
    type: types.LOAD_ISSUE_DETAIL_SUCCESS,
    payload,
  };
}

export function loadIssueDetailFail(payload) {
  return {
    type: types.LOAD_ISSUE_DETAIL_FAIL,
    error: payload,
  };
}

export function loadIssueDetailAsync(id) {
  return {
    type: types.LOAD_ISSUE_DETAIL_ASYNC,
    issueId: id,
  };
}

// create

// export function createIssueSuccess() {
//   return {
//     type: types.CREATE_ISSUE_SUCCESS,
//   };
// }

// export function createIssueFail(payload) {
//   return {
//     type: types.CREATE_ISSUE_FAIL,
//     error: payload,
//   };
// }

// export function creaeteIssueAsync(issue) {
//   return {
//     type: types.CREATE_ISSUE_ASYNC,
//     issue: issue,
//   };
// }

// //update

// export function updateIssueSuccess(payload) {
//   return {
//     type: types.UPDATE_ISSUE_SUCCESS,
//     payload,
//   };
// }

// export function updateIssueFail(payload) {
//   return {
//     type: types.UPDATE_ISSUE_FAIL,
//     error: payload,
//   };
// }

// export function updateIssueAsync(id, issue) {
//   return {
//     type: types.UPDATE_ISSUE_ASYNC,
//     issueId: id,
//     issue: issue,
//   };
// }

// // disable

// export function disableIssueSuccess() {
//   return {
//     type: types.DISABLE_ISSUE_SUCCESS,
//   };
// }

// export function disableIssueFail(payload) {
//   return {
//     type: types.DISABLE_ISSUE_FAIL,
//     error: payload,
//   };
// }

// export function diableIssueAsync(id) {
//   return {
//     type: types.DISABLE_ISSUE_ASYNC,
//     accountId: id,
//   };
// }

export function clearIssueMessage(id) {
  return {
    type: types.CLEAR_ISSUE_MESSAGE,
  };
}
