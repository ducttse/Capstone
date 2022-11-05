import { Typography } from "antd";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import {logout } from "../../redux/auth/actions/auth.action.js";
import { logoutAPI } from "../../api/authAPI.js";
const {Link} = Typography;


const Logout = () => {

    const dispatch = useDispatch(); 
    const history = useHistory();

    const onClick = () => {
        logoutAPI();
        dispatch(logout());
        history.push("/");
    }

    return (
        <>
            <Link onClick={onClick}> Logout </Link>
        </>
    )
}

export default Logout;