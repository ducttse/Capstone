import { Avatar, Col, Row, Typography } from "antd";
import { vnMoment } from "../../../utils/vnMoment.js";

const { Text, Title } = Typography;

const UserInfo = ({ user, createdTime }) => {
	return (
		<Row style={{ marginBottom: "10px" }}>
			<Col>
				<Avatar
					size={{
						xs: 24,
						sm: 32,
						md: 40,
						lg: 48,
						xl: 56,
						xxl: 64
					}}
				/>
			</Col>
			<Col style={{ marginLeft: "20px", paddingTop: "5px" }}>
				<Title style={{ marginBottom: "0px" }} level={5}>
					{user.fullName}
				</Title>
				<Text style={{ paddingBottom: "10px" }} type="secondary">
					{vnMoment(createdTime).format("LLL")}
				</Text>
			</Col>
		</Row>
	);
};

export default UserInfo;
