
import { Row, Col, Typography , Form, Input, Button, Modal } from 'antd';
import { useState } from 'react';
import ForgetPasswordForm from './ForgetPasswordForm';
import RegisterForm from './RegisterForm';

const { Title, Text, Link } = Typography;

const fakeAccounts = [
    {
        email: "binhse123456@fpt.edu.vn",
        password: "123456"
    },
    {
        email: "admin@gmail.com",
        password: "123456",
        roleId: 1
    },
    {
        email: "staff@gmail.com",
        password: "123456",
        roleId: 2
    }
]

const onSubmit = () => {

}


const LoginPage = () => {
    const [isForgetPasswordModalOpen, setIsForgetPasswordModalOpen] = useState(false);
    const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);


    const showForgetPasswordModal = () => {
        setIsForgetPasswordModalOpen(true);
    };
    
    const closeForgetPasswordModal = () => {
        setIsForgetPasswordModalOpen(false);
    };

    const showRegisterModal = () => {
        setIsRegisterModalOpen(true);
    };
    
    const closeRegisterModal = () => {
        setIsRegisterModalOpen(false);
    };

    return (
        <>
        <Row justify="center" align='middle' >
            <Col span={12} justify="center" align='middle'>
                <Title level={2} >MindStone Q&A</Title >
                <Text>Nơi giải đáp thắc mắc, trao đổi thông tin cho cộng đồng sinh viên FPT.</Text>
            </Col>
            <Col span={6} justify="center" >
                <Form className="login-form"
                        layout="vertical"
                        wrapperCol={6}
                        labelCol
                        autoComplete="off"
                    >
                        <Form.Item
                            name="email"
                            label="Email"
                            rules={[
                            { 
                                type: "email", 
                                message: "Vui lòng nhập email hợp lệ" 
                            },
                            ]}
                        >
                            <Input placeholder="Nhập email" />
                        </Form.Item>

                        <Form.Item
                            name="password"
                            label="Mật khẩu"    
                        >
                            <Input.Password placeholder="Nhập mật khẩu" />
                        </Form.Item>
                        <Link className="login-form-forgot" onClick={showForgetPasswordModal} style={{float:'right'}}>Quên mật khẩu?</Link>
                        <Modal open={isForgetPasswordModalOpen} onCancel={closeForgetPasswordModal} 
                                footer={null}>
                            <ForgetPasswordForm/>
                        </Modal>
                            <br/>
                        <Form.Item >
                            <Button block type="primary" htmlType="submit" onSubmit={onSubmit} style={{marginTop: 10}}>
                                Đăng nhập
                            </Button>
                        </Form.Item>
                        <Text>Hoặc <Link onClick={showRegisterModal} style={{color:'red'}}> Đăng ký </Link></Text>
                        <Modal open={isRegisterModalOpen} onCancel={closeRegisterModal} 
                                footer={null}>
                            <RegisterForm/>
                        </Modal>
                </Form>
                </Col>
        </Row>

        </>
  );
}

export default LoginPage;