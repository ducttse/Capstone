import axios from "axios";
import { getAuthHeader } from "../utils/auth";

const header = getAuthHeader();

const AxiosInstance = axios.create({
	baseURL: "https://mindstone.azurewebsites.net/api/v1",
	headers: header,
});

export default AxiosInstance;
