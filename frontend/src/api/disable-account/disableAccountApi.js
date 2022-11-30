import AxiosInstance from "../axiosInstance";


export const disableAccountdApi = async (id) => {
    const response = await AxiosInstance.delete(`/accounts/${id}`);
    return response.data;
}