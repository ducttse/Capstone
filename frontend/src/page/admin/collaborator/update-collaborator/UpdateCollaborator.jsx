import {Row, Col, Form , Input, Select, Button, Typography, message, DatePicker} from "antd";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import BackButton from "../../../../common/BackButton";
import CustomSpin from "../../../../common/CustomSpin";
import { clearCollaboratorMessage, loadCollaboratorDetailAsync, updateCollaboratorAsync } from "../../../../redux/admin/collaborator/actions/collaborator.action";
import { loadMajorsListAsync } from "../../../../redux/staff/category/major/actions/majorsList.action";
const {Title, Text} = Typography;
const {TextArea,} = Input;



const UpdateCollaborator = () => {
    const [form] = Form.useForm();
    const {id} = useParams();
    
    const history = useHistory();
    const dispatch = useDispatch();
    const collaboratorState = useSelector(state => state.collaborator);
    const majorsListState = useSelector(state => state.majorsList);

    useEffect(() => {
        showMessage();
    }, [collaboratorState])
    
    useEffect(() => {
        dispatch(loadCollaboratorDetailAsync(id));
        if(majorsListState.data.length == 0){
            dispatch(loadMajorsListAsync());
        }
    },[])

    const onFinish = (values) => {
        const updateCollaborator = {
            ...values, 
            dateOfBirth: values.dateOfBirth.format("YYYY-MM-DD")
        };
        dispatch(updateCollaboratorAsync(id,updateCollaborator));
    }
    
    const showMessage = () => {
        if(collaboratorState.isSuccess){
            message.success("Cập nhật thông tin thành công");
            history.push("/collaborator");
            dispatch(clearCollaboratorMessage());
        }
        else if(collaboratorState.error !== ""){
            message.error(collaboratorState.error);
            if(collaboratorState.isLoadSuccess == false){
                history.push("/collaborator");
            }
            dispatch(clearCollaboratorMessage());
        }
    }

    return collaboratorState.isLoadSuccess == false 
    ? <CustomSpin/> 
    : (
        <>
            <BackButton to="/collaborator" > </BackButton>
            <Title level={1}  align="middle">Cập nhật thông tin </Title>
            <Row justify="center" align="middle">
                <Col  span={8} style={{minWidth: "300px"}}>
                    <Form 
                            form={form}
                            layout="vertical"
                            autoComplete="off"
                            onFinish={onFinish}
                            initialValues={{...collaboratorState.data}}
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
                            <Select placeholder="Chọn chức danh" >
                                {majorsListState.data.map(({id, name}) => {
                                        return (
                                            <Select.Option value={id}>{name}</Select.Option>
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


export default UpdateCollaborator;