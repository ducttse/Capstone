import { notification } from "antd";
import { useEffect, useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import CustomLayout from "./common/CustomLayout";
import { getFireBaseToken, onMessageListener } from "./firebase";
import EditQuestionPage from "./page/edit-question/EditQuestionPage.jsx";
import CreateQuestionPage from "./page/create-question/CreateQuestionPage.jsx";
import QuestionPage from "./page/question/QuestionPage.jsx";
import QuestionCardPage from "./page/questions/QuestionCardPage.jsx";
import { getMeetingId } from "./api/meetingApi.js";
import LoginPage from "./page/auth/LoginPage";
import AdminTest from "./page/auth/page-nav-test/AdminTest";
import UserTest from "./page/auth/page-nav-test/UserTest";
import StaffTest from "./page/auth/page-nav-test/StaffTest";
import AdminLayout from "./page/admin/AdminLayout";
import ModeratorManagementPage from "./page/admin/ModeratorManagementPage";
const openNotification = (message, description) => {
	notification.open({
		message: message,
		description: description,
		onClick: () => {
			console.log("Notification Clicked!");
		}
	});
};

const UserComponents = () => {
	return (
		<CustomLayout>
			<Route path="/create-question">
				<CreateQuestionPage />
			</Route>
			<Route path="/edit-question/:id">
				<EditQuestionPage />
			</Route>
			<Route path="/questions">
				<QuestionCardPage />
			</Route>
			<Route path="/question/:id">
				<QuestionPage />
			</Route>
		</CustomLayout>
	);
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
				<Route exact path="/">
					<LoginPage />
				</Route>
				{componentsBaseOnRole("user")}
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
