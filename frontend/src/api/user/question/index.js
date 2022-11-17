import AxiosInstance from "../../axiosInstance.js";

const getUserId = () => JSON.parse(localStorage.user).accountId;

export const createQuestion = async (payload) => {
	const {
		title,
		content,
		shortContent,
		subjectId,
		majorId,
		questionImageUrls,
		price
	} = payload;

	const { data } = await AxiosInstance.post("/questions", {
		studentId: getUserId(),
		title,
		content,
		shortContent,
		createdTime: new Date().toISOString(),
		price,
		subjectId,
		majorId,
		questionImageUrls
	});

	console.log(data);

	const { message, statusCode } = data;
	return message === "Success" && statusCode === 200;
};

export const comment = async (id, payload, parentId) => {
	const { comment } = payload;
	const request = {
		questionId: id,
		parentId: parentId ?? null,
		createdTime: new Date().toISOString(),
		content: comment,
		studentId: getUserId()
	};
	const { data } = await AxiosInstance.post("/comments", request);

	console.log(data);
	const { message, statusCode } = data;
	return message === "Success" && statusCode === 200;
};
