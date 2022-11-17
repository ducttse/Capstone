import AxiosInstance from "../../axiosInstance";

export const submitOtpApi = async (data) => {
    const response = await AxiosInstance.post("/v1/auth/active-account", data);
    return response.data;
};

export const sendOtpApi = async (email) => {
    const response = await AxiosInstance.post("/v1/auth/sendOTP", null, {params: {email}});
    return response.data;
};