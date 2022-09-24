import { notification } from "antd";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import CustomLayout from "./common/CustomLayout";
import Counter from "./counter.js";
import { getFireBaseToken, onMessageListener } from "./firebase";
import CreateQuestionPage from "./page/question/CreateQuestionPage.jsx";
import QuestionCardPage from "./page/question/QuestionCardPage.jsx";
import {
	decrementCounter,
	incrementAsyncCounter,
	incrementCounter,
	incrementIfOddCounter
} from "./redux/actions/index.js";
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
	const dispatch = useDispatch();
	const counter = useSelector((state) => state);
	const dispatchIncrement = () => dispatch(incrementCounter());
	const dispatchDecrement = () => dispatch(decrementCounter());
	const dispatchIncrementIfOdd = () => dispatch(incrementIfOddCounter());
	const dispatchIncrementAsync = () => dispatch(incrementAsyncCounter());
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
							value={counter}
							increment={dispatchIncrement}
							decrement={dispatchDecrement}
							incrementIfOdd={dispatchIncrementIfOdd}
							incrementAsync={dispatchIncrementAsync}
						/>
					</Route>
				</CustomLayout>
			</Switch>
		</BrowserRouter>
	);
};

export default App;
