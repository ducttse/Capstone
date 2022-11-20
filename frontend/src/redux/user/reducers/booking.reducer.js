import {
	GET_BOOKING,
	GET_BOOKING_ASYNC
} from "../constants/booking.constant.js";

const initState = {
	loading: true,
	error: null,
	data: null
};
export default function booking(state = initState, action) {
	switch (action.type) {
		case GET_BOOKING:
			return {
				...state,
				loading: false,
				data: { ...action.payload }
			};
		case GET_BOOKING_ASYNC:
			return {
				...state,
				loading: true
			};
		default:
			return state;
	}
}
