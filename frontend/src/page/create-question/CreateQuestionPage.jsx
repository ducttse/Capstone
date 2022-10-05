import { Button, Col, Form, Input, Row, Select } from "antd";
import BackButton from "../questions/components/BackButton.jsx";
import RichTextEditor from "../questions/components/RichTextEditor.jsx";
import UploadFileButton from "../questions/components/UploadFileButton.jsx";
import "./QuestionForm.css";

const initValue = {
	name: "buibiu",
	content: "<p>bhbu</p>",
	tags: ["test1", "test2"]
};

const CreateQuestionPage = () => {
	const [form] = Form.useForm();

	const onFinish = (values) => {
		console.log(form);
		console.log(values);
	};

	return (
		<Row>
			<Col span={4}>
				<BackButton to="questions" />
			</Col>
			<Col span={14}>
				<Form
					form={form}
					layout="vertical"
					autoComplete="off"
					onFinish={onFinish}
					initialValues={{ ...initValue }}
				>
					<Form.Item
						className="bold"
						rules={[{ required: true, message: "Tiêu đề không được bỏ trống" }]}
						name="name"
						label="Tiêu đề"
					>
						<Input />
					</Form.Item>
					<Form.Item
						className="bold"
						rules={[{ required: false, message: "Phải chọn ít nhất 1 thẻ" }]}
						name="tags"
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
						rules={[
							{ required: true, message: "Nội dung không được để trống" }
						]}
						name="content"
						label="Nội dung"
					>
						<RichTextEditor />
					</Form.Item>
					<Form.Item
						className="bold"
						rules={[{ required: false }]}
						name="file"
						label=""
					>
						<UploadFileButton />
					</Form.Item>
					<Button type="primary" htmlType="submit">
						Tạo câu hỏi
					</Button>
				</Form>
			</Col>
		</Row>
	);
};
export default CreateQuestionPage;
