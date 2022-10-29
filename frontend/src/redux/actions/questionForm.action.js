import {
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
