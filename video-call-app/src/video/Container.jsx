import { useMeeting } from "@videosdk.live/react-sdk";
import { useState } from "react";
import Controls from "./Controls.jsx";
import VideoComponent from "./VideoComponent.jsx";

function Container(props) {
	const [joined, setJoined] = useState(false);
	const { join } = useMeeting();
	const { participants } = useMeeting();
	const joinMeeting = () => {
		setJoined(true);
		join();
	};

	return (
		<div className="container">
			<h3>Meeting Id: {props.meetingId}</h3>
			{joined ? (
				<div>
					<Controls />
					{[...participants.keys()].map((participantId, i) => (
						<VideoComponent participantId={participantId} />
					))}
				</div>
			) : (
				<button onClick={joinMeeting}>Join</button>
			)}
		</div>
	);
}

export default Container;
