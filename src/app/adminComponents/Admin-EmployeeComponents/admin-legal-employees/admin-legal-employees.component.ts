import { Component, OnInit } from '@angular/core';
import {Employee} from '../../../DtoModels';
import {adminApi} from '../../../Service/AdminService/adminApi';

@Component({
  selector: 'app-admin-legal-employees',
  templateUrl: './admin-legal-employees.component.html',
  styleUrls: ['./admin-legal-employees.component.scss']
})
export class AdminLegalEmployeesComponent implements OnInit {

  employees: Employee[]
  constructor(private api: adminApi) { }

  ngOnInit(): void {
    this.getEmployeesByDepartment()
  }

  getEmployeesByDepartment(){
    this.api.getEmployeesByDepartment(3).subscribe(

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
