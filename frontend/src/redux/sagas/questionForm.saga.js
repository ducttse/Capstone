import { call, put, takeEvery } from "redux-saga/effects";
import { getQuestionByID } from "../../api/questions.js";
import { loadEditQuestionForm } from "../actions/questionForm.action.js";
import { LOAD_EDIT_QUESTION_ASYNC } from "../constants/questionForm.constant.js";

export function* loadQuestionAsync(action) {
	// call api simulate
	const question = yield call(getQuestionByID, action.questionId);
	yield put(loadEditQuestionForm(question));
}

export function* watchloadLoadQuestionAsync() {
	yield takeEvery(LOAD_EDIT_QUESTION_ASYNC, loadQuestionAsync);
}
