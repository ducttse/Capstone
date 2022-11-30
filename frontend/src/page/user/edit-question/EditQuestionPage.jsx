import {
	Button,
	Col,
	Form,
	Input,
	InputNumber,
	Modal,
	Row,
	Select
} from "antd";
import { useDispatch, useSelector } from "react-redux";
import BackButton from "../../../common/BackButton.jsx";
import RichTextEditor from "../../../common/RichTextEditor.jsx";
import UploadFileButton from "../questions/components/UploadFileButton.jsx";
import CustomSpin from "../../../common/CustomSpin.jsx";
import {
	loadEditQuestionFormAsync,
	requestEditQuestion,
	updateEditQuestionForm
} from "../../../redux/user/actions/editQuestionForm.action.js";
import { useHistory, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const SubjectsMap = (majors = []) => {
	const map = {};
	for (const m of majors) {
		map[m.id] = m.subjects;
	}
	return map;
};

const EditQuestionPage = () => {
	const { id } = useParams();
	const [form] = Form.useForm();
	const { data, loading } = useSelector((state) => state.editQuestionForm);
	const dispatch = useDispatch();
	const history = useHistory();
	const { data: majors } = useSelector((state) => state.majorItems);
	const [subjects, setSubjects] = useState([]);
	const [subjectId, setSubjectId] = useState(null);

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

	const handleMajorChange = (value) => {
		setSubjects(SubjectsMap(majors)[value]);
	};

	useEffect(() => {
		loadQuestionAsync(id);
	}, []);

	useEffect(() => {
		const { subjectId, majorId, ...rest } = data;
		handleMajorChange(data.majorId);
		setSubjectId(subjectId);
		form.setFieldsValue(rest);
	}, [loading]);

	useEffect(() => {
		if (!data.subject) {
			form.setFieldsValue({ ...data, subjectId });
		}
	}, [subjects]);

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
				>
					<Form.Item
						rules={[{ required: true, message: "Không được bỏ trống" }]}
						name="title"
						label="Tiêu đề"
					>
						<Input />
					</Form.Item>
					<Form.Item
						rules={[{ required: true, message: "Không được bỏ trống" }]}
						name="shortContent"
						label="Tóm tắt nội dung"
					>
						<Input />
					</Form.Item>
					<Form.Item
						rules={[{ required: true, message: "Không được để trống" }]}
						name="content"
						label="Nội dung"
					>
						<RichTextEditor />
					</Form.Item>
					<Form.Item
						rules={[{ required: true, message: "Không được để trống" }]}
						name="price"
						label="Giá"
					>
						<InputNumber />
					</Form.Item>
					<Form.Item
						rules={[{ required: true, message: "Không được để trống" }]}
						name="majorId"
						label="Ngành học"
					>
						<Select
							onChange={handleMajorChange}
							options={majors.map((m) => ({
								label: m.name,
								value: m.id
							}))}
						/>
					</Form.Item>
					<Form.Item
						rules={[{ required: true, message: "Không được để trống" }]}
						name="subjetcId"
						label="Môn học"
					>
						<Select
							options={subjects.map((m) => ({
								label: m.name,
								value: m.id
							}))}
						/>
					</Form.Item>
					<Form.Item
						rules={[{ required: false }]}
						name="questionImageUrls"
						label=""
					>
						<UploadFileButton />
					</Form.Item>
					<Button type="primary" htmlType="submit">
						Lưu
					</Button>
				</Form>
			</Col>
		</Row>
	);
};
export default EditQuestionPage;
