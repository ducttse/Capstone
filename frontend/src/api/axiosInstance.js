import axios from "axios";
import { getAuthHeader } from "../utils/auth";

const AxiosInstance = axios.create({
	baseURL: "https://mindstone.azurewebsites.net/api",
	headers: header
});

export default AxiosInstance;
