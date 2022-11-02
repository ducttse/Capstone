import {
	LOAD_QUESTION_DETAIL,
	LOAD_QUESTION_DETAIL_ASYNC
} from "../constants/question.constant.js";

const initState = {
	loading: true,
	error: null,
	data: null
};

export default function question(state = initState, action) {
	switch (action.type) {
		case LOAD_QUESTION_DETAIL:
			return {
				...state,
				data: { ...action.payload },
				loading: false
			};
		case LOAD_QUESTION_DETAIL_ASYNC:
			return {
				...state,
				loading: true
			};
		default:
			return state;
	}
}
