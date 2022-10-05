import { Card } from "antd";
import { Typography } from "antd";
import { Link } from "react-router-dom";
const { Title } = Typography;
const QuestionCard = (props) => {
	return (
		<Link to={props.to}>
			<Card style={{ width: 800, marginBottom: 20, cursor: "pointer" }}>
				<Title level={4}>{props.title}</Title>
				<p style={{ paddingLeft: 10 }}>{props.content}</p>
			</Card>
		</Link>
	);
};

export default QuestionCard;
