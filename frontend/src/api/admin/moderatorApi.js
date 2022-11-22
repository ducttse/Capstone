import AxiosInstance from "../axiosInstance";

export const getModeratorProfileApi = async ( id) => {
    const response = await AxiosInstance.get(`/mods/${id}`);
    return response.data;
};

export const updateModeratorưProfileApi = async (id, profile) => {
    const response = await AxiosInstance.put(`/mods/${id}`, profile);
    return response.data;
}