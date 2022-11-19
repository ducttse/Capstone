import AxiosInstance from "../axiosInstance";

export const getProfileApi = async (id) => {
    const response = await AxiosInstance.get(`/students/${id}`);
    return response.data;
};