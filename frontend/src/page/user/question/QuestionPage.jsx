import { ExclamationCircleOutlined } from "@ant-design/icons";
import { Col, message, Modal, Row } from "antd";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import CustomSpin from "../../../common/CustomSpin.jsx";
import {
	createCommentAsync,
	loadDetailAsync
} from "../../../redux/user/actions/question.action.js";
import CommentSection from "./components/CommentSection.jsx";
import QuestionActions from "./components/QuestionActions.jsx";
import QuestionDetail from "./components/QuestionDetail.jsx";

const QuestionPage = () => {
	const { id } = useParams();
	const { data, loading, error } = useSelector((state) => state.question);
	const dispatch = useDispatch();
	const history = useHistory();
	const [isRequested, setIsRequested] = useState(false);
	const dispatchLoadQuestion = (id) => dispatch(loadDetailAsync(id));
	const dispatchCreateComment = (id, comment) =>
		dispatch(createCommentAsync(id, comment));

	const handleEdit = () => {
		history.push(`/edit-question/${id}`);
	};

	const handleDelete = () => {
		Modal.confirm({
			title: "Xác nhận",
			icon: <ExclamationCircleOutlined />,
			content: "Bạn có chắc muốn xoá câu hỏi này không?",
			okText: "Xác nhận",
			okType: "danger",
			cancelText: "Không",
			onOk() {
				// TODO: call delete question api
				console.log("deleted");
			},
			onCancel() {
				console.log("Cancel");
			}
		});
	};

	const handleComment = (commentContent) => {
		dispatchCreateComment(id, commentContent);
	};

	const handleViewRequest = () => {
		history.push(`/question/${id}/requests`);
	};

	const handleViewBooking = () => {
		history.push(`/question/${id}/booking`);
	};

	const handleRequestToAnswer = () => {
		// TODO: call api to request answer
		setIsRequested(!isRequested);

		message.success(
			isRequested ? "Huỷ đăng ký thành công" : "Đăng ký thành công"
		);
	};

	useEffect(() => {
		dispatchLoadQuestion(id);
	}, []);

	return loading ? (
		<CustomSpin />
	) : (
		<Row>
			<Col span={20}>
				<QuestionDetail data={data} loading={loading} />
				<CommentSection
					comments={data.comments}
					handleComment={handleComment}
				/>
			</Col>
			<Col span={3}>
				<QuestionActions
					id={id}
					onTriggleDelete={handleDelete}
					onTriggleEdit={handleEdit}
					onTriggleViewRequestList={handleViewRequest}
					handleViewBooking={handleViewBooking}
					isRequested={isRequested}
					numberOfRequest={data?.requestedAnswer?.length}
					onTriggleRequestAnswer={handleRequestToAnswer}
				/>
			</Col>
		</Row>
	);
};

export default QuestionPage;
