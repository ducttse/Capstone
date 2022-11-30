import {Row, Col, Form , Input, Select, Button, Typography,Modal, message, DatePicker} from "antd";
import moment from "moment";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import BackButton from "../../../../../common/BackButton";
import CustomSpin from "../../../../../common/CustomSpin";
import { clearMajorMessage, loadMajorDetailAsync, updateMajorAsync } from "../../../../../redux/staff/category/major/actions/major.action";
const {Title, Text} = Typography;



const UpdateMajor = () => {
    const [form] = Form.useForm();
    const {id} = useParams();
    
    const history = useHistory();
    const dispatch = useDispatch();
    const majorState = useSelector(state => state.major);

    useEffect(() => {
        showMessage();
    }, [majorState])
    
    useEffect(() => {
        dispatch(loadMajorDetailAsync(id));
    },[])

    const onFinish = (values) => {
        const updateMajor = {
            ...values, 
        };
        dispatch(updateMajorAsync(id,updateMajor));
    }
    
    const showMessage = () => {
        if(majorState.isSuccess){
            message.success("Cập nhật thông tin thành công");
            history.push("/major");
            dispatch(clearMajorMessage());
        }
        else if(majorState.error !== ""){
            message.error(majorState.error);
            if(majorState.isLoadSuccess == false){
                history.push("/major");
            }
            dispatch(clearMajorMessage());
        }
    }

    return majorState.isLoadSuccess == false 
    ? <CustomSpin/> 
    : (
        <>
            <BackButton to="/major" > </BackButton>
            <Title level={1}  align="middle">Cập nhật thông tin chuyên ngành</Title>
            <Row justify="center" align="middle">
                <Col  span={8} style={{minWidth: "300px"}}>
                    <Form 
                            form={form}
                            layout="vertical"
                            autoComplete="off"
                            onFinish={onFinish}
                            initialValues={{...majorState.data}}
                        >
                         <Form.Item
                            name="name"
                            label="Tên chuyên ngành"
                            rules={[
                            {
                                required: true,
                                message: "Vui lòng nhập tên chuyên ngành",
                            },
                            ]}
                            hasFeedback
                        >
                            <Input placeholder="Nhập tên chuyên ngành" />
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


export default UpdateMajor;