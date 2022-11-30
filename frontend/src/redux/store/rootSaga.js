import { all } from "redux-saga/effects";
import authSaga from "../auth/sagas/index.js";
import collaboratorSaga from "../admin/collaborator/sagas/index.js";
import moderatorSaga from "../admin/moderator/sagas/index.js";
import profileSaga from "../profile/sagas/index.js";
import userSaga from "../user/sagas/index.js";
import studentSaga from "../staff/student/sagas/index.js";
import majorSaga from "../staff/category/major/sagas/index.js";
import subjectSaga from "../staff/category/subject/sagas/index.js";
import transactionSaga from "../staff/transaction/sagas/index.js";
import issueSaga from "../collaborator/issue/sagas/index.js";

export default function* rootSaga() {
  yield all([
    userSaga(),
    moderatorSaga(),
    collaboratorSaga(),
    majorSaga(),
    subjectSaga(),
    studentSaga(),
    transactionSaga(),
    issueSaga(),
    authSaga(),
    profileSaga(),
  ]);
}
