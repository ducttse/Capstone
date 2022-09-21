import { Card } from "antd";

const QuestionCard = (props) => {
	return (
		<>
			<Card
				title={props.title}
				style={{ width: 800, marginBottom: 20, cursor: "pointer" }}
			>
				<p>{props.content}</p>
			</Card>
		</>
	);
};

export default QuestionCard;
