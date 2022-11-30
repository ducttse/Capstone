import { Button, Col, InputNumber } from "antd";
import { Typography } from "antd";
import { useState } from "react";
const { Title } = Typography;

const WithdrawPapge = () => {
	const [number, setNumber] = useState(0);
	const handleInputNumber = (value) => {
		setNumber(value);
	};
	const handleWithdraw = () => {};
	return (
		<>
			<Title level={5}>Rút tiền</Title>
			<Col style={{ marginTop: "10px" }}>
				<InputNumber
					value={number}
					onChange={handleInputNumber}
					min={1000}
					max={5_000_000}
					addonAfter="VND"
					defaultValue={0}
				/>
				<Button onClick={handleWithdraw}>Rút tiền</Button>
			</Col>
		</>
	);
};

export default WithdrawPapge;
