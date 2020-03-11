import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {Router} from '@angular/router';
import {custLoanAndProfile} from '../Service/CustomerService/custLoanAndProfile';
import {adminApi} from '../Service/AdminService/adminApi';
import {commonApi} from '../Service/CommonService/commonApi';
import {empApi} from '../Service/EmployeeService/empApi';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  constructor(private router: Router,
              private customerApi: custLoanAndProfile,
              private commonApi: commonApi,
              private empApi: empApi) { }

  ngOnInit(): void {


  }

  login(form: NgForm){

         console.log(form);


    let user = {
           username: form.value.username,
           password: form.value.password
         }


         this.commonApi.getuser(user).subscribe(
           (res) =>{
             this.customerApi.logout()
              localStorage.setItem("username", res.username);
              localStorage.setItem("token", (res.token))
              localStorage.setItem("role",res.roleArray[0].name)
             console.log(localStorage.getItem("username"))
             console.log(localStorage.getItem("token"))
             console.log(localStorage.getItem("role"))


              if(localStorage.getItem('role') == "Customer"){
                this.customerApi.getInfo().subscribe(
                  (res)=> {
                    localStorage.setItem("firstName", res.firstName)
                    localStorage.setItem("lastName", res.lastName)
                    localStorage.setItem("email", res.email)
                    localStorage.setItem("address", res.address)
                    localStorage.setItem("number", res.number)
                    localStorage.setItem("custId", res.custId)

                  }
                )
              }else{

                this.empApi.getEmployee().subscribe(
                  res=> {
                    localStorage.setItem("firstName", res.firstName)
                    localStorage.setItem("lastName", res.lastName)
                    localStorage.setItem("email", res.email)
                    localStorage.setItem("address", res.address)
                    localStorage.setItem("number", res.number)
                    localStorage.setItem("empId", res.empId)
                  }
                )
              }


             if(localStorage.getItem('role')== "Customer"){
               this.router.navigate(['customer/home']);
             }else if(localStorage.getItem('role') == "Admin"){
               this.router.navigate(['admin/home'])
             }else{
               this.router.navigate(['employee'])
             }

           }
         );



  }

}
