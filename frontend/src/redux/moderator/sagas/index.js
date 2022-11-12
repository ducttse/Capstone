import { takeLatest } from "redux-saga/effects";
import * as types from "../constants/index.js";
import {createModeratorAsync, disableModeratorAsync, loadModeratorAsync, updateModeratorAsync } from "./moderator.saga.js";
import { loadModeratorListAsync, searchModeratorsAsync } from "./moderatorList.saga.js";

export default function* moderatorSaga() {
	yield takeLatest(types.LOAD_MODERATORS_LIST_ASYNC, loadModeratorListAsync);
	yield takeLatest(types.LOAD_MODERATOR_DETAIL_ASYNC, loadModeratorAsync);
	yield takeLatest(types.CREATE_MODERATOR_ASYNC, createModeratorAsync);
	yield takeLatest(types.UPDATE_MODERATOR_ASYNC, updateModeratorAsync);
	yield takeLatest(types.DISABLE_MODERATOR_ASYNC, disableModeratorAsync);
	yield takeLatest(types.SEARCH_MODERATORS_ASYNC, searchModeratorsAsync);
}
