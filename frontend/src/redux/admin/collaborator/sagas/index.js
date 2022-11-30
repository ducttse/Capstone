import { takeLatest } from "redux-saga/effects";
import * as types from "../constants/index.js";
import {createCollaboratorAsync, disableCollaboratorAsync, loadCollaboratorAsync, updateCollaboratorAsync } from "./collaborator.saga.js";
import { loadCollaboratorListAsync, searchCollaboratorsAsync } from "./collaboratorList.saga.js";

export default function* collaboratorSaga() {
	yield takeLatest(types.LOAD_COLLABORATORS_LIST_ASYNC, loadCollaboratorListAsync);
	yield takeLatest(types.LOAD_COLLABORATOR_DETAIL_ASYNC, loadCollaboratorAsync);
	yield takeLatest(types.CREATE_COLLABORATOR_ASYNC, createCollaboratorAsync);
	yield takeLatest(types.UPDATE_COLLABORATOR_ASYNC, updateCollaboratorAsync);
	yield takeLatest(types.DISABLE_COLLABORATOR_ASYNC, disableCollaboratorAsync);
	yield takeLatest(types.SEARCH_COLLABORATORS_ASYNC, searchCollaboratorsAsync);
}
