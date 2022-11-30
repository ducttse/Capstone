import { call, put } from "redux-saga/effects";
import { getIssueDetailApi } from "../../../../api/collaborator/transaction/issueApi";
import { loadIssueDetailFail, loadIssueDetailSuccess } from "../actions/issue.action";

export function* loadIssueAsync(action) {
  try {
    const response = yield call(getIssueDetailApi, action.issueId);
    if (response.statusCode < 300) {
      yield put(loadIssueDetailSuccess(response.data));
    }
  } catch (error) {
    yield put(loadIssueDetailFail(error.response.data.message));
  }
}

// export function* createIssueAsync(action) {
//   try {
//     const response = yield call(createIssueApi, action.issue);
//     if (response.statusCode < 300) {
//       yield put(createIssueSuccess());
//     }
//   } catch (error) {
//     yield put(createIssueFail(error.response.data.message));
//   }
// }

// export function* updateIssueAsync(action) {
//   try {
//     yield call(updateIssueProfileApi, action.issueId, action.issue);
//     yield put(updateIssueSuccess());
//   } catch (error) {
//     yield put(updateIssueFail(error.response.data.message));
//   }
// }

