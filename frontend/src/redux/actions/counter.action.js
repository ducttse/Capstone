import {
	COUNTER_DECREMENT,
	COUNTER_INCREMENT,
	COUNTER_INCREMENT_ASYNC,
	COUNTER_INCREMENT_IF_ODD
} from "../constants/index.js";

export function incrementCounter() {
	return {
		type: COUNTER_INCREMENT
	};
}

export function decrementCounter() {
	return {
		type: COUNTER_DECREMENT
	};
}

export function incrementIfOddCounter() {
	return {
		type: COUNTER_INCREMENT_IF_ODD
	};
}

export function incrementAsyncCounter() {
	return {
		type: COUNTER_INCREMENT_ASYNC
	};
}
