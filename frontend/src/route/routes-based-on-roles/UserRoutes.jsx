import { Route } from "react-router-dom";
import CustomLayout from "../../common/CustomLayout";
import ProfilePage from "../../page/profile/view-profile/ProfilePage";
import CreateQuestionPage from "../../page/user/create-question/CreateQuestionPage";
import EditQuestionPage from "../../page/user/edit-question/EditQuestionPage";
import QuestionRoute from "../../page/user/question/QuestionRoute";
import QuestionCardPage from "../../page/user/questions/QuestionCardPage";

const UserRoutes = () => {
	return (
		<>
			<Route path="/create-question">
				<CustomLayout><CreateQuestionPage /></CustomLayout>
			</Route>
			<Route path="/edit-question/:id">
				<CustomLayout><EditQuestionPage /></CustomLayout>
			</Route>
			<Route path="/questions">
				<CustomLayout><QuestionCardPage /></CustomLayout>
			</Route>
			<Route path="/question/:id">
				<CustomLayout><QuestionRoute /></CustomLayout>
			</Route>
			<Route exact path="/profile/:id">
				<CustomLayout><ProfilePage /></CustomLayout>
			</Route>
		</>
		
	);
};

export default UserRoutes;
