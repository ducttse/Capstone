import { Route } from "react-router-dom";
import AdminLayout from "../../page/admin/AdminLayout";
import CreateModerator from "../../page/admin/create-moderator/CreateModerator";
import ModeratorManagement from "../../page/admin/ModeratorManagement";
import UpdateModerator from "../../page/admin/update-moderator/UpdateModerator";
import DetailModerator from "../../page/admin/view-modetator/DetailModerator";


const AdminRoutes = () => {
	return (
		<>
			<Route exact path="/admin">
				<AdminLayout><ModeratorManagement /></AdminLayout>
			</Route>
				
			<Route exact path="/admin/create-moderator">
				<AdminLayout><CreateModerator /></AdminLayout>
			</Route>

			<Route exact path="/admin/update-moderator/:id">
				<AdminLayout><UpdateModerator /></AdminLayout>
			</Route>
			
			<Route exact path="/admin/detail-moderator/:id">
				<AdminLayout><DetailModerator /></AdminLayout>
			</Route>
		</>
		
	);
};

export default AdminRoutes;
