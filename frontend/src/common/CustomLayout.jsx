import {
	LaptopOutlined,
	NotificationOutlined,
	UserOutlined
} from "@ant-design/icons";
import { Col, Layout, Menu, Row, Input } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import "./CustomeLayout.css";
const { Header, Content, Sider } = Layout;
const { Search } = Input;

const SideBarItemsArr = [
	{
		name: "Tất cả câu hỏi",
		path: "/questions"
	},
	{
		name: "Câu hỏi đã đăng",
		path: "/questions"
	}
];
const getSideBarItems = () =>
	SideBarItemsArr.map((item, index) => {
		const key = String(index + 1);
		return (
			<Menu.Item key={`sub${key}`}>
				<Link to={item.path}>{item.name}</Link>
			</Menu.Item>
		);
	});

const onSearch = (value) => console.log(value);

const CustomLayout = (props) => (
	<Layout>
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
			</Row>
		</Header>
		<Layout>
			<Sider width={200} className="site-layout-background">
				<Menu
					mode="inline"
					defaultSelectedKeys={["1"]}
					defaultOpenKeys={["sub1"]}
					style={{
						height: "100%",
						borderRight: 0
					}}
				>
					{getSideBarItems()}
				</Menu>
			</Sider>
			<Layout
				style={{
					padding: "0 24px 24px"
				}}
			>
				<Content
					className="site-layout-background"
					style={{
						padding: 24,
						margin: 24,
						minHeight: 280,
						background: "#fff"
					}}
				>
					{props.children}
				</Content>
			</Layout>
		</Layout>
	</Layout>
);

export default CustomLayout;