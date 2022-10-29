import { all } from "redux-saga/effects";
import { watchLoadQuestionAsync } from "./question.saga.js";
import { watchloadLoadQuestionAsync } from "./editQuestionForm.saga.js";
import { watchloadListAsync } from "./questionList.saga.js";

export default function* rootSaga() {
	yield all([
		watchloadListAsync(),
		watchLoadQuestionAsync(),
		watchloadLoadQuestionAsync()
	]);
}
