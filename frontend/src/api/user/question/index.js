import { getStudenId } from "../../../utils/getStudentId.js";
import AxiosInstance from "../../axiosInstance.js";

const getUserId = () => JSON.parse(localStorage.user).id;

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

export const deleteQuestion = async (id) => {
	const data = await AxiosInstance.delete(`/questions/${id}`);
	const { message, statusCode } = data;
	return message === "Success" && statusCode === 200;
};

export const getRequestList = async (id) => {
	try {
		const { statusCode, message, data } = await AxiosInstance.get(
			`/questions/registerByQuestionId/${id}`
		);
		return data.data ?? {};
	} catch (error) {
		console.log(error);
	}
	return {};
};

export const registerAnswer = async (id) => {
	try {
		const { statusCode, message, data } = await AxiosInstance.post(
			`/questions/register/${id}/${getStudenId()}`
		);
		return message === "Success" && statusCode === 200;
	} catch (error) {
		console.log(error);
	}
	return false;
};

export const cancelRegisterAnswer = async (id) => {
	try {
		const { statusCode, message, data } = await AxiosInstance.delete(
			`/questions/register/${id}/${getStudenId()}`
		);
		return message === "Success" && statusCode === 200;
	} catch (error) {
		console.log(error);
	}
	return false;
};

export const acceptRegisterAnswer = async (
	id,
	requestStudentId,
	time,
	meetingId
) => {
	const request = {
		studentId: getStudenId(),
		questionId: id,
		bookingTime: time,
		meetingUrl: meetingId
	};
	try {
		const { statusCode, message, data } = await AxiosInstance.put(
			`/questions/register/${id}/${requestStudentId}`,
			request
		);
		return message === "Success" && statusCode === 200;
	} catch (error) {
		console.log(error);
	}
	return false;
};

export const getBooking = async (id) => {
	try {
		const { statusCode, message, data } = await AxiosInstance.get(
			`/booking/ByQuestionId/${id}`
		);
		return data.data ?? {};
	} catch (error) {
		console.log(error);
	}
	return {};
};

export const getAcceptedUser = async (id) => {
	try {
		const { statusCode, message, data } = await AxiosInstance.get(
			`/questions/acceptedRegisterByQuestionId/${id}`
		);
		return data.data?.studentId ?? {};
	} catch (error) {
		console.log(error);
	}
	return {};
};
