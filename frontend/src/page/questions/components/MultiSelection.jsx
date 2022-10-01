import { Select, Typography } from "antd";
import React from "react";
const { Option } = Select;
const { Title } = Typography;
const children = [];

for (let i = 10; i < 36; i++) {
	children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
}

const handleChange = (value) => {
	console.log(`selected ${value}`);
};

const MultiSelection = () => {
	return (
		<>
			<Title level={4}>Chọn thẻ</Title>
			<Select
				mode="multiple"
				allowClear
				style={{
					width: "100%"
				}}
				placeholder="Please select"
				defaultValue={["a10", "c12"]}
				onChange={handleChange}
			>
				{children}
			</Select>
		</>
	);
};

export default MultiSelection;
