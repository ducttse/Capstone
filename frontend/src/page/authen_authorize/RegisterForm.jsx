import { Row, Col, Form ,Typography, Input, Button, message} from "antd";

const {Title, Link, Text} = Typography

const RegisterForm = () => {

    const success = () => {
        message.success("Đăng ký thành công")
    }

    return (
    <>
    <Row justify="center" align="middle">
        <Title level={1}  align="middle">Đăng ký tài khoản</Title>
       <Col span={20} >
        <Form layout="vertical"
                autoComplete="off"
                onFinish={success}
            >

            <Form.Item
                name="displayName"
                label="Tên hiển thị"
                rules={[
                {
                    required: true,
                    message: "Vui lòng nhập tên hiển thị",
                },
                ]}
                hasFeedback
            >
                <Input placeholder="Nhập tên hiển thị" />
            </Form.Item>  

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
                <Button>Gửi mã OTP</Button>
                </Col>
            </Row>
            </Form.Item>
            <Text>Khi nhấn nút Tạo tài khoản, bạn đã đồng ý với <Link style={{color:'red'}}>Điều khoản sử dụng</Link> của chúng tôi. </Text>
            <Form.Item style={{marginTop: 10}}>
                <Button block type="primary" htmlType="submit" >
                Tạo tài khoản
                </Button>
            </Form.Item>
            </Form>
        </Col> 
    </Row>
    
        
    
    </>
    )
}

export default RegisterForm;