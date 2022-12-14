import { call, put } from "redux-saga/effects";
import { getQuestionByID } from "../../../api/user/questions/index.js";
import { loadEditQuestionForm } from "../actions/editQuestionForm.action.js";
import {} from "../constants/editQuestionForm.constant.js";

export function* loadEditQuestionFormAsync(action) {
	// call api simulate
	const question = yield call(getQuestionByID, action.questionId);
	yield put(loadEditQuestionForm(question));
}

export function* requestEdit(action) {
	// yield call(editQuestion, action.questionId, action.payload);
}
