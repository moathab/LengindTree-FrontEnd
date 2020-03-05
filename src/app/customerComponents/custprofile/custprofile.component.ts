import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {custLoanAndProfile} from '../../Service/CustomerService/custLoanAndProfile';
import {Router} from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './custprofile.component.html',
  styleUrls: ['./custprofile.component.css']
})
export class CustprofileComponent implements OnInit {

  firstname: string;
  lastname: string;
  email:string;
  address: string;
  number: string;
  customerid: string;
  username: string;


  constructor(private router: Router, private api: custLoanAndProfile) {
    this.firstname =localStorage.getItem("firstName")
    this.lastname= localStorage.getItem("lastName")
    this.email=localStorage.getItem("email" )
    this.address= localStorage.getItem("address" )
    this.number= localStorage.getItem("number")
    this.customerid= localStorage.getItem("custId")
    this.username=localStorage.getItem("username")
  }

  ngOnInit(): void {



  }


  updateProfile(form: NgForm){
    let customerUser={
      firstName: form.value.firstName,
      lastName: form.value.lastName,
      email: form.value.email,
      address: form.value.address,
      number: form.value.number,
      custId: this.customerid

    }

    this.api.updateInfo(customerUser).subscribe(
      (res)=> {
        localStorage.setItem('firstName', res.firstName)
        localStorage.setItem('lastName', res.lastName)
        localStorage.setItem('email', res.email)
        localStorage.setItem('address', res.address)
        localStorage.setItem('number', res.number)
        this.router.navigate(['customer/profile']);
      }

    )
  }


}
