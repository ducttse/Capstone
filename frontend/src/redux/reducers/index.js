import { combineReducers } from "redux";
import counter from "./counter.reducer.js";
import questionForm from "./questionForm.reducer.js";
import questionsList from "./questionList.reducer.js";
import question from "./question.reducer.js";

export default combineReducers({
	counter,
	questionForm,
	questionsList,
	question
});
