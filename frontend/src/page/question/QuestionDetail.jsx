import { Button } from "antd";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import CustomSpin from "../../common/CustomSpin.jsx";
import { loadDetailAsync } from "../../redux/actions/question.action.js";

const QuestionDetail = () => {
	const { data, loading, error } = useSelector((state) => state.question);
	const dispatch = useDispatch();
	const { id } = useParams();
	const dispatchLoadQuestions = (id) => dispatch(loadDetailAsync(id));
	useEffect(() => {
		dispatchLoadQuestions(id);
	}, []);
	return loading ? (
		<CustomSpin />
	) : (
		<>
			<h3>{data.title}</h3>
			<p>{data.id}</p>
			<p>{data.content}</p>
		</>
	);
};

export default QuestionDetail;
