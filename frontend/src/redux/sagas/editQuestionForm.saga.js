import { call, put, takeEvery } from "redux-saga/effects";
import { getQuestionByID } from "../../api/questions.js";
import { loadEditQuestionForm } from "../actions/editQuestionForm.action.js";
import { LOAD_EDIT_FORM_ASYNC } from "../constants/editQuestionForm.constant.js";

export function* loadEditQuestionFormAsync(action) {
	// call api simulate
	const question = yield call(getQuestionByID, action.questionId);
	yield put(loadEditQuestionForm(question));
}

export function* watchLoadEditQuestionAsync() {
	yield takeEvery(LOAD_EDIT_FORM_ASYNC, loadEditQuestionFormAsync);
}
