import { call, put } from "redux-saga/effects";
import { createComment } from "../../../api/questions.js";
import { getQuestionByID } from "../../../api/user/questions/index.js";
import { loadQuestionDetail } from "../actions/question.action.js";

export function* loadQuestionAsync(action) {
	const question = yield call(getQuestionByID, action.questionId);
	yield put(loadQuestionDetail(question));
}

export function* createCommentAsync(action) {
	yield call(createComment, action.questionId, action.commentContent);
}
