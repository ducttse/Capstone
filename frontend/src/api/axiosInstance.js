import axios from "axios";
import { getAuthHeader } from "../utils/auth.js";

const header = getAuthHeader();

const AxiosInstance = axios.create({
	baseURL: "https://mindstone.azurewebsites.net/api"
});

export default AxiosInstance;
