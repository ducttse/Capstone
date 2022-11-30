import { Button, Col, Form, Input, Row, message} from "antd";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changePasswordAsync, clearChangePasswordMessage } from "../../../redux/profile/actions/changePassword.action";


const ChangePassword = () => {

    const dispatch = useDispatch();
    const authState = useSelector(state => state.auth);
    const changePasswordState = useSelector(state => state.changePassword);

    useEffect(() => {
        finishMessage();
    },[changePasswordState])

    const finishMessage = () => {
        if(changePasswordState.isSuccess){
            message.success("Cập nhật mật khẩu mới thành công");
            dispatch(clearChangePasswordMessage());
        }
        else if (changePasswordState.error !== "") {
            message.error(changePasswordState.error);
            dispatch(clearChangePasswordMessage());
        }
    }

    const onFinish = (values) => {
        const changeInfo = {
            id: authState.user.accountId,
            currentPassword: values.currentPassword,
            newPassword: values.newPassword,
        }
        dispatch(changePasswordAsync(changeInfo));

    }


    return ( <>
        <Row justify="center" align="middle" style={{marginTop: "50px"}}>
            <Col span={6} style={{minWidth: "250px"}}>
                <Form
                    layout="vertical"
                    autoComplete="off"
                    onFinish={onFinish}
                > 
                    <Form.Item
                            name="currentPassword"
                            label="Mật khẩu hiện tại"
                            rules={[
                            {
                                required: true,
                                message: "Vui lòng nhập mật khẩu hiện tại",
                            },
                            { min: 8,
                                max: 30,
                                message: "Mật khẩu có độ dài từ 8 đến 30 kí tự không dấu"
                            },
                            ]}
                            hasFeedback
                        >
                            <Input.Password placeholder="Nhập mật khẩu hiện tại" />
                    </Form.Item>
                    <Form.Item
                            name="newPassword"
                            label="Mật khẩu mới"
                            rules={[
                            {
                                required: true,
                                message: "Vui lòng nhập mật khẩu mới",
                            },
                            { min: 8,
                                max: 30,
                                message: "Mật khẩu có độ dài từ 8 đến 30 kí tự không dấu"
                            },
                            ]}
                            hasFeedback
                        >
                            <Input.Password placeholder="Nhập mật khẩu mới" />
                    </Form.Item>
                    <Form.Item
                            name="confirmPassword"
                            label="Xác nhận mật khẩu"
                            dependencies={['newPassword']}
                            hasFeedback
                            rules={[
                            {
                                required: true,
                                message: 'Vui lòng xác nhận lại mật khẩu',
                            },
                            ({ getFieldValue }) => ({
                                validator(_, value) {
                                if (!value || getFieldValue('newPassword') === value) {
                                    return Promise.resolve();
                                }
                                return Promise.reject(new Error('Xác nhận mật khẩu không giống'));
                                },
                            }),
                            ]}
                        >
                            <Input.Password placeholder="Nhập lại mật khẩu"/>
                    </Form.Item>
                    <Form.Item>
                        <Button block type="primary" htmlType="submit" >
                            Đổi mật khẩu
                        </Button>
                    </Form.Item>

                </Form>
            </Col>
        </Row>
    
    </> );
}
 
export default ChangePassword;