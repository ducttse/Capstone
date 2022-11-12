import {
	LOAD_MAJORS,
	LOAD_MAJORS_ASYNC
} from "../constants/majorItems.contstant.js";

const initState = {
	loading: true,
	error: null,
	data: null
};

export default function majorItems(state = initState, action) {
	switch (action.type) {
		case LOAD_MAJORS_ASYNC:
			return {
				...state,
				loading: true
			};
		case LOAD_MAJORS:
			return {
				...state,
				data: action.payload,
				loading: false
			};
		default:
			return state;
	}
}
