import "./App.css";
import React, { useState } from "react";
import { MeetingProvider, MeetingConsumer } from "@videosdk.live/react-sdk";
import JoinScreen from "./video/JoinScreen.jsx";
import Container from "./video/Container.jsx";
import { authToken, createMeeting } from "./api/index.js";

function App() {
	const [meetingId, setMeetingId] = useState(null);

	const getMeetingAndToken = async (id) => {
		const meetingId =
			id == null ? await createMeeting({ token: authToken }) : id;
		setMeetingId(meetingId);
	};

	return authToken && meetingId ? (
		<MeetingProvider
			config={{
				meetingId,
				micEnabled: false,
				webcamEnabled: false,
				name: "long"
			}}
			token={authToken}
		>
			<MeetingConsumer>
				{() => <Container meetingId={meetingId} />}
			</MeetingConsumer>
		</MeetingProvider>
	) : (
		<JoinScreen getMeetingAndToken={getMeetingAndToken} />
	);
}

export default App;
