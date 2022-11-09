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

const fakeComment = [
	{
		id: "1",
		fullName: "Vũ Thị Thuỳ Dương",
		createdTime: "2022-09-08 06:46:10",
		avatar: "",
		content: `<p><span>auris nunc turpis, facilisis quis purus non, sollicitudin cursus enim. Integer non tortor bibendum, euismod orci nec, fermentum urna.</span></p>`
	},
	{
		id: "2",
		fullName: "Trần Bảo Long",
		createdTime: "2022-09-08 06:46:10",
		avatar: "",
		content: `<p><span >auris nunc turpis, facilisis quis purus non, sollicitudin cursus enim. Integer non tortor bibendum, euismod orci nec, fermentum urna.</span></p>`
	}
];

const fakeRequests = [
	{
		id: "1",
		fullName: "Vũ Thị Thuỳ Dương",
		createdTime: "2022-09-08 06:46:10",
		avatar: "",
		reputation: 3.4,
		questionAnswered: 10
	},
	{
		id: "2",
		fullName: "Micheal",
		createdTime: "2022-09-08 06:46:10",
		avatar: "",
		reputation: 4,
		questionAnswered: 6
	},
	{
		id: "3",
		fullName: "Nguyễn Ngọc Bình",
		createdTime: "2022-09-08 06:46:10",
		avatar: "",
		reputation: 2,
		questionAnswered: 3
	},
	{
		id: "3",
		fullName: "Long Trần",
		createdTime: "2022-09-08 06:46:10",
		avatar: "",
		reputation: 2,
		questionAnswered: 3
	},
	{
		id: "3",
		fullName: "Hiếu",
		createdTime: "2022-09-08 06:46:10",
		avatar: "",
		reputation: 2,
		questionAnswered: 3
	}
];

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

	const handleViewBooking = () => {
		history.push(`/question/${id}/booking`);
	};

	useEffect(() => {
		console.log(id);
		dispatchLoadQuestion(id);
	}, []);

	return loading ? (
		<CustomSpin />
	) : (
		<Row>
			<Col span={20}>
				<QuestionDetail data={data} loading={loading} />
				<CommentSection
					comments={data.comments ?? fakeComment}
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
					numberOfRequest={data?.requestedAnswer?.length ?? fakeRequests.length}
				/>
			</Col>
		</Row>
	);
};

export default QuestionPage;
