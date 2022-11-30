import { all } from "redux-saga/effects";
import authSaga from "../auth/sagas/index.js";
import moderatorSaga from "../moderator/sagas/index.js";
import profileSaga from "../profile/sagas/index.js";
import userSaga from "../user/sagas/index.js";
import walletSaga from "../wallet/sagas/index.js";
export default function* rootSaga() {
	yield all([
		userSaga(),
		moderatorSaga(),
		authSaga(),
		profileSaga(),
		walletSaga()
	]);
}
