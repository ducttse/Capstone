import { Route } from "react-router-dom";
import Logout from "../../page/auth/login-logout/Logout";
import ProfileLayout from "../../page/profile/ProfileLayout";
import ProfilePage from "../../page/profile/view-profile/ProfilePage";


const CommonRoutes = () => {
    return ( <>
        <Route exact path="/profile">
          <ProfileLayout> <ProfilePage /> </ProfileLayout>
        </Route>
        <Route exact path="/logout">
          <Logout />
        </Route>
    </> );
}
 
export default CommonRoutes;