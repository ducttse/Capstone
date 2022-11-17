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

const CustomeHeader = () => {
	const history = useHistory();
	const handleMenuClick = (e) => {
		const route = routeBaseItem[e.key - 1];
		// TODO :call logout
		history.push(route);
	};

	const { user } = useSelector((state) => state.auth);

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
	const onSearch = (value) => console.log(value);

	return (
		<Header className="header">
			<Row>
				<Col style={{marginTop: "10px"}}>
					<Link
						onClick={() => {
							history.push("/");
						}}
					>
						<Title level={2}>MindStone Q&A</Title>
					</Link>
				</Col>
				<Col offset={2} span={10}>
					<Search
						size="large"
						placeholder="Tìm kiếm câu hỏi"
						onSearch={onSearch}
						style={{ width: "100%", marginTop: 10 }}
					/>
				</Col>
				<Col offset={3}>
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

export default CustomeHeader;
