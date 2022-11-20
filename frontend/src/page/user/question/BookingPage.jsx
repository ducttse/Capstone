import { Descriptions, Typography } from "antd";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import BackButton, { getPreviousPath } from "../../../common/BackButton.jsx";
import { getBookingAsync } from "../../../redux/user/actions/booking.action.js";

const { Link } = Typography;

const BookingPage = () => {
	const history = useHistory();
	const location = useLocation();
	const dispatch = useDispatch();
	const { data: question, loading: questionLoading } = useSelector(
		(state) => state.question
	);

	const dispatchLoadBooking = (id) => dispatch(getBookingAsync(id));

	const handleChooseProfile = (id) => {
		history.push(`/profile/${id}`);
	};

	useEffect(() => {
		console.log(question.id);
		dispatchLoadBooking(question.id);
	}, []);

	return (
		<>
			<BackButton to={`${getPreviousPath(location.pathname)}`} />
			<div style={{ marginTop: "25px", marginLeft: "20px" }}>
				<Descriptions title="Meeting">
					<Descriptions.Item label="Thời gian">
						03:01 25/11/2022
					</Descriptions.Item>
					<Descriptions.Item label="Link">
						<Link
							href={`https://video-app-liart.vercel.app/?meetingid=brve-13q7-1cie&username=Long Trần`}
							target="_blank"
						>
							Meeting
						</Link>
					</Descriptions.Item>
				</Descriptions>
				<Descriptions style={{ marginTop: "20px" }} title="Thông tin người hẹn">
					<Descriptions.Item label="Người dùng">
						<Link onClick={() => handleChooseProfile(1)}>Trần Bảo Long</Link>
					</Descriptions.Item>
					<Descriptions.Item label="Rating" style={{ fontWeight: "bold" }}>
						3.4
					</Descriptions.Item>
				</Descriptions>
			</div>
		</>
	);
};

export default BookingPage;
