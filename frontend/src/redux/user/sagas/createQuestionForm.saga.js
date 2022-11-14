import { call } from "redux-saga/effects";
import { createQuestion } from "../../../api/user/question/index.js";

export function* requestCreate(action) {
	yield call(createQuestion, action.payload);
}
