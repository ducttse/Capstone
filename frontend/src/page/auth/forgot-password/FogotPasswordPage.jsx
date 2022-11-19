import {Form , Input, Button, Row, Col, message} from "antd";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { clearForgotPasswordState, forgotPasswordAsync } from "../../../redux/auth/actions/forgotPassword.action";
import { clearSendOtpState, sendOtpAsync } from "../../../redux/auth/actions/otp.action";
import CustomLayout from "../CustomLayout";


const ForgotPasswordPage = () => {
    const history = useHistory();
    const [form] = Form.useForm();
    const dispatch = useDispatch();
    const forgotPassState = useSelector(state => state.forgotPassword);
    const sendOtpState = useSelector(state => state.sendOtp);

    useEffect(() => {
        finishMessage();
    },[forgotPassState])

    useEffect(() => {
        sendOtpMessage();
    },[sendOtpState]);

    const onFinish = (values) => {
        dispatch(forgotPasswordAsync(values));
        dispatch(clearForgotPasswordState());
    }

    const finishMessage = () => {
        if(forgotPassState.isSuccess){
            message.success("Cập nhật mật khẩu mới thành công");
            backLogin();
        }
        else if (forgotPassState.error !== "") {
            message.error(forgotPassState.error);
        }
    }

    const sendOtp = () => {
        const email = form.getFieldValue("email");
        dispatch(sendOtpAsync(email));
        dispatch(clearSendOtpState());
    }
    
    const sendOtpMessage = () => {
        if(sendOtpState.isSendSuccess){
            message.success("Gửi OTP thành công");
        }
        else if (sendOtpState.error !== "") {
            message.error(sendOtpState.error);
        }
    }

    const backLogin = () => {
        history.push("/");
        dispatch(clearForgotPasswordState());
    }

    return (
        <>
            <CustomLayout title="Quên mật khẩu" >
                <Form 
                    form={form}
                    layout="vertical"
                    autoComplete="off"
                    onFinish={onFinish}
                >
                    <Form.Item
                        name="email"
                        label="Email"
                        rules={[
                        {
                            required: true,
                            message: "Vui lòng nhập email",
                        },
                        { 
                            type: "email", 
                            message: "Vui lòng nhập email hợp lệ" 
                        },
                        ]}
                        hasFeedback
                    >
                        <Input placeholder="Nhập email" />
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
                        <Input.Password placeholder="Nhập mật khẩu" />
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
                        <Row gutter={8}>
                            <Col span={15}>
                                <Form.Item
                                    name="otp"
                                    rules={[
                                        {
                                            required: true,
                                            validator(_, value) {
                                            const regex = "^[0-9]{6}$";
                                            if (value?.match(regex)) {
                                                return Promise.resolve();
                                            }
                                            return Promise.reject(new Error('OTP gồm 6 chữ số'));
                                            },
                                        }
                                    ]}
                                >
                                <Input placeholder="Mã OTP gồm 6 số"/>
                                </Form.Item>
                            </Col>
                            <Col span={9}>
                                <Button onClick={sendOtp}>Gửi OTP</Button>
                            </Col>
                        </Row>

                    <Form.Item >
                        <Button block type="primary" htmlType="submit" >
                            Tạo mật khẩu mới
                        </Button>
                    </Form.Item>
                </Form>
            </CustomLayout>
            
    </>
    )
}

export default ForgotPasswordPage;