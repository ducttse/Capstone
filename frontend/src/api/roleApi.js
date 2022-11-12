import { async } from "@firebase/util";
import { fakeCallApi } from "./fakeCallApi";

export const roles = [
    {
        roleId: 1,
        name: "Sinh viên",
      },
    {
      roleId: 2,
      name: "Quản trị viên",
    },
    {
      roleId: 3,
      name: "Nhân viên",
    },
    {
      roleId: 4,
      name: "Cộng tác viên",
    },
  ];
  
  export const getRoleName = (id) => {
    const role = roles.find((r) => r.roleId === id);
    return role.name;
  };
  
  export const getRolesApi = async () => {
    await fakeCallApi(100);
    const roleList = roles.filter((role) => role.name.includes("Sinh viên") === false);
    return roleList ;
};