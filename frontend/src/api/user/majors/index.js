import AxiosInstance from "../../axiosInstance.js";

export const getMajors = async () => {
	const { data } = await AxiosInstance.get("/majors/");
	const { statusCode, message, data: majors } = data;
	return statusCode < 300 && message === "Success" ? majors : [];
};
