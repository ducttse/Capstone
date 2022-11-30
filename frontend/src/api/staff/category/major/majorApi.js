import AxiosInstance from "../../../axiosInstance";

export const getMajorsApi = async () => {
  const response = await AxiosInstance.get(`/majors/all`, {});
  return response.data;
};

export const searchMajorsApi = async (searchValue) => {
  const response = await AxiosInstance.get(`/majors/all`, {
    params: {
      searchText: searchValue,
    },
  });
  return response.data;
};

export const getMajorApi = async (id) => {
  const response = await AxiosInstance.get(`/majors/${id}`);
  return response.data;
};

export const createMajorApi = async (major) => {
  const response = await AxiosInstance.post(`/majors`, 
                                              major.name, 
                                              {
                                                headers: {
                                                  'Content-Type' : 'text/plain'
                                                }
                                              }
                                            );
  return response.data;
};

export const updateMajorApi = async (id, major) => {
  const response = await AxiosInstance.put(`/majors/${id}`, 
                                              major.name, 
                                              {
                                                headers: {
                                                  'Content-Type' : 'text/plain'
                                                }
                                              }
                                          );
  return response.data;
};

export const disableMajorApi = async (id) => {
  const response = await AxiosInstance.delete(`/majors/${id}`);
  return response.data;
};
