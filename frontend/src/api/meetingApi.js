import axios from "axios";

export const getMeetingId = async () => {
	try {
		const res = await axios.post(
			"https://api.zujonow.com/api/meetings",
			{},
			{
				headers: {
					authorization:
						"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcGlrZXkiOiIzZjU4MDBmYi1hZGQwLTQ4MTUtYTI3Mi00ODY4Nzc1Y2Q4ZDUiLCJwZXJtaXNzaW9ucyI6WyJhbGxvd19qb2luIl0sImlhdCI6MTY2NzU3MTUxNiwiZXhwIjoxNjY4MTc2MzE2fQ.Fh-gb3RDu-CDEdZcwnpDK3Ezxpghjo_RGSNv5bbe45Y"
				}
			}
		);
		return res;
	} catch (e) {
		console.log(e);
	}
};
