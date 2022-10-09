ưimport { QUESTION_FORM_UPDATE } from "../constants/questionForm.constant.js";

export function updateQuestionForm(payload) {
	return {
		type: QUESTION_FORM_UPDATE,
		payload: payload
	};
}
