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

export const createQuestion = (payload) => {
	console.log(payload);
	const {
		title,
		content,
		shortContent,
		subjectId,
		majorId,
		questionImageUrls
	} = payload;

	const { data } = AxiosInstance.post("/questions", {
		studentId: 4,
		title,
		content,
		shortContent,
		createdTime: new Date().toISOString(),
		price: 0,
		subjectId,
		majorId,
		questionImageUrls
	});
};
