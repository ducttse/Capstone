import {
	LOAD_QUESTIONS_LIST_ASYNC,
	LOAD_QUESTIONS_LIST
} from "../constants/questionList.constant.js";

export function loadQuestionsList(payload) {
	return { type: LOAD_QUESTIONS_LIST, payload };
}

export function loadQuestionsListAsync() {
	return { type: LOAD_QUESTIONS_LIST_ASYNC };
}