import { notification } from "antd";
import { useEffect, useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { getFireBaseToken, onMessageListener } from "./firebase";
import LoginPage from "./page/auth/login-logout/LoginPage";
import AuthorizedRoutes from "./route/AuthorizedRoutes";
import AuthenticatedRoute from "./route/AuthenticatedRoutes";
import CommonRoutes from "./route/routes-based-on-roles/CommonRoutes";
import ForgotPasswordPage from "./page/auth/forgot-password/FogotPasswordPage";
import RegisterPage from "./page/auth/register/RegisterPage";
import OtpVerification from "./page/auth/Otp-verification/OtpVerification";
const openNotification = (message, description) => {
	notification.open({
		message: message,
		description: description,
		onClick: () => {
			console.log("Notification Clicked!");
		}
	});
};

const App = () => {
	// TODO: implement notification
	// eslint-disable-next-line no-unused-vars
	const [isTokenFound, setTokenFound] = useState(false);
	const auth = useEffect(() => {
		getFireBaseToken(setTokenFound);
	}, []);
	onMessageListener()
		.then((payload) => {
			openNotification(payload.notification.title, payload.notification.body);
			console.log(payload);
		})
		.catch((err) => console.log("failed: ", err));
	// inside the jsx being returned:
	return (
		<BrowserRouter>
			<Switch>
				<Route exact path="/">
					<LoginPage />
				</Route>
				<Route exact path="/register">
					<RegisterPage />
				</Route>
				<Route path="/otp-verification">
					<OtpVerification/>
				</Route> 
				<Route exact path="/forgot-password">
					<ForgotPasswordPage />
				</Route>
				<AuthenticatedRoute>
					<CommonRoutes />
					<AuthorizedRoutes />
				</AuthenticatedRoute>
			</Switch>
		</BrowserRouter>
	);
};
export default App;
