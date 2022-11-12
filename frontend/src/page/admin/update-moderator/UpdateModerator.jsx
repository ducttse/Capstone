import {Row, Col, Form , Input, Select, Button, Typography,Modal, message, DatePicker} from "antd";
import moment from "moment";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { roles } from "../../../api/roleApi";
import BackButton from "../../../common/BackButton";
import CustomSpin from "../../../common/CustomSpin";
import { loadModeratorDetailAsync, updateModeratorAsync } from "../../../redux/moderator/actions/moderator.action";
const {Title, Text} = Typography;
const {TextArea,} = Input;



const UpdateModerator = () => {
    const [form] = Form.useForm();
    const {id} = useParams();
    
    const history = useHistory();
    const dispatch = useDispatch();
    const { data, loading, error } = useSelector((state) => state.moderator);
    // const { roles, roleError} = useSelector((state) => state.rolesList);
    
    useEffect(() => {
        dispatch(loadModeratorDetailAsync(id));
    },[])

    const onFinish = (values) => {
        let newUser = {...data, ...values};
        dispatch(updateModeratorAsync(id,newUser));
        message.success("Cập nhật thành công");

    }

    return loading ? (
        <CustomSpin />
      ) :(
        <>
            <BackButton to="/admin" > </BackButton>
            <Row justify="center" align="middle">
                <Col  span={8} style={{minWidth: "300px"}}>
                    <Title level={1}  align="middle">Tạo tài khoản</Title>
                    <Form 
                            form={form}
                            layout="vertical"
                            autoComplete="off"
                            onFinish={onFinish}
                            initialValues={{...data, dateOfBirth: moment(data.dateOfBirth)}}
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
                            <DatePicker initialValues format={'DD/MM/YYYY'}  />
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
                                Lưu thay đổi
                            </Button>
                        </Form.Item>
                    </Form>
                </Col> 
            </Row>
        </>
            
    )
}


export default UpdateModerator;