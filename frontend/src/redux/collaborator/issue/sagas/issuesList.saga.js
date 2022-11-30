import { call, put } from "redux-saga/effects";
import { searchIssuesApi, getIssuesApi } from "../../../../api/collaborator/transaction/issueApi";

import {
  loadIssuesListFail,
  loadIssuesListSuccess,
  searchIssuesFail,
  searchIssuesSuccess,
} from "../actions/issuesList.action";

export function* loadIssueListAsync() {
  // call api simulate
  try {
    const response = yield call(getIssuesApi);
    if (response.statusCode < 300) {
      yield put(loadIssuesListSuccess(response.data));
    }
  } catch (error) {
    yield put(loadIssuesListFail(error.response.data.message));
  }
}

export function* searchIssuesAsync(action) {
  // call api simulate
  try {
    const response = yield call(searchIssuesApi, action.params);
    if (response.statusCode < 300) {
      yield put(searchIssuesSuccess(response.data));
    }
  } catch (error) {
    yield put(searchIssuesFail(error.response.data.message));
  }
}
