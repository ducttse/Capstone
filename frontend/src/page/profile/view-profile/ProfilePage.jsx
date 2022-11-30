import { UserOutlined } from "@ant-design/icons";
import { Avatar, Button, Col, Descriptions, Row, Space } from "antd";
import moment from "moment";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import BackButton from "../../../common/BackButton";
import CustomSpin from "../../../common/CustomSpin";
import { getProfileByIdAsync } from "../../../redux/profile/actions/profile.action";

const ProfilePage = () => {

   const dispatch = useDispatch();
   const history = useHistory();
   const {data} = useSelector(state => state.question);
   const profileState = useSelector(state => state.profile);
   const user = JSON.parse(localStorage.getItem("user"));
   const {id} = useParams();
   const path = `/question/${data?.id}`;

   useEffect(() => {
      let profileId = id ? id : user.id;
      dispatch(getProfileByIdAsync(user.roleId, profileId));
   } ,[])

   const studentLabels =  {
      fullName: "Họ tên",
      email: "Email",
      reputation: "Đánh giá",
      flag: "Cảnh cáo",
      questionAnswered: "Câu hỏi đã trả lời",
      dateOfBirth: "Ngày sinh",
      bio: "Mô tả bản thân"
   }

   const moderatorLabels =  {
      fullName: "Họ tên",
      email: "Email",
      phone: "Điện thoại",
      address: "Địa chỉ",
      dateOfBirth: "Ngày sinh",
   }

   const colaboratorLabels = {
      ...moderatorLabels,
      major: "Chuyên ngành"
   }

   const descriptionItems = () => {
      let labels;
      const roleId = user.roleId;
      switch(roleId){
         case 1:
            labels = studentLabels;
            break;
         case 2:
         case 3:
            labels = moderatorLabels;
            break;
         case 4: 
            labels = colaboratorLabels;
            break;
      }

      return (
         Object.entries(studentLabels).map(([key, value]) => {    
            return (
               <Descriptions.Item label={value}> 
                  {key === "dateOfBirth" ? profileState.userInfo[key].format("DD/MM/YYYY") : profileState.userInfo[key]} 
               </Descriptions.Item>  
            ) ;  
         })
      )
   } 

    return profileState.loading ? <CustomSpin/> : ( 
        <>
        {id && data && <BackButton to={path} />}
        <Button type="primary" onClick={() => {history.push("/update-profile")}} style={{float: "right"}}> Chỉnh sửa </Button>
        <Row justify="center" align="middle" style={{marginBottom: "50px"}}>
               <Avatar  shape="circle" size={200} icon={<UserOutlined />} src={profileState.userInfo?.avatarUrl}/>
         </Row>
        <Row justify="center" align="middle" >
            <Col span={18} >
                    <Descriptions title="" bordered column={1} 
                                 contentStyle={{fontSize: "18px" , textAlign:"center"}} 
                                 labelStyle={{fontWeight: "bold",fontSize: "20px", width: "210px"}}>
                           {descriptionItems()}
                    </Descriptions>
            </Col>
        </Row>

        </>
     );
}
 
export default ProfilePage;