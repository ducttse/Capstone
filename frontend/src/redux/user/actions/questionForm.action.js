import {
	CREATE_FAILED,
	CREATE_QUESTION,
	CREATE_SUCCESS,
	QUESTION_FORM_UPDATE,
	RESET_FORM
} from "../constants/questionForm.constant.js";

export function updateQuestionForm(payload) {
	return {
		type: QUESTION_FORM_UPDATE,
		payload: payload
	};
}

export function resetForm() {
	return {
		type: RESET_FORM
	};
}

export function createQuestion(payload) {
	return {
		type: CREATE_QUESTION,
		payload
	};
}

export function createSuccess() {
	return {
		type: CREATE_SUCCESS
	};
}

export function createFailed() {
	return {
		type: CREATE_FAILED
	};
}
