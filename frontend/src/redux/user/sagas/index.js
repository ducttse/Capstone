import { takeLatest } from "redux-saga/effects";
import {
	LOAD_EDIT_FORM_ASYNC,
	REQUEST_EDIT_QUESTION
} from "../constants/editQuestionForm.constant.js";
import {
	CREATE_COMMENT,
	DELETE_QUESTION,
	LOAD_QUESTION_DETAIL_ASYNC
} from "../constants/question.constant.js";
import { LOAD_QUESTIONS_LIST_ASYNC } from "../constants/questionList.constant.js";
import { loadEditQuestionFormAsync } from "./editQuestionForm.saga.js";
import {
	createCommentAsync,
	loadQuestionAsync,
	requestDelete
} from "./question.saga.js";
import { loadListAsync } from "./questionList.saga.js";
import { requestEdit } from "./editQuestionForm.saga.js";
import { LOAD_MAJORS_ASYNC } from "../constants/majorItems.contstant.js";
import { loadMajorsAsync } from "./majorItems.saga.js";
import { CREATE_QUESTION } from "../constants/questionForm.constant.js";
import { requestCreate } from "./createQuestionForm.saga.js";

export default function* userSaga() {
	yield takeLatest(LOAD_QUESTIONS_LIST_ASYNC, loadListAsync);
	yield takeLatest(LOAD_QUESTION_DETAIL_ASYNC, loadQuestionAsync);
	yield takeLatest(LOAD_EDIT_FORM_ASYNC, loadEditQuestionFormAsync);
	yield takeLatest(CREATE_COMMENT, createCommentAsync);
	yield takeLatest(REQUEST_EDIT_QUESTION, requestEdit);
	yield takeLatest(LOAD_MAJORS_ASYNC, loadMajorsAsync);
	yield takeLatest(CREATE_QUESTION, requestCreate);
	yield takeLatest(DELETE_QUESTION, requestDelete);
}
