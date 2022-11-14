import { Card } from "antd";
import { Typography } from "antd";
import { Interweave } from "interweave";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
const { Title } = Typography;
const QuestionCard = ({ to, title, content }) => {
	return (
		<Link to={to}>
			<Card
				style={{
					width: "100%",
					cursor: "pointer",
					maxHeight: "25vh"
				}}
			>
				<Title level={4}>{title}</Title>
				<div
					style={{
						paddingLeft: 10
					}}
				>
					<Interweave content={content} />
				</div>
			</Card>
		</Link>
	);
};

export default QuestionCard;
