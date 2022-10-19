import { LOAD_QUESTION_DETAIL_ASYNC } from "../constants/question.constant.js";
import {
	LOAD_EDIT_QUESTION,
	LOAD_EDIT_QUESTION_ASYNC,
	LOAD_FORM,
	QUESTION_FORM_UPDATE,
	RESET_FORM
} from "../constants/questionForm.constant.js";

export function updateQuestionForm(payload) {
	return {
		type: QUESTION_FORM_UPDATE,
		payload: payload
	};
}

export function loadForm() {
	return {
		type: LOAD_FORM
	};
}

export function resetForm() {
	return {
		type: RESET_FORM
	};
}

export function loadEditQuestionForm(payload) {
	return {
		type: LOAD_EDIT_QUESTION,
		payload: payload
	};
}

export function loadEditQuestionFormAsync(id) {
	return {
		type: LOAD_EDIT_QUESTION_ASYNC,
		questionId: id
	};
}
