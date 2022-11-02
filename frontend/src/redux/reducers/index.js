import { combineReducers } from "redux";
import questionForm from "./questionForm.reducer.js";
import questionsList from "./questionList.reducer.js";
import question from "./question.reducer.js";
import auth from "./auth.reducer.js";
import editQuestionForm from "./editQuestionForm.reducer.js";
export default combineReducers({
	questionForm,
	questionsList,
	question,
	editQuestionForm,
	auth
});
