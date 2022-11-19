import { Button, Col, Form, Input, message, Row, Typography } from "antd";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { clearSendOtpState, clearSubmitOtpState, sendOtpAsync, submitOtpAsync } from "../../../redux/auth/actions/otp.action";
import CustomLayout from "../CustomLayout";

const { Text} = Typography;


const OtpVerification = () => {
    const {form} = Form.useForm();
    const history = useHistory();
    const dispatch = useDispatch();
    const {user} = useSelector(state => state.register);
    const sendOtpState = useSelector(state => state.sendOtp)
    const submitOtpState = useSelector(state => state.submitOtp)

    
    useEffect(() => {
        sendOtpMessage();
    }, [sendOtpState]);

    useEffect(() => {
        submitOtpMessage();
    }, [submitOtpState]);

    const onFinish = (values) => {
        const data = {email: user.email, otp: values.otp};
        dispatch(submitOtpAsync(data));
        dispatch(clearSubmitOtpState());
    }

    const submitOtpMessage = () => {
        if(submitOtpState.isSubmitSuccess){
            message.success("Đăng ký tài khoản mới thành công");
            backLogin();
        }
        else if (submitOtpState.error !== "") {
            message.error(submitOtpState.error);
        }
    }
    const sendOtp = () => {
        dispatch(sendOtpAsync(user.email));
        dispatch(clearSendOtpState());
    }

    const sendOtpMessage = () => {
        if(sendOtpState.isSendSuccess){
            message.success("Gửi OTP thành công");
        }
        if (sendOtpState.error !== ""){
            message.error(sendOtpState.error);
        }
    }
    
    const backLogin = () => {
        history.push("/");
        dispatch(clearSubmitOtpState());
        dispatch(clearSendOtpState());
    }

    return ( <> 
        <CustomLayout title="Xác nhận email" backTo="/register">
        <Text>Vui lòng nhập mã xác minh đã được gửi tới {user.email}. Mã có hiệu lực trong 10 phút.</Text>
        <Form 
            form={form}
            style={{marginTop: "20px"}}
            layout="vertical"
            autoComplete="off"
            onFinish={onFinish}
        >
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
                <Button onClick={sendOtp}>Gửi lại OTP</Button>
            </Col>
            </Row>
            <Form.Item >
                <Button style={{marginTop: 10}} block type="primary" htmlType="submit" >
                    Gửi đi
                </Button>
            </Form.Item>
        </Form>
        </CustomLayout>
    </> );
}
 
export default OtpVerification;