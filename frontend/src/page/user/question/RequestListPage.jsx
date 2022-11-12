import { CheckOutlined, CloseOutlined } from "@ant-design/icons";
import { Avatar, Card, Col, Descriptions, Modal, Row } from "antd";
import { useSelector } from "react-redux";
import Button from "antd-button-color";
import { useEffect, useState } from "react";
import BookingForm from "./components/BookingForm.jsx";
import BackButton, { getPreviousPath } from "../../../common/BackButton.jsx";
import { useLocation } from "react-router-dom";
const { Meta } = Card;

const DeclineButton = () => {
	return (
		<Button icon={<CloseOutlined />} type="primary" danger>
			Từ chối
		</Button>
	);
};

const AcceptButton = ({ onClick }) => {
	return (
		<Button onClick={onClick} icon={<CheckOutlined />} type="success">
			Đồng ý
		</Button>
	);
};

const RequestList = ({ data, onSelectRequest, onAcceptRequest }) => {
	return data.requestedAnswer ? (
		data.requestedAnswer?.map((request, index) => {
			return (
				<div key={index} onClick={() => onSelectRequest(index)}>
					<Card
						style={{ width: "100%", marginTop: 16, cursor: "pointer" }}
						actions={[
							<DeclineButton key="decline" />,
							<AcceptButton onClick={onAcceptRequest} key="accept" />
						]}
					>
						<Meta
							avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
							title={request.fullName}
							description={request.reputation}
						/>
					</Card>
				</div>
			);
		})
	) : (
		<>Nothing to show</>
	);
};

const requestedAnswer = [
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

const UserDetail = ({ data }) => {
	// TODO: call api to get user details
	return (
		<Descriptions title="Thông tin người dùng" bordered layout="vertical">
			<Descriptions.Item label="Tên">{data?.fullName}</Descriptions.Item>
			<Descriptions.Item label="Số câu hỏi đã trả lời">
				{data?.questionAnswered}
			</Descriptions.Item>
			<Descriptions.Item label="Chuyên ngành">
				Kỹ thuật phần mềm
			</Descriptions.Item>
		</Descriptions>
	);
};

const RequestListPage = () => {
	const { data, loading, error } = useSelector((state) => state.question);
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [selectedIndex, setIndex] = useState(1);
	const location = useLocation();

	const showModal = () => {
		setIsModalOpen(true);
	};

	const handleOk = () => {
		setIsModalOpen(false);
	};

	const handleCancel = () => {
		setIsModalOpen(false);
	};

	const handleSelectRequest = (id) => {
		setIndex(id);
	};

	const getDetail = () => {
		return data.requestedAnswer[selectedIndex];
	};

	useEffect(() => {}, []);

	return (
		<>
			<BackButton to={`${getPreviousPath(location.pathname)}`} />
			<Row>
				<Col span={8} style={{ maxHeight: "80vh", overflowY: "scroll" }}>
					<RequestList
						data={data}
						onSelectRequest={handleSelectRequest}
						onAcceptRequest={showModal}
						onDeclineRequest={() => {}}
					/>
				</Col>
				<Col span={16} style={{ padding: "20px", border: "1px" }}>
					<UserDetail data={getDetail()} />
				</Col>
			</Row>

			<BookingForm
				title="Hẹn lịch meeting"
				open={isModalOpen}
				onOk={handleOk}
				onCancel={handleCancel}
			/>
		</>
	);
};

export default RequestListPage;