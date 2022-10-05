import QuestionCard from "./components/QuestionCard.jsx";
import { Button, Col, Pagination, Row } from "antd";
import { useEffect, useState } from "react";
import MultiSelection from "./components/MultiSelection.jsx";
import { Link } from "react-router-dom";
import { getQuestions } from "../../api/questions.js";

const getItems = (data, currentPage) =>
	truncateData(data, currentPage).map((question, i) => {
		return (
			<QuestionCard
				key={i}
				title={question.title + " " + question.id}
				content={question.content}
				to={`/question/${question.id}`}
				questionId={question.id}
			/>
		);
	});

const ITEM_PER_PAGE = 5;

const truncateData = (data = [], currentPage) => {
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
		setItem(getItems(getQuestions(), currentPage));
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
						total={item.length}
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
