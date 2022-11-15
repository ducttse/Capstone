import axios from "axios";
import { getAuthHeader } from "../utils/auth";


const AxiosInstance = axios.create({
	baseURL: "https://mindstone.azurewebsites.net/api",
});

export default AxiosInstance;
