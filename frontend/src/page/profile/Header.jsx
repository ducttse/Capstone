import {
	DownOutlined,
	LogoutOutlined,
	UserOutlined,
	WalletOutlined
} from "@ant-design/icons";
import {
	Button,
	Col,
	Dropdown,
	Input,
	Layout,
	Row,
	Space,
	Menu,
	Typography,
	Avatar
} from "antd";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
const { Header } = Layout;
const { Search } = Input;
const { Title, Link } = Typography;

const routeBaseItem = ["/profile", "/wallet", "/logout"];

const CustomHeader = () => {
	const history = useHistory();
	const handleMenuClick = (e) => {
		const route = routeBaseItem[e.key - 1];
		// TODO :call logout
		history.push(route);
	};

	const user = JSON.parse(localStorage.getItem("user"));

	const menu = (
		<Menu
			onClick={handleMenuClick}
			items={[
				{
					label: "Tài Khoản",
					key: "1",
					icon: <UserOutlined />
				},
				{
					label: "Ví",
					key: "2",
					icon: <WalletOutlined />
				},
				{
					label: "Đăng xuất",
					key: "3",
					icon: <LogoutOutlined />
				}
			]}
		/>
	);

	return (
		<Header className="header">
			<Row justify="space-between">
				<Col span={5} style={{marginTop: "10px", minWidth: "300px"}}>
					<Link
						onClick={() => {
							history.push("/");
						}}
					>
						<Title level={2}>MindStone Q&A</Title>
					</Link>
				</Col>
				<Col span={5} style={{ minWidth: "300px"}} >
					<Avatar
						shape="circle"
						size={45}
						icon={<UserOutlined />}
						src={user.avatarUrl}
					/>
					<Dropdown overlay={menu}>
						<Button type="text">
							<Space>
								{user.fullName}
								<DownOutlined />
							</Space>
						</Button>
					</Dropdown>
				</Col>
			</Row>
		</Header>
	);
};

export default CustomHeader;
