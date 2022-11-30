import { call, put } from "redux-saga/effects";
import { getTransactions } from "../../../api/wallet/index.js";
import { loadTransaction } from "../actions/transactions.action.js";

export function* requestGetTransactions() {
	const tran = yield call(getTransactions);
	yield put(loadTransaction(tran));
}
