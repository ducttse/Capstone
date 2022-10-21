import {Row, Col, Form , Input, Select, Button, Typography, message} from "antd";
const {Title} = Typography;

const CreateModeratorForm = () => {

    const success = () => {
      message.success("Đăng ký thành công")
    }

    return (
    <>
    <Row justify="center" align="middle">
      <Col span={20}>
        <Title level={1}  align="middle">Tạo nhân viên</Title>
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
                name="roleId" 
                label="Chức danh"
                rules={[
                    {
                    required: true,
                    message: "Vui lòng chọn chức danh",
                    },
                ]}
                hasFeedback
            >
            <Select placeholder="Chọn chức danh" >
                <Select.Option value="1">Nhân viên quản lý nhân sự</Select.Option>
                <Select.Option value="2">Nhân viên quản lý khách hàng</Select.Option>
            </Select>
          </Form.Item>

          <Form.Item >
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

export default CreateModeratorForm;