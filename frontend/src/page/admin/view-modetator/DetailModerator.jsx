import { Col, Descriptions, Modal, Row, Space, Typography } from "antd";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getRoleName, getRolesApi } from "../../../api/roleApi";
import BackButton from "../../../common/BackButton";
import CustomSpin from "../../../common/CustomSpin";
import { loadModeratorDetailAsync } from "../../../redux/moderator/actions/moderator.action";
const {Title, Text} = Typography;


const DetailModerator = () => {
    const {id} = useParams();
    const dispatch = useDispatch();
    const { data, loading, error } = useSelector((state) => state.moderator);
    // const { roles, roleError } = useSelector(
	// 	(state) => state.rolesList
	// );
    const roles = getRolesApi();

    useEffect(() => {
        dispatch(loadModeratorDetailAsync(id));
    },[])
  
    const displayItem = {
        fullName: "Họ tên",
        email: "Email",
        address: "Địa chỉ",
        dateOfBirth: "Ngày sinh",
        roleId: "Chức danh",
        status: "Trạng thái"
    }
    
    

    return   loading ? (
        <CustomSpin />
      ) : (
        <>
        <BackButton to="/admin" > </BackButton>
        <Row justify="center" align="middle" >
            <Col span={18} >
                    <Title level={1}  align="middle">Thông tin nhân viên</Title>
                    <Descriptions title="" bordered column={1} contentStyle={{fontSize: "20px" , textAlign:"center"}} labelStyle={{fontWeight: "bold",fontSize: "20px", width: "300px", paddingLeft: "5%"}}>
                        {Object.entries(displayItem).map(([key, value]) => {
                            return (
                                <Descriptions.Item label={value}> { key ==="roleId" ? getRoleName( data[key], roles) : data[key]} </Descriptions.Item>     
                            );
                        })}
                    </Descriptions>
            </Col>
        </Row>
        

    </>
    );
}

export default DetailModerator;