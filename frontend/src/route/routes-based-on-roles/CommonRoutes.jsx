import { Route } from "react-router-dom";
import Logout from "../../page/auth/login-logout/Logout";
import ChangePassword from "../../page/profile/change-password/ChangePassword";
import ProfileLayout from "../../page/profile/ProfileLayout";
import UpdateProfile from "../../page/profile/update-profile/UpdateProfilePage";
import ProfilePage from "../../page/profile/view-profile/ProfilePage";


const CommonRoutes = () => {
    return ( <>
        <Route exact path="/profile">
          <ProfileLayout> <ProfilePage /> </ProfileLayout>
        </Route>
        <Route exact path="/update-profile">
          <ProfileLayout> <UpdateProfile /> </ProfileLayout>
        </Route>
        <Route exact path="/change-password">
          <ProfileLayout> <ChangePassword /> </ProfileLayout>
        </Route>
        <Route exact path="/logout">
          <Logout />
        </Route>
    </> );
}
 
export default CommonRoutes;