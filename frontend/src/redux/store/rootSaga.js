import { all } from "redux-saga/effects";
import userSaga from "../user/sagas/index.js";

export default function* rootSaga() {
	yield all([userSaga()]);
}