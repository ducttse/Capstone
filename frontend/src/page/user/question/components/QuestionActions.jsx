import { Button } from "antd";
import { getStudenId } from "../../../../utils/getStudentId.js";

const QuestionActions = ({
	id,
	onTriggleDelete,
	onTriggleEdit,
	onTriggleViewRequestList,
	onTriggleRequestAnswer,
	isRequested,
	handleViewBooking,
	numberOfRequest
}) => {
	console.log(id);
	return (
		<>
			{id === getStudenId() ? (
				<>
					<Button
						size="default"
						type="primary"
						style={{ marginTop: "5px", minWidth: "100%" }}
						onClick={() => onTriggleEdit()}
					>
						Chỉnh sửa
					</Button>
					<Button
						size="default"
						type="primary"
						style={{ marginTop: "5px", minWidth: "100%" }}
						onClick={() => onTriggleDelete()}
					>
						Xoá
					</Button>
					<Button
						size="default"
						type="primary"
						style={{ marginTop: "5px", minWidth: "100%" }}
						onClick={() => onTriggleViewRequestList()}
					>
						Danh sách trả lời {`(${numberOfRequest})`}
					</Button>
					<Button
						size="default"
						type="primary"
						style={{ marginTop: "5px", minWidth: "100%" }}
						onClick={() => handleViewBooking()}
					>
						Meeting
					</Button>
				</>
			) : isRequested ? (
				<Button
					onClick={() => onTriggleRequestAnswer()}
					size="default"
					type="primary"
					style={{ minWidth: "100%" }}
					danger
				>
					Huỷ đăng ký
				</Button>
			) : (
				<Button
					onClick={() => onTriggleRequestAnswer()}
					size="default"
					type="primary"
					style={{ minWidth: "100%" }}
				>
					Đăng ký trả lời
				</Button>
			)}
		</>
	);
};

export default QuestionActions;
