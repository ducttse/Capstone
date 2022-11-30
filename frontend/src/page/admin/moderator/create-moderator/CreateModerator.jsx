import {Row, Col, Form , Input, Select, Button, Typography,Modal, message, DatePicker} from "antd";
import moment from "moment";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { roles } from "../../../../api/roleApi";
import BackButton from "../../../../common/BackButton";
import { clearModeratorMessage, creaeteModeratorAsync } from "../../../../redux/admin/moderator/actions/moderator.action";
const {Title} = Typography;
const {TextArea} = Input;


const CreateModerator = () => {

    const [form] = Form.useForm();
    const dispatch = useDispatch();
    const moderatorState = useSelector(state => state.moderator);

    useEffect(() => {
        showMessage();
    }, [moderatorState])

    const onFinish = (values) => {
        const createMod = {
            ...values, 
            dateOfBirth: values.dateOfBirth.format("YYYY-MM-DD")
        };
        dispatch(creaeteModeratorAsync(createMod));
    }

    const showMessage = () => {
        if(moderatorState.isSuccess){
            message.success("Đăng ký thành công");
            dispatch(clearModeratorMessage());
            form.resetFields();
        }
        else if(moderatorState.error !== ""){
            message.error(moderatorState.error);
            dispatch(clearModeratorMessage());
        }
    }

    return (
        <>
            <BackButton to="/moderator" > </BackButton>
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
                            label="Tên họ tên"
                            rules={[
                            {
                                required: true,
                                message: "Vui lòng nhập họ tên",
                            },
                            ]}
                            hasFeedback
                        >
                            <Input placeholder="Nhập họ tên" />
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
                            name="phone"
                            label="Điện thoại"
                            rules={[
                                {
                                    required: true,
                                    validator(_, value) {
                                    const regex = "^[0-9]{10}$";
                                    if (value?.match(regex)) {
                                        return Promise.resolve();
                                    }
                                    return Promise.reject(new Error('Số điện thoại 10 chữ số'));
                                    },
                                }
                            ]}
                        >
                        <Input placeholder="Nhập số điện thoại"/>
                        </Form.Item>

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
                            name="dateOfBirth"
                            label="Ngày sinh"
                            rules={[
                                {
                                    required: true,
                                    message: "Vui lòng chọn ngày sinh",
                                },
                                ]}
                        >
                            <DatePicker format={'DD/MM/YYYY'}  />
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
                                {roles.filter((r) => {return (r.name.includes("Sinh viên") == false && r.name.includes("Cộng tác viên") === false) })
                                    .map(({roleId, name}) => {
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