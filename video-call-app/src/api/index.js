export const authToken =
	"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcGlrZXkiOiIzZjU4MDBmYi1hZGQwLTQ4MTUtYTI3Mi00ODY4Nzc1Y2Q4ZDUiLCJwZXJtaXNzaW9ucyI6WyJhbGxvd19qb2luIl0sImlhdCI6MTY2NjA5NDI0MCwiZXhwIjoxNjY2Njk5MDQwfQ.Z0ts5-WQfWHED5x9dNfYPsut2V28tP1AXJSGfdyCqMY";
// API call to create meeting
export const createMeeting = async ({ token }) => {
	const res = await fetch(`https://api.videosdk.live/v1/meetings`, {
		method: "POST",
		headers: {
			authorization: `${authToken}`,
			"Content-Type": "application/json"
		},
		body: JSON.stringify({ region: "sg001" })
	});

	const { meetingId } = await res.json();
	return meetingId;
};
