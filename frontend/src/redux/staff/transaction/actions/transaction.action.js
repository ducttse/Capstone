import * as types from "../constants/transaction.constant.js";

// mod detail

export function loadTransactionDetailSuccess(payload) {
  return {
    type: types.LOAD_TRANSACTION_DETAIL_SUCCESS,
    payload,
  };
}

export function loadTransactionDetailFail(payload) {
  return {
    type: types.LOAD_TRANSACTION_DETAIL_FAIL,
    error: payload,
  };
}

export function loadTransactionDetailAsync(id) {
  return {
    type: types.LOAD_TRANSACTION_DETAIL_ASYNC,
    transactionId: id,
  };
}

// create

// export function createTransactionSuccess() {
//   return {
//     type: types.CREATE_TRANSACTION_SUCCESS,
//   };
// }

// export function createTransactionFail(payload) {
//   return {
//     type: types.CREATE_TRANSACTION_FAIL,
//     error: payload,
//   };
// }

// export function creaeteTransactionAsync(transaction) {
//   return {
//     type: types.CREATE_TRANSACTION_ASYNC,
//     transaction: transaction,
//   };
// }

// //update

// export function updateTransactionSuccess(payload) {
//   return {
//     type: types.UPDATE_TRANSACTION_SUCCESS,
//     payload,
//   };
// }

// export function updateTransactionFail(payload) {
//   return {
//     type: types.UPDATE_TRANSACTION_FAIL,
//     error: payload,
//   };
// }

// export function updateTransactionAsync(id, transaction) {
//   return {
//     type: types.UPDATE_TRANSACTION_ASYNC,
//     transactionId: id,
//     transaction: transaction,
//   };
// }

// // disable

// export function disableTransactionSuccess() {
//   return {
//     type: types.DISABLE_TRANSACTION_SUCCESS,
//   };
// }

// export function disableTransactionFail(payload) {
//   return {
//     type: types.DISABLE_TRANSACTION_FAIL,
//     error: payload,
//   };
// }

// export function diableTransactionAsync(id) {
//   return {
//     type: types.DISABLE_TRANSACTION_ASYNC,
//     accountId: id,
//   };
// }

export function clearTransactionMessage(id) {
  return {
    type: types.CLEAR_TRANSACTION_MESSAGE,
  };
}
