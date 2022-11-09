import { Typography } from "antd";
import { Interweave } from "interweave";
import CustomSpin from "../../../../common/CustomSpin.jsx";
import UserInfo from "./UserInfo.jsx";
const { Title } = Typography;

// TODO: replace in api
const fakeUser = {
	user: {
		id: "1",
		fullName: "Từ Trọng Đức"
	},
	createdTime: "2022-09-08 03:13:10"
};

const QuestionDetail = ({ data, loading }) => {
	return loading ? (
		<CustomSpin />
	) : (
		<>
			<UserInfo user={fakeUser.user} createdTime={fakeUser.createdTime} />
			<Title level={3}>{data.title}</Title>
			<Interweave content={data.content} />
		</>
	);
};

export default QuestionDetail;
