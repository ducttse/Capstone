import { takeLatest } from "redux-saga/effects";
import * as types from "../constants/index.js";
import { loadIssueAsync } from "./issue.saga.js";
import {
  loadIssueListAsync,
  searchIssuesAsync,
} from "./issuesList.saga.js";

export default function* issueSaga() {
  yield takeLatest(
    types.LOAD_ISSUES_LIST_ASYNC,
    loadIssueListAsync
  );
  yield takeLatest(types.LOAD_ISSUE_DETAIL_ASYNC, loadIssueAsync);
  // yield takeLatest(types.UPDATE_ISSUE_ASYNC, updateIssueAsync);
  yield takeLatest(types.FILTER_ISSUES_ASYNC, searchIssuesAsync);
}
