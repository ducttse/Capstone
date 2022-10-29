import { all } from "redux-saga/effects";
import { watchLoadEditQuestionAsync } from "./editQuestionForm.saga.js";
import { watchLoadQuestionAsync } from "./question.saga.js";
import { watchLoadListAsync } from "./questionList.saga.js";

export default function* rootSaga() {
	yield all([
		watchLoadListAsync(),
		watchLoadQuestionAsync(),
		watchLoadEditQuestionAsync()
	]);
}
