import { combineReducers } from "redux";
import auth from "./auth.reducer.js";
import forgotPassword from "./forgotPassword.reducer";
import otp from "./otp.reducer";


const AuthReducer = {
	auth,
	otp,
	forgotPassword
};

export default AuthReducer;
