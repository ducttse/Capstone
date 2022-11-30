import {
	LOAD_TRANSACTION,
	LOAD_TRANSACTION_ASYNC
} from "../constants/transactions.constant.js";

const initState = {
	loading: true,
	error: null,
	data: null
};

export default function transactions(state = initState, action) {
	switch (action.type) {
		case LOAD_TRANSACTION_ASYNC:
			return {
				...state,
				loading: true
			};
		case LOAD_TRANSACTION:
			return {
				...state,
				data: [...action.payload.transactions],
				pagination: action.payload.pagination,
				loading: false
			};
		default:
			return state;
	}
}
