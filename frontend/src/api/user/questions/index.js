import AxiosInstance from "../../axiosInstance.js";

export const getQuestions = async (pageSize = 1, pageNumber = 1) => {
	const queryParams = {
		pageSize,
		pageNumber
	};

	const { data } = await AxiosInstance.get("/questions", {
		params: queryParams
	});
	const {
		statusCode,
		message,
		data: questionsData,
		metaData: pagination
	} = data;
	return statusCode < 300 && message === "Success"
		? {
				questions: questionsData,
				pagination
		  }
		: {
				questions: [],
				pagination: {
					totalCount: 0
				}
		  };
};

export const getQuestionByID = async (id) => {
	const { statusCode, message, data } = await AxiosInstance.get(
		`/questions/${id}`
	);
	console.log(data.data);
	return data.data ?? {};
};
