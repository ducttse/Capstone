import BookingPage from "./BookingPage.jsx";
import QuestionPage from "./QuestionPage.jsx";
import RequestListPage from "./RequestListPage.jsx";

const { Switch, Route, useRouteMatch } = require("react-router-dom");

const QuestionRoute = () => {
	const { path, url } = useRouteMatch();
	return (
		<>
			<Route path={`${path}/requests`}>
				<RequestListPage />
			</Route>
			<Route path={`${path}/booking`}>
				<BookingPage />
			</Route>
			<Route exact path={`${path}`}>
				<QuestionPage />
			</Route>
		</>
	);
};

export default QuestionRoute;
