import { call, put } from "redux-saga/effects";
import { getTransactions } from "../../../api/wallet/index.js";
import { loadTransaction } from "../actions/transactions.action.js";

export function* requestGetTransactions(action) {
	const { pageSize, pageNumber } = action;
	const tran = yield call(getTransactions, pageSize, pageNumber);
	yield put(loadTransaction(tran));
}
