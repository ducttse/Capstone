import { call, put } from "redux-saga/effects";
import { createModeratorApi, disableModeratorApi, getModeratorByID, updateModeratorApi } from "../../../api/admin/morderatorAPIs.js";
import { createModerator, disableModerator, loadModeratorDetail, updateModerator } from "../actions/moderator.action.js";

export function* loadModeratorAsync(action) {
	const moderator = yield call(getModeratorByID, action.moderatorId);
	yield put(loadModeratorDetail(moderator));
}

export function* createModeratorAsync(action){
	yield call (createModeratorApi, action.moderator);
	yield put(createModerator());
}

export function* updateModeratorAsync(action){
	yield call (updateModeratorApi, action.moderatorId, action.moderator);
	yield put(updateModerator(action.moderator));
}

export function* disableModeratorAsync(action){
	yield call (disableModeratorApi, action.moderatorId);
	yield put(disableModerator());
}

