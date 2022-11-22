import { message } from "antd";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { clearupdateProfileMessage } from "../../../redux/profile/actions/updateProfile.action";
import UpdateOthersProfile from "./UpdateOthersProfile";
import UpdateStudentProfile from "./UpdateStudentProfile";


const UpdateProfile = () => {
    const user = JSON.parse(localStorage.getItem("user"));
    const dispatch = useDispatch();
    const history = useHistory();
    const updateProfileState = useSelector(state => state.updateProfile);

    useEffect(() => {
        finishMessage();
    },[updateProfileState])

    const finishMessage = () => {
        if(updateProfileState.isSuccess){
            message.success("Cập nhật thông tin thành công");
            dispatch(clearupdateProfileMessage());
            history.push("/profile");
        }
        else if (updateProfileState.error !== "") {
            message.error(updateProfileState.error);
            dispatch(clearupdateProfileMessage());
        }
    }

    return user.roleId === 1 ? <UpdateStudentProfile/> : <UpdateOthersProfile/>;
}
 
export default UpdateProfile;