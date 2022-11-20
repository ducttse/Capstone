import { combineReducers } from "redux";
import questionForm from "./questionForm.reducer.js";
import questionsList from "./questionList.reducer.js";
import question from "./question.reducer.js";
import editQuestionForm from "./editQuestionForm.reducer.js";
import majorItems from "./majorItems.reducer.js";
import booking from "./booking.reducer.js";
const UserReducer = {
	questionForm,
	questionsList,
	question,
	editQuestionForm,
	majorItems,
	booking
};

export default UserReducer;
