import QuestionCard from "./components/QuestionCard.jsx";
import { Button, Col, Pagination, Row } from "antd";
import { useEffect, useState } from "react";
import MultiSelection from "./components/MultiSelection.jsx";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loadQuestionsListAsync } from "../../redux/actions/questionList.action.js";
import CustomSpin from "../../common/CustomSpin.jsx";
import { resetForm } from "../../redux/actions/questionForm.action.js";

const ITEM_PER_PAGE = 10;

const QuestionCards = ({ questions, loading }) => {
	return Array.isArray(questions)
		? questions.map((question, i) => {
				return (
					<QuestionCard
						key={i}
						title={question.title + " " + question.id}
						content={question.shortContent}
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
	const history = useHistory();
	const dispatch = useDispatch();
	const dispathResetForm = () => dispatch(resetForm());
	const dispatchLoadQuestions = () => dispatch(loadQuestionsListAsync());

	useEffect(() => {
		dispatchLoadQuestions();
	}, []);

	const [currentPage, setCurrentPage] = useState(1);

	const onChangeCurrentPage = (page, pageSize) => {
		setCurrentPage(page);
	};

	const handleCreateQuestion = () => {
		dispathResetForm();
		history.push("create-question");
	};

	return loading ? (
		<CustomSpin />
	) : (
		<>
			<Row style={{ marginBottom: 20 }}>
				<Button onClick={handleCreateQuestion} type="primary">
					Đặt câu hỏi
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
