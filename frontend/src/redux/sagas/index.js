import { all } from "redux-saga/effects";
import { watchIncrementAsync } from "./counter.saga.js";
import { watchLoadQuestionAsync } from "./question.saga.js";
import { watchloadListAsync } from "./questionList.saga.js";

export default function* rootSaga() {
	yield all([
		watchIncrementAsync(),
		watchloadListAsync(),
		watchLoadQuestionAsync()
	]);
}
