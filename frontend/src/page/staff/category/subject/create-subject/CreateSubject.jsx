import {Row, Col, Form , Input, Button, Typography,Modal, message, DatePicker, Select} from "antd";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { roles } from "../../../../../api/roleApi";
import BackButton from "../../../../../common/BackButton";
import { loadMajorsListAsync } from "../../../../../redux/staff/category/major/actions/majorsList.action";
import { clearSubjectMessage, creaeteSubjectAsync } from "../../../../../redux/staff/category/subject/actions/subject.action";
const {Title} = Typography;


const CreateSubject = () => {

    const [form] = Form.useForm();
    const dispatch = useDispatch();
    const subjectState = useSelector(state => state.subject);
    const majorListState = useSelector(state => state.majorsList);

    useEffect(() => {
        showMessage();
    }, [subjectState])

    useEffect(() => {
        if(majorListState.data.length == 0){
            dispatch(loadMajorsListAsync());
        }
    },[])

    const onFinish = (values) => {
        const createSubject = {
            ...values, 
        };
        dispatch(creaeteSubjectAsync(createSubject));
    }

    const showMessage = () => {
        if(subjectState.isSuccess){
            message.success("Thêm môn học thành công");
            dispatch(clearSubjectMessage());
            form.resetFields();
        }
        else if(subjectState.error !== ""){
            message.error(subjectState.error);
            dispatch(clearSubjectMessage());
        }
    }

    return (
        <>
            <BackButton to="/subject" > </BackButton>
            <Title level={1}  align="middle">Môn học mới</Title>
            <Row justify="center" align="middle">
                <Col  span={8} style={{minWidth: "300px"}}>
                    <Form 
                            form={form}
                            layout="vertical"
                            autoComplete="off"
                            onFinish={onFinish}
                        >
                        <Form.Item
                            name="name"
                            label="Tên môn học"
                            rules={[
                            {
                                required: true,
                                message: "Vui lòng nhập Tên môn học",
                            },
                            ]}
                            hasFeedback
                        >
                            <Input placeholder="Nhập Tên môn học" />
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
                                Tạo môn học
                            </Button>
                        </Form.Item>
                    </Form>
                </Col> 
            </Row>
        </>
            
    )
}


export default CreateSubject;