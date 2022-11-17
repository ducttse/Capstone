import { call, put } from "redux-saga/effects";
import { createQuestion } from "../../../api/user/question/index.js";
import { createSuccess } from "../actions/questionForm.action.js";

export function* requestCreate(action) {
	const isCreated = yield call(createQuestion, action.payload);
	console.log("request", isCreated);
	if (isCreated) yield put(createSuccess());
}
