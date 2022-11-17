import AxiosInstance from "../../axiosInstance.js";

/* 
{
  "studentId": 4,
  "title": "Test",
  "description": "test",
  "content": "test",
  "shortContent": "test",
  "createdTime": "2022-11-13T17:08:18.502Z",
  "status": 1,
  "price": 0,
  "subjectId": 1,
  "majorId": 1
}
*/

export const createQuestion = async (payload) => {
	console.log(payload);
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
		studentId: 4,
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
