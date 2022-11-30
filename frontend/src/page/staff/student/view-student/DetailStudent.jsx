import { Col, Descriptions, message, Row, Typography } from "antd";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import BackButton from "../../../../common/BackButton";
import CustomSpin from "../../../../common/CustomSpin";
import { clearStudentMessage, loadStudentDetailAsync } from "../../../../redux/staff/student/actions/student.action";
import { getStatus } from "../../../../utils/status";
const {Title} = Typography;


const DetailStudent = () => {
    const {id} = useParams();
    const dispatch = useDispatch();
    const studentState = useSelector((state) => state.student);
    const history = useHistory();

    useEffect(() => {
        showMessage();
    }, [studentState])
    
    useEffect(() => {
        dispatch(loadStudentDetailAsync(id));
    },[])
    
    const showMessage = () => {
        if(studentState.error !== ""){
            message.error(studentState.error);
            history.push("/student");
            dispatch(clearStudentMessage());
        }
    }
  
    const displayItem = {
        fullName: "Họ tên",
        email: "Email",
        reputation: "Đánh giá",
        flag: "Cảnh cáo",
        questionAnswered: "Câu hỏi đã trả lời",
        dateOfBirth: "Ngày sinh",
        bio: "Mô tả bản thân",
        status: "Trạng thái"
    }
    
    

    return   studentState.isLoadSuccess == false 
    ? <CustomSpin/> 
    : (
        <>
        <BackButton to="/student" > </BackButton>
        <Title level={1}  align="middle">Thông tin nhân viên</Title>
        <Row justify="center" align="middle" >
            <Col span={18} >
                <Descriptions title="" bordered column={1} 
                            contentStyle={{fontSize: "18px" , textAlign:"center"}} 
                            labelStyle={{fontWeight: "bold",fontSize: "18px", width: "300px", paddingLeft: "5%"}}>
                    {Object.entries(displayItem).map(([key, value]) => {
                        let descriptionValue
                        switch(key) {
                            case "dateOfBirth":
                                descriptionValue = studentState.data[key].format("DD/MM/YYYY");
                                break;
                            case "status":
                                descriptionValue = getStatus(studentState.data[key]);
                                break;
                            default:
                                descriptionValue = studentState.data[key]
                                break;
                        }   
                        return (
                            <>
                                <Descriptions.Item label={value}> {descriptionValue}</Descriptions.Item>   
                            </>  
                        );
                    })}
                </Descriptions>
            </Col>
        </Row>
    </>
    );
}

export default DetailStudent;