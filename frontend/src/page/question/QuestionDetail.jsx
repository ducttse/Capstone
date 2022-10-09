import { Button, Typography } from "antd";
import { Interweave } from "interweave";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import CustomSpin from "../../common/CustomSpin.jsx";
import { loadDetailAsync } from "../../redux/actions/question.action.js";
import UserInfo from "./components/UserInfo.jsx";
const { Title } = Typography;
const QuestionDetail = () => {
	const { id } = useParams();
	const dispatch = useDispatch();
	const { data, loading, error } = useSelector((state) => state.question);
	const dispatchLoadQuestions = (id) => dispatch(loadDetailAsync(id));
	useEffect(() => {
		dispatchLoadQuestions(id);
	}, []);

	return loading ? (
		<CustomSpin />
	) : (
		<>
			<UserInfo user={data.user} createdTime={data.createdTime} />
			<Title level={3}>{data.title}</Title>
			<Interweave content={data.content} />
		</>
	);
};

export default QuestionDetail;
