import { Typography } from "antd";
import { Interweave } from "interweave";
import CustomSpin from "../../../common/CustomSpin.jsx";
import UserInfo from "./UserInfo.jsx";
const { Title } = Typography;
const QuestionDetail = ({ data }) => {
	return (
		<>
			<UserInfo user={data.user} createdTime={data.createdTime} />
			<Title level={3}>{data.title}</Title>
			<Interweave content={data.content} />
		</>
	);
};

export default QuestionDetail;
