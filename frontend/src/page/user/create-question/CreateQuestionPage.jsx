import {
	Button,
	Col,
	Form,
	Input,
	InputNumber,
	message,
	Row,
	Select
} from "antd";
import { useDispatch, useSelector } from "react-redux";
import {
	createQuestion,
	loadForm,
	updateQuestionForm
} from "../../../redux/user/actions/questionForm.action.js";
import { _ } from "lodash";
import BackButton from "../../../common/BackButton.jsx";
import RichTextEditor from "../../../common/RichTextEditor.jsx";
import UploadFileButton from "../questions/components/UploadFileButton.jsx";
import CustomSpin from "../../../common/CustomSpin.jsx";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

const SubjectsMap = (majors = []) => {
	const map = {};
	for (const m of majors) {
		map[m.id] = m.subjects;
	}
	return map;
};

const CreateQuestionPage = () => {
	const [form] = Form.useForm();
	const history = useHistory();
	const { data, loading, isCreated } = useSelector(
		(state) => state.questionForm
	);
	const { data: majors } = useSelector((state) => state.majorItems);
	const [subjects, setSubjects] = useState([]);
	const dispatch = useDispatch();
	const dispatchUpdate = (value) => dispatch(updateQuestionForm(value));
	const dispatchCreateQuestion = (payload) => dispatch(createQuestion(payload));

	const onFinish = (values) => {
		dispatchCreateQuestion(values);
		if (isCreated) {
			message.success("Đặt câu hỏi thành công");
			setTimeout(() => {
				history.push("/questions");
			}, 1500);
		} else message.error("Có lỗi xảy ra");
	};

	const onValuesChange = (_, values) => {
		dispatchUpdate(values);
	};

	const handleMajorChange = (value) => {
		setSubjects(SubjectsMap(majors)[value]);
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
						name="subjectId"
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
						Tạo câu hỏi
					</Button>
				</Form>
			</Col>
		</Row>
	);
};
export default CreateQuestionPage;
