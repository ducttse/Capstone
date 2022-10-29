import { Row, Col, Form ,Typography, Input, Button, message} from "antd";

const {Title} = Typography

const ForgetPasswordForm = () => {
    const sendOTP = () => {
        message.success("Gửi OTP tới email")
    }

    const changePassword = () => {
        message.success("Tạo mật khẩu mới thành công");

    }

    return (
    <>
    <Row justify="center" align="middle">
        <Title level={1}  align="middle">Quên mật khẩu</Title>
       <Col span={20} >
        <Form layout="vertical"
                autoComplete="off"
                onFinish={changePassword}
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
                label="Mật khẩu"
                rules={[
                {
                    required: true,
                    message: "Vui lòng nhập mật khẩu",
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
            name="otp"
            label="Mã OTP"
            rules={ [{ required: true, message: 'Vui lòng nhập Mã OTP' }]}
            >
                <Row gutter={8} >
                <Col span={12}>
                    <Input placeholder="Nhập OTP"/>
                </Col>
                <Col span={12} >
                <Button onClick={sendOTP}>Gửi mã OTP</Button>
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
    
        
    
    </>
    )
}

export default ForgetPasswordForm;