import * as types from "../constants/otp.constant";

const initialState = {
	isSubmitSuccess: false,
	error: "", 
	loading: false
};

export default function submitOtp(state = initialState, action) {
	switch (action.type) {

		case types.SUBMIT_OTP_SUCCESS:
			return {
				...state,
				isSubmitSuccess: true,
				error: ""
			};
		case types.SUBMIT_OTP_FAIL:
			return {
				...state,
				isSubmitSuccess: false,
				error: action.payload
			};
		case types.SUBMIT_OTP_ASYNC:
			return {
				...state,
				isSubmitSuccess: false,
				loading: true,
			};

		case types.CLEAR_SUBMIT_OTP_STATE:
			return {
				...state,
				isSubmitSuccess: false,
				loading: false,
				error: ""
			};

		default:
			return state;
	}
}