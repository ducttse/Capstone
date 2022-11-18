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
import { useHistory } from "react-router-dom";
import "./LoginPage.css";
import { useDispatch, useSelector } from "react-redux";
import {
	clearLoginMessage,
	loginAsync,
} from "../../../redux/auth/actions/auth.action.js";
import { getAuthHeader } from "../../../utils/auth.js";
import AxiosInstance from "../../../api/axiosInstance";
import { useEffect } from "react";

const { Content, Footer } = Layout;
const { Title, Text, Link } = Typography;

const LoginPage = () => {
	const history = useHistory();
	const dispatch = useDispatch();
	const authState = useSelector((state) => state.auth);

	useEffect(() => {
		loginMessage();
	}, [authState])

	const onFinish = (data) => {
		dispatch(loginAsync(data));
		dispatch(clearLoginMessage());
	};

	const loginMessage = () => {
		if(authState.error != ""){
			message.error(authState.error);
		}
	}

	const onLoggedIn = (roleId) => {
		switch(roleId) {
			case 1: 
				history.push("/questions");
				break;
			case 2:
				history.push("/admin");
				break;
			case 3:
				history.push("/staff/major");
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
													history.push("/forgot-password");
												}}
											>
												Quên mật khẩu?
											</Link>
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
											<Text> Hoặc </Text>
											<Link
													className="register"
													onClick={() => {
														history.push("/register");
													}}
													style={{ color: "red" , marginLeft: "5px"}}
												>
													Đăng ký
												</Link>
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
