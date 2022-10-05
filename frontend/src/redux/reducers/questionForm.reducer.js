import { QUESTION_FORM_UPDATE } from "../constants/questionForm.constant.js";

const formData = {
	name: "",
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
		default:
			return state;
	}
}
