import {
	CREATE_SUCCESS,
	LOAD_EDIT_QUESTION,
	LOAD_EDIT_QUESTION_ASYNC,
	QUESTION_FORM_UPDATE,
	RESET_FORM
} from "../constants/questionForm.constant.js";

const formData = {
	title: "",
	shortContent: "",
	content: "",
	price: 0,
	majorId: 1,
	subjetcId: 1,
	questionImageUrls: []
};

const initState = {
	loading: false,
	data: formData,
	isCreated: false
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
		case CREATE_SUCCESS:
			return {
				...initState,
				isCreated: true
			};
		case RESET_FORM:
			return {
				...initState
			};
		default:
			return state;
	}
}
