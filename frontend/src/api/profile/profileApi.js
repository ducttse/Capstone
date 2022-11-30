import {
  getModeratorProfileApi,
  updateModeratorProfileApi,
} from "../admin/moderator/moderatorApi";
import AxiosInstance from "../axiosInstance";
import { updateCollaboratorProfileApi } from "../admin/collaborator/collaboratorApi";
import {
  getStudentProfileApi,
  updateStudentProfileApi,
} from "../staff/students/studentApi";

export const getProfileApi = async (roleId, id) => {
  let response;
  if (roleId === 1) response = getStudentProfileApi(id);
  if (roleId === 2 || roleId === 3) response = getModeratorProfileApi(id);
  if (roleId === 4) response = getModeratorProfileApi(id);
  return response;
};

export const updateProfileApi = async (roleId, id, profile) => {
  let response;
  if (roleId === 1) response = updateStudentProfileApi(id, profile);
  if (roleId === 2 || roleId === 3)
    response = updateModeratorProfileApi(id, profile);
  if (roleId === 4) response = updateCollaboratorProfileApi(id, profile);
  return response;
};

export const changePasswordApi = async (account) => {
  const response = await AxiosInstance.post(
    `/accounts/change-password`,
    account
  );
  return response.data;
};
