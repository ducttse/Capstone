import { useSelector } from "react-redux";
import {Route, Redirect} from "react-router-dom";


function AuthenticatedRoute({ children, ...rest }) {

    const auth = useSelector((state) => state.auth);
    return (
      <Route
        {...rest}
        render={() => {
          return auth.isLoggedIn === true ? (
            children
          ) : (
            <Redirect to="/" />
          );
        }}
      />
    );
  }

  export default AuthenticatedRoute;