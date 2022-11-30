import { Layout, Menu } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import CustomeHeader from "../../../common/header/Header.jsx";
// import "./CustomeLayout.css";
const { Content, Sider } = Layout;

const SideBarItemsArr = [
	{
		name: "Thông tin ví",
		path: "/wallet"
	},
	{
		name: "Lịch sử giao dịch",
		path: "/wallet/transactions"
	},
	{
		name: "Nạp tiền",
		path: "/wallet/deposit"
	},
	{
		name: "Rút tiền",
		path: "/wallet/withdraw"
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

const WalletLayout = (props) => (
	<Layout>
		<CustomeHeader />
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
						minHeight: "80vh",
						background: "#fff"
					}}
				>
					{props.children}
				</Content>
			</Layout>
		</Layout>
	</Layout>
);

export default WalletLayout;
