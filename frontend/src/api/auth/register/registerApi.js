import AxiosInstance from "../../axiosInstance";

export const registerApi = async (user) => {
    const response = await AxiosInstance.post("/v1/auth/sign-up", user);
    return response.data;
};