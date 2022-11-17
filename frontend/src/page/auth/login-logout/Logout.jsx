import { Typography } from "antd";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import {logout } from "../../../redux/auth/actions/auth.action.js";
import { logoutAPI } from "../../../api/authAPI.js";
import { useEffect } from "react";
const {Link} = Typography;


const Logout = () => {

    const dispatch = useDispatch(); 
    const history = useHistory();

    useEffect( () => {
        logoutAPI();
        dispatch(logout());
        history.push("/");
    },[]);
}

export default Logout;