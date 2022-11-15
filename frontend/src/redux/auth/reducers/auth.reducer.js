import {
	LOGIN_SUCCESS,
	LOGIN_FAIL,
	LOGOUT,
	REGISTER,
	LOGIN_ASYNC
} from "../constants/auth.constant.js";

const user = JSON.parse(localStorage.getItem("user"));

const initialState = user
	? { isLoggedIn: true, user, loading: false }
	: { isLoggedIn: false, user: null , loading: false};

export default function auth(state = initialState, action) {
	switch (action.type) {
		case LOGIN_SUCCESS:
			return {
				...state,
				isLoggedIn: true,
				user: action.payload
			};
		case LOGIN_FAIL:
			return {
				...state,
				isLoggedIn: false,
				user: null
			};
		case LOGIN_ASYNC:
			return {
				...state,
				isLoggedIn: false,
				loading: true,
			};
		case LOGOUT:
			return {
				...state,
				isLoggedIn: false,
				user: null
			};
		case REGISTER:
			return {
				...state,
				isLoggedIn: false
			};

		default:
			return state;
	}
}
