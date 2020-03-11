import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './customerComponents/CustomerHome/home.component';
import { HttpClient,HttpClientModule } from '@angular/common/http';
import{Ng2SearchPipeModule} from 'ng2-search-filter';
import { RouterModule } from '@angular/router';
import { AppRoutingModule, routingComponents} from './app-router.component';
import { StartupComponent } from './startup/startup.component';
import { RegisterComponent } from './register/register.component';
import { CustprofileComponent } from './customerComponents/custprofile/custprofile.component';
import {custLoanAndProfile} from './Service/CustomerService/custLoanAndProfile';
import { AdminHomeComponent} from './adminComponents/admin-home/admin-home.component';
import { adminApi} from './Service/AdminService/adminApi';
import { commonApi} from './Service/CommonService/commonApi';
import { AllLoansComponent } from './adminComponents/Admin-LoanComponents/all-loans/all-loans.component';
import { LoansHomeComponent } from './adminComponents/Admin-LoanComponents/loans-home/loans-home.component';
import { NavbarComponent } from './allnavbars/navbar/navbar.component';
import { PendingLoansComponent } from './adminComponents/Admin-LoanComponents/pending-loans/pending-loans.component';
import { LoansByDepartmentComponent } from './adminComponents/Admin-LoanComponents/loans-by-department/loans-by-department.component';
import { PickupLoansComponent } from './adminComponents/Admin-LoanComponents/loans-by-department/pickup-loans/pickup-loans.component';
import {LegalLoansComponent} from './adminComponents/Admin-LoanComponents/loans-by-department/legal-loans/legal-loans.component';
import {VerificationLoansComponent} from './adminComponents/Admin-LoanComponents/loans-by-department/verification-loans/verification-loans.component';
import {CustomerNavbarComponent} from './allnavbars/customerNavbar/customerNavbar.component';
import { AdminEmployeeHomeComponent } from './adminComponents/Admin-EmployeeComponents/admin-employee-home/admin-employee-home.component';
import { AdminAllEmployeesComponent } from './adminComponents/Admin-EmployeeComponents/admin-all-employees/admin-all-employees.component';
import { AdminPickUpEmployeesComponent } from './adminComponents/Admin-EmployeeComponents/admin-pick-up-employees/admin-pick-up-employees.component';
import { AdminVerificationEmployeesComponent } from './adminComponents/Admin-EmployeeComponents/admin-verification-employees/admin-verification-employees.component';
import { AdminLegalEmployeesComponent } from './adminComponents/Admin-EmployeeComponents/admin-legal-employees/admin-legal-employees.component';
import { AdminAllCustomersComponent } from './adminComponents/Admin-CustomerComponents/admin-all-customers/admin-all-customers.component';
import { CustomerLoansHomeComponent } from './customerComponents/custLoansComponents/customer-loans-home/customer-loans-home.component';
import { CustomerAllLoansComponent } from './customerComponents/custLoansComponents/customer-all-loans/customer-all-loans.component';
import { CustomerApplyLoanComponent } from './customerComponents/custLoansComponents/customer-apply-loan/customer-apply-loan.component';
import { AdminRegisterEmployeeComponent } from './adminComponents/Admin-EmployeeComponents/admin-register-employee/admin-register-employee.component';
import { EmployeeHomeComponent } from './employeeComponents/employee-home/employee-home.component';
import { EmployeeNavbarComponent } from './allnavbars/employee-navbar/employee-navbar.component';
import { EmployeeAllLoansComponent } from './employeeComponents/employeeLoans/employee-all-loans/employee-all-loans.component';
import { EmployeePendingLoansComponent } from './employeeComponents/employeeLoans/employee-pending-loans/employee-pending-loans.component';
import { EmployeeLoansHomeComponent } from './employeeComponents/employeeLoans/employee-loans-home/employee-loans-home.component';
import { EmployeeProfileComponent } from './employeeComponents/employee-profile/employee-profile.component';
import {empApi} from './Service/EmployeeService/empApi';
import {StartupNavbarComponent} from './allnavbars/startup-navbar/startup-navbar.component';
import { ContactComponent } from './contact/contact.component';
import {WeatherApi} from './Service/WeatherApi';
import { WeatherApiComponent } from './weather-api/weather-api.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    routingComponents,
    StartupComponent,
    RegisterComponent,
    CustprofileComponent,
    AdminHomeComponent,
    AllLoansComponent,
    LoansHomeComponent,
    NavbarComponent,
    PendingLoansComponent,
    LoansByDepartmentComponent,
    LegalLoansComponent,
    VerificationLoansComponent,
    PickupLoansComponent,
    CustomerNavbarComponent,
    AdminEmployeeHomeComponent,
    AdminAllEmployeesComponent,
    AdminPickUpEmployeesComponent,
    AdminVerificationEmployeesComponent,
    AdminLegalEmployeesComponent,
    AdminAllCustomersComponent,
    CustomerLoansHomeComponent,
    CustomerAllLoansComponent,
    CustomerApplyLoanComponent,
    AdminRegisterEmployeeComponent,
    EmployeeHomeComponent,
    EmployeeNavbarComponent,
    EmployeeAllLoansComponent,
    EmployeePendingLoansComponent,
    EmployeeLoansHomeComponent,
    EmployeeProfileComponent,
    StartupNavbarComponent,
    ContactComponent,
    WeatherApiComponent
  ],
  imports: [
    BrowserModule, FormsModule, HttpClientModule, RouterModule, AppRoutingModule, Ng2SearchPipeModule
  ],
  providers: [HttpClient, custLoanAndProfile, adminApi, commonApi,empApi, WeatherApi],
  bootstrap: [AppComponent]
})


export class AppModule { }

