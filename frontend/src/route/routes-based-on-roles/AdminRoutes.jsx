import { Route } from "react-router-dom";
import AdminLayout from "../../page/admin/AdminLayout";
import CollaboratorManagement from "../../page/admin/collaborator/CollaboratorManagement";
import CreateCollaborator from "../../page/admin/collaborator/create-collaborator/CreateCollaborator";
import UpdateCollaborator from "../../page/admin/collaborator/update-collaborator/UpdateCollaborator";
import DetailCollaborator from "../../page/admin/collaborator/view-collaborator/DetailCollaborator";
import CreateModerator from "../../page/admin/moderator/create-moderator/CreateModerator";
import ModeratorManagement from "../../page/admin/moderator/ModeratorManagement";
import UpdateModerator from "../../page/admin/moderator/update-moderator/UpdateModerator";
import DetailModerator from "../../page/admin/moderator/view-modetator/DetailModerator";



const AdminRoutes = () => {
	return (
		<>
			<Route exact path="/moderator">
				<AdminLayout><ModeratorManagement /></AdminLayout>
			</Route>
				
			<Route exact path="/moderator/create-moderator">
				<AdminLayout><CreateModerator /></AdminLayout>
			</Route>

			<Route exact path="/moderator/update-moderator/:id">
				<AdminLayout><UpdateModerator /></AdminLayout>
			</Route>
			
			<Route exact path="/moderator/detail-moderator/:id">
				<AdminLayout><DetailModerator /></AdminLayout>
			</Route>

			<Route exact path="/collaborator">
				<AdminLayout><CollaboratorManagement /></AdminLayout>
			</Route>
				
			<Route exact path="/collaborator/create-collaborator">
				<AdminLayout><CreateCollaborator /></AdminLayout>
			</Route>

			<Route exact path="/collaborator/update-collaborator/:id">
				<AdminLayout><UpdateCollaborator /></AdminLayout>
			</Route>
			
			<Route exact path="/collaborator/detail-collaborator/:id">
				<AdminLayout><DetailCollaborator /></AdminLayout>
			</Route>
		</>
		
	);
};

export default AdminRoutes;
