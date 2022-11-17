import AxiosInstance from "../../axiosInstance";


export const forgotPasswordApi = async (user) => {
    const response = await AxiosInstance.post("/v1/auth/forget-password", user);
    return response.data;
};