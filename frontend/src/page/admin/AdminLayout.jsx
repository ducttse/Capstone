
import { Col, Layout, Menu, Row, Input } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import "../../common/CustomeLayout.css";
const { Header, Content, Sider } = Layout;
const { Search } = Input;

const SideBarItemsArr = [
	{
		name: "Quản lý nhân viên",
		path: "/staff-management"
	},
	// {
	// 	name: "Quản lý cộng tác viên",
	// 	path: "/questions"
	// }
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


const AdminLayout = (props) => (
	<Layout>
		<Header className="header">

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

export default AdminLayout;
