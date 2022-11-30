export const getAuthHeader = () => {
	const user = JSON.parse(localStorage.getItem("user"));
	if (user && user.accessToken) {
		return { Authorization: `${user.tokenType} ${user.accessToken}` };
	} else {
		return {};
	}
};

export const updateLocalInfo = (changeInfo) => {
	const user = JSON.parse(localStorage.getItem("user"));
	const newUser = {...user, ...changeInfo}
	localStorage.setItem("user",JSON.stringify(newUser));
};
