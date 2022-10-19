import {
	LOAD_EDIT_QUESTION,
	LOAD_EDIT_QUESTION_ASYNC,
	QUESTION_FORM_UPDATE,
	RESET_FORM
} from "../constants/questionForm.constant.js";

const formData = {
	title: "",
	content: "",
	tags: [],
	file: []
};

const initState = {
	loading: false,
	data: formData
};

export default function questionForm(state = initState, action) {
	switch (action.type) {
		case QUESTION_FORM_UPDATE:
			return {
				...state,
				data: {
					...action.payload
				}
			};
		case LOAD_EDIT_QUESTION:
			return {
				loading: false,
				data: {
					...action.payload
				}
			};
		case LOAD_EDIT_QUESTION_ASYNC:
			return {
				loading: true,
				...state
			};
		case RESET_FORM:
			return {
				...initState
			};
		default:
			return state;
	}
}
