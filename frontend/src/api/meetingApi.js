import axios from "axios";

export const getMeetingId = async () => {
	try {
		const { data } = await axios.post(
			"https://api.zujonow.com/api/meetings",
			{},
			{
				headers: {
					authorization: `${process.env.REACT_APP_VIDEO_SDK_TOKEN}`
				}
			}
		);
		return data;
	} catch (e) {
		console.log(e);
	}
};
