import {
	EDIT_FORM_QUESTION_UPDATE,
	LOAD_EDIT_FORM,
	LOAD_EDIT_FORM_ASYNC,
	REQUEST_EDIT_QUESTION
} from "../constants/editQuestionForm.constant.js";

export const loadEditQuestionForm = (payload) => {
	return {
		type: LOAD_EDIT_FORM,
		payload: payload
	};
};

export const loadEditQuestionFormAsync = (id) => {
	return {
		type: LOAD_EDIT_FORM_ASYNC,
		questionId: id
	};
};

export function updateEditQuestionForm(payload) {
	return {
		type: EDIT_FORM_QUESTION_UPDATE,
		payload: payload
	};
}

export function requestEditQuestion(id, payload) {
	return {
		type: REQUEST_EDIT_QUESTION,
		questionId: id,
		payload
	};
}
