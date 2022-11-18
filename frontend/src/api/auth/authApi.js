import AxiosInstance from "../axiosInstance";

const checkLogin = async (user) => {
	const response = await AxiosInstance.post(
		"/v1/auth/sign-in",
		user
	);
	const userInfo = response.data?.data;
	localStorage.setItem("user", JSON.stringify(userInfo));
	return userInfo;
};

const logoutAPI = async (userId) => {
	// const { statusCode, message, data } = await AxiosInstance.get(
	// 	`/logout/${userId}`
	// );

	localStorage.removeItem("user");
};

export { checkLogin, logoutAPI };
