import AxiosInstance from "../../axiosInstance";


export const getStudentsApi = async () => {
    const response = await AxiosInstance.get(`/students` );
    return response.data;
  };
  
  export const searchStudentsApi = async (searchValue) => {
    const response = await AxiosInstance.get(`/students`, {
      params: {
        searchText: searchValue,
      },
    });
    return response.data;
  };

export const getStudentProfileApi = async (id) => {
  const response = await AxiosInstance.get(`/students/${id}`);
  return response.data;
};

export const updateStudentProfileApi = async (id, profile) => {
  const response = await AxiosInstance.put(`/students/${id}`, profile);
  return response.data;
};
