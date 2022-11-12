import { Route } from "react-router-dom";
import CreateQuestionPage from "./create-question/CreateQuestionPage.jsx";
import EditQuestionPage from "./edit-question/EditQuestionPage.jsx";
import QuestionRoute from "./question/QuestionRoute.jsx";
import QuestionCardPage from "./questions/QuestionCardPage.jsx";

const UserComponents = () => {
	return (
		<>
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
		</>
	);
};

export default UserComponents;
