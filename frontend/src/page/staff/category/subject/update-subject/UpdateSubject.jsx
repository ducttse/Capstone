import {Row, Col, Form , Input, Select, Button, Typography,Modal, message, DatePicker} from "antd";
import moment from "moment";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import CustomSpin from "../../../../../common/CustomSpin";
import { clearSubjectMessage, loadSubjectDetailAsync, updateSubjectAsync } from "../../../../../redux/staff/category/subject/actions/subject.action";
import BackButton from "../../../../../common/BackButton";
import { loadMajorsListAsync } from "../../../../../redux/staff/category/major/actions/majorsList.action";
const {Title, Text} = Typography;



const UpdateSubject = () => {
    const [form] = Form.useForm();
    const {id} = useParams();
    
    const history = useHistory();
    const dispatch = useDispatch();
    const majorListState = useSelector(state => state.majorsList);
    const subjectState = useSelector(state => state.subject);

    useEffect(() => {
        showMessage();
    }, [subjectState])
    
    useEffect(() => {
        dispatch(loadSubjectDetailAsync(id));
        if(majorListState.data.length == 0){
            dispatch(loadMajorsListAsync());
        }
    },[])

    const onFinish = (values) => {
        const updateSubject = {
            ...values, 
        };
        dispatch(updateSubjectAsync(id,updateSubject));
    }
    
    const showMessage = () => {
        if(subjectState.isSuccess){
            message.success("Cập nhật thông tin thành công");
            history.push("/subject");
            dispatch(clearSubjectMessage());
        }
        else if(subjectState.error !== ""){
            message.error(subjectState.error);
            if(subjectState.isLoadSuccess == false){
                history.push("/subject");
            }
            dispatch(clearSubjectMessage());
        }
    }

    return subjectState.isLoadSuccess == false 
    ? <CustomSpin/> 
    : (
        <>
            <BackButton to="/subject" > </BackButton>
            <Title level={1}  align="middle">Cập nhật thông tin môn học</Title>
            <Row justify="center" align="middle">
                <Col  span={8} style={{minWidth: "300px"}}>
                    <Form 
                            form={form}
                            layout="vertical"
                            autoComplete="off"
                            onFinish={onFinish}
                            initialValues={{...subjectState.data}}
                        >
                         <Form.Item
                            name="name"
                            label="Tên môn học"
                            rules={[
                            {
                                required: true,
                                message: "Vui lòng nhập tên môn học",
                            },
                            ]}
                            hasFeedback
                        >
                            <Input placeholder="Nhập tên môn học" />
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
                                {majorListState.data.map(({id, name}) => {
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


export default UpdateSubject;