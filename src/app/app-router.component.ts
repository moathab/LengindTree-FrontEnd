import{NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {HomeComponent} from './customerComponents/CustomerHome/home.component';
import {StartupComponent} from './startup/startup.component';
import {RegisterComponent} from './register/register.component';
import {CustprofileComponent} from './customerComponents/custprofile/custprofile.component';
import { AdminHomeComponent} from './adminComponents/admin-home/admin-home.component';
import {LoansHomeComponent} from './adminComponents/Admin-LoanComponents/loans-home/loans-home.component';
import {AllLoansComponent} from './adminComponents/Admin-LoanComponents/all-loans/all-loans.component';
import {PendingLoansComponent} from './adminComponents/Admin-LoanComponents/pending-loans/pending-loans.component';
import {PickupLoansComponent} from './adminComponents/Admin-LoanComponents/loans-by-department/pickup-loans/pickup-loans.component';
import {VerificationLoansComponent} from './adminComponents/Admin-LoanComponents/loans-by-department/verification-loans/verification-loans.component';
import {LegalLoansComponent} from './adminComponents/Admin-LoanComponents/loans-by-department/legal-loans/legal-loans.component';
import {LoansByDepartmentComponent} from './adminComponents/Admin-LoanComponents/loans-by-department/loans-by-department.component';
import {AdminEmployeeHomeComponent} from './adminComponents/Admin-EmployeeComponents/admin-employee-home/admin-employee-home.component';
import {AdminAllEmployeesComponent} from './adminComponents/Admin-EmployeeComponents/admin-all-employees/admin-all-employees.component';
import {AdminPickUpEmployeesComponent} from './adminComponents/Admin-EmployeeComponents/admin-pick-up-employees/admin-pick-up-employees.component';
import {AdminVerificationEmployeesComponent} from './adminComponents/Admin-EmployeeComponents/admin-verification-employees/admin-verification-employees.component';
import {AdminLegalEmployeesComponent} from './adminComponents/Admin-EmployeeComponents/admin-legal-employees/admin-legal-employees.component';
import {AdminAllCustomersComponent} from './adminComponents/Admin-CustomerComponents/admin-all-customers/admin-all-customers.component';
import {CustomerAllLoansComponent} from './customerComponents/custLoansComponents/customer-all-loans/customer-all-loans.component';
import {CustomerLoansHomeComponent} from './customerComponents/custLoansComponents/customer-loans-home/customer-loans-home.component';
import {CustomerApplyLoanComponent} from './customerComponents/custLoansComponents/customer-apply-loan/customer-apply-loan.component';
import {AdminRegisterEmployeeComponent} from './adminComponents/Admin-EmployeeComponents/admin-register-employee/admin-register-employee.component';
import {EmployeeHomeComponent} from './employeeComponents/employee-home/employee-home.component';
import {EmployeeLoansHomeComponent} from './employeeComponents/employeeLoans/employee-loans-home/employee-loans-home.component';
import {EmployeeAllLoansComponent} from './employeeComponents/employeeLoans/employee-all-loans/employee-all-loans.component';
import {EmployeePendingLoansComponent} from './employeeComponents/employeeLoans/employee-pending-loans/employee-pending-loans.component';
import {EmployeeProfileComponent} from './employeeComponents/employee-profile/employee-profile.component';
import {ContactComponent} from './contact/contact.component';


const routes: Routes=[
  {path:'login', component: LoginComponent},
  {path: 'customer/home' , component: HomeComponent},
  {path:'register', component: RegisterComponent},
  {path:'', component: StartupComponent},
  {path: 'customer/loans', component: CustomerLoansHomeComponent},
  {path:'customer/loans/allLoans', component: CustomerAllLoansComponent},
  {path:'customer/profile', component: CustprofileComponent},
  {path: 'customer/loans/applyForLoan', component: CustomerApplyLoanComponent},
  {path: 'admin/home', component: AdminHomeComponent},
  {path: 'admin/loans', component: LoansHomeComponent},
  {path: 'admin/loans/allLoans', component: AllLoansComponent},
  {path: 'admin/loans/pendingLoans', component: PendingLoansComponent},
  {path: 'admin/loans/loansByDepartment', component: LoansByDepartmentComponent},
  {path: 'admin/loans/loansByDepartment/pickupLoans', component: PickupLoansComponent},
  {path: 'admin/loans/loansByDepartment/verificationLoans', component: VerificationLoansComponent},
  {path: 'admin/loans/loansByDepartment/legalLoans', component: LegalLoansComponent},
  {path: 'admin/employees', component: AdminEmployeeHomeComponent},
  {path: 'admin/employees/allEmployees', component: AdminAllEmployeesComponent},
  {path: 'admin/employees/pickupEmployees', component: AdminPickUpEmployeesComponent},
  {path: 'admin/employees/verificationEmployees', component: AdminVerificationEmployeesComponent},
  {path: 'admin/employees/legalEmployees', component: AdminLegalEmployeesComponent},
  {path: 'admin/customers', component: AdminAllCustomersComponent},
  {path: 'admin/employees/registerEmployee', component: AdminRegisterEmployeeComponent},
  {path: 'employee', component: EmployeeHomeComponent},
  {path: 'employee/profile', component: EmployeeProfileComponent},
  {path: 'employee/loans', component: EmployeeLoansHomeComponent},
  {path: 'employee/loans/allLoans', component: EmployeeAllLoansComponent},
  {path: 'employee/loans/pendingLoans', component: EmployeePendingLoansComponent},
  {path:'contact', component: ContactComponent}



];


@NgModule({
  imports:[RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule{

}
export const routingComponents = []
