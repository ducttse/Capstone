import { notification } from "antd";
import { useEffect, useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import CustomLayout from "./common/CustomLayout";
import { getFireBaseToken, onMessageListener } from "./firebase";
import LoginPage from "./page/auth/LoginPage";
import AdminTest from "./page/auth/page-nav-test/AdminTest";
import UserTest from "./page/auth/page-nav-test/UserTest";
import StaffTest from "./page/auth/page-nav-test/StaffTest";
import AdminLayout from "./page/admin/AdminLayout";
import ModeratorManagementPage from "./page/admin/ModeratorManagementPage";
import UserComponents from "./page/user/UserComponents.jsx";
const openNotification = (message, description) => {
	notification.open({
		message: message,
		description: description,
		onClick: () => {
			console.log("Notification Clicked!");
		}
	});
};

const componentsBaseOnRole = (role) => {
	switch (role) {
		default:
			return <UserComponents />;
	}
};
const App = () => {
	// TODO: implement notification
	// eslint-disable-next-line no-unused-vars
	const [isTokenFound, setTokenFound] = useState(false);

	useEffect(() => {
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
				{componentsBaseOnRole("user")}
				<Route exact path="/">
					<LoginPage />
				</Route>
				{/* {user?.roleId === 2 && (
         <AdminLayout>
			<Route path="/staff-management">
              <ModeratorManagementPage />
            </Route>
		 </AdminLayout>
        )}
        {user?.roleId === 1 && (
          <UserComponents />
        )}
        {user?.roleId === 3 && (
          <Route path="/staff">
            <StaffTest />
          </Route>
        )} */}
			</Switch>
		</BrowserRouter>
	);
};

export default App;
