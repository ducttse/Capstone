import { Button } from "antd";

const QuestionActions = ({ id, onTriggleDelete, onTriggleEdit }) => {
	return (
		<>
			{id == 2 ? (
				<>
					<Button
						size="large"
						type="primary"
						style={{ marginTop: "5px", minWidth: "100%" }}
						onClick={() => onTriggleEdit()}
					>
						Chỉnh sửa
					</Button>
					<Button
						size="large"
						type="primary"
						style={{ marginTop: "5px", minWidth: "100%" }}
						onClick={() => onTriggleDelete()}
					>
						Xoá
					</Button>
					<Button
						size="large"
						type="primary"
						style={{ marginTop: "5px", minWidth: "100%" }}
					>
						Tạo meeting
					</Button>{" "}
				</>
			) : (
				<Button size="large" type="primary" style={{ minWidth: "100%" }}>
					Đăng ký trả lời
				</Button>
			)}
		</>
	);
};

export default QuestionActions;
