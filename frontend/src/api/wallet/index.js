import { getStudenId } from "../../utils/getStudentId.js";
import AxiosInstance from "../axiosInstance.js";

export const getWallet = async () => {
	try {
		const { data } = await AxiosInstance.get(
			`/wallet/ByStudentId/${getStudenId()}`
		);
		console.log(data);
		return data.data;
	} catch (err) {
		console.log(err);
	}
};

export const getTransactions = async (pageSize = 10, pageNumber = 1) => {
	const queryParams = {
		pageSize,
		pageNumber,
		studentId: getStudenId()
	};
	try {
		const { data } = await AxiosInstance.get(`/transaction/ByStudentId`, {
			params: queryParams
		});
		const {
			statusCode,
			message,
			data: transactions,
			metaData: pagination
		} = data;
		if (statusCode < 300 && message === "Success")
			return {
				transactions,
				pagination
			};
		else throw new Error("get failed");
	} catch (err) {
		console.log(err);
	}
};
