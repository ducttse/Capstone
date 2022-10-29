import { call, put, takeEvery } from "redux-saga/effects";
import { getQuestions } from "../../api/questions.js";
import { loadQuestionsList } from "../actions/questionList.action.js";
import { LOAD_QUESTIONS_LIST_ASYNC } from "../constants/questionList.constant.js";

export function* loadListAsync() {
	// call api simulate
	const questions = yield call(getQuestions);
	yield put(loadQuestionsList(questions));
}

export function* watchLoadListAsync() {
	yield takeEvery(LOAD_QUESTIONS_LIST_ASYNC, loadListAsync);
}
