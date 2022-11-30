import AxiosInstance from "../../axiosInstance";

export const getTransactionsApi = async () => {
  const response = await AxiosInstance.get(`/transaction`);
  return response.data;
};

export const filterTransactionsApi = async (params) => {
  const response = await AxiosInstance.get(`/transaction`, {
    params: params,
  });
  return response.data;
};

export const getTransactionDetailApi = async (id) => {
  const response = await AxiosInstance.get(`/transaction/${id}`);
  return response.data;
};
