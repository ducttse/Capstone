import {
	CHANGE_PAGE,
	LOAD_TRANSACTION,
	LOAD_TRANSACTION_ASYNC
} from "../constants/transactions.constant.js";

export const loadTransactionAsync = (pageSize = 10, pageNumber = 1) => {
	return {
		type: LOAD_TRANSACTION_ASYNC,
		pageSize,
		pageNumber
	};
};

export const loadTransaction = (payload) => {
	return {
		type: LOAD_TRANSACTION,
		payload
	};
};

export const changePage = (pageNumber) => {
	return {
		type: CHANGE_PAGE,
		pageNumber
	};
};
