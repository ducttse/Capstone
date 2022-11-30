import {
	LOAD_WALLET,
	LOAD_WALLET_ASYNC
} from "../constants/wallet.constant.js";

const initState = {
	loading: true,
	error: null,
	data: null
};

export default function wallet(state = initState, action) {
	switch (action.type) {
		case LOAD_WALLET_ASYNC:
			return {
				...state,
				loading: true
			};
		case LOAD_WALLET:
			return {
				...state,
				data: {
					...action.payload
				},
				loading: false
			};
		default:
			return state;
	}
}
