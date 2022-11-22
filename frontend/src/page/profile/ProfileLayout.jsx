
import { Layout, Menu } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import "../../common/CustomeLayout.css";
import CustomHeader from "./Header";
const { Header, Content, Sider } = Layout;

const SideBarItemsArr = [
	{
		name: "Hồ sơ cá nhân",
		path: "/profile"
	},
	{
		name: "Thay đổi mật khẩu",
		path: "/change-password"
	},

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


const ProfileLayout = (props) => (
	<Layout>
		<CustomHeader />
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
					padding: "0 24px 24px",
					minHeight: "85vh"
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

export default ProfileLayout;
