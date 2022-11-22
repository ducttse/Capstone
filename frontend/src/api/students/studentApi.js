import AxiosInstance from "../axiosInstance";

export const getStudentProfileApi = async ( id) => {
    const response = await AxiosInstance.get(`/students/${id}`);
    return response.data;
};

export const updateStudentProfileApi = async (id, profile) => {
    const response = await AxiosInstance.put(`/students/${id}`, profile);
    return response.data;
}