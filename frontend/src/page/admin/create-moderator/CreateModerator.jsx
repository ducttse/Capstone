import {Row, Col, Form , Input, Select, Button, Typography,Modal, message, DatePicker} from "antd";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import { roles } from "../../../api/roleApi";
import BackButton from "../../../common/BackButton";
import { creaeteModeratorAsync } from "../../../redux/moderator/actions/moderator.action";
const {Title} = Typography;
const {TextArea} = Input;


const CreateModerator = () => {

    const [form] = Form.useForm();
    const dispatch = useDispatch();
    // const {roles, roleError} = useSelector((state) => state.rolesList);

    const onFinish = (values) => {

        dispatch(creaeteModeratorAsync(values));
        message.success("Đăng ký thành công");
        form.resetFields();

    }

    return (
        <>
            <BackButton to="/admin" > </BackButton>
            <Row justify="center" align="middle">
                <Col  span={8} style={{minWidth: "300px"}}>
                    <Title level={1}  align="middle">Nhân viên mới</Title>
                    <Form 
                            form={form}
                            layout="vertical"
                            autoComplete="off"
                            onFinish={onFinish}
                        >
                        <Form.Item
                            name="fullName"
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
                        {/* <Form.Item
                            name="dateOfBirth"
                            label="Ngày sinh"
                            rules={[
                            {
                                required: true,
                                message: "Vui lòng chọn ngày sinh",
                            },
                            ]}
                            hasFeedback
                        >
                            <DatePicker format={'DD/MM/YYYY'}  />
                        </Form.Item>   */}
                        
                        <Form.Item
                            name="address"
                            label="Địa chỉ"
                            rules={[
                            {
                                required: true,
                                message: "Vui lòng nhập địa chỉ",
                            },
                            ]}
                            hasFeedback
                        >
                            <TextArea
                                showCount
                                maxLength={150}
                                style={{
                                    height: 80,
                                    resize: 'none',
                                }}
                                placeholder="Nhập địa chỉ"
                                />
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
                                {roles.filter((r) => r.name.includes("Sinh viên") === false).map(({roleId, name}) => {
                                    return (
                                        <Select.Option value={roleId}>{name}</Select.Option>
                                    )
                                })}
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


export default CreateModerator;