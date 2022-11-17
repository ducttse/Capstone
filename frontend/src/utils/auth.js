export const getAuthHeader = () => {
	const user = JSON.parse(localStorage.getItem("user"));
	console.log(user);
	if (user && user.accessToken) {
		return { Authorization: `${user.tokenType} ${user.accessToken}` };
	} else {
		return {};
	}
};
