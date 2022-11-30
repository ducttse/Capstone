import { Space, Table, Tag } from "antd";
import moment from "moment";

const dateFormat = "DD/MM/YYYY HH:mm";

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
		title: "Address",
		dataIndex: "address",
		key: "address"
	},
	{
		title: "Tags",
		key: "tags",
		dataIndex: "tags",
		render: (_, { tags }) => (
			<>
				{tags.map((tag) => {
					let color = tag.length > 5 ? "geekblue" : "green";
					if (tag === "loser") {
						color = "volcano";
					}
					return (
						<Tag color={color} key={tag}>
							{tag.toUpperCase()}
						</Tag>
					);
				})}
			</>
		)
	},
	{
		title: "Action",
		key: "action",
		render: (_, record) => (
			<Space size="middle">
				<a>Invite {record.name}</a>
				<a>Delete</a>
			</Space>
		)
	}
];
const data = [
	{
		key: "1",
		createdTime: "2011-10-05T14:48:00.000Z",
		description: 32,
		address: "New York No. 1 Lake Park",
		tags: ["nice", "developer"]
	},
	{
		key: "2",
		createdTime: "2011-10-05T14:48:00.000Z",
		description: 42,
		address: "London No. 1 Lake Park",
		tags: ["loser"]
	},
	{
		key: "3",
		createdTime: "2011-10-05T14:48:00.000Z",
		description: 32,
		address: "Sidney No. 1 Lake Park",
		tags: ["cool", "teacher"]
	}
];
const TransactionsTable = () => {
	return (
		<>
			<Table columns={columns} dataSource={data} />;
		</>
	);
};

export default TransactionsTable;
