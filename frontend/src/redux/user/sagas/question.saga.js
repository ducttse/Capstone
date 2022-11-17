import { call, put } from "redux-saga/effects";
import { comment } from "../../../api/user/question/index.js";
import { getQuestionByID } from "../../../api/user/questions/index.js";
import {
	loadDetailAsync,
	loadQuestionDetail
} from "../actions/question.action.js";

export function* loadQuestionAsync(action) {
	try {
		const question = yield call(getQuestionByID, action.questionId);
		yield put(loadQuestionDetail(question));
	} catch (error) {
		console.log(error);
	}
}

export function* createCommentAsync(action) {
	try {
		const result = yield call(
			comment,
			action.questionId,
			action.commentContent
		);
		if (!result) throw new Error("failed to comment");
		yield put(loadDetailAsync(action.questionId));
	} catch (error) {
		console.log(error);
	}
}
