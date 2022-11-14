import AxiosInstance from "../axiosInstance";

const checkLogin = async (user) => {
    const { statusCode, message, data } = await AxiosInstance.post("/auth/sign-in", user);
    localStorage.setItem("user", JSON.stringify(data));
    return data;
};




const logoutAPI   = async (userId) => {
    const { statusCode, message, data } = await AxiosInstance.get(`/logout/${userId}`);
    
    localStorage.removeItem("user");
};


export {checkLogin, logoutAPI};