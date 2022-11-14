import {
	LOAD_MAJORS,
	LOAD_MAJORS_ASYNC
} from "../constants/majorItems.contstant.js";

export const loadMajors = (payload) => {
	return {
		type: LOAD_MAJORS,
		payload: payload
	};
};

export const loadMajorsAsync = () => {
	return {
		type: LOAD_MAJORS_ASYNC
	};
};
