import { all } from "redux-saga/effects";
import {
	watchEdit,
	watchLoadEditQuestionAsync
} from "./editQuestionForm.saga.js";
import {
	watchCreateCommentAsync,
	watchLoadQuestionAsync
} from "./question.saga.js";
import { watchLoadListAsync } from "./questionList.saga.js";

export default function* rootSaga() {
	yield all([
		watchLoadListAsync(),
		watchLoadQuestionAsync(),
		watchLoadEditQuestionAsync(),
		watchCreateCommentAsync(),
		watchEdit()
	]);
}
