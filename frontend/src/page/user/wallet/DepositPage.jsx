import { Button, Col, InputNumber } from "antd";
import { Typography } from "antd";
import { useState } from "react";
import { createPayment } from "../../../api/momo/index.js";
const { Title, Text } = Typography;

const DepositPage = () => {
	const [number, setNumber] = useState(0);
	const [status, setStatus] = useState("error");

	const handleInputNumber = (value) => {
		setNumber(value);
	};

	const isValid = () => {
		return !isNaN(number);
	};

	const handleDeposit = async () => {
		if (isValid()) {
			const url = await createPayment("test fe app", number);
			window.location.href = url;
		}
	};
	return (
		<>
			<Title level={5}>Nạp tiền</Title>
			<Col style={{ marginTop: "10px" }}>
				<InputNumber
					value={number}
					onChange={handleInputNumber}
					min={1000}
					max={5_000_000}
					addonAfter="VND"
					defaultValue={0}
				/>
				<Button onClick={handleDeposit}>Nạp tiền</Button>
			</Col>
			<Col style={{ marginTop: "10px" }}>
				<Text>Giá trị phải là số trong khoảng 1.000 tới 5.000.000.000 VND</Text>
			</Col>
		</>
	);
};

export default DepositPage;
