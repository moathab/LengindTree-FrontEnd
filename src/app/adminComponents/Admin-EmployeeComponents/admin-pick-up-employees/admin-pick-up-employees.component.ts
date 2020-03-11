import { Component, OnInit } from '@angular/core';
import {Employee} from '../../../DtoModels';
import {adminApi} from '../../../Service/AdminService/adminApi';

@Component({
  selector: 'app-admin-pick-up-employees',
  templateUrl: './admin-pick-up-employees.component.html',
  styleUrls: ['./admin-pick-up-employees.component.scss']
})
export class AdminPickUpEmployeesComponent implements OnInit {

  employees: Employee[]
  constructor(private api: adminApi) { }

  ngOnInit(): void {
    this.getEmployeesByDepartment()
  }

  getEmployeesByDepartment(){
    this.api.getEmployeesByDepartment(1).subscribe(

      (res)=> {
        this.employees=res;

      }
    )
  }

  updateEmployee(employee: Employee){

    this.api.updateEmployee(employee).subscribe(
      (res)=> {
        console.log(res)
        this.updateEmployeeList()
        alert("Successful Update")
      },
      (error)=> {
        console.log(error)
        alert("Error update not successful")
      }
    )}

  updateEmployeeList(){
    this.getEmployeesByDepartment();
  }
}
