import { call, put } from "redux-saga/effects";
import { getTransactionDetailApi } from "../../../../api/staff/transaction/transactionApi";
import { loadTransactionDetailFail, loadTransactionDetailSuccess } from "../actions/transaction.action";

export function* loadTransactionAsync(action) {
  try {
    const response = yield call(getTransactionDetailApi, action.transactionId);
    if (response.statusCode < 300) {
      yield put(loadTransactionDetailSuccess(response.data));
    }
  } catch (error) {
    yield put(loadTransactionDetailFail(error.response.data.message));
  }
}

// export function* createTransactionAsync(action) {
//   try {
//     const response = yield call(createTransactionApi, action.transaction);
//     if (response.statusCode < 300) {
//       yield put(createTransactionSuccess());
//     }
//   } catch (error) {
//     yield put(createTransactionFail(error.response.data.message));
//   }
// }

// export function* updateTransactionAsync(action) {
//   try {
//     yield call(updateTransactionProfileApi, action.transactionId, action.transaction);
//     yield put(updateTransactionSuccess());
//   } catch (error) {
//     yield put(updateTransactionFail(error.response.data.message));
//   }
// }

