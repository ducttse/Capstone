import AxiosInstance from "../axiosInstance";

export const getCollaboratorProfileApi = async ( id) => {
    const response = await AxiosInstance.get(`/collaborators/${id}`);
    return response.data;
};

export const updateCollaboratorProfileApi = async (id, profile) => {
    const response = await AxiosInstance.put(`/collaborators/${id}`, profile);
    return response.data;
}