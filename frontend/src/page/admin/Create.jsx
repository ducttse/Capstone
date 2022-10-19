import { Form , Input, Select, Button} from "antd";
import { useState } from "react";
import axios from 'axios';
import { useHistory } from 'react-router';

const API_URL = 'https://60cdfb0691cc8e00178dc448.mockapi.io/Crud/';

const Create = () => {
    let history = useHistory();

    const [moderatorAccount, setModeratorAccount] = useState({
        displayName: '',
        email: '',
        password: '',
        roleId: 0
    });

    const sendToCreateAPI = () => {
        axios.put(CREATE_API_URL, moderatorAccount).then(() => {
            history.push('/ViewList')
        })
    }

    return (
    <>
        <Form layout="vertical"
            wrapperCol={{ span: 4 }}
            autoComplete="off"

            onFinish={(value) => {
                console.log({value});
                console.log(moderatorAccount);
            }}

            onValuesChange = {(pros) => {
                const name = Object.keys(pros);
                setModeratorAccount({...moderatorAccount, [name[0]]: pros[name[0]]})
            }}
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
            <Button block type="primary" htmlType="submit" onClick={sendToCreateAPI}>
              Tạo tài khoản
            </Button>
          </Form.Item>
        </Form>
    
    </>
    )
}

export default Create;