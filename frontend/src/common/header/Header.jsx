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
	message
} from "antd";
import { useHistory } from "react-router-dom";
const { Header } = Layout;
const { Search } = Input;

const routeBaseItem = ["/profile", "/wallet", "/logout"];
const username = "Từ Trọng Dức";

const CustomeHeader = () => {
	const history = useHistory();
	const handleMenuClick = (e) => {
		const route = routeBaseItem[e.key - 1];
		// TODO :call logout
		history.push(route);
	};
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
				<Col offset={6} span={10}>
					<Search
						size="large"
						placeholder="Tìm kiếm câu hỏi"
						onSearch={onSearch}
						style={{ width: "100%", marginTop: 10 }}
					/>
				</Col>
				<Col offset={5}>
					<Dropdown overlay={menu}>
						<Button type="text">
							<Space>
								{username}
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
