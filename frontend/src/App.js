import { notification } from "antd";
import { useEffect, useState } from "react";
import CustomLayout from "./common/CustomLayout";
import QuestionCard from "./components/question/QuestionCard";
import QuestionCardPage from "./components/question/QuestionCardPage.js";
import { getFireBaseToken, onMessageListener } from "./firebase";
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
		<>
			<CustomLayout content={<QuestionCardPage />} />
		</>
	);
};

export default App;
