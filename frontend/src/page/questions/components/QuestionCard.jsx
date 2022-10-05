import { Card } from "antd";
import { Typography } from "antd";
import { Link } from "react-router-dom";
const { Title } = Typography;
const QuestionCard = ({ to, title, content, questionId }) => {
	return (
		<Link to={to}>
			<Card style={{ width: "100%", marginBottom: 20, cursor: "pointer" }}>
				<Title level={4}>{title}</Title>
				<p style={{ paddingLeft: 10 }}>{content}</p>
			</Card>
		</Link>
	);
};

export default QuestionCard;
