import { Col, Descriptions, message, Row, Typography } from "antd";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { getRoleName, getRolesApi } from "../../../../api/roleApi";
import BackButton from "../../../../common/BackButton";
import CustomSpin from "../../../../common/CustomSpin";
import { clearModeratorMessage, loadModeratorDetailAsync } from "../../../../redux/admin/moderator/actions/moderator.action";
import { getStatus } from "../../../../utils/status";
const {Title} = Typography;


const DetailModerator = () => {
    const {id} = useParams();
    const dispatch = useDispatch();
    const moderatorState = useSelector((state) => state.moderator);
    const history = useHistory();
    const roles = getRolesApi();

    useEffect(() => {
        showMessage();
    }, [moderatorState])
    
    useEffect(() => {
        if(moderatorState.data == null){
            dispatch(loadModeratorDetailAsync(id));
        }
    },[])
    
    const showMessage = () => {
        if(moderatorState.error !== ""){
            message.error(moderatorState.error);
            history.push("/moderator");
            dispatch(clearModeratorMessage());
        }
    }
  
    const displayItem = {
        fullName: "Họ tên",
        email: "Email",
        address: "Địa chỉ",
        dateOfBirth: "Ngày sinh",
        roleId: "Chức danh",
        status: "Trạng thái"
    }
    
    

    return   moderatorState.isLoadSuccess == false 
    ? <CustomSpin/> 
    : (
        <>
        <BackButton to="/moderator" > </BackButton>
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
                                descriptionValue = moderatorState.data[key].format("DD/MM/YYYY");
                                break;
                            case "status":
                                descriptionValue = getStatus(moderatorState.data[key]);
                                break;
                            case "roleId":
                                descriptionValue = getRoleName(moderatorState.data[key]);
                                break;
                            default:
                                descriptionValue = moderatorState.data[key]
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

export default DetailModerator;