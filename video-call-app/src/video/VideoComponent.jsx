import { useParticipant } from "@videosdk.live/react-sdk";
import { useEffect, useMemo, useRef } from "react";
import ReactPlayer from "react-player";

function VideoComponent(props) {
	const micRef = useRef(null);
	const { webcamStream, micStream, webcamOn, micOn, isLocal } = useParticipant(
		props.participantId
	);

	const videoStream = useMemo(() => {
		if (webcamOn) {
			const mediaStream = new MediaStream();
			console.log(webcamStream.track);
			mediaStream.addTrack(webcamStream.track);
			return mediaStream;
		}
	}, [webcamStream, webcamOn]);

	useEffect(() => {
		if (micRef.current) {
			if (micOn) {
				const mediaStream = new MediaStream();
				mediaStream.addTrack(micStream.track);

				micRef.current.srcObject = mediaStream;
				micRef.current
					.play()
					.catch((error) =>
						console.error("videoElem.current.play() failed", error)
					);
			} else {
				micRef.current.srcObject = null;
			}
		}
	}, [micStream, micOn]);

	return (
		<div key={props.participantId}>
			{micOn && micRef && <audio ref={micRef} autoPlay muted={isLocal} />}
			{webcamOn && (
				<ReactPlayer
					//
					playsinline={false}
					pip={false}
					light={false}
					controls={true}
					muted={true}
					playing={true}
					//
					url={videoStream}
					//
					height={"100px"}
					width={"100px"}
					onError={(err) => {
						console.log(err, "participant video error");
					}}
				/>
			)}
		</div>
	);
}

export default VideoComponent;
