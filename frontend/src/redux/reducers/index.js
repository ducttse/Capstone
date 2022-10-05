import { combineReducers } from "redux";
import counter from "./counter.reducer.js";
import questionForm from "./questionForm.reducer.js";

export default combineReducers({ counter, questionForm });
