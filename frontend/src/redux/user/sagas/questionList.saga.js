import { call, put } from "redux-saga/effects";
import { getQuestions } from "../../../api/user/questions/index.js";
import { loadQuestionsList } from "../actions/questionList.action.js";

export function* loadListAsync() {
	// call api simulate
	const questions = yield call(getQuestions);
	yield put(loadQuestionsList(questions));
}
