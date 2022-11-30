import { Col, Descriptions, message, Row, Typography } from "antd";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import BackButton from "../../../../common/BackButton";
import CustomSpin from "../../../../common/CustomSpin";
import { clearTransactionMessage, loadTransactionDetailAsync } from "../../../../redux/staff/transaction/actions/transaction.action";
import { getStatus } from "../../../../utils/status";
import { getTransactionType } from "../../../../utils/transactionType";
const {Title} = Typography;


const DetailTransaction = () => {
    const {id} = useParams();
    const dispatch = useDispatch();
    const transactionState = useSelector((state) => state.transaction);
    const history = useHistory();

    useEffect(() => {
        showMessage();
    }, [transactionState])
    
    useEffect(() => {
        dispatch(loadTransactionDetailAsync(id));
    },[])
    
    const showMessage = () => {
        if(transactionState.error !== ""){
            message.error(transactionState.error);
            history.push("/transaction");
            dispatch(clearTransactionMessage());
        }
    }
  
    const displayItem = {
        description: "Mô tả",
        transactionType: "Loại giao dịch",
        amount: "Số tiền",
        status: "Trạng thái",
        createdTime: "Thời gian tạo",
        shortSenderWallet: "Thông tin ví momo"
    }
    
    

    return   transactionState.isLoadSuccess == false 
    ? <CustomSpin/> 
    : (
        <>
        <BackButton to="/transaction" > </BackButton>
        <Title level={1}  align="middle">Chi tiết giao dịch</Title>
        <Row justify="center" align="middle" >
            <Col span={18} >
                <Descriptions title="" bordered column={1} 
                            contentStyle={{fontSize: "18px" , textAlign:"center"}} 
                            labelStyle={{fontWeight: "bold",fontSize: "18px", width: "300px", paddingLeft: "5%"}}>
                    {Object.entries(displayItem).map(([key, value]) => {
                        let descriptionValue;
                        switch(key) {
                            case "createdTime":
                                descriptionValue = transactionState.data[key].format("DD/MM/YYYY hh:mm:ss");
                                break;
                            case "transactionType":
                                descriptionValue = getTransactionType(transactionState.data[key]);
                                break;
                            case "status":
                                descriptionValue = getStatus(transactionState.data[key]);
                                break;
                            default:
                                descriptionValue = transactionState.data[key]
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

export default DetailTransaction;