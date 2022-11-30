import { Col, Descriptions, message, Row, Typography } from "antd";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import BackButton from "../../../common/BackButton";
import CustomSpin from "../../../common/CustomSpin";
import { clearIssueMessage, loadIssueDetailAsync } from "../../../redux/collaborator/issue/actions/issue.action";
import { getStatus } from "../../../utils/status";
const {Title} = Typography;


const DetailIssue = () => {
    const {id} = useParams();
    const dispatch = useDispatch();
    const issueState = useSelector((state) => state.issue);
    const history = useHistory();

    useEffect(() => {
        showMessage();
    }, [issueState])
    
    useEffect(() => {
        dispatch(loadIssueDetailAsync(id));
    },[])
    
    const showMessage = () => {
        if(issueState.error !== ""){
            message.error(issueState.error);
            history.push("/issue");
        }
    }
  
    const displayItem = {
        title: "Tiêu đề",
        description: "Mô tả",
        creatorId: "Người tạo",
        meetingId: "Meeting",
        reportedStudentId: "Người bị báo cáo",
        createdTime: "Thời gian tạo",
        status: "Trạng thái",
        solution: "Kết quả giải quyết",
        resolvedTime:"Thời gian giải đáp",
    }
    

    return   issueState.isLoadSuccess == false 
    ? <CustomSpin/> 
    : (
        <>
        <BackButton to="/issue" > </BackButton>
        <Title level={1}  align="middle">Chi tiết vấn đề</Title>
        <Row justify="center" align="middle" >
            <Col span={18} >
                <Descriptions title="" bordered column={1} 
                            contentStyle={{fontSize: "18px" , textAlign:"center"}} 
                            labelStyle={{fontWeight: "bold",fontSize: "18px", width: "300px", paddingLeft: "5%"}}>
                    {Object.entries(displayItem).map(([key, value]) => {
                        let descriptionValue;
                        switch(key) {
                            case "createdTime":
                            case "resolvedTime":
                                descriptionValue = issueState.data[key]?.format("DD/MM/YYYY hh:mm:ss");
                                break;
                            case "status":
                                descriptionValue = getStatus(issueState.data[key]);
                                break;
                            default:
                                descriptionValue = issueState.data[key]
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

export default DetailIssue;