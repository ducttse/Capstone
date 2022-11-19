import {
	CREATE_COMMENT,
	DELETE_QUESTION,
	DELETE_QUESTION_SUCCESS,
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

export function createCommentAsync(id, comment) {
	return {
		type: CREATE_COMMENT,
		questionId: id,
		commentContent: comment
	};
}

export function deleteQuestion(id) {
	return {
		type: DELETE_QUESTION,
		questionId: id
	};
}

export function deleteSuccess() {
	return {
		type: DELETE_QUESTION_SUCCESS
	};
}
