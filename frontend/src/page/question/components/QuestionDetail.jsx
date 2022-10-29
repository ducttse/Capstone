import { Typography } from "antd";
import { Interweave } from "interweave";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import CustomSpin from "../../../common/CustomSpin.jsx";
import UserInfo from "./UserInfo.jsx";
const { Title } = Typography;
const QuestionDetail = ({ data, loading }) => {
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
