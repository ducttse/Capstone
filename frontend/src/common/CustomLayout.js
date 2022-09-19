import {
	LaptopOutlined,
	NotificationOutlined,
	UserOutlined
} from "@ant-design/icons";
import { Breadcrumb, Layout, Menu } from "antd";
import React from "react";
import "./CustomeLayout.css";
const { Header, Content, Sider } = Layout;
const items1 = ["1", "2", "3"].map((key) => ({
	key,
	label: `nav ${key}`
}));
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

const CustomLayout = (props) => (
	<Layout>
		<Header className="header">
			<div className="logo" />
			<Menu mode="horizontal" defaultSelectedKeys={["2"]} items={items1} />
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
