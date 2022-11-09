import { ArrowLeftOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { useHistory } from "react-router-dom";

export const getPreviousPath = (path) => {
	const arr = path.split("/");
	arr.pop();
	return arr.join("/");
};

const BackButton = (props) => {
	const history = useHistory();

	function handleClick() {
		if (props.to) {
			history.push(props.to);
		}
	}

	return (
		<>
			<Button icon={<ArrowLeftOutlined />} onClick={handleClick} />
		</>
	);
};

export default BackButton;
