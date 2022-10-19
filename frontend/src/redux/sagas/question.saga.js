import { call, put, takeEvery } from "redux-saga/effects";
import { getQuestionByID } from "../../api/questions.js";
import { loadQuestionDetail } from "../actions/question.action.js";
import { LOAD_QUESTION_DETAIL_ASYNC } from "../constants/question.constant.js";

export function* loadQuestionAsync(action) {
	const question = yield call(getQuestionByID, action.questionId);
	yield put(loadQuestionDetail(question));
}

export function* watchLoadQuestionAsync() {
	yield takeEvery(LOAD_QUESTION_DETAIL_ASYNC, loadQuestionAsync);
}
