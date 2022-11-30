import {Row, Col, Form , Input, Select, Button, Typography,Modal, message, DatePicker} from "antd";
import moment from "moment";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { roles } from "../../../../api/roleApi";
import BackButton from "../../../../common/BackButton";
import { clearCollaboratorMessage, creaeteCollaboratorAsync } from "../../../../redux/admin/collaborator/actions/collaborator.action";
import { loadMajorsListAsync } from "../../../../redux/staff/category/major/actions/majorsList.action";
const {Title} = Typography;
const {TextArea} = Input;


const CreateCollaborator = () => {

    const [form] = Form.useForm();
    const dispatch = useDispatch();
    const collaboratorState = useSelector(state => state.collaborator);
    const majorsListState = useSelector(state => state.majorsList);

    useEffect(() => {
        if(majorsListState.data.length == 0){
            dispatch(loadMajorsListAsync());
        }
    },[])

    useEffect(() => {
        showMessage();
    }, [collaboratorState])

    const onFinish = (values) => {
        const createMod = {
            ...values, 
            dateOfBirth: values.dateOfBirth.format("YYYY-MM-DD"),
        };
        dispatch(creaeteCollaboratorAsync(createMod));
    }

    const showMessage = () => {
        if(collaboratorState.isSuccess){
            message.success("Đăng ký thành công");
            dispatch(clearCollaboratorMessage());
            form.resetFields();
        }
        else if(collaboratorState.error !== ""){
            message.error(collaboratorState.error);
            dispatch(clearCollaboratorMessage());
        }
    }

    return (
        <>
            <BackButton to="/collaborator" > </BackButton>
            <Title level={1}  align="middle">Cộng tác viên mới</Title>
            <Row justify="center" align="middle">
                <Col  span={8} style={{minWidth: "300px"}}>
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
                                name="majorId" 
                                label="Chuyên ngành"
                                rules={[
                                    {
                                    required: true,
                                    message: "Vui lòng chọn chuyên ngành",
                                    },
                                ]}
                                hasFeedback
                            >
                            <Select placeholder="Chọn chuyên ngành" >
                                {majorsListState.data.map(({id, name}) => {
                                        return (
                                            <Select.Option value={id}>{name}</Select.Option>
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


export default CreateCollaborator;