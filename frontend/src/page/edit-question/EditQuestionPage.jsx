import { Button, Col, Form, Input, Modal, Row, Select } from "antd";
import { useDispatch, useSelector } from "react-redux";
import BackButton from "../questions/components/BackButton.jsx";
import RichTextEditor from "../../common/RichTextEditor.jsx";
import UploadFileButton from "../questions/components/UploadFileButton.jsx";
import CustomSpin from "../../common/CustomSpin.jsx";
import {
	loadEditQuestionFormAsync,
	requestEditQuestion,
	updateEditQuestionForm
} from "../../redux/actions/editQuestionForm.action.js";
import { useHistory, useParams } from "react-router-dom";
import { useEffect } from "react";

const EditQuestionPage = () => {
	const { id } = useParams();
	const [form] = Form.useForm();
	const { data, loading } = useSelector((state) => state.editQuestionForm);
	const dispatch = useDispatch();
	const history = useHistory();

	const dispatchUpdate = (value) => dispatch(updateEditQuestionForm(value));
	const loadQuestionAsync = (id) => dispatch(loadEditQuestionFormAsync(id));
	const requestEdit = (id, data) => dispatch(requestEditQuestion(id, data));

	const onFinish = (values) => {
		// TODO: call edit question api
		console.log(values);
		console.log(data);
		requestEdit(id, values);
		Modal.success({
			content: "Lưu thành công",
			onOk() {
				history.push(`/question/${id}`);
			}
		});
	};

	const onValuesChange = (_, values) => {
		dispatchUpdate(values);
	};

	useEffect(() => {
		loadQuestionAsync(id);
	}, []);

	useEffect(() => {
		form.setFieldsValue(data);
	}, [loading]);

	return loading ? (
		<CustomSpin />
	) : (
		<Row>
			<Col span={4}>
				<BackButton to={`/question/${id}`} />
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
						Lưu thay đổi
					</Button>
				</Form>
			</Col>
		</Row>
	);
};
export default EditQuestionPage;
