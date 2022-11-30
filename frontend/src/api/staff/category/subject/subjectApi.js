import AxiosInstance from "../../../axiosInstance";

export const getSubjectsApi = async () => {
  const response = await AxiosInstance.get(`/subjects`, {});
  return response.data;
};

export const searchSubjectsApi = async (searchValue) => {
  const response = await AxiosInstance.get(`/subjects`, null, {
    params: {
      searchText: searchValue,
    },
  });
  return response.data;
};

export const getSubjectApi = async (id) => {
  const response = await AxiosInstance.get(`/subjects/${id}`);
  return response.data;
};

export const createSubjectApi = async (subject) => {
  const response = await AxiosInstance.post(`/subjects`, subject);
  return response.data;
};

export const updateSubjectApi = async (id, subject) => {
  const response = await AxiosInstance.put(`/subjects/${id}`, subject);
  return response.data;
};

export const disableSubjectApi = async (id) => {
  const response = await AxiosInstance.delete(`/subjects/${id}`);
  return response.data;
};
