import {
	EDIT_FORM_QUESTION_UPDATE,
	LOAD_EDIT_FORM,
	LOAD_EDIT_FORM_ASYNC
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
