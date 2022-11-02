import { call, put, takeEvery } from "redux-saga/effects";
import { createComment, getQuestionByID } from "../../../api/questions.js";
import { requestEditQuestion } from "../actions/editQuestionForm.action.js";
import {
	loadDetailAsync,
	loadQuestionDetail
} from "../actions/question.action.js";
import { REQUEST_EDIT_QUESTION } from "../constants/editQuestionForm.constant.js";
import {
	CREATE_COMMENT,
	LOAD_QUESTION_DETAIL_ASYNC
} from "../constants/question.constant.js";

export function* loadQuestionAsync(action) {
	const question = yield call(getQuestionByID, action.questionId);
	yield put(loadQuestionDetail(question));
}

export function* watchLoadQuestionAsync() {
	yield takeEvery(LOAD_QUESTION_DETAIL_ASYNC, loadQuestionAsync);
}

export function* createCommentAsync(action) {
	yield call(createComment, action.questionId, action.commentContent);
}

export function* watchCreateCommentAsync() {
	yield takeEvery(CREATE_COMMENT, createCommentAsync);
}
