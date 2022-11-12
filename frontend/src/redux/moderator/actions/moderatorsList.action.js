import * as types from "../constants/moderatorsList.constant.js";

export function loadModeratorsList(payload) {
	return { type: types.LOAD_MODERATORS_LIST, payload };
}

export function loadModeratorsListAsync() {
	return { type: types.LOAD_MODERATORS_LIST_ASYNC };
}

export function searchModerators(payload) {
	console.log('search mod ');
	return { type: types.SEARCH_MODERATORS, payload };
}

export function searchModeratorsAsync(value) {
	console.log('search mod async');
	return { 
		type: types.SEARCH_MODERATORS_ASYNC,
		searchValue: value	
	};
}

