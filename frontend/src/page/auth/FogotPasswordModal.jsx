import { Row, Col, Form ,Typography, Input, Button, message, Modal} from "antd";
import { useState } from "react";
import "../../common/Form.css"

const {Title} = Typography

const ForgotPasswordModal = ({onClose}) => {

    const [form] = Form.useForm();
    const [isModalOpen, setIsModalOpen] = useState(true);

    const onFinish = (values) => {
        console.log(values);
        closeModal();
        message.success("Đăng ký thành công")
    }

    const closeModal = () => {
        setIsModalOpen(false);
        onClose();
    };

    const sendOTP = () => {
        message.success("Đã gửi OTP");
    }

    return (
    <>
        <Modal open={isModalOpen} onCancel={closeModal} 
                                        footer={null}>
        <Row justify="center" align="middle">
            <Title level={1}  align="middle">Quên mật khẩu</Title>
            <Col span={20}>
                <Form layout="vertical"
                        autoComplete="off"
                        onFinish={onFinish}
                    >
                    <Form.Item
                        name="email"
                        label="Email"
                        rules={[
                        {
                            required: true,
                            message: "Vui lòng nhập email",
                        },
                        { 
                            type: "email", 
                            message: "Vui lòng nhập email hợp lệ" 
                        },
                        ]}
                        hasFeedback
                    >
                        <Input placeholder="Nhập email" />
                    </Form.Item>

                    <Form.Item
                        name="password"
                        label="Mật khẩu mới"
                        rules={[
                        {
                            required: true,
                            message: "Vui lòng nhập mật khẩu mới",
                        },
                        { min: 8,
                            max: 30,
                            message: "Mật khẩu có độ dài từ 8 đến 30 kí tự không dấu"
                        },
                        ]}
                        hasFeedback
                    >
                        <Input.Password placeholder="Nhập mật khẩu" />
                    </Form.Item>
                    <Form.Item
                            name="confirm"
                            label="Xác nhận mật khẩu"
                            dependencies={['password']}
                            hasFeedback
                            rules={[
                            {
                                required: true,
                                message: 'Vui lòng xác nhận lại mật khẩu',
                            },
                            ({ getFieldValue }) => ({
                                validator(_, value) {
                                if (!value || getFieldValue('password') === value) {
                                    return Promise.resolve();
                                }
                                return Promise.reject(new Error('Xác nhận mật khẩu không giống'));
                                },
                            }),
                            ]}
                        >
                            <Input.Password placeholder="Nhập lại mật khẩu"/>
                        </Form.Item>

                    <Form.Item
                    name="otp"
                    label="Mã OTP"
                    rules={ [{ required: true, message: 'Vui lòng nhập Mã OTP' },
                ]}
                    >
                        <Row gutter={8} >
                        <Col span={12}>
                            <Input placeholder="Nhập OTP"/>
                        </Col>
                        <Col span={12} >
                        <Button onClick={sendOTP}>Gửi OTP</Button>
                        </Col>
                    </Row>
                    </Form.Item>
                    <Form.Item >
                        <Button block type="primary" htmlType="submit" >
                            Tạo mật khẩu mới
                        </Button>
                    </Form.Item>
                    </Form>
                </Col> 
            </Row>
        </Modal>

    </>
    )
}

export default ForgotPasswordModal;