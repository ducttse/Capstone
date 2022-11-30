import AxiosInstance from "../../axiosInstance";

export const getCollaboratorsApi = async () => {
  const response = await AxiosInstance.get(`/collaborators`,{});
  return response.data;
};

export const searchCollaboratorsApi = async (searchValue) => {
  const response = await AxiosInstance.get(`/collaborators`, null, {
    params: {
      searchText: searchValue,
    },
  });
  return response.data;
};

export const getCollaboratorProfileApi = async (id) => {
  const response = await AxiosInstance.get(`/collaborators/${id}`);
  return response.data;
};

export const updateCollaboratorProfileApi = async (id, profile) => {
  const response = await AxiosInstance.put(`/collaborators/${id}`, profile);
  return response.data;
};

export const createCollaboratorApi = async (collaborator) => {
  const response = await AxiosInstance.post(`/collaborators`, collaborator);
  return response.data;
};
