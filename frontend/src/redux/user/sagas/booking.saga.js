import { call, put } from "redux-saga/effects";
import { getBooking } from "../../../api/user/question/index.js";
import { loadBooking } from "../actions/booking.action.js";

export function* requestGetBooking(action) {
	try {
		const result = yield call(getBooking, action.questionId);
		if (!result) throw new Error("failed to get");
		yield put(loadBooking(result));
	} catch (error) {
		console.log(error);
	}
}
