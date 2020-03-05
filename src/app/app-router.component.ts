import{NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {HomeComponent} from './customerComponents/CustomerHome/home.component';
import {StartupComponent} from './startup/startup.component';
import {RegisterComponent} from './register/register.component';
import {CustloansComponent} from './customerComponents/custLoansComponents/custloans.component';
import {CustprofileComponent} from './customerComponents/custprofile/custprofile.component';
import {ProfileUpdateComponent} from './customerComponents/custprofile/profileUpdate/profileUpdate.component';
import { AdminHomeComponent} from './adminComponents/admin-home/admin-home.component';

const routes: Routes=[
  {path:'login', component: LoginComponent},
  {path: 'customer/home' , component: HomeComponent},
  {path:'register', component: RegisterComponent},
  {path:'', component: StartupComponent},
  {path:'customer/loans', component: CustloansComponent},
  {path:'customer/profile', component: CustprofileComponent},
  {path: 'customer/profileUpdate', component: ProfileUpdateComponent},
  {path: 'admin/home', component: AdminHomeComponent}

];


@NgModule({
  imports:[RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule{

}
export const routingComponents = []
