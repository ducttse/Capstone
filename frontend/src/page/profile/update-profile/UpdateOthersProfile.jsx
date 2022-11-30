import { UserOutlined } from "@ant-design/icons";
import { Avatar, Button, Col, DatePicker, Form, Input, Row, Typography } from "antd";
import moment from "moment";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import CustomSpin from "../../../common/CustomSpin";
import { getProfileByIdAsync } from "../../../redux/profile/actions/profile.action";
import { updateProfileAsync } from "../../../redux/profile/actions/updateProfile.action";

const {TextArea} = Input;
const {Title, Text} = Typography;


const UpdateOthersProfile = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const user = JSON.parse(localStorage.getItem("user"));
    const profileState = useSelector( state => state.profile);
    
    useEffect(() => {
        if(profileState) {
            dispatch(getProfileByIdAsync(user.roleId, user.id));
        }
    },[])

    const onFinish = (value) => {
        const updateInfo = {
            ...profileState.userInfo,
            fullName: value.fullName, 
            // avatarUrl: "" , 
            dateOfBirth: moment(value.dateOfBirth).format("YYYY-MM-DD") ,
            phone: value.phone,
            address: value.address
        };

        dispatch(updateProfileAsync(user.roleId, user.id, updateInfo));
    }

    return profileState.loading ? <CustomSpin/> : ( <>
        <Title level={1}  align="middle">Cập nhật thông tin</Title>
        <Row justify="center" align="middle">
            <Avatar align="middle"  shape="circle" 
                    size={200} 
                    icon={<UserOutlined />} 
                    src={profileState.userInfo?.avatarUrl}
                    />
        </Row>
        <Row justify="center" align="middle">
            <Button htmlType="submit" style={{width: "100px", marginTop: "10px"}}>
                        Tải ảnh lên
            </Button>
        </Row>
        <Row justify="center" align="middle" >
            <Text style={{textAlign: "center", color:"grey", marginBottom: "20px"}}> chọn file jpg/png, kích thước nhỏ hơn 2MB</Text>
        </Row>
        
        <Row justify="center" align="middle">
                <Col  span={8} style={{minWidth: "300px"}}>


                    <Form 
                            layout="vertical"
                            autoComplete="off"
                            onFinish={onFinish}
                            initialValues={{...profileState.userInfo}}
                        >
                        <Form.Item
                            name="fullName"
                            label="Họ tên"
                            rules={[
                            {
                                required: true,
                                message: "Vui lòng nhập họ tên",
                            },
                            ]}
                            hasFeedback
                        >
                            <Input placeholder="Nhập họ tên" />
                        </Form.Item>  

                        <Form.Item
                            name="phone"
                            label="Điện thoại"
                            rules={[
                                {
                                    required: true,
                                    validator(_, value) {
                                    const regex = "^[0-9]{10}$";
                                    if (value?.match(regex)) {
                                        return Promise.resolve();
                                    }
                                    return Promise.reject(new Error('Số điện thoại 10 chữ số'));
                                    },
                                }
                            ]}
                        >
                        <Input placeholder="Nhập số điện thoại"/>
                        </Form.Item>

                        <Form.Item
                            name="address"
                            label="Địa chỉ"
                            rules={[
                                {
                                    required: true,
                                    message: "Vui lòng nhập địa chỉ",
                                },
                                ]}
                            hasFeedback
                        >
                            <TextArea
                                showCount
                                maxLength={150}
                                style={{
                                    height: 80,
                                    resize: 'none',
                                }}
                                placeholder="Nhập địa chỉ"
                                />
                        </Form.Item>

                        <Form.Item
                            name="dateOfBirth"
                            label="Ngày sinh"
                            rules={[
                                {
                                    required: true,
                                    message: "Vui lòng chọn ngày sinh",
                                },
                                ]}
                        >
                            <DatePicker format={'DD/MM/YYYY'}  />
                        </Form.Item>
  
                        <Row gutter={20}>
                            <Col >
                                <Form.Item >
                                    <Button block type="primary" htmlType="submit" style= {{width: "150px"}}> 
                                        Lưu thay đổi
                                    </Button>
                                </Form.Item>
                            </Col>
                            <Col >
                                <Button onClick={() => { history.push("/profile")}}
                                        style= {{width: "100px"}}
                                >Hủy</Button>
                            </Col> 
                        </Row>
                        
                    </Form>
                </Col> 
            </Row>
    </> );
}
 
export default UpdateOthersProfile;