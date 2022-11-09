import {
	EyeOutlined,
	EditOutlined,
	MinusCircleOutlined
} from "@ant-design/icons";
import {
	Col,
	Row,
	Table,
	Button,
	Typography,
	Input,
	Space,
	Modal,
	message
} from "antd";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import CreateModeratorModal from "./CreateModeratorModal";
const { Text } = Typography;
const { Search } = Input;

const staff = [
	{
		id: "1",
		displayName: "John Brown",
		roleId: 1,
		email: "New York No. 1 Lake Park",
		status: "Disable"
	},
	{
		id: "2",
		displayName: "John Brown",
		roleId: 2,
		email: "New York No. 1 Lake Park",
		status: "Enable"
	},
	{
		id: "3",
		displayName: "John Brown",
		roleId: 1,
		email: "New York No. 1 Lake Park",
		status: "Enable"
	}
];

const ModeratorManagementPage = () => {

	const [dataSource, setDataSource] = useState(staff);
	const history = useHistory() ;
	const dispatch = useDispatch();

	const onSearch = (value) => {
		let searchResult = dataSource.filter((staff) =>
			staff.email.includes(value)
		);
	};

	const columns = [
		{
			title: "Id",
			dataIndex: "id",
			key: "1"
		},
		{
			title: "Tên hiển thị",
			dataIndex: "displayName",
			key: "2"
		},
		{
			title: "Email",
			dataIndex: "email",
			key: "3"
		},
		{
			title: "Chức danh",
			dataIndex: "roleId",
			key: "4",
			render: (record) => {
				let role;
				if (record.roleId == 1) role = "Nhân viên quản lý nhân sự";
				else role = "Nhân viên quản lý khách hàng";
				return (
					<>
						<Text>{role}</Text>
					</>
				);
			}
		},
		{
			title: "Trạng thái",
			dataIndex: "status",
			key: "5",
			render: (_, record) => {
				let color;
				if (record.status == "Enable") color = "Green";
				else color = "red";
				return (
					<>
						<Text style={{ color: `${color}` }}>{record.status}</Text>
					</>
				);
			}
		},
		{
			title: "",
			dataIndex: "action",
			key: "6",
			render: (_,record) => {
				return (
					<Space size="large">
						<EyeOutlined
							style={{ color: "#1e81b0" }}
						/>
						<EditOutlined
							style={{ color: "#e28743" }}
							onClick={logrecord(record)}
						/>
						<MinusCircleOutlined
							style={{ color: "red" }}
						/>
					</Space>
				);
			}
		}
	];

	const logrecord = (id) => {
		console.log(id);
	}

	// const createModerator = () => {
	// 	history.push('/create-moderator')
	// }

	// const updateModerator = (id) => {
	// 	history.push(`/update-moderator/${id}`);
	// 	console.log(id);
	// }


	return (
		<>
			<div style={{ minHeight: "100vh" }}>
				<Row justify="center" align="center" style={{ padding: "10px" }}>
					<Search
						placeholder="Nhập email"
						allowClear
						onSearch={onSearch}
						style={{ width: "50%", minWidth: "400px", maxWidth: "600px" }}
					/>
				</Row>
				<Row justify="center" align="center" style={{ padding: "2%" }}>
					<Col span={22}>
						<Col span={4}>
							<Button
								block
								type="primary"
								htmlType="submit"
								onClick={() => {
									// createModerator()
								}}
								style={{ marginBottom: "20px", width: "150px" }}
							>
								Tạo nhân viên
							</Button>
						</Col>

						<Table columns={columns} dataSource={dataSource} pagination>
						</Table>
					</Col>
				</Row>
			</div>
		</>
	);
};

export default ModeratorManagementPage;
