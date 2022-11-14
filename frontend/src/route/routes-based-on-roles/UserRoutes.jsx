import { Route } from "react-router-dom";
import CustomLayout from "../../common/CustomLayout";
import UserComponents from "../../page/user/UserComponents.jsx";

const UserRoutes = () => {
	return (
		<CustomLayout>
			<UserComponents />
		</CustomLayout>
	);
};

export default UserRoutes;
