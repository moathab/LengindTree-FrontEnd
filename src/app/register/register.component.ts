import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {NgForm} from '@angular/forms';
import {custLoanAndProfile} from '../Service/CustomerService/custLoanAndProfile';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


  username
  firstName
  lastName
  password
  email
  address
  number
  constructor(private router: Router, private api: custLoanAndProfile) { }

  ngOnInit(): void {
  }

  register(){
    let customerUser = {
      username: this.username,
      password: this.password,
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      address: this.address,
      number: this.number

    }

    this.api.register(customerUser).subscribe(
      (res)=> {
        alert("Register successful, redirecting to login page...")
        this.api.logout();
        this.router.navigate(['login'])

      },
      error => {
        alert("Error cannot register successfully")
      }

    )


  }

}
