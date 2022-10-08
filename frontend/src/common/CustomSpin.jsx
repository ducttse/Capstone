import { Spin } from "antd";

const CustomSpin = () => {
	return (
		<div
			style={{
				margin: "20px 0",
				marginBottom: "20px",
				padding: "30px 50px",
				textAlign: "center"
			}}
		>
			<Spin size="large" />
		</div>
	);
};

export default CustomSpin;
