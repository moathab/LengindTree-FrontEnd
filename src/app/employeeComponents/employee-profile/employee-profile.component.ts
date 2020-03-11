import { Component, OnInit } from '@angular/core';
import {empApi} from '../../Service/EmployeeService/empApi';

@Component({
  selector: 'app-employee-profile',
  templateUrl: './employee-profile.component.html',
  styleUrls: ['./employee-profile.component.css']
})
export class EmployeeProfileComponent implements OnInit {

  firstName: string
  lastName: string
  email: string
  number: string
  username: string
  constructor(private api: empApi) { }

  ngOnInit(): void {

    this.firstName=localStorage.getItem("firstName")
    this.lastName=localStorage.getItem("lastName")
    this.email=localStorage.getItem("email")
    this.number=localStorage.getItem("number")
    this.username=localStorage.getItem("username")

  }


  updateEmployeeInfo(){
    let empInfo={
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.lastName,
      number: this.number,
      username: this.username
    }

    this.api.updateEmployeeProfile(empInfo).subscribe(
      res=> {
        alert("Profile updated successfully")

        this.api.getEmployee().subscribe(
          res=> {
            localStorage.setItem("username", res.username)
            localStorage.setItem("firstName", res.firstName)
            localStorage.setItem("lastName", res.lastName)
            localStorage.setItem("email", res.email)
            localStorage.setItem("address", res.address)
            localStorage.setItem("number", res.number)
            localStorage.setItem("empId", res.empId)
          }
        )
      },
      error => {
        alert("Error while updating profile")
      }
    )

  }
}
