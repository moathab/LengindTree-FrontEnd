import { Component, OnInit } from '@angular/core';
import {adminApi} from '../../../Service/AdminService/adminApi';
import {Employee} from '../../../DtoModels';


@Component({
  selector: 'app-admin-all-employees',
  templateUrl: './admin-all-employees.component.html',
  styleUrls: ['./admin-all-employees.component.scss']
})
export class AdminAllEmployeesComponent implements OnInit {
term
employees: Employee[]
  constructor(private api: adminApi) { }

  ngOnInit(): void {
  this.getAllEmployees();
  }

  getAllEmployees(){
    this.api.getEmployees().subscribe(

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
    this.getAllEmployees();
  }

}
