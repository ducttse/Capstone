import { Space, Table, Tag } from "antd";
import moment from "moment";

const dateFormat = "DD/MM/YYYY HH:mm";

const getTransactionType = (type) => {
	switch (type) {
		case 1:
			return "Donate";
		case 2:
			return "Rút tiền";
		case 3:
			return "Nạp tiền";
		case 4:
			return "Phí";
		default:
			return "Trả tiền";
	}
};

const getTransactionStatus = (status) => {
	console.log(status);
	switch (status) {
		case 1:
			return "Thành công";
		case 2:
			return "Không thành công";
		default:
			return "Đang chờ";
	}
};

const calculateRealAmount = (type, amount) => {
	if (type == 3) {
		return amount;
	} else {
		return -amount;
	}
};

const columns = [
	{
		title: "Thời gian",
		dataIndex: "createdTime",
		key: "createdTime",
		render: (time) => {
			return <p>{moment(time).format(dateFormat)}</p>;
		}
	},
	{
		title: "Nội dung",
		dataIndex: "description",
		key: "description"
	},
	{
		title: "Loại giao dịch",
		dataIndex: "transactionType",
		key: "transactionType",
		render: (transactionType) => {
			return <p>{getTransactionType(transactionType)}</p>;
		}
	},
	{
		title: "Số tiền",
		dataIndex: "realAmount",
		key: "realAmount",
		render: (amount) => {
			return <p>{amount}</p>;
		}
	},
	{
		title: "Trạng thái",
		dataIndex: "status",
		key: "status",
		render: (statusType) => {
			const color =
				statusType == 1 ? "green" : statusType == 2 ? "red" : "gold";
			return <Tag color={color}>{getTransactionStatus(statusType)}</Tag>;
		}
	}
	// {
	// 	key: "action",
	// 	render: (_, record) => (
	// 		<Space size="middle">
	// 			<a>Xem chi tiết</a>
	// 		</Space>
	// 	)
	// }
];

const TransactionsTable = ({ data }) => {
	const ProceedData = data?.map((t) => {
		return {
			...t,
			realAmount: calculateRealAmount(t.transactionType, t.amount)
		};
	});
	return (
		<>
			<Table columns={columns} dataSource={ProceedData} />
		</>
	);
};

export default TransactionsTable;
