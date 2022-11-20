import {
	GET_BOOKING,
	GET_BOOKING_ASYNC
} from "../constants/booking.constant.js";

export function loadBooking(payload) {
	return {
		type: GET_BOOKING,
		payload: payload
	};
}

export function getBookingAsync(id) {
	return {
		type: GET_BOOKING_ASYNC,
		questionId: id
	};
}
