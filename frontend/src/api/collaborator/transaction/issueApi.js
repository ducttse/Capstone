import AxiosInstance from "../../axiosInstance";

const fakeResponses = {
  statusCode: 200,
  message: "Success",
  data: [
    {
    id: 1,
    title: "Test 1",
    description: "T",
    createdTime: "2022-11-24 13:15:17.3860000",
    resolvedTime:"2022-11-24 13:15:17.3860000",
    status: 1,
    creatorId: 1,
    meetingId: 2,
    reportedStudentId: 3,
    solution: null

  }
],
  metaData: {
      totalCount: 0,
      pageSize: 10,
      currentPage: 1,
      totalPage: 0,
      hasNextPage: false,
      hasPrevPage: false,
      prevPage: null,
      nextPage: null
  }
}

const fakeResponse = {
  statusCode: 200,
  message: "Success",
  data: {
    id: 1,
    title: "Test 1",
    description: "T",
    createdTime: "2022-11-24 13:15:17.3860000",
    resolvedTime:"",
    status: 1,
    creatorId: 1,
    meetingId: 2,
    reportedStudentId: 3,
    solution: null

  },
  metaData: {
      totalCount: 0,
      pageSize: 10,
      currentPage: 1,
      totalPage: 0,
      hasNextPage: false,
      hasPrevPage: false,
      prevPage: null,
      nextPage: null
  }
}

export const getIssuesApi = async () => {
  return fakeResponses;
  // const response = await AxiosInstance.get(`/issue`);
  // return response.data;
};

export const searchIssuesApi = async (params) => {
  const response = await AxiosInstance.get(`/issue`, {
    params: params,
  });
  return response.data;
};

export const getIssueDetailApi = async (id) => {
  return fakeResponse;
  // const response = await AxiosInstance.get(`/issue/${id}`);
  // return response.data;
};
