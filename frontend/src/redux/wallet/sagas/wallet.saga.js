import { call, put } from "redux-saga/effects";
import { getWallet } from "../../../api/wallet/index.js";
import { loadWallet } from "../actions/wallet.action.js";

export function* requestGetWallet() {
	const wallet = yield call(getWallet);
	yield put(loadWallet(wallet));
}
