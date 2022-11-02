import axios from "axios";

const API_URL = "https://632ae436713d41bc8e7a286f.mockapi.io/";

// const register = (user) => {
//   return axios.post(API_URL + "signup", user);
// };
const responseData = {
    "fullName": "fullName 1",
    "roleId": 1,
    "accessToken": "accessToken 1",
    "userId": 1
   };
const login = () => {
    localStorage.setItem("user", JSON.stringify(responseData));
//    return axios
// //     .post(API_URL + "signin", formData)
// //     .then((response) => {
// //       if (response.data.accessToken) {
// //         localStorage.setItem("user", JSON.stringify(response.data));
// //       }
//             return response.data;
//         });
    return responseData;
};



const logout   = () => {
  localStorage.removeItem("user");
};

const authHeader = () => {
  const user = JSON.parse(localStorage.getItem('user'));

  if (user && user.accessToken) {
    const user = JSON.parse(localStorage.getItem('user'));

    if (user && user.accessToken) {
      return { Authorization: 'Bearer ' + user.accessToken };
    } else {
      return {};
    }
  }
};

export {login, logout, authHeader};