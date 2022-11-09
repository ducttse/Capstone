import AxiosInstance from "../../axiosInstance.js";

export const getQuestions = async () => {
	const pagination = { pageSize: 10, pageNumber: 1 };
	const { statusCode, message, data } = await AxiosInstance.get("/questions", {
		pagination
	});
	return data.data.content ?? [];
};

export const getQuestionByID = async (id) => {
	const { statusCode, message, data } = await AxiosInstance.get(
		`/questions/${id}`
	);
	console.log(data.data);
	return data.data ?? {};
};
