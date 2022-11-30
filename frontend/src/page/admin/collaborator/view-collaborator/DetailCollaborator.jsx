import { Col, Descriptions, message, Row, Typography } from "antd";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import BackButton from "../../../../common/BackButton";
import CustomSpin from "../../../../common/CustomSpin";
import { clearCollaboratorMessage, loadCollaboratorDetailAsync } from "../../../../redux/admin/collaborator/actions/collaborator.action";
import { loadMajorsListAsync } from "../../../../redux/staff/category/major/actions/majorsList.action";
import { getMajorName } from "../../../../utils/major";
import { getStatus } from "../../../../utils/status";
const {Title} = Typography;


const DetailCollaborator = () => {
    const {id} = useParams();
    const dispatch = useDispatch();
    const collaboratorState = useSelector((state) => state.collaborator);
    const majorsListState = useSelector(state => state.majorsList);
    const history = useHistory();

    useEffect(() => {
        showMessage();
    }, [collaboratorState])
    
    useEffect(() => {
        dispatch(loadCollaboratorDetailAsync(id));
        if(majorsListState.data.length == 0){
            dispatch(loadMajorsListAsync());
        }

    },[])
    
    const showMessage = () => {
        if(collaboratorState.error !== ""){
            message.error(collaboratorState.error);
            history.push("/collaborator");
            dispatch(clearCollaboratorMessage());
        }
    }
  
    const displayItem = {
        fullName: "Họ tên",
        email: "Email",
        address: "Địa chỉ",
        dateOfBirth: "Ngày sinh",
        majorId: "Chuyên ngành",
        status: "Trạng thái"
    }
    
    

    return   collaboratorState.isLoadSuccess == false 
    ? <CustomSpin/> 
    : (
        <>
        <BackButton to="/collaborator" > </BackButton>
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
                                descriptionValue = collaboratorState.data[key].format("DD/MM/YYYY");
                                break;
                            case "status":
                                descriptionValue = getStatus(collaboratorState.data[key]);
                                break;
                            case "majorId":
                                descriptionValue = getMajorName(majorsListState.data,collaboratorState.data[key]);
                                break;
                            default:
                                descriptionValue = collaboratorState.data[key]
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

export default DetailCollaborator;