import {
	LOAD_QUESTIONS_LIST,
	LOAD_QUESTIONS_LIST_ASYNC
} from "../constants/questionList.constant.js";

const initState = {
	loading: true,
	error: null,
	data: [],
	pagination: {}
};

export default function questionsList(state = initState, action) {
	// payload
	/* 
		{questions,
		pagination}
	*/
	switch (action.type) {
		case LOAD_QUESTIONS_LIST:
			return {
				...state,
				data: [...action.payload.questions],
				pagination: action.payload.pagination,
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
