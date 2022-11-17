import * as types from "../constants/otp.constant";


const initialState = {
	isSendSuccess: false, 
	error: "", 
	loading: false
};

export default function otp(state = initialState, action) {
	switch (action.type) {

		case types.SEND_OTP_SUCCESS:
			return {
				...state,
				isSendSuccess: true,
				loading: false,
				error: ""
			};
		case types.SEND_OTP_FAIL:
			return {
				...state,
				isSendSuccess: false,
				loading: false,
				error: action.payload
			};
		case types.SEND_OTP_ASYNC:
			return {
				...state,
				isSendSuccess: false,
				loading: true,
				error: ""
			};

		case types.CLEAR_SEND_OTP_STATE:
			return {
				...state,
				isSendSuccess: false,
				loading: false,
				error: ""
			};

		default:
			return state;
	}
}
