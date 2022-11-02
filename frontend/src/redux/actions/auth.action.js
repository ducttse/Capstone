import {
    LOGIN_FAIL,
    LOGIN_SUCCESS,
    LOGOUT
} from "../constants/auth.constant.js";


const loginSuccess = (payload) => {
    return {
        type: LOGIN_SUCCESS,
        payload: payload,
    }
}

const loginFail = (payload) => {
    return {
        type: LOGIN_FAIL,
        payload: payload,
    }
}


const logout = () => {
    return {
        type: LOGOUT,
    }
}

export {loginSuccess, loginFail, logout};