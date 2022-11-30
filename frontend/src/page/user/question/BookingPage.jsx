import { Descriptions, Typography } from "antd";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import BackButton, { getPreviousPath } from "../../../common/BackButton.jsx";
import CustomSpin from "../../../common/CustomSpin.jsx";
import { getBookingAsync } from "../../../redux/user/actions/booking.action.js";
import { getStudenId } from "../../../utils/getStudentId.js";
import { vnMoment } from "../../../utils/vnMoment.js";

const { Link } = Typography;

const BookingPage = () => {
	const history = useHistory();
	const location = useLocation();
	const dispatch = useDispatch();
	const { data: question, loading: questionLoading } = useSelector(
		(state) => state.question
	);
	const { data, loading } = useSelector((state) => state.booking);

	const dispatchLoadBooking = (id) => dispatch(getBookingAsync(id));

	const handleChooseProfile = (id) => {
		history.push(`/profile/${id}`);
	};

	useEffect(() => {
		dispatchLoadBooking(question.id);
	}, []);

	const isQuestioner = () => {
		return getStudenId() == data.student1.id;
	};

	return loading ? (
		<CustomSpin />
	) : (
		<>
			<BackButton to={`${getPreviousPath(location.pathname)}`} />
			<div style={{ marginTop: "25px", marginLeft: "20px" }}>
				<Descriptions title="Meeting">
					<Descriptions.Item label="Thời gian">
						{data.bookingTime ? vnMoment(data?.bookingTime).format("LLL") : ""}
					</Descriptions.Item>
					<Descriptions.Item label="Link">
						<Link
							href={`https://video-app-liart.vercel.app/?meetingid=${
								data.meetingUrl
							}&username=${
								isQuestioner() ? data.student1.fullName : data.student2.fullName
							}`}
							target="_blank"
						>
							Meeting
						</Link>
					</Descriptions.Item>
				</Descriptions>
				<Descriptions style={{ marginTop: "20px" }} title="Thông tin người hẹn">
					<Descriptions.Item label="Người dùng">
						<Link
							onClick={() =>
								handleChooseProfile(
									!isQuestioner() ? data.student1.id : data.student2.id
								)
							}
						>
							{!isQuestioner()
								? data.student1.fullName
								: data.student2.fullName}
						</Link>
					</Descriptions.Item>
					<Descriptions.Item label="Rating" style={{ fontWeight: "bold" }}>
						{!isQuestioner()
							? data.student1.reputation
							: data.student2.reputation}
					</Descriptions.Item>
				</Descriptions>
			</div>
		</>
	);
};

export default BookingPage;
