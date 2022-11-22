import { Avatar, Col, Row, Typography } from "antd";
import { Link } from "react-router-dom";
import { vnMoment } from "../../../../utils/vnMoment.js";

const { Text, Title } = Typography;

const UserInfo = ({ user, createdTime }) => {
	const path = `/profile/${user.id}`;
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
					<Link to={path}>{user.fullName}</Link> 
				</Title>
				<Text style={{ paddingBottom: "10px" }} type="secondary">
					{vnMoment(createdTime).format("LLL")}
				</Text>
			</Col>
		</Row>
	);
};

export default UserInfo;
