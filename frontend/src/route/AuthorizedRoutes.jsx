import { useSelector } from "react-redux";
import AdminRoutes from "./routes-based-on-roles/AdminRoutes";
import StaffRoutes from "./routes-based-on-roles/StaffRoutes";
import UserRoutes from "./routes-based-on-roles/UserRoutes";

function AuthorizedRoutes() {

    const auth = useSelector((state) => state.auth);
    
    switch (auth.user?.roleId) {
      case 1:
        return <UserRoutes/>;
      case 2:
        return <AdminRoutes/>; 
      case 3: 
        return <StaffRoutes/>;
    }
  }

  export default AuthorizedRoutes;