import axios from "axios";

const AxiosInstance = axios.create({
	baseURL: "https://mindstone.azurewebsites.net/api",
});

export default AxiosInstance;
