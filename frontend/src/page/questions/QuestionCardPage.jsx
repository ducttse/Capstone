import QuestionCard from "./components/QuestionCard.jsx";
import { Button, Col, Pagination, Row } from "antd";
import { useEffect, useState } from "react";
import MultiSelection from "./components/MultiSelection.jsx";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loadQuestionsListAsync } from "../../redux/actions/questionList.action.js";
import CustomSpin from "../../common/CustomSpin.jsx";

const ITEM_PER_PAGE = 10;

const QuestionCards = ({ questions }) => {
	return Array.isArray(questions)
		? questions.map((question, i) => {
				return (
					<QuestionCard
						key={i}
						title={question.title + " " + question.id}
						content={question.content}
						to={`/question/${question.id}`}
						questionId={question.id}
					/>
				);
		  })
		: [];
};

const QuestionCardPage = () => {
	const { data, loading, pagination, error } = useSelector(
		(state) => state.questionsList
	);
	const dispatch = useDispatch();
	const dispatchLoadQuestions = () => dispatch(loadQuestionsListAsync());
	useEffect(() => {
		dispatchLoadQuestions();
	}, []);

	const [currentPage, setCurrentPage] = useState(1);

	const onChangeCurrentPage = (page, pageSize) => {
		setCurrentPage(page);
	};

	return loading ? (
		<CustomSpin />
	) : (
		<>
			<Row style={{ marginBottom: 20 }}>
				<Button type="primary">
					<Link to="/create-question">Đặt câu hỏi</Link>
				</Button>
			</Row>
			<Row>
				<Col span={16}>
					<QuestionCards questions={data} />
					<Pagination
						total={data.length}
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
