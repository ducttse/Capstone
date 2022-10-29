import { Button, Col, Form, Input, Row, Select } from "antd";
import { useDispatch, useSelector } from "react-redux";
import {
	loadForm,
	updateQuestionForm
} from "../../redux/actions/questionForm.action.js";

import BackButton from "../questions/components/BackButton.jsx";
import RichTextEditor from "../../common/RichTextEditor.jsx";
import UploadFileButton from "../questions/components/UploadFileButton.jsx";
import CustomSpin from "../../common/CustomSpin.jsx";

const CreateQuestionPage = () => {
	const [form] = Form.useForm();
	const { data, loading } = useSelector((state) => state.questionForm);
	const dispatch = useDispatch();
	const dispatchUpdate = (value) => dispatch(updateQuestionForm(value));
	const onFinish = (values) => {
		console.log(values);
		console.log(data);
	};

	const onValuesChange = (_, values) => {
		dispatchUpdate(values);
	};

	return loading ? (
		<CustomSpin />
	) : (
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
					onValuesChange={onValuesChange}
					initialValues={{ ...data }}
				>
					<Form.Item
						rules={[{ required: true, message: "Tiêu đề không được bỏ trống" }]}
						name="title"
						label="Tiêu đề"
					>
						<Input />
					</Form.Item>
					<Form.Item
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
						rules={[
							{ required: true, message: "Nội dung không được để trống" }
						]}
						name="content"
						label="Nội dung"
					>
						<RichTextEditor />
					</Form.Item>
					<Form.Item rules={[{ required: false }]} name="file" label="">
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
