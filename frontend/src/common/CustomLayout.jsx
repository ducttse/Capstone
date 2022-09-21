import {
	LaptopOutlined,
	NotificationOutlined,
	UserOutlined
} from "@ant-design/icons";
import { Col, Layout, Menu, Row, Input } from "antd";
import React from "react";
import "./CustomeLayout.css";
const { Header, Content, Sider } = Layout;
const { Search } = Input;
const items2 = [UserOutlined, LaptopOutlined, NotificationOutlined].map(
	(icon, index) => {
		const key = String(index + 1);
		return {
			key: `sub${key}`,
			icon: React.createElement(icon),
			label: `subnav ${key}`
		};
	}
);

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
					items={items2}
				/>
			</Sider>
			<Layout
				style={{
					padding: "0 24px 24px"
				}}
			>
				{/* <Breadcrumb
					style={{
						margin: "16px 0"
					}}
				>
					<Breadcrumb.Item>Home</Breadcrumb.Item>
					<Breadcrumb.Item>List</Breadcrumb.Item>
					<Breadcrumb.Item>App</Breadcrumb.Item>
				</Breadcrumb> */}
				<Content
					className="site-layout-background"
					style={{
						padding: 24,
						margin: 0,
						minHeight: 280
					}}
				>
					{props.content ? props.content : <h2>No content</h2>}
				</Content>
			</Layout>
		</Layout>
	</Layout>
);

export default CustomLayout;
