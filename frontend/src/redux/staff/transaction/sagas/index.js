import { takeLatest } from "redux-saga/effects";
import * as types from "../constants/index.js";
import { loadTransactionAsync } from "./transaction.saga.js";
import {
  loadTransactionListAsync,
  filterTransactionsAsync,
} from "./transactionsList.saga.js";

export default function* transactionSaga() {
  yield takeLatest(
    types.LOAD_TRANSACTIONS_LIST_ASYNC,
    loadTransactionListAsync
  );
  yield takeLatest(types.LOAD_TRANSACTION_DETAIL_ASYNC, loadTransactionAsync);
  // yield takeLatest(types.CREATE_TRANSACTION_ASYNC, createTransactionAsync);
  // yield takeLatest(types.UPDATE_TRANSACTION_ASYNC, updateTransactionAsync);
  yield takeLatest(types.FILTER_TRANSACTIONS_ASYNC, filterTransactionsAsync);
}
