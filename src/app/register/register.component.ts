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


  constructor(private router: Router, private api: custLoanAndProfile) { }

  ngOnInit(): void {
  }

  register(form: NgForm){
    let customerUser = {
      username: form.value.username,
      password: form.value.password,
      firstName: form.value.firstName,
      lastName: form.value.lastName,
      email: form.value.email,
      address: form.value.address,
      number: form.value.number

    }

    this.api.register(customerUser).subscribe(
      (res)=> {
        if(res.username == customerUser.username){
            this.api.logout();
            this.router.navigate(['customerLogin'])
        }else{

          this.router.navigate([])
        }
      }
    )


  }

}
