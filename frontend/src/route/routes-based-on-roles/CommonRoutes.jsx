import { Route } from "react-router-dom";
import Logout from "../../page/auth/login-logout/Logout";


const CommonRoutes = () => {
    return ( <>
        <Route exact path="/logout">
          <Logout />
        </Route>
    </> );
}
 
export default CommonRoutes;