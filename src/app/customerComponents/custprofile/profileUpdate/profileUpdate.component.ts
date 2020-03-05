import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {custLoanAndProfile} from '../../../Service/CustomerService/custLoanAndProfile';
import {CustomerUser} from '../../../DtoModels';

@Component({
  selector: 'app-profileupdate',
  templateUrl: './profileUpdate.component.html',
  styleUrls: ['./profileUpdate.component.css']
})
export class ProfileUpdateComponent implements OnInit {


  ngOnInit(): void {



  }
  constructor(private api: custLoanAndProfile) {

    originalFirstName: localStorage.getItem("")
  }

  updateProfile(form: NgForm){
    let customerUser={
      username: form.value.username,
      address: form.value.address,
      email: form.value.email,
      firstname: form.value.firstname,
      lastname: form.value.lastname
    }


    // this.api.updateInfo(customerUser).subscribe(
    //   (res)=> {
    //
    //   }
    // )
  }








}
