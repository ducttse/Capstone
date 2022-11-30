import AxiosInstance from "../../axiosInstance";

export const getModeratorsApi = async () => {
  const response = await AxiosInstance.get(`/mods`);
  return response.data;
};

export const searchModeratorsApi = async (searchValue) => {
  const response = await AxiosInstance.get(`/mods`, {
    params: {
      searchText: searchValue,
    },
  });
  return response.data;
};

export const getModeratorProfileApi = async (id) => {
  const response = await AxiosInstance.get(`/mods/${id}`);
  return response.data;
};

export const updateModeratorProfileApi = async (id, profile) => {
  const response = await AxiosInstance.put(`/mods/${id}`, profile);
  return response.data;
};

export const createModeratorApi = async (moderator) => {
  const response = await AxiosInstance.post(`/mods`, moderator);
  return response.data;
};
