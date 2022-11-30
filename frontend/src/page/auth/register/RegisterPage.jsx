import {  Form ,Typography, Input, Button, message} from "antd";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { clearRegisterState, registerAsync } from "../../../redux/auth/actions/register.action";
import CustomLayout from "../CustomLayout";

const { Link, Text} = Typography

const RegisterPage = () => {
    const history = useHistory();
    const [form] = Form.useForm();
    const dispatch = useDispatch();
    const registerState = useSelector(state => state.register);

    useEffect(() => {
        if(registerState.isSuccess){
            goToOtp();
        }
        else if(registerState.error !== "") {
            message.error(registerState.error);
        }
    },[registerState]);

    const onFinish = (values) => {
        dispatch(registerAsync(values));
        dispatch(clearRegisterState());
    }

    const goToOtp = () => {
        history.push("/otp-verification");
    }


    return (
    <>
            <CustomLayout title="Đăng ký tài khoản">
                <Form   
                        form={form}
                        layout="vertical"
                        autoComplete="off"
                        onFinish={onFinish}
                        initialValues={{...registerState.user}}
                    >

                    <Form.Item
                        name="fullName"
                        label="Họ tên"
                        rules={[
                            {   required: true, message: "Vui lòng nhập Họ tên"},
                        ]}
                        hasFeedback
                    >
                        <Input placeholder="Nhập họ tên" />
                    </Form.Item>  

                    <Form.Item
                        name="email"
                        label="Email"
                        rules={[
                            {    required: true,
                                type: "email",
                                validator(_, value) {
                                if (value.endsWith("@fpt.edu.vn")) {
                                    return Promise.resolve();
                                }
                                return Promise.reject(new Error('Vui lòng nhập FPT email'));
                                },
                            },
                        ]}
                        hasFeedback
                    >
                        <Input placeholder="Nhập email" />
                    </Form.Item>

                    <Form.Item
                        name="password"
                        label="Mật khẩu"
                        rules={[
                            {   required: true,   message: "Vui lòng nhập mật khẩu" },
                            {   min: 8, max: 30, message: "Mật khẩu có độ dài từ 8 đến 30 kí tự không dấu"},
                        ]}
                        hasFeedback
                    >
                        <Input.Password placeholder="Nhập mật khẩu" />
                    </Form.Item>
                    <Form.Item
                        name="confirmPassword"
                        label="Xác nhận mật khẩu"
                        dependencies={['password']}
                        hasFeedback
                        rules={[
                        {
                            required: true,
                            message: 'Vui lòng xác nhận lại mật khẩu',
                        },
                        ({ getFieldValue }) => ({
                            validator(_, value) {
                            if (!value || getFieldValue('password') === value) {
                                return Promise.resolve();
                            }
                            return Promise.reject(new Error('Xác nhận mật khẩu không giống'));
                            },
                        }),
                        ]}
                    >
                        <Input.Password placeholder="Nhập lại mật khẩu"/>
                    </Form.Item>
                    <Text>Khi nhấn nút Tạo tài khoản, bạn đã đồng ý với <Link style={{color:'red'}}>Điều khoản sử dụng</Link> của chúng tôi. </Text>
                    <Form.Item >
                        <Button style={{marginTop: 10}} block type="primary" htmlType="submit" >
                        Tạo tài khoản
                        </Button>
                    </Form.Item>
                </Form>
            </CustomLayout>
            
    </>
    )
}

export default RegisterPage;