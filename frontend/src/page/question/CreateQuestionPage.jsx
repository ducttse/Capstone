import { Button, Col, Form, Input, Select } from "antd";
import RichTextEditor from "./components/RichTextEditor.jsx";
import UploadFileButton from "./components/UploadFileButton.jsx";
import "./QuestionForm.css";
const CreateQuestionPage = () => {
	const [form] = Form.useForm();
	return (
		<Col span={14} offset={4}>
			<Form form={form} layout="vertical" autoComplete="off">
				<Form.Item
					className="bold"
					rules={[{ required: true }]}
					name="name"
					label="Tiêu đề"
				>
					<Input />
				</Form.Item>
				<Form.Item
					className="bold"
					rules={[{ required: true }]}
					name="age"
					label="Thẻ"
				>
					<Select
						mode="multiple"
						allowClear
						style={{
							width: "100%"
						}}
						placeholder="Tìm kiếm thẻ"
					></Select>
				</Form.Item>
				<Form.Item
					className="bold"
					rules={[{ required: true }]}
					name="age"
					label="Nội dung"
				>
					<RichTextEditor />
				</Form.Item>
				<Form.Item
					className="bold"
					rules={[{ required: true }]}
					name="file"
					label=""
				>
					<UploadFileButton />
				</Form.Item>
				<Form.Item
					className="bold"
					rules={[{ required: true }]}
					name="file"
					label="Số tiền cho câu hỏi"
				>
					<Input />
				</Form.Item>
				<Button type="primary">Tạo câu hỏi</Button>
			</Form>
		</Col>
	);
};
export default CreateQuestionPage;
