import { Col, Modal, Row } from "antd";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import CustomSpin from "../../common/CustomSpin.jsx";
import { loadDetailAsync } from "../../redux/actions/question.action.js";
import CommentSection from "./components/CommentSection.jsx";
import QuestionActions from "./components/QuestionActions.jsx";
import QuestionDetail from "./components/QuestionDetail.jsx";

const QuestionPage = () => {
	const { id } = useParams();
	const { data, loading, error } = useSelector((state) => state.question);
	const dispatch = useDispatch();
	const history = useHistory();
	const [isModalOpen, setIsModalOpen] = useState(false);
	const dispatchLoadQuestions = (id) => dispatch(loadDetailAsync(id));

	const handleEdit = () => {
		history.push(`/edit-question/${id}`);
	};

	const showModal = () => {
		setIsModalOpen(true);
	};

	const handleOk = () => {
		setIsModalOpen(false);
	};

	const handleCancel = () => {
		setIsModalOpen(false);
	};

	useEffect(() => {
		dispatchLoadQuestions(id);
	}, []);

	return loading ? (
		<CustomSpin />
	) : (
		<Row>
			<Col span={20}>
				<QuestionDetail data={data} loading={loading} />
				<CommentSection comments={data.comments} />
			</Col>
			<Col span={3}>
				<QuestionActions
					id={id}
					onTriggleDelete={showModal}
					onTriggleEdit={handleEdit}
				/>
				<Modal
					title="Modal"
					visible={isModalOpen}
					onOk={handleOk}
					onCancel={handleCancel}
					okText="Xác nhận"
					cancelText="Huỷ"
				>
					<p></p>
				</Modal>
			</Col>
		</Row>
	);
};

export default QuestionPage;
