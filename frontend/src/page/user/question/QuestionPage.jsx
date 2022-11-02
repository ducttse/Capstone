import { ExclamationCircleOutlined } from "@ant-design/icons";
import { Col, Modal, Row } from "antd";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { getMeetingId } from "../../../api/meetingApi.js";
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

	// const handleCreateMeeting = async () => {
	// 	const res = await getMeetingId();
	// 	if (res.status < 300) {
	// 		console.log(res.data);
	// 	}
	// };

	const handleComment = (commentContent) => {
		dispatchCreateComment(id, commentContent);
		dispatchLoadQuestion(id);
	};

	const handleViewRequest = () => {
		history.push(`/question/${id}/requests`);
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
					numberOfRequest={data?.requestedAnswer?.length}
				/>
			</Col>
		</Row>
	);
};

export default QuestionPage;
