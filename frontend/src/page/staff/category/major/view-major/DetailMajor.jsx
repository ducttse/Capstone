import { Col, Descriptions, message, Row, Typography } from "antd";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import BackButton from "../../../../../common/BackButton";
import CustomSpin from "../../../../../common/CustomSpin";
import { clearMajorMessage, loadMajorDetailAsync } from "../../../../../redux/staff/category/major/actions/major.action";
import { getStatus } from "../../../../../utils/status";
const {Title} = Typography;


const DetailMajor = () => {
    const {id} = useParams();
    const dispatch = useDispatch();
    const majorState = useSelector((state) => state.major);
    const history = useHistory();

    useEffect(() => {
        showMessage();
    }, [majorState])
    
    useEffect(() => {
        dispatch(loadMajorDetailAsync(id));
    },[])
    
    const showMessage = () => {
        if(majorState.error !== ""){
            message.error(majorState.error);
            history.push("/major");
            dispatch(clearMajorMessage());
        }
    }
  
    const displayItem = {
        name: "Tên chuyên ngành",
        status: "Trạng thái"
    }
    
    

    return   majorState.isLoadSuccess == false 
    ? <CustomSpin/> 
    : (
        <>
        <BackButton to="/major" > </BackButton>
        <Title level={1}  align="middle">Thông tin chuyên ngành</Title>
        <Row justify="center" align="middle" >
            <Col span={18} >
                <Descriptions title="" bordered column={1} 
                            contentStyle={{fontSize: "18px" , textAlign:"center"}} 
                            labelStyle={{fontWeight: "bold",fontSize: "18px", width: "300px", paddingLeft: "5%"}}>
                    {Object.entries(displayItem).map(([key, value]) => {
                        let descriptionValue
                        switch(key) {
                            case "status":
                                descriptionValue = getStatus(majorState.data[key]);
                                break;
                            default:
                                descriptionValue = majorState.data[key]
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

export default DetailMajor;