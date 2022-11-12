import { call, put } from "redux-saga/effects";
import { getModerators, searchModApi } from "../../../api/admin/morderatorAPIs";
import { loadModeratorsList, searchModerators } from "../actions/moderatorsList.action.js";

export function* loadModeratorListAsync() {
	// call api simulate
	const moderators = yield call(getModerators);
	yield put(loadModeratorsList(moderators));
}

export function* searchModeratorsAsync(action) {
	// call api simulate
	const moderators = yield call(searchModApi, action.searchValue );
	yield put(searchModerators(moderators));
}
