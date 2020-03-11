import { Component, OnInit } from '@angular/core';
import {empApi} from '../../../Service/EmployeeService/empApi';
import {Loan} from '../../../DtoModels';
import {adminApi} from '../../../Service/AdminService/adminApi';

@Component({
  selector: 'app-employee-all-loans',
  templateUrl: './employee-all-loans.component.html',
  styleUrls: ['./employee-all-loans.component.scss']
})
export class EmployeeAllLoansComponent implements OnInit {

  loans: Loan[]
  name: string
  constructor(private api: empApi, private adminApi: adminApi) { }

  ngOnInit(): void {

    this.getAllLoans();
    this.name = localStorage.getItem("firstName") + " " +localStorage.getItem("lastName")
  }

  getAllLoans(){

    this.adminApi.getAllLoans().subscribe(
      res=>{
        this.loans=res;
      }
    )
  }
}
