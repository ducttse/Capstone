import { fakeCallApi } from "./fakeCallApi.js";

const questions = [
	{
		id: "1",
		title: "Câu hỏi về cách mạng tháng ",
		content: "Cách mạng tháng 8 xảy ra lúc nào, có ý nghĩa là gì?"
	},
	{
		id: "2",
		title: "Câu hỏi về cách mạng tháng ",
		content: "Cách mạng tháng 8 xảy ra lúc nào, có ý nghĩa là gì?"
	},
	{
		id: "3",
		title: "Câu hỏi về cách mạng tháng ",
		content: "Cách mạng tháng 8 xảy ra lúc nào, có ý nghĩa là gì?"
	},
	{
		id: "4",
		title: "Câu hỏi về cách mạng tháng ",
		content: "Cách mạng tháng 8 xảy ra lúc nào, có ý nghĩa là gì?"
	},
	{
		id: "5",
		title: "Câu hỏi về cách mạng tháng ",
		content: "Cách mạng tháng 8 xảy ra lúc nào, có ý nghĩa là gì?"
	},
	{
		id: "6",
		title: "Câu hỏi về cách mạng tháng ",
		content: "Cách mạng tháng 8 xảy ra lúc nào, có ý nghĩa là gì?"
	},
	{
		id: "7",
		title: "Câu hỏi về cách mạng tháng ",
		content: "Cách mạng tháng 8 xảy ra lúc nào, có ý nghĩa là gì?"
	},
	{
		id: "8",
		title: "Câu hỏi về cách mạng tháng ",
		content: "Cách mạng tháng 8 xảy ra lúc nào, có ý nghĩa là gì?"
	},
	{
		id: "9",
		title: "Câu hỏi về cách mạng tháng ",
		content: "Cách mạng tháng 8 xảy ra lúc nào, có ý nghĩa là gì?"
	},
	{
		id: "10",
		title: "Câu hỏi về cách mạng tháng ",
		content: "Cách mạng tháng 8 xảy ra lúc nào, có ý nghĩa là gì?"
	}
];

export const getQuestions = async () => {
	await fakeCallApi(1000);
	return questions ? questions : [];
};

export const getQuestionByID = async (id) => {
	await fakeCallApi(1000);
	return questions.filter((q) => q.id == id)[0];
};
