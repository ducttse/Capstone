import {
	LOAD_QUESTIONS_LIST,
	LOAD_QUESTIONS_LIST_ASYNC
} from "../constants/questionList.constant.js";

const initState = {
	loading: true,
	error: null,
	data: [],
	pagination: {
		current: 1
	}
};

export default function questionsList(state = initState, action) {
	switch (action.type) {
		case LOAD_QUESTIONS_LIST:
			return {
				...state,
				data: [...action.payload],
				loading: false
			};
		case LOAD_QUESTIONS_LIST_ASYNC:
			return {
				...state,
				loading: true
			};
		default:
			return state;
	}
}
