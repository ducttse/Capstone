import {
	LOGIN_SUCCESS,
	LOGIN_FAIL,
	LOGOUT,
	LOGIN_ASYNC,
	CLEAR_LOGIN_MESSAGE,
	
} from "../constants/auth.constant.js";

const user = JSON.parse(localStorage.getItem("user"));

const initialState = user
	? { isLoggedIn: true, user, loading: false,error: "" }
	: { isLoggedIn: false, user: null , loading: false, error: ""};

export default function auth(state = initialState, action) {
	switch (action.type) {
		case LOGIN_SUCCESS:
			return {
				...state,
				isLoggedIn: true,
				loading: false,
				user: action.payload
			};
		case LOGIN_FAIL:
			return {
				...state,
				isLoggedIn: false,
				user: null,
				loading: false,
				error: action.error
			};
		case LOGIN_ASYNC:
			return {
				...state,
				isLoggedIn: false,
				loading: true,
			};
		case CLEAR_LOGIN_MESSAGE:
			return {
				...state,
				error: ""
			};
		case LOGOUT:
			return {
				...state,
				isLoggedIn: false,
				user: null
			};

		default:
			return state;
	}
}
