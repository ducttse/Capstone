import { Typography } from "antd";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { useEffect } from "react";
import { logoutAPI } from "../../../api/auth/authApi.js";
import { logout } from "../../../redux/auth/actions/auth.action.js";
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