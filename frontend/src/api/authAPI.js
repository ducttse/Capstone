import axios from "axios";

// const register = (user) => {
//   return axios.post(API_URL + "signup", user);
// };
const responseData = [
  {
    "fullName": "user 1",
    "roleId": 1,
    "accessToken": "accessToken 1",
    "userId": 1
   },
   {
    "fullName": "admin 1",
    "roleId": 2,
    "accessToken": "accessToken 2",
    "userId": 2
   },
   {
    "fullName": "staff 1",
    "roleId": 3,
    "accessToken": "accessToken 3",
    "userId": 3
   },
   null,
  ];



const login = (formData) => {
    const {email, password} = formData;
    let index = 1;
    if(email.includes("user")) index = 0;
    else if(email.includes("admin")) index = 1;
    else if(email.includes("staff")) index = 2;
    else index = 3;

    localStorage.setItem("user", JSON.stringify(responseData[index]));
//    return axios
// //     .post(API_URL + "signin", formData)
// //     .then((response) => {
// //       if (response.data.accessToken) {
// //         localStorage.setItem("user", JSON.stringify(response.data));
// //       }
//             return response.data;
//         });
    return responseData[index];
};




const logoutAPI   = () => {
  localStorage.removeItem("user");
};


export {login, logoutAPI};