
import { Layout, Row, Col, Typography ,Card, Form, Input, Button, message} from 'antd';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { useHistory } from 'react-router-dom';
import {authHeader, login, logout} from "../../api/auth.service.js";
import "./LoginPage.css";
import { useDispatch,useSelector } from 'react-redux';

const { Content, Footer }  = Layout;
const { Title, Text, Link } = Typography;


const LoginPage = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    

    const onFinish = (data) => {
        let user = login();
        console.log(user);
        console.log(authHeader());
        if( !user) {
            message.error("Tên đăng nhập hoặc mật khẩu sai");
        }
        else{
            message.success("Đăng nhập thành công");
            // if(user.roleId === 1){
            //     history.push('/user');
            // }
            // if(user.roleId === 2){
            //     history.push('/admin');
            // }
            // if(user.roleId === 3){
            //     history.push('/staff');
            // }
        }
	};


    return (
        <>
            <Layout className="login-layout" style={{minHeight: "100vh"}}>
                <Content className="content">
                    <Row justify="space-around" align='middle' >    
                        <Col span={10} justify="center" align='middle' >
                            <Title level={2} >MindStone Q&A</Title >
                            <Text>Nơi giải đáp thắc mắc, trao đổi thông tin cho cộng đồng sinh viên FPT.</Text>
                        </Col>
                        <Col span={6}  >
                            <Card className="border-radius">
                                <Form 
                                    className="login-form"
                                    layout="vertical"
                                    autoComplete="off"
                                    onFinish={onFinish}
                                >
                                    <Form.Item
                                        name="email"
                                        label="Email"
                                    >
                                        <Input prefix={<UserOutlined />} placeholder="Nhập email" />
                                    </Form.Item>

                                    <Form.Item
                                        name="password"
                                        label="Mật khẩu"    
                                    >
                                        <Input.Password prefix={<LockOutlined />} placeholder="Nhập mật khẩu" />
                                    </Form.Item>
                                    <Link className="forgot-password" >Quên mật khẩu?</Link>
                                        <br/>
                                    <Form.Item >
                                        <Button className="button border-radius" block type="primary" htmlType="submit" >
                                            Đăng nhập
                                        </Button>
                                    </Form.Item>
                                    <Text>Hoặc <Link  className="register" style={{color: "red"}}> Đăng ký </Link></Text>
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
}

export default LoginPage;