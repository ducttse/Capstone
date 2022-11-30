import * as types from "../constants/moderatorsList.constant.js";

export function loadModeratorsListSuccess(payload) {
	return { type: types.LOAD_MODERATORS_LIST_SUCCCESS, payload };
}

export function loadModeratorsListFail(payload) {
	return { 
		type: types.LOAD_MODERATORS_LIST_SUCCCESS, 
		error: payload ,
	};
}

export function loadModeratorsListAsync() {
	return { type: types.LOAD_MODERATORS_LIST_ASYNC };
}

export function searchModeratorsSuccess(payload) {
	return { 
		type: types.SEARCH_MODERATORS_SUCCESS, 
		payload 
	};
}

export function searchModeratorsFail(payload) {
	return { 
		type: types.SEARCH_MODERATORS_FAIL, 
		error: payload 
	};
}

export function searchModeratorsAsync(value) {
	return { 
		type: types.SEARCH_MODERATORS_ASYNC,
		searchValue: value	
	};
}

