import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './customerComponents/CustomerHome/home.component';
import { HttpClient,HttpClientModule } from '@angular/common/http';

import { RouterModule } from '@angular/router';
import { AppRoutingModule, routingComponents} from './app-router.component';
import { StartupComponent } from './startup/startup.component';
import { RegisterComponent } from './register/register.component';
import { CustloansComponent } from './customerComponents/custLoansComponents/custloans.component';
import { CustprofileComponent } from './customerComponents/custprofile/custprofile.component';
import {custLoanAndProfile} from './Service/CustomerService/custLoanAndProfile';
import {ProfileUpdateComponent} from './customerComponents/custprofile/profileUpdate/profileUpdate.component';
import { AdminHomeComponent} from './adminComponents/admin-home/admin-home.component';
import { adminApi} from './Service/AdminService/adminApi';
import { commonApi} from './Service/CommonService/commonApi';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    routingComponents,
    StartupComponent,
    RegisterComponent,
    CustloansComponent,
    CustprofileComponent,
    ProfileUpdateComponent,
    AdminHomeComponent
  ],
  imports: [
    BrowserModule, FormsModule, HttpClientModule, RouterModule, AppRoutingModule,
  ],
  providers: [HttpClient, custLoanAndProfile, adminApi, commonApi],
  bootstrap: [AppComponent]
})


export class AppModule { }

