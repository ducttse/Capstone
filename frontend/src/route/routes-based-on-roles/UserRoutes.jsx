import { Route } from "react-router-dom";
import CustomLayout from "../../common/CustomLayout";
import CreateQuestionPage from "../../page/user/create-question/CreateQuestionPage";
import EditQuestionPage from "../../page/user/edit-question/EditQuestionPage";
import QuestionPage from "../../page/user/question/QuestionPage";
import QuestionCardPage from "../../page/user/questions/QuestionCardPage";


const UserRoutes = () => {
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

export default UserRoutes;
