import AxiosInstance from "../../axiosInstance.js";

export const getMajors = async () => {
	try {
		const { data } = await AxiosInstance.get("/majors/");
		const { statusCode, message, data: majors } = data;
		if (statusCode < 300 && message === "Success") return majors;
		else throw new Error("get failed");
	} catch (error) {
		console.log(error);
	}

	return [];
};
