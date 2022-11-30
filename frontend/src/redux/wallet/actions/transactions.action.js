import {
	LOAD_TRANSACTION,
	LOAD_TRANSACTION_ASYNC
} from "../constants/transactions.constant.js";

export const loadTransactionAsync = () => {
	return {
		type: LOAD_TRANSACTION_ASYNC
	};
};

export const loadTransaction = (payload) => {
	return {
		type: LOAD_TRANSACTION,
		payload
	};
};
