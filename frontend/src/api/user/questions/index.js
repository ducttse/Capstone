import AxiosInstance from "../../axiosInstance.js";

export const getQuestions = async (pageSize = 1, pageNumber = 1) => {
	const queryParams = {
		pageSize,
		pageNumber
	};
	try {
		const { data } = await AxiosInstance.get("/questions", {
			params: queryParams
		});
		const {
			statusCode,
			message,
			data: questionsData,
			metaData: pagination
		} = data;
		if (statusCode < 300 && message === "Success")
			return {
				questions: questionsData,
				pagination
			};
		else throw new Error("get failed");
	} catch (error) {
		console.log(error);
	}
	return {
		questions: [],
		pagination: {
			totalCount: 0,
			pageSize: 0
		}
	};
};

export const getQuestionByID = async (id) => {
	try {
		const { statusCode, message, data } = await AxiosInstance.get(
			`/questions/${id}`
		);
		console.log(statusCode);
		return data.data ?? {};
	} catch (error) {
		console.log(error);
	}
	return {};
};
