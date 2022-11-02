import {
	LOGIN_SUCCESS,
	LOGIN_FAIL,
	LOGOUT,
	REGISTER
} from "../constants/auth.constant.js";

const user = JSON.parse(localStorage.getItem("user"));

const initialState = user
	? { isLoggedIn: true, user }
	: { isLoggedIn: false, user: null };

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
