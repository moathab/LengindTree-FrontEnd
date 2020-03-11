import { Component, OnInit } from '@angular/core';
import {adminApi} from '../../../Service/AdminService/adminApi';
import {Department} from '../../../DtoModels';

@Component({
  selector: 'app-admin-register-employee',
  templateUrl: './admin-register-employee.component.html',
  styleUrls: ['./admin-register-employee.component.css']
})
export class AdminRegisterEmployeeComponent implements OnInit {

  email:string
  number:number
  password:string
  firstName: string
  lastName: string
  department: string
  username:string

  departments: Department[]

  constructor(private api: adminApi) { }

  ngOnInit(): void {
    this.getDepartments()
  }

  registerEmployee(){


    console.log(this.getInfo())

    this.api.registerEmployee(this.getInfo()).subscribe(
      (res)=> {
        alert("Employee successfully registered.\n Username:  " + res.username + "\n" + "Password:  " + res.password)
      },
      error => {
        alert("Error registering Employee")
      }
    )

  }

  getInfo(){
    let EmployeeUser={
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      number: this.number,
      username: this.username,
      password: this.password,
      department: this.department
    }
    return EmployeeUser;
  }
  getDepartments(){

    this.api.getDepartments().subscribe(
      (res)=> {
        this.departments=res;
      }
    )

  }
}
