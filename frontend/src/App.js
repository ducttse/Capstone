import { notification } from "antd";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import CustomLayout from "./common/CustomLayout";
import Counter from "./counter.js";
import { getFireBaseToken, onMessageListener } from "./firebase";
import EditQuestionPage from "./page/edit-question/EditQuestionPage.jsx";
import CreateQuestionPage from "./page/create-question/CreateQuestionPage.jsx";
import QuestionPage from "./page/question/QuestionPage.jsx";
import QuestionCardPage from "./page/questions/QuestionCardPage.jsx";
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
    },
  });
};

const App = () => {
  // TODO: implement notification
  // eslint-disable-next-line no-unused-vars
  const [isTokenFound, setTokenFound] = useState(false);
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);
  const { user } = useSelector((state) => state.auth);

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
  console.log(user);
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <LoginPage />
        </Route>
        {user?.roleId === 2 && (
         <AdminLayout>
			<Route path="/staff-management">
              <ModeratorManagementPage />
            </Route>
		 </AdminLayout>
        )}
        {user?.roleId === 1 && (
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
        )}
        {user?.roleId === 3 && (
          <Route path="/staff">
            <StaffTest />
          </Route>
        )}
      </Switch>
    </BrowserRouter>
  );
};

export default App;
