import {
	COUNTER_INCREMENT,
	COUNTER_INCREMENT_IF_ODD,
	COUNTER_DECREMENT
} from "../constants/index.js";

export default function counter(state = 0, action) {
	switch (action.type) {
		case COUNTER_INCREMENT:
			return state + 1;
		case COUNTER_INCREMENT_IF_ODD:
			return state % 2 !== 0 ? state + 1 : state;
		case COUNTER_DECREMENT:
			return state - 1;
		default:
			return state;
	}
}
