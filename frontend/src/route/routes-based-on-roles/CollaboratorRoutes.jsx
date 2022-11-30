import { Route } from "react-router-dom";
import CollaboratorLayout from "../../page/collaborator/CollaboratorLayout";
import IssueManagement from "../../page/collaborator/IssueManagement";
import DetailIssue from "../../page/collaborator/view-issue/DetailIssue";



const CollaboratorRoutes = () => {
	return (
		<>
		<Route exact path="/issue">
			<CollaboratorLayout><IssueManagement/></CollaboratorLayout>
		</Route>

		<Route exact path="/issue/detail-issue/:id">
			<CollaboratorLayout><DetailIssue/></CollaboratorLayout>
		</Route>

		</>
		
	);
};

export default CollaboratorRoutes;
