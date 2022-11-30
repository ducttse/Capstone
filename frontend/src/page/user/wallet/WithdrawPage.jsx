import { Button, Col, InputNumber } from "antd";
import { Typography } from "antd";
import { useState } from "react";
import { getWalletAvaiableBalance } from "../../../utils/getWalletId.js";
const { Title } = Typography;

const WithdrawPapge = () => {
	const [number, setNumber] = useState(0);
	// eslint-disable-next-line no-undef
	const [maxWithdrawNum, setMax] = useState(
		parseInt(getWalletAvaiableBalance())
	);
	const handleInputNumber = (value) => {
		setNumber(value);
	};
	const handleWithdraw = () => {};
	return (
		<>
			<Title level={5}>Rút tiền</Title>
			<Col>
				<p>Số dư hiện tại: {maxWithdrawNum}</p>
			</Col>
			<Col style={{ marginTop: "10px" }}>
				<InputNumber
					value={number}
					onChange={handleInputNumber}
					min={1000}
					max={maxWithdrawNum}
					addonAfter="VND"
					defaultValue={0}
				/>
				<Button onClick={handleWithdraw}>Rút tiền</Button>
			</Col>
		</>
	);
};

export default WithdrawPapge;
