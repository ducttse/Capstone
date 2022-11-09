import { Route, Switch } from "react-router-dom";
import CustomLayout from "../../common/CustomLayout.jsx";
import CreateQuestionPage from "./create-question/CreateQuestionPage.jsx";
import EditQuestionPage from "./edit-question/EditQuestionPage.jsx";
import QuestionPage from "./question/QuestionPage.jsx";
import QuestionRoute from "./question/QuestionRoute.jsx";
import RequestListPage from "./question/RequestListPage.jsx";
import QuestionCardPage from "./questions/QuestionCardPage.jsx";

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
				<QuestionRoute />
			</Route>
		</CustomLayout>
	);
};

export default UserComponents;
