import {
	Layout,
	Row,
	Col,
	Typography,
	Card,
	Form,
	Input,
	Button,
	message
} from "antd";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { login } from "../../api/authAPI.js";
import "./LoginPage.css";
import { useDispatch, useSelector } from "react-redux";
import ForgotPasswordModal from "./FogotPasswordModal.jsx";
import RegisterModal from "./RegisterModal.jsx";
import {
	loginFail,
	loginSuccess
} from "../../redux/auth/actions/auth.action.js";

const { Content, Footer } = Layout;
const { Title, Text, Link } = Typography;

const LoginPage = () => {
	const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);
	const [isFogotPasswordModalOpen, setIsFogotPasswordModalOpen] =
		useState(false);

	const history = useHistory();
	const dispatch = useDispatch();
	const authState = useSelector((state) => state.auth);

	const onFinish = (data) => {
		let user = login(data);
		if (!user) {
			message.error("Tên đăng nhập hoặc mật khẩu sai");
			dispatch(loginFail);
		} else {
			message.success("Đăng nhập thành công");
			dispatch(loginSuccess(user));
			onLoggedIn(authState.user.roleId);
		}
	};

	const onLoggedIn = (roleId) => {
		switch(roleId) {
			case 1: 
				history.push("/questions");
				break;
			case 2:
				history.push("/admin");
				break;
			case 3:
				history.push("/staff");
				break;
		}
	}
	
	return authState.isLoggedIn ? onLoggedIn(authState.user.roleId) : (
				<>
					<Layout className="login-layout" style={{ minHeight: "100vh" }}>
						<Content className="content">
							<Row justify="space-around" align="middle">
								<Col span={10} justify="center" align="middle">
									<Title level={2}>MindStone Q&A</Title>
									<Text>
										Nơi giải đáp thắc mắc, trao đổi thông tin cho cộng đồng sinh
										viên FPT.
									</Text>
								</Col>
								<Col span={6}>
									<Card className="border-radius">
										<Form
											className="login-form"
											layout="vertical"
											autoComplete="off"
											onFinish={onFinish}
										>
											<Form.Item name="email" label="Email">
												<Input prefix={<UserOutlined />} placeholder="Nhập email" />
											</Form.Item>

											<Form.Item name="password" label="Mật khẩu">
												<Input.Password
													prefix={<LockOutlined />}
													placeholder="Nhập mật khẩu"
												/>
											</Form.Item>
											<Link
												className="forgot-password"
												onClick={() => {
													setIsFogotPasswordModalOpen(true);
												}}
											>
												Quên mật khẩu?
											</Link>
											{isFogotPasswordModalOpen && (
												<ForgotPasswordModal
													onClose={() => {
														setIsFogotPasswordModalOpen(false);
													}}
												></ForgotPasswordModal>
											)}
											<br />
											<Form.Item>
												<Button
													className="button border-radius"
													block
													type="primary"
													htmlType="submit"
												>
													Đăng nhập
												</Button>
											</Form.Item>
											<Text>
												Hoặc{" "}
												<Link
													className="register"
													onClick={() => {
														setIsRegisterModalOpen(true);
													}}
													style={{ color: "red" }}
												>
													{" "}
													Đăng ký{" "}
												</Link>
											</Text>
											{isRegisterModalOpen && (
												<RegisterModal
													onClose={() => {
														setIsRegisterModalOpen(false);
													}}
												></RegisterModal>
											)}
										</Form>
									</Card>
								</Col>
							</Row>
						</Content>
						<Footer className="footer">
							MindStone Q&A ©2022 sản phẩm của GFA22SE18
						</Footer>
					</Layout>
				</>
			);
};

export default LoginPage;
