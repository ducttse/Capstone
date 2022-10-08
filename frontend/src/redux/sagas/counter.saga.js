import { put, call, takeEvery } from "redux-saga/effects";
import { incrementCounter } from "../actions/index.js";
import { COUNTER_INCREMENT_ASYNC } from "../constants/index.js";
export const delay = (ms) => new Promise((res) => setTimeout(res, ms));
export function* incrementAsync() {
	// call api simulate
	yield call(delay, 1000);
	yield put(incrementCounter());
}

export function* watchIncrementAsync() {
	yield takeEvery(COUNTER_INCREMENT_ASYNC, incrementAsync);
}
