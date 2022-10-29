import {
	EDIT_FORM_QUESTION_UPDATE,
	EDIT_FORM_RESET,
	LOAD_EDIT_FORM,
	LOAD_EDIT_FORM_ASYNC
} from "../constants/index.js";

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
		case EDIT_FORM_QUESTION_UPDATE:
			return {
				...state,
				data: {
					...action.payload
				}
			};
		case LOAD_EDIT_FORM:
			return {
				...state,
				loading: false,
				data: {
					...action.payload
				}
			};
		case LOAD_EDIT_FORM_ASYNC: {
			return {
				...state,
				loading: true
			};
		}
		case EDIT_FORM_RESET:
			return {
				...initState
			};
		default:
			return state;
	}
}
