import QuestionCard from "./components/QuestionCard.jsx";
import { Button, Col, Pagination, Row } from "antd";
import { useEffect, useState } from "react";
import MultiSelection from "./components/MultiSelection.jsx";
import { Link } from "react-router-dom";
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

const getItems = (data, currentPage) =>
	truncateData(data, currentPage).map((question, i) => {
		return (
			<QuestionCard
				key={i}
				title={question.title + " " + question.id}
				content={question.content}
				to={`/question/${question.id}`}
			/>
		);
	});

const ITEM_PER_PAGE = 5;

const truncateData = (data, currentPage) => {
	const a = data.slice(
		(currentPage - 1) * ITEM_PER_PAGE,
		currentPage * ITEM_PER_PAGE
	);
	return a;
};

const QuestionCardPage = () => {
	const [item, setItem] = useState([]);
	const [currentPage, setCurrentPage] = useState(1);

	const onChangeCurrentPage = (page, pageSize) => {
		console.log("change fn current page", page);
		setCurrentPage(page);
	};

	useEffect(() => {
		setItem(getItems(questions, currentPage));
	}, [currentPage]);

	return (
		<>
			<Row style={{ marginBottom: 20 }}>
				<Button type="primary">
					<Link to="/create-question">Đặt câu hỏi</Link>
				</Button>
			</Row>
			<Row>
				<Col span={16}>
					{item ? item : <h2>No content</h2>}
					<Pagination
						total={questions.length}
						defaultCurrent={currentPage}
						pageSize={ITEM_PER_PAGE}
						onChange={onChangeCurrentPage}
					/>
				</Col>
				<Col span={6} offset={2} style={{ padding: 10 }}>
					<MultiSelection />
				</Col>
			</Row>
		</>
	);
};

export default QuestionCardPage;
