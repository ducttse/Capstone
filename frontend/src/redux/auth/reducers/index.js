import { combineReducers } from "redux";
import auth from "./auth.reducer.js";
import forgotPassword from "./forgotPassword.reducer";
import sendOtp from "./sendOtp.reducer";
import submitOtp from "./submitOtp.reducer";
import register from "./register.reducer.js";


const AuthReducer = {
	auth,
	register,
	sendOtp,
	submitOtp,
	forgotPassword
};

export default AuthReducer;
