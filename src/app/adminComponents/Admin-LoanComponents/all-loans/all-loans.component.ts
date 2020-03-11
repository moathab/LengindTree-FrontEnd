import { Component, OnInit } from '@angular/core';
import {adminApi} from '../../../Service/AdminService/adminApi';
import {Employee, Loan} from '../../../DtoModels';

@Component({
  selector: 'app-all-loans',
  templateUrl: './all-loans.component.html',
  styleUrls: ['./all-loans.component.scss']
})
export class AllLoansComponent implements OnInit {
  loans: Loan[] ;
  term
  constructor(private adminApi: adminApi) {

  }

  ngOnInit(): void {
    this.getLoans();
  }


  getLoans(){
    this.adminApi.getAllLoans().subscribe(
      (res)=> {
        this.loans=res;

      }
    )
  }

}
