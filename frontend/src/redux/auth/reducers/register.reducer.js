
import * as types from "../constants/register.constant";

const initialState = {
	user: {
		fullName: "",
		email: "",
		password: "",
		confirmPassword: ""
	},
	error : "",
	isSuccess: false,

}

export default function register(state = initialState, action) {
	switch (action.type) {

		case types.REGISTER_ASYNC:
			return {
				...state,
				user: action.user,
			};

		case types.REGISTER_SUCCESS:
			return {
				...state,
				user: action.user,
				isSuccess: true,
			};

		case types.REGISTER_FAIL:
			return {
				...state,
				error: action.error,
				isSuccess: false,
			};
		
		case types.CLEAR_REGISTER_STATE:
			return {
				...state,
				user: null,
				error: "",
				isSuccess: false,
			};

		default:
			return state;
	}
}
