import { Route } from "react-router-dom";
import CreateMajor from "../../page/staff/category/major/create-major/CreateMajor";
import MajorManagement from "../../page/staff/category/major/MajorManagement";
import UpdateMajor from "../../page/staff/category/major/update-major/UpdateMajor";
import DetailMajor from "../../page/staff/category/major/view-major/DetailMajor";
import CreateSubject from "../../page/staff/category/subject/create-subject/CreateSubject";
import SubjectManagement from "../../page/staff/category/subject/SubjectManagement";
import UpdateSubject from "../../page/staff/category/subject/update-subject/UpdateSubject";
import DetailSubject from "../../page/staff/category/subject/view-subject/DetailSubject";
import StaffLayout from "../../page/staff/StaffLayout";
import StudentManagement from "../../page/staff/student/StudentManagement";
import DetailStudent from "../../page/staff/student/view-student/DetailStudent";
import TransactionManagement from "../../page/staff/transaction/TransactionManagement";
import DetailTransaction from "../../page/staff/transaction/view-transaction/DetailTransaction";

const StaffRoutes = () => {
    return ( 
    <>
			<Route exact path="/student">
				<StaffLayout><StudentManagement /></StaffLayout>
			</Route>

			{/* <Route exact path="/student/update-student/:id">
				<StaffLayout><UpdateStudent /></StaffLayout>
			</Route> */}
			
			<Route exact path="/student/detail-student/:id">
				<StaffLayout><DetailStudent /></StaffLayout>
            </Route>


			
            <Route exact path="/major">
				<StaffLayout><MajorManagement /></StaffLayout>
			</Route>
				
			<Route exact path="/major/create-major">
				<StaffLayout><CreateMajor /></StaffLayout>
			</Route>

			<Route exact path="/major/update-major/:id">
				<StaffLayout><UpdateMajor /></StaffLayout>
			</Route>
			
			<Route exact path="/major/detail-major/:id">
				<StaffLayout><DetailMajor /></StaffLayout>
			</Route>




			<Route exact path="/subject">
				<StaffLayout><SubjectManagement /></StaffLayout>
			</Route>
				
			<Route exact path="/subject/create-subject">
				<StaffLayout><CreateSubject /></StaffLayout>
			</Route>

			<Route exact path="/subject/update-subject/:id">
				<StaffLayout><UpdateSubject /></StaffLayout>
			</Route>
			
			<Route exact path="/subject/detail-subject/:id">
				<StaffLayout><DetailSubject /></StaffLayout>
            </Route>


			
			<Route exact path="/transaction">
				<StaffLayout><TransactionManagement /></StaffLayout>
			</Route>
			<Route exact path="/transaction/detail-transaction/:id">
				<StaffLayout>  <DetailTransaction/>      </StaffLayout>
            </Route>
    </>
    );
}
 
export default StaffRoutes;