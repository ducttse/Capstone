import { ExclamationCircleOutlined } from "@ant-design/icons";
import { Button, Col, message, Modal, Row } from "antd";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import CustomSpin from "../../../common/CustomSpin.jsx";
import {
	createCommentAsync,
	deleteQuestion,
	loadDetailAsync
} from "../../../redux/user/actions/question.action.js";
import { getStudenId } from "../../../utils/getStudentId.js";
import CommentSection from "./components/CommentSection.jsx";
import QuestionActions from "./components/QuestionActions.jsx";
import QuestionDetail from "./components/QuestionDetail.jsx";
import {
	registerAnswer,
	cancelRegisterAnswer,
	getAcceptedUser
} from "../../../api/user/question/index.js";

const QuestionPage = () => {
	const { id } = useParams();
	const { data, loading, error } = useSelector((state) => state.question);
	const dispatch = useDispatch();
	const history = useHistory();
	const [isRequested, setIsRequested] = useState(false);
	const [isAccepted, setIsAccepted] = useState(false);
	const dispatchLoadQuestion = (id) => dispatch(loadDetailAsync(id));
	const dispatchCreateComment = (id, comment) =>
		dispatch(createCommentAsync(id, comment));
	const dispatchDeleteQuestion = (id) => dispatch(deleteQuestion(id));

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
				dispatchDeleteQuestion(id);
				history.push("/questions");
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

	const handleRequestToAnswer = async () => {
		// TODO: call api to request answer
		setIsRequested(!isRequested);

		if (isRequested) {
			cancelRegisterAnswer(id);
		} else {
			registerAnswer(id);
		}

		message.success(
			isRequested ? "Huỷ đăng ký thành công" : "Đăng ký thành công"
		);
	};

	useEffect(() => {
		dispatchLoadQuestion(id);
	}, []);

	const handleCheckAcceptedUser = async () => {
		const userId = await getAcceptedUser(id);
		console.log("line 90", userId == getStudenId());
		if (userId == getStudenId()) {
			setIsAccepted(true);
		} else setIsAccepted(false);
	};

	useEffect(() => {
		// set isRequested
		if (data?.requestedAnswer.length > 0) {
			const isRequestedStudent = !!data.requestedAnswer.find(
				(s) => s.id == getStudenId()
			);
			if (isRequestedStudent) {
				setIsRequested(true);
			}
		} else setIsRequested(false);

		// check accepted User
		if (data?.status == 1) {
			handleCheckAcceptedUser();
		}
	}, [data]);

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
					status={data.status}
					id={data?.studentId}
					onTriggleDelete={handleDelete}
					onTriggleEdit={handleEdit}
					onTriggleViewRequestList={handleViewRequest}
					handleViewBooking={handleViewBooking}
					isRequested={isRequested}
					isAccepted={isAccepted}
					numberOfRequest={data?.requestedAnswer?.length}
					onTriggleRequestAnswer={handleRequestToAnswer}
				/>
			</Col>
		</Row>
	);
};

export default QuestionPage;
