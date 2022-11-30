import { call, put } from "redux-saga/effects";
import {
  getTransactionsApi,
  filterTransactionsApi,
} from "../../../../api/staff/transaction/transactionApi";
import {
  loadTransactionsListFail,
  loadTransactionsListSuccess,
  filterTransactionsFail,
  filterTransactionsSuccess,
} from "../actions/transactionsList.action";

export function* loadTransactionListAsync() {
  // call api simulate
  try {
    const response = yield call(getTransactionsApi);
    if (response.statusCode < 300) {
      yield put(loadTransactionsListSuccess(response.data));
    }
  } catch (error) {
    yield put(loadTransactionsListFail(error.response.data.message));
  }
}

export function* filterTransactionsAsync(action) {
  // call api simulate
  try {
    const response = yield call(filterTransactionsApi, action.params);
    if (response.statusCode < 300) {
      yield put(filterTransactionsSuccess(response.data));
    }
  } catch (error) {
    yield put(filterTransactionsFail(error.response.data.message));
  }
}
