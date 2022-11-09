import { Route } from "react-router-dom";
import Logout from "../../page/auth/Logout";


const CommonRoutes = () => {
    return ( <>
        <Route exact path="/logout">
          <Logout />
        </Route>
    </> );
}
 
export default CommonRoutes;