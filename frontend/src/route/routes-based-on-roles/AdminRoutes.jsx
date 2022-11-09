import { Route } from "react-router-dom";
import AdminLayout from "../../page/admin/AdminLayout";
import ModeratorManagementPage from "../../page/admin/ModeratorManagementPage";
import Test from "../../page/Test";


const AdminRoutes = () => {
	return (
		<AdminLayout>
			<Route exact path="/admin">
				<Test />
			</Route>
		</AdminLayout>
	);
};

export default AdminRoutes;
