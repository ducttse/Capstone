import { UserOutlined } from "@ant-design/icons";
import { Avatar, Col, Descriptions, Row, Space } from "antd";
import moment from "moment";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import BackButton from "../../../common/BackButton";
import { getProfileByIdAsync } from "../../../redux/profile/actions/profile.action";

const ProfilePage = () => {

   const dispatch = useDispatch();
   const {data} = useSelector(state => state.question);
   const profileState = useSelector(state => state.profile);
   const authState = useSelector(state => state.auth);
   const {id} = useParams();
   const path = `/question/${data?.id}`;

   useEffect(() => {
      let profileId = id ? id : authState.user.id;
      dispatch(getProfileByIdAsync(profileId));
   } ,[])

   const descriptionItems = (
      <>
         <Descriptions.Item label="Họ tên">{profileState.userInfo?.fullName}</Descriptions.Item>
         <Descriptions.Item label="Email">{profileState.userInfo?.email}</Descriptions.Item>
         <Descriptions.Item label="Đánh giá">{profileState.userInfo?.reputation} / 5</Descriptions.Item>
         <Descriptions.Item label="Cảnh cáo">{profileState.userInfo?.flag} lần</Descriptions.Item>
         <Descriptions.Item label="Câu hỏi đã trả lời">{profileState.userInfo?.questionAnswered} câu</Descriptions.Item>
         <Descriptions.Item label=""></Descriptions.Item>
         <Descriptions.Item label="Ngày sinh">{moment(profileState.userInfo?.dateOfBirth).format('DD/MM/YYYY')}</Descriptions.Item>
         <Descriptions.Item label=""></Descriptions.Item>
         <Descriptions.Item span={2} label="Mô tả bản thân">{profileState.userInfo?.bio}</Descriptions.Item>
      </>
   )

    return ( 
        <>
        {id && data && <BackButton to={path} />}
        <Space direction="vertical" size="large" style={{justifySelf: "center"}}>
            <Row justify="center" align="middle" >
               <Col justify="center" align="middle">
                  <Avatar shape="circle" size={200} icon={<UserOutlined />} src={profileState.userInfo?.avatarUrl}/>
               </Col>
            </Row>
            <Row justify="center" align="middle">
                  <Col justify="center" align="middle" >
                     <Descriptions layout="horizontal" column={2} 
                        labelStyle={{paddingLeft: "50px", fontSize: "25px"}} 
                        contentStyle={{justifyContent: "start", margin:"0 100px",fontSize: "25px"}}
                     >
                        {descriptionItems}
                     </Descriptions>
                  </Col>
            </Row>
        </Space>
        
        </>
     );
}
 
export default ProfilePage;