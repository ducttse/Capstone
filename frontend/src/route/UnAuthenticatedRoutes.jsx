import { Route } from "react-router-dom";
// import ForgotPasswordPage from "../page/auth/forgot-password/FogotPasswordPage";
import LoginPage from "../page/auth/login-logout/LoginPage";
// import OtpVerification from "../page/auth/Otp-verification/OtpVerification";
// import RegisterPage from "../page/auth/register/RegisterPage";

const UnAuthenticatedRoutes = () => {
	return (
		<>
			<Route exact path="/">
				<LoginPage />
			</Route>

			{/* <Route path="/register">
                <RegisterPage/>
            </Route>

            <Route path="/forgot-password">
                <ForgotPasswordPage/>
            </Route>

            
            <Route path="/otp-verification">
                <OtpVerification/>
            </Route> */}
		</>
	);
};

export default UnAuthenticatedRoutes;
