import QuestionCard from "./components/QuestionCard.jsx";
import { Button, Col, Pagination, Row, Space } from "antd";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loadQuestionsListAsync } from "../../../redux/user/actions/questionList.action.js";
import CustomSpin from "../../../common/CustomSpin.jsx";
import { resetForm } from "../../../redux/user/actions/questionForm.action.js";
import MajorCollapse from "./components/MajorCollapse.jsx";
import { loadMajorsAsync } from "../../../redux/user/actions/majorItems.action.js";

const ITEM_PER_PAGE = 10;

const QuestionCards = ({ questions, loading }) => {
	return Array.isArray(questions) ? (
		<Space
			direction="vertical"
			size="middle"
			style={{
				display: "flex"
			}}
		>
			{questions.map((question, i) => {
				return (
					<QuestionCard
						key={i}
						title={question.title}
						content={question.shortContent}
						to={`/question/${question.id}`}
						questionId={question.id}
					/>
				);
			})}
		</Space>
	) : (
		[]
	);
};

const QuestionCardPage = () => {
	const { data, loading, pagination, error } = useSelector(
		(state) => state.questionsList
	);
	const {
		data: majors,
		loading: majorLoading,
		error: majorError
	} = useSelector((state) => state.majorItems);

	const history = useHistory();
	const dispatch = useDispatch();

	const dispathResetForm = () => dispatch(resetForm());
	const dispatchLoadQuestions = (page) =>
		dispatch(loadQuestionsListAsync(ITEM_PER_PAGE, page));
	const dispatchloadMajors = () => dispatch(loadMajorsAsync());

	useEffect(() => {
		dispatchLoadQuestions(1);
		dispatchloadMajors();
	}, []);

	const onChangeCurrentPage = (page) => {
		dispatchLoadQuestions(page);
	};

	const handleCreateQuestion = () => {
		dispathResetForm();
		history.push("create-question");
	};

	return loading ? (
		<CustomSpin />
	) : (
		<>
			<Row>
				<Button onClick={handleCreateQuestion} type="primary">
					Đặt câu hỏi
				</Button>
			</Row>
			<Row>
				<Col span={16}>
					<QuestionCards questions={data} />
					<Pagination
						total={pagination.totalCount}
						current={pagination.currentPage}
						pageSize={pagination.pageSize}
						onChange={onChangeCurrentPage}
					/>
				</Col>
				<Col span={6} offset={1}>
					<MajorCollapse majors={majors} />
				</Col>
			</Row>
		</>
	);
};

export default QuestionCardPage;
