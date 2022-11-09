import { Descriptions, Typography } from "antd";
import { useLocation } from "react-router-dom";
import BackButton, { getPreviousPath } from "../../../common/BackButton.jsx";

const { Link } = Typography;

const BookingPage = () => {
	const location = useLocation();

	return (
		<>
			<BackButton to={`${getPreviousPath(location.pathname)}`} />
			<Descriptions title="Meeting">
				<Descriptions.Item label="Thời gian">
					03:01 25/11/2022
				</Descriptions.Item>
				<Descriptions.Item label="Link">
					<Link
						href={`http://localhost:4000/?meetingid=brve-13q7-1cie&username=Long Trần`}
						target="_blank"
					>
						Meeting
					</Link>
				</Descriptions.Item>
			</Descriptions>
			<Descriptions style={{ marginTop: "20px" }} title="Thông tin người hẹn">
				<Descriptions.Item label="UserName">Zhou Maomao</Descriptions.Item>
				<Descriptions.Item label="Telephone">1810000000</Descriptions.Item>
			</Descriptions>
		</>
	);
};

export default BookingPage;
