import {
	LOAD_QUESTION_DETAIL,
	LOAD_QUESTION_DETAIL_ASYNC
} from "../constants/question.constant.js";

const initState = {
	loading: true,
	error: null,
	data: null
};

//! delete later

const requestedAnswer = [
	{
		id: "1",
		fullName: "AAAAAA",
		createdTime: "2022-09-08 06:46:10",
		avatar: "",
		reputation: 3.4,
		questionAnswered: 10
	},
	{
		id: "2",
		fullName: "Micheal",
		createdTime: "2022-09-08 06:46:10",
		avatar: "",
		reputation: 4,
		questionAnswered: 6
	},
	{
		id: "3",
		fullName: "Nguyễn Ngọc Bình",
		createdTime: "2022-09-08 06:46:10",
		avatar: "",
		reputation: 2,
		questionAnswered: 3
	},
	{
		id: "3",
		fullName: "Long Trần",
		createdTime: "2022-09-08 06:46:10",
		avatar: "",
		reputation: 2,
		questionAnswered: 3
	},
	{
		id: "3",
		fullName: "Hiếu",
		createdTime: "2022-09-08 06:46:10",
		avatar: "",
		reputation: 2,
		questionAnswered: 3
	}
];

const comments = [
	{
		id: "1",
		fullName: "Vũ Thị Thuỳ Dương",
		createdTime: "2022-09-08 06:46:10",
		avatar: "",
		content: `<p><span>auris nunc turpis, facilisis quis purus non, sollicitudin cursus enim. Integer non tortor bibendum, euismod orci nec, fermentum urna.</span></p>`
	},
	{
		id: "2",
		fullName: "Trần Bảo Long",
		createdTime: "2022-09-08 06:46:10",
		avatar: "",
		content: `<p><span >auris nunc turpis, facilisis quis purus non, sollicitudin cursus enim. Integer non tortor bibendum, euismod orci nec, fermentum urna.</span></p>`
	}
];

export default function question(state = initState, action) {
	switch (action.type) {
		case LOAD_QUESTION_DETAIL:
			return {
				...state,
				data: { ...action.payload, requestedAnswer, comments },
				loading: false
			};
		case LOAD_QUESTION_DETAIL_ASYNC:
			return {
				...state,
				loading: true
			};
		default:
			return state;
	}
}
