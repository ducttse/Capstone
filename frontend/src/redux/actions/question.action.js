import {
	LOAD_QUESTION_DETAIL,
	LOAD_QUESTION_DETAIL_ASYNC
} from "../constants/question.constant.js";

export function loadQuestionDetail(payload) {
	return {
		type: LOAD_QUESTION_DETAIL,
		payload
	};
}

export function loadDetailAsync(id) {
	return {
		type: LOAD_QUESTION_DETAIL_ASYNC,
		questionId: id
	};
}
