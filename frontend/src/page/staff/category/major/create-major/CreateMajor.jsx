import {Row, Col, Form , Input, Button, Typography,Modal, message, DatePicker} from "antd";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import BackButton from "../../../../../common/BackButton";
import { clearMajorMessage, creaeteMajorAsync } from "../../../../../redux/staff/category/major/actions/major.action";
const {Title} = Typography;


const CreateMajor = () => {

    const [form] = Form.useForm();
    const dispatch = useDispatch();
    const majorState = useSelector(state => state.major);

    useEffect(() => {
        showMessage();
    }, [majorState])

    const onFinish = (values) => {
        const createMajor = {
            ...values, 
        };
        dispatch(creaeteMajorAsync(createMajor));
    }

    const showMessage = () => {
        if(majorState.isSuccess){
            message.success("Thêm chuyên ngành thành công");
            dispatch(clearMajorMessage());
            form.resetFields();
        }
        else if(majorState.error !== ""){
            message.error(majorState.error);
            dispatch(clearMajorMessage());
        }
    }

    return (
        <>
            <BackButton to="/major" > </BackButton>
            <Row justify="center" align="middle">
                <Col  span={8} style={{minWidth: "300px"}}>
                    <Title level={1}  align="middle">Chuyên ngành mới</Title>
                    <Form 
                            form={form}
                            layout="vertical"
                            autoComplete="off"
                            onFinish={onFinish}
                        >
                        <Form.Item
                            name="name"
                            label="Tên chuyên ngành"
                            rules={[
                            {
                                required: true,
                                message: "Vui lòng nhập Tên chuyên ngành",
                            },
                            ]}
                            hasFeedback
                        >
                            <Input placeholder="Nhập Tên chuyên ngành" />
                        </Form.Item>  

                        
                        <Form.Item >
                            <Button block type="primary" htmlType="submit" >
                                Tạo chuyên ngành
                            </Button>
                        </Form.Item>
                    </Form>
                </Col> 
            </Row>
        </>
            
    )
}


export default CreateMajor;