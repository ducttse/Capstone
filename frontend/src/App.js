import { notification } from "antd";
import { useEffect, useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import CustomLayout from "./common/CustomLayout";
import Counter from "./counter.js";
import { getFireBaseToken, onMessageListener } from "./firebase";
import CreateQuestionPage from "./page/question/CreateQuestionPage.jsx";
import QuestionCardPage from "./page/question/QuestionCardPage.jsx";
import store from "./redux/store/store.js";
const openNotification = (message, description) => {
	notification.open({
		message: message,
		description: description,
		onClick: () => {
			console.log("Notification Clicked!");
		}
	});
};

const action = (type) => store.dispatch({ type });

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
				<CustomLayout>
					<Route path="/create-question">
						<CreateQuestionPage />
					</Route>
					<Route path="/questions">
						<QuestionCardPage />
					</Route>
					<Route path="/counter">
						<Counter
							value={store.getState()}
							onIncrement={() => action("INCREMENT")}
							onDecrement={() => action("DECREMENT")}
							onIncrementIfOdd={() => action("INCREMENT_IF_ODD")}
							onIncrementAsync={() => action("INCREMENT_ASYNC")}
						/>
					</Route>
				</CustomLayout>
			</Switch>
		</BrowserRouter>
	);
};

export default App;
