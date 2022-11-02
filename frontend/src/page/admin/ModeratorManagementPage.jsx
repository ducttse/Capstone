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
import { useEffect } from "react";
import { useState } from "react";
import CreateModeratorModal from "./CreateModeratorModal";
import DeleteModeratorModal from "./DeleteModeratorModal";
import DetailModeratorModal from "./DetailModerator";
import UpdateModeratorModal from "./UpdateModerator";
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
	const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
	const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);
	const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
	const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

	const [dataSource, setDataSource] = useState(staff);

	const onSearch = (value) => {
		let searchResult = dataSource.filter((staff) =>
			staff.email.includes(value)
		);
	};

	const columns = [
		{
			title: "Id",
			dataIndex: "id",
			key: "id"
		},
		{
			title: "Tên hiển thị",
			dataIndex: "displayName",
			key: "displayName"
		},
		{
			title: "Email",
			dataIndex: "email",
			key: "email"
		},
		{
			title: "Chức danh",
			dataIndex: "roleId",
			key: "role",
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
			key: "status",
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
			key: "action",
			render: (_, record) => {
				return (
					<Space size="large">
						<EyeOutlined
							style={{ color: "#1e81b0" }}
							onClick={() => {
								setIsDetailModalOpen(true);
							}}
						/>
						<EditOutlined
							style={{ color: "#e28743" }}
							onClick={showUpdateModal}
						/>
						<MinusCircleOutlined
							style={{ color: "red" }}
							onClick={showDeleteConfirm}
						/>
					</Space>
				);
			}
		}
	];

	const showDetailModal = () => {
		setIsDetailModalOpen(true);
	};

	const showUpdateModal = () => {
		setIsUpdateModalOpen(true);
	};

	const showDeleteConfirm = () => {
		setIsDeleteModalOpen(true);
	};

	const onClose = () => {
		setIsCreateModalOpen(false);
		setIsDetailModalOpen(false);
		setIsUpdateModalOpen(false);
		setIsDeleteModalOpen(false);
	};

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
									setIsCreateModalOpen(true);
								}}
								style={{ marginBottom: "20px", width: "150px" }}
							>
								Tạo nhân viên
							</Button>
							{isCreateModalOpen && <CreateModeratorModal onClose={onClose} />}
						</Col>

						<Table columns={columns} dataSource={dataSource} pagination>
							{isDetailModalOpen && <DetailModeratorModal onClose={onClose} />}
							{isUpdateModalOpen && <UpdateModeratorModal onClose={onClose} />}
							{isDeleteModalOpen && <DeleteModeratorModal onClose={onClose} />}
						</Table>
					</Col>
				</Row>
			</div>
		</>
	);
};

export default ModeratorManagementPage;
