import * as types from "../constants/transactionsList.constant.js";

export function loadTransactionsListSuccess(payload) {
  return { type: types.LOAD_TRANSACTIONS_LIST_SUCCCESS, payload };
}

export function loadTransactionsListFail(payload) {
  return {
    type: types.LOAD_TRANSACTIONS_LIST_SUCCCESS,
    error: payload,
  };
}

export function loadTransactionsListAsync() {
  return { type: types.LOAD_TRANSACTIONS_LIST_ASYNC };
}

export function filterTransactionsSuccess(payload) {
  return {
    type: types.FILTER_TRANSACTIONS_SUCCESS,
    payload,
  };
}

export function filterTransactionsFail(payload) {
  return {
    type: types.FILTER_TRANSACTIONS_FAIL,
    error: payload,
  };
}

export function filterTransactionsAsync(params) {
  return {
    type: types.FILTER_TRANSACTIONS_ASYNC,
    params: params,
  };
}
