import { takeLatest } from "redux-saga/effects";
import { LOAD_TRANSACTION_ASYNC } from "../constants/transactions.constant.js";
import { LOAD_WALLET_ASYNC } from "../constants/wallet.constant.js";
import { requestGetTransactions } from "./transactions.saga.js";
import { requestGetWallet } from "./wallet.saga.js";

export default function* walletSaga() {
	yield takeLatest(LOAD_WALLET_ASYNC, requestGetWallet);
	yield takeLatest(LOAD_TRANSACTION_ASYNC, requestGetTransactions);
}
