import { Col, Descriptions, message, Row, Typography } from "antd";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import BackButton from "../../../../../common/BackButton";
import CustomSpin from "../../../../../common/CustomSpin";
import { clearSubjectMessage, loadSubjectDetailAsync } from "../../../../../redux/staff/category/subject/actions/subject.action";
import { getMajorName } from "../../../../../utils/major";
import { getStatus } from "../../../../../utils/status";
const {Title} = Typography;


const DetailSubject = () => {
    const {id} = useParams();
    const dispatch = useDispatch();
    const majorListState = useSelector(state => state.majorsList);
    const subjectState = useSelector((state) => state.subject);
    const history = useHistory();

    useEffect(() => {
        showMessage();
    }, [subjectState])
    
    useEffect(() => {
        dispatch(loadSubjectDetailAsync(id));
    },[])
    
    const showMessage = () => {
        if(subjectState.error !== ""){
            message.error(subjectState.error);
            history.push("/subject");
            dispatch(clearSubjectMessage());
        }
    }
  
    const displayItem = {
        name: "Tên môn học",
        majorId: "Tên chuyên ngành",
        status: "Trạng thái"
    }
    
    

    return   subjectState.isLoadSuccess == false 
    ? <CustomSpin/> 
    : (
        <>
        <BackButton to="/subject" > </BackButton>
        <Title level={1}  align="middle">Thông tin môn học</Title>
        <Row justify="center" align="middle" >
            <Col span={18} >
                <Descriptions title="" bordered column={1} 
                            contentStyle={{fontSize: "18px" , textAlign:"center"}} 
                            labelStyle={{fontWeight: "bold",fontSize: "18px", width: "300px", paddingLeft: "5%"}}>
                    {Object.entries(displayItem).map(([key, value]) => {
                        let descriptionValue;
                        switch(key) {
                            case "majorId":
                                const majorId = subjectState.data[key];
                                descriptionValue = getMajorName(majorListState.data, majorId);
                                break;
                            case "status":
                                descriptionValue = getStatus(subjectState.data[key]);
                                break;
                            default:
                                descriptionValue = subjectState.data[key]
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

export default DetailSubject;